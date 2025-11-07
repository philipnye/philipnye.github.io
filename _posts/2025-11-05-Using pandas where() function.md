---
title: Using pandas' where() function
date: 2025-11-05 00:00:00 +/0000
categories: [TIL]
tags: python, pandas
---

`pandas`' `where()` function doesn't replace `nan` values in `float64` columns by default. Instead, it retains the original `nan` values unless explicitly instructed to replace them.

Coupled with the fact that data read in from lots of SQL operations such as `min()` and `max()` result in `null` values (which become `nan` in `pandas` and [are treated as `float64` columns](https://philipnye.github.io/posts/pandas-handling-of-integers-and-NaNs/)), this means that `where()` may not behave as expected if it's being used to fill/select/exclude those `nan` values.
