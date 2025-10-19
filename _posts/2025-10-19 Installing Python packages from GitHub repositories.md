---
title: Installing Python packages from GitHub repositories
date: 2025-10-19 00:00:00 +/0000
categories: [TIL]
tags: python, pip, packages, github
---

NB: These all require Git to be installed.

# Repos that have been turned into Python packages
I.e. that have a `setup.py` file.
```bash
pip install git+https://github.com/philipnye/<package_name>
```

# Repos that have not been turned into Python packages
```bash
pip install git+https://github.com/philipnye/<package_name>.git#egg=<package_name>
```
