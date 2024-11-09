---
title: Using pandas' to_sql()
date: 2024-11-09 20:10:00 +/0000
categories: [TIL]
tags: [python, pandas, sql, to_sql()]
---

Attempting to upload large dataframes can result in the following error:

`PendingRollbackError: Can't reconnect until invalid transaction is rolled back.  Please rollback() fully before proceeding (Background on this error at: https://sqlalche.me/e/20/8s2b)`

This can occur even where max log IO percentage is less than 100%. E.g.:

![Example graph from  Azure Portal showing compute utilization](/assets/img/Using%20pandas'%20to_sql().png "Example graph from  Azure Portal showing compute utilization")

Setting a `chunksize` - e.g. `chunksize=50000` - can get around this.
