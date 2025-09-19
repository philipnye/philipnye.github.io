---
title: Using pipenv
date: 2025-09-19 00:00:00 +/0000
categories: [TIL]
tags: [python, pipenv, virtual-environment]
---

# Installing pipenv
```bash
pip install pipenv
```

[Ref.](https://pipenv.pypa.io/en/latest/installation.html#recommended-user-installation)

# Creating a virtual environment
Using the current Python version:
```bash
pipenv install --dev
```

Using a specific Python version:
```bash
pipenv install --python "C:\Program Files\Python313\python.exe"
```
