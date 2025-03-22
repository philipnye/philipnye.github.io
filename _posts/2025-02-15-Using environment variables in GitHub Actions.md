---
title: Using environment variables in GitHub Actions
date: 2025-02-15 00:00:00 +/0000
categories: [TIL]
tags: [github, github-actions, environment-variables]
---

Things held as GitHub secrets must be defined as environment variables in the GitHub Actions workflow in order to be able to use them in a script. E.g.:

Variables can also be set at the level of the [workflow](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#env), [job](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#jobsjob_idenv) or [step](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsenv).
for an entire workflow or job.

# Workflow
```bash
...
on:
  schedule:
    - cron:  '0 6 * * *'
  workflow_dispatch:

env:
  ODBC_DRIVER: ${{ secrets.ODBC_DRIVER }}
  ODBC_SERVER: ${{ secrets.ODBC_SERVER }}
  ODBC_DATABASE: ${{ secrets.ODBC_DATABASE }}
  ODBC_AUTHENTICATION: ${{ secrets.ODBC_AUTHENTICATION }}

jobs:
...
```

# Job
```bash
...
jobs:
  build:
    runs-on: ubuntu-latest
    env:
      ODBC_DRIVER: ${{ secrets.ODBC_DRIVER }}
      ODBC_SERVER: ${{ secrets.ODBC_SERVER }}
      ODBC_DATABASE: ${{ secrets.ODBC_DATABASE }}
      ODBC_AUTHENTICATION: ${{ secrets.ODBC_AUTHENTICATION }}
    steps:
...
```

# Step
```bash
...
  - name: Run script
    env:
      ODBC_DRIVER: ${{ secrets.ODBC_DRIVER }}
      ODBC_SERVER: ${{ secrets.ODBC_SERVER }}
      ODBC_DATABASE: ${{ secrets.ODBC_DATABASE }}
      ODBC_AUTHENTICATION: ${{ secrets.ODBC_AUTHENTICATION }}
    run: python scraper.py
...
```
