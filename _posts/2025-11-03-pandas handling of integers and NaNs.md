---
title: pandas handling of integers and NaNs
date: 2025-11-03 00:00:00 +/0000
categories: [TIL]
tags: python, pandas, SQL
---

`pandas` converts integer columns with `nan` values to `float64` to accommodate those values.

If the results of a SQL query that contains, say, `min()` or `max()` operations, and `count()` operations, are read into `pandas`, there is a good chance they will be read in as different data types therefore.
- `min()` or `max()` (or many other operations) can result in SQL `null` values. These will be `nan` values when the data is read into `pandas`, meaning the column will be held as a `float64`
- `count()` never returns `NULL`, meaning the column will be held as an integer (`int64`)
