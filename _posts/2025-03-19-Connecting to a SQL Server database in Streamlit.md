---
title: Connecting to a SQL Server database in Streamlit Community Cloud
date: 2025-03-19 00:00:00 +/0000
categories: [TIL]
tags: [python, streamlit, streamlit-community-cloud, sql, sql-server, odbc]
---

At the time of writing, the version of the ODBC Driver for SQL Server available in Streamlit Community Cloud is version 17.

This is pre-installed in Streamlit Community Cloud so [it isn't necessary to include a `packages.txt` file with `msodbcsql17` in projects](https://docs.streamlit.io/develop/tutorials/databases/mssql#add-pyodbc-to-your-requirements-file).

Including `pyodbc` in `requirements.txt` is all that's required.
