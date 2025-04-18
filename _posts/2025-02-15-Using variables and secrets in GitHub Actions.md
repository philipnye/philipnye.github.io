---
title: Using variables and secrets in GitHub Actions
date: 2025-02-15 00:00:00 +/0000
categories: [TIL]
tags: [github, github-actions, environment-variables, variables, secrets]
---

Things held as configuration variables and secrets in GitHub must be defined as environment variables in the GitHub Actions workflow in order to be able to use them in a script.

Configuration variable are accessed [using the `vars` context](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/accessing-contextual-information-about-workflow-runs#example-usage-of-the-vars-context). Secrets are accessed [using the `secrets` context](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/accessing-contextual-information-about-workflow-runs#example-usage-of-the-secrets-context). Both can be set at the level of the workflow, the job or the step.

E.g.:

# Workflow
```yaml
...
on:
  schedule:
    - cron:  '0 6 * * *'
  workflow_dispatch:

env:
  BLUESKY_USERNAME: ${{ vars.BLUESKY_USERNAME }}
  ODBC_DRIVER: ${{ secrets.ODBC_DRIVER }}
  ODBC_SERVER: ${{ secrets.ODBC_SERVER }}
  ODBC_DATABASE: ${{ secrets.ODBC_DATABASE }}
  ODBC_AUTHENTICATION: ${{ secrets.ODBC_AUTHENTICATION }}

jobs:
...
```

# Job
```yaml
...
jobs:
  build:
    runs-on: ubuntu-latest
    env:
      BLUESKY_USERNAME: ${{ vars.BLUESKY_USERNAME }}
      ODBC_DRIVER: ${{ secrets.ODBC_DRIVER }}
      ODBC_SERVER: ${{ secrets.ODBC_SERVER }}
      ODBC_DATABASE: ${{ secrets.ODBC_DATABASE }}
      ODBC_AUTHENTICATION: ${{ secrets.ODBC_AUTHENTICATION }}
    steps:
...
```

# Step
```yaml
...
  - name: Run script
    env:
      BLUESKY_USERNAME: ${{ vars.BLUESKY_USERNAME }}
      ODBC_DRIVER: ${{ secrets.ODBC_DRIVER }}
      ODBC_SERVER: ${{ secrets.ODBC_SERVER }}
      ODBC_DATABASE: ${{ secrets.ODBC_DATABASE }}
      ODBC_AUTHENTICATION: ${{ secrets.ODBC_AUTHENTICATION }}
    run: python scraper.py
...
```

Environment variables can also be [set directly in the workflow](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/accessing-contextual-information-about-workflow-runs#example-usage-of-the-env-context), for anything non-sensitive.
