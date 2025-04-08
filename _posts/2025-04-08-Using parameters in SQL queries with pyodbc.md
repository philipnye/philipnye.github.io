---
title: Running SQL queries containing parameters in Python scripts
date: 2025-04-08 00:00:00 +/0000
categories: [TIL]
tags: [python, sql, pyodbc, sqlalchemy, parameters]
---

[`pydobc` doesn't support named parameters](https://stackoverflow.com/questions/32748982/does-pyodbc-support-any-form-of-named-parameters) - parameters instead have to be represented as `?` in the query string, with parameters then passed as a tuple to e.g. `pd.read_sql_query()`. (SQLAlchemy [does support named parameters](https://stackoverflow.com/a/78089822/4659442), but this might rely on using e.g. `engine.execute()` rather than `pd.read_sql_query()`).

One drawback: As of the time of writing, parameters like these will be [flagged as errors in VSCode](https://github.com/microsoft/vscode-mssql/issues/19096).
