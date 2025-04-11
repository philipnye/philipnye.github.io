---
title: Running SQL queries containing parameters in Python scripts
date: 2025-04-08 00:00:00 +/0000
categories: [TIL]
tags: [python, sql, pyodbc, sqlalchemy, parameters]
---

# `pydobc`
[`pyodbc` doesn't support named parameters](https://stackoverflow.com/questions/32748982/does-pyodbc-support-any-form-of-named-parameters) - parameters instead have to be represented as `?` in the query string, with parameters then passed as a tuple to e.g. `pd.read_sql_query()`.

One drawback: As of the time of writing, parameters like these will be [flagged as errors in VSCode](https://github.com/microsoft/vscode-mssql/issues/19096).

# `SQLAlchemy`
SQLAlchemy has two APIs: [Core and ORM (object relational mapper)](https://docs.sqlalchemy.org/en/20/tutorial/index.html).

In Core, qmark style parameters are possible, as are [named parameters](https://stackoverflow.com/a/78089822/4659442), though the latter might rely on using e.g. `engine.execute()` rather than `pd.read_sql_query()`. NB: In SQLAlchemy, [query parameters can only be used to supply the _values_ of things (e.g. column values) not the _names_ of things. In Core this needs to be done using dynamic SQL (taking care to avoid SQL injections).](https://stackoverflow.com/a/72818255/4659442).

In ORM, [variables can simply be used instead of query parameters](/_posts/2025-04-11-Using%20SQLAlchemy%20ORM.md).
