---
title: Using pre-commit
date: 2024-10-26 19:55:00 +/0000
categories: [TIL]
tags: [windows, pre-commit]
---

Installing pre-commit:  
`pip install pre-commit`

Initialising pre-commit (needs to be run within a directory containing a .git folder):  
`pre-commit install`

Running pre-commit hooks on a specific file:  
`pre-commit run --files Hospitals\pt_hospitals_dataitemparameters.py`

Running pre-commit hooks on all files:  
<!-- TODO: Doesn't work   -->
`pre-commit run --all-files`

NB: [Pre-commit hooks aren't installed when a GitHub repository is cloned](https://pre-commit.com/#usage). When cloning a project using pre-commit, running `pre-commit install` should be the first thing you do
