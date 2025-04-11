---
title: Using SQLAlchemy ORM
date: 2025-04-11 00:00:00 +/0000
categories: [TIL]
tags: [python, sql, sqlalchemy, orm]
---

A simple query can be constructed as follows:

```python
import os

from sqlalchemy import MetaData, select, Table

import ds_utils.database_operations as dbo

# CONNECT TO DATABASE
engine = dbo.connect_sql_db(
    driver="pyodbc",
    driver_version=os.environ["ODBC_DRIVER"],
    dialect="mssql",
    server=os.environ["ODBC_SERVER"],
    database=os.environ["ODBC_DATABASE"],
    authentication=os.environ["ODBC_AUTHENTICATION"],
    username=os.environ["AZURE_CLIENT_ID"],
    password=os.environ["AZURE_CLIENT_SECRET"],
)

# SET UP QUERY
metadata = MetaData(schema="core")
person = Table(
    "person",
    metadata,
    autoload_replace=True,
    autoload_with=engine
)
post = Table(
    "post",
    metadata,
    autoload_replace=True,
    autoload_with=engine
)
appointment = Table(
    "appointment",
    metadata,
    autoload_replace=True,
    autoload_with=engine
)

query_name = "David Cameron"

stmt = select(
    person
).join(
    appointment,
    person.columns.id == appointment.columns.person_id
).join(
    post,
    appointment.columns.post_id == post.columns.id
).where(
    person.columns.name == query_name
)

# EXECUTE QUERY
with engine.connect() as connection:
    results = connection.execute(stmt).fetchall()
    print(results)
```

NB: [Using a variable such as `query_name` is safe against SQL injection risks](https://stackoverflow.com/questions/72483040/slqalchemy-orm-using-select-where-with-parameters#comment128055810_72489285).
