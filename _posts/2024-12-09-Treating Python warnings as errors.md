---
title: Treating Python warnings as errors
date: 2024-12-09 12:25:00 +/0000
categories: [TIL]
tags: [python, warnings, errors]
---

Converting warnings of a particular category from a particular module can be done using:

```
import warnings

warnings.filterwarnings("error", category=UserWarning, module="seaborn")

```

([Ref.](https://docs.python.org/3/library/warnings.html#warnings.filterwarnings))
