---
title: Fending off Pylance errors when using Jupyter magic commands in VSCode
date: 2025-04-12 00:00:00 +/0000
categories: [TIL]
tags: [python, jupyter, vscode, magic-commands]
---

Magic commands are flagged as errors in VSCode by `Pylance` as they are not Python.

Setting `"jupyter.interactiveWindow.textEditor.magicCommandsAsComments": true` and prefacing commands with `# !` means these commands can still be run but disables these errors. ([Ref.](https://stackoverflow.com/questions/71546251/vs-code-problem-when-using-magic-commands-in-jupyter-notebooks-expected-expres#comment138823645_75598541). NB: Adding a space between `#` and `!` fends off a separate `flake8` error.)

E.g.:
```python
# !%timeit run_sql_query(script, connection)
```
