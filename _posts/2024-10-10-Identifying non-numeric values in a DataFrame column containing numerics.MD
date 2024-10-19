---
title: Identifying non-numeric values in a DataFrame column containing numerics
date: 2024-10-10 00:00:00 +/0000
categories: [TIL]
tags: [python, pandas, dataframe]
---

```python
df.loc[
    df ["col_name"].dropna().astype(str).str.contains(r'[a-z]')
]["col_name "].unique()
```

`dropna()` is needed where the column contains `NaN`s, to fend off an error.

`astype()` is needed to force numerics to be treated as strings.
