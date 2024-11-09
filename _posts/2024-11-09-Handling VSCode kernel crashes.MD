---
title: Handling VSCode kernel crashes
date: 2024-11-09 20:30:00 +/0000
categories: [TIL]
tags: [vscode, python, jupyter, pandas, dataframe, github-codespaces]
---

When doing memory-intensive operations in VSCode - e.g. working with large pandas dataframes - the kernel can crash with the following error:

`The kernel crashed while executing code in the current cell or a previous cell. View Jupyter log for further details.`

Increasing the memory available (e.g. in GitHub Codespaces) or making the operation less memory intensive (e.g. by reading in and operating on data in chunks) can fend off these errors.

## Example
Reading in a dataframe with 5,000,000 records and carrying out an `explode()` operation was resulting in an error when working in the basic tier of Codespace (2-core with 8GB RAM). Increasing this to an 8-core Codespace with 32GB RAM rectified the problem.
