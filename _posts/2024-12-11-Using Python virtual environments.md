---
title: Using Python virtual environments
date: 2024-12-11 12:30:00 +/0000
categories: [TIL]
tags: [python, warnings, errors]
---

Create virtual environment named `env` inside current directory:\
`python -m venv env_pn`

Create virtual environment named `env` inside current directory using a specific version of Python:\
`python -3.13 -m venv env_pn`

Activate virtual environment (NB: capitalisation matters, as does the fact they're backslashes rather than forward slashes):\
`env\Scripts\activate`

Deactivate virtual environment:\
`deactivate`

Create requirements.txt:\
`pip freeze > requirements.txt`

Load requirements.txt (NB: activate virtual environment first):\
`pip install -r requirements.txt`