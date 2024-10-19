---
title: Configuring Git user email, username
date: 2024-10-09 00:00:00 +/0000
categories: [TIL]
tags: [python, sql, pyodbc]
---

The current `pyodbc` version - 5.1.0 - can't be installed on Python using the standard `cmd` commands - it fails with an error relating to building wheels.

A workaround is to install the latest version from GitHub:
`pip install git+https://github.com/mkleehammer/pyodbc.git`

[Ref.](https://github.com/mkleehammer/pyodbc/issues/1382)
