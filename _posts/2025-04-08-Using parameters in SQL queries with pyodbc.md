---
title: Running SQL queries containing parameters in Python scripts
date: 2025-04-08 00:00:00 +/0000
categories: [TIL]
tags: [python, sql, pyodbc, sqlalchemy, sqlite, parameters]
---

# `pd.read_sql()`/`pd.read_sql_query()`
Parameters are supplied in a different format depending on the database driver being used.

[`pyodbc` doesn't support named parameters](https://stackoverflow.com/questions/32748982/does-pyodbc-support-any-form-of-named-parameters) - parameters instead have to be represented as `?` in the query, with parameters then passed as a tuple to `pd.read_sql()`/`pd.read_sql_query()`. (One drawback: As of the time of writing, parameters like these will be [flagged as errors in VSCode](https://github.com/microsoft/vscode-mssql/issues/19096)).

[`sqlite` does support named parameters](https://www.sqlite.org/lang_expr.html#varparam). These are represented as e.g `@parameter_name` (or [possibly other forms](https://www.sqlite.org/lang_expr.html#varparam)) in the query, with parameters passed as a dictionary to `pd.read_sql()`/`pd.read_sql_query()`.

# SQLAlchemy `engine.execute()`
qmark-style parameters are possible, as are [named parameters](https://stackoverflow.com/a/78089822/4659442).

If qmark parameters are used, parameters are passed to `engine.execute()` as a tuple.

Named parameters are represented as e.g. `:parameter_name` in the query, with parameters passed as a dictionary to `engine.execute()`.

NB: In SQLAlchemy, [query parameters can only be used to supply the _values_ of things (e.g. column values) not the _names_ of things. In order to supply the name of something when using `engine.execute()`, dynamic SQL is required (taking care to avoid SQL injections)](https://stackoverflow.com/a/72818255/4659442).

# SQLAlchemy ORM
`engine.execute()` uses one of SQLAlchemy's [two APIs](https://docs.sqlalchemy.org/en/20/tutorial/index.html) (Core).

In its second API, ORM (an object-relationship mapper), [variables can simply be used instead of query parameters](https://philipnye.github.io/_posts/2025-04-11-Using%20SQLAlchemy%20ORM.md).
