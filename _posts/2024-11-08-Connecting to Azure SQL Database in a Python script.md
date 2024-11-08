---
title: Connecting to Azure SQL Database in a Python script
date: 2024-11-08 08:05:00 +/0000
categories: [TIL]
tags: [python, azure, azure-sql-database, application-service-principal]
---

Both when developing locally and when an app is deployed on-premises (e.g. on Streamlit), [authenticating an app using an _application service principal_ is an option](https://learn.microsoft.com/en-us/azure/developer/python/sdk/authentication/overview#recommended-app-authentication-approach). In fact, this is the only option when deploying on-premises.

1. In 'App registration' in the Azure portal, create a new registration with a client secret following step 1 [here](https://learn.microsoft.com/en-us/azure/developer/python/sdk/authentication/local-development-service-principal?tabs=azure-portal)
1. Copy the 'Application (client) ID', 'Directory (tenant) ID' and client secret and save them as environment variables locally and/or within the app that will be connecting to the database (e.g. GitHub Codespaces, Streamlit)
1. [Add the application service principal as a user in the database and give it permissions](https://learn.microsoft.com/en-us/answers/questions/1665352/how-to-create-service-principal-link-to-the-azure). E.g.:

```sql
create user python_application_service_principal from external provider

alter role db_datareader add member python_application_service_principal;

alter role db_datawriter add member python_application_service_principal;
```
There are then (at least) two ways of connecting to a database using an application service principal.

## [Using the 'Application (client) ID' and client secret to connecting using authentication type `ActiveDirectoryServicePrincipal`](https://learn.microsoft.com/en-us/sql/connect/odbc/using-azure-active-directory?view=sql-server-ver16#new-andor-modified-dsn-and-connection-string-keywords)

```py
from ds_utils import database_operations as dbo

# %%
# CONNECT TO D/B
connection = dbo.connect_sql_db(
    driver='pyodbc',
    driver_version=os.environ['ODBC_DRIVER'],
    dialect='mssql',
    server=os.environ['ODBC_SERVER'],
    database=os.environ['ODBC_DATABASE'],
    authentication=os.environ['ODBC_AUTHENTICATION'],
    username=os.environ['AZURE_CLIENT_ID'],
    password=os.environ['AZURE_CLIENT_SECRET'],
)
```

where `['ODBC_AUTHENTICATION']` is `ActiveDirectoryServicePrincipal`.

## [Using access tokens](https://learn.microsoft.com/en-us/sql/connect/odbc/using-azure-active-directory?view=sql-server-ver16#new-andor-modified-connection-attributes)

```py
import struct

from azure.identity import DefaultAzureCredential

from ds_utils import database_operations as dbo

# %%
# CONNECT TO D/B
# Create SQLAlchemy engine
connection = dbo.connect_sql_db(
    driver='pyodbc',
    driver_version=os.environ['ODBC_DRIVER'],
    dialect='mssql',
    server=os.environ['ODBC_SERVER'],
    database=os.environ['ODBC_DATABASE']
)

# %%
# Handle token creation
# NB: The first two parameters are defaults required for connecting to Azure SQL Database
# Ref.: https://docs.sqlalchemy.org/en/20/dialects/mssql.html#connecting-to-databases-with-access-tokens        # noqa
SQL_COPT_SS_ACCESS_TOKEN = 1256
TOKEN_URL = "https://database.windows.net/.default"

azure_credentials = DefaultAzureCredential()


@sqlalchemy.event.listens_for(connection, "do_connect")
def provide_token(dialect, conn_rec, cargs, cparams):

    # Remove the "Trusted_Connection" parameter that SQLAlchemy adds
    cargs[0] = cargs[0].replace(";Trusted_Connection=Yes", "")

    # Create token credential
    raw_token = azure_credentials.get_token(TOKEN_URL).token.encode("utf-16-le")
    token_struct = struct.pack(f"<I{len(raw_token)}s", len(raw_token), raw_token)

    # Apply it to keyword arguments
    cparams["attrs_before"] = {SQL_COPT_SS_ACCESS_TOKEN: token_struct}

```

([Ref.](https://docs.sqlalchemy.org/en/20/dialects/mssql.html#connecting-to-databases-with-access-tokens). Note that this appears to be a modified version of the instructions [here](https://learn.microsoft.com/en-us/azure/azure-sql/database/azure-sql-python-quickstart?view=azuresql&tabs=windows%2Csql-inter#add-code-to-connect-to-azure-sql-database).)

with

```py
connection_string = (
    f'{dialect}+{driver}:///?odbc_connect=' +
    urllib.parse.quote_plus(
        f'DRIVER={driver_version};SERVER={server};DATABASE={database};'
    )
)
```

in `database_operations`.