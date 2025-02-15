---
title: Installing Microsoft ODBC Driver 18 for SQL Server in GitHub Actions
date: 2025-02-15 00:00:00 +/0000
categories: [TIL]
tags: [github, github-actions, sql, microsoft-sql-server]
---

Use:

```bash
- name: Install Microsoft ODBC
  run: sudo ACCEPT_EULA=Y apt-get install msodbcsql18 -y
```

[Ref](https://stackoverflow.com/a/74231975/4659442) (NB: additional steps, on port mapping, don't seem to be necessary. This is an abbreviated version of the instructions available [here](https://github.com/MicrosoftDocs/sql-docs/blob/live/docs/connect/odbc/linux-mac/installing-the-microsoft-odbc-driver-for-sql-server.md#ubuntu).)
