---
title: Naming Python constants and functions
date: 2025-03-04 00:00:00 +/0000
categories: [TIL]
tags: [python, constants, functions, pep-8, code-style]
---

- [Functions should start with a _single_leading_underscore where they are only intended to be used within a given function/Class](https://stackoverflow.com/a/8689983/4659442). Doing this, `from M import *` does not import objects whose name starts with an underscore.

- Constants should be in defined at module level and be in all caps, [per PEP 8](https://peps.python.org/pep-0008/#constants).
