---
title: Doing imports in a Python project
date: 2025-06-08 00:00:00 +/0000
categories: [TIL]
tags: [python, packages, imports]
---

With the following project structure:

```
myproject/
    mymodule/
        script.py
        utils.py
```

attempting the following import when running `script.py` interactively:

`from mymodule.utils import myfunction`

results in `ModuleNotFoundError: No module named 'mymodule'` (even though `pylance` won't raise a warning about the import, and the import functions as a valid hyperlink in VS Code).

This is because, running `script.py` interactively, the kernel's working directory is `\mymodule`. The `import` is written as if the script is being run from the project root.

This can be fixed in one of three ways:
1. **(Preferred) Update VS Code settings so that kernels start in the project root for this project**

    Open `settings.json` a `.vscode` directory in your project root (create it if it doesn’t exist).
    Add:
    ```json
    {
    "jupyter.notebookFileRoot": "${workspaceFolder}"
    }
    ```

    [This will set the working directory for all notebooks to your project root.](https://stackoverflow.com/a/73954710/4659442)

1. **Move the script to the project root**

1. **Use `os.chdir()` to change the kernel's working directory**

    E.g.

    ```python
    import os
    os.chdir(r"<path_to_project_root>")

    from mymodule.utils import myfunction
    ```

    Note that `Flake8` raises a `module level import not at top of file` (E402) error over these commands.