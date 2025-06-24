---
title: Doing imports in a Python project
date: 2025-06-08 00:00:00 +/0000
categories: [TIL]
tags: [python, packages, imports, vs-code, github-actions, command-line]
---

When running scripts, `PYTHONPATH` is set to the parent directory of the executed script.

Import statements that include the full path from the project root (absolute imports - e.g. `import mypackage.mysubpackage.mymodule`) therefore won’t work without any further modification – when running a script interactively in VS Code, in a GitHub Actions workflow, or from the command line.

Changing the imports to be relative imports – e.g. `import ..mysubpackage.mymodule`) isn’t the solution. [It is less readable](https://towardsdatascience.com/how-to-fix-modulenotfounderror-and-importerror-248ce5b69b1c/) and won’t in all cases work anyway (`ImportError: attempted relative import with no known parent package`).

There are options for solving this:
1. **[Best for VS Code] Run the scripts from the project root**

    In **VS Code** this is done by [adding a `settings.json` file in a `.vscode` directory in the project root containing](https://stackoverflow.com/a/73954710/4659442):
    ```json
    {
        "jupyter.notebookFileRoot": "${workspaceFolder}"
    }
    ```

1. **[Best for GitHub Actions[^1]] (Temporarily) add the project root to PYTHONPATH**

    In **GitHub Actions** [this is done using steps such as these](https://github.com/orgs/community/discussions/25010#discussioncomment-9899384):

    ```bash
    - name: Set PYTHONPATH to root directory
      run: echo "PYTHONPATH=$(pwd)" >> $GITHUB_ENV
    - name: Run script
      run: |
        echo %PYTHONPATH%
        python mypackage/mysubpackage/my_module.py
    ```

    In the **command line** this is done using:

    ```cmd
    set PYTHONPATH=%PYTHONPATH%;%cd% && python mypackage/mysubpackage/my_module.py
    ```

    (Ref. [1](https://stackoverflow.com/questions/43728431/relative-imports-modulenotfounderror-no-module-named-x/57164633#57164633), [2](https://stackoverflow.com/a/607682/4659442))

1. **[Best for Windows command line] Invoke the script as a module**

    In the **command line** this is done by running e.g. `python -m mypackage.mysubpackage.mymodule.py`. (Note both the `-m` flag and the full stops between directory levels.)

1. **[Best for simple projects, platform-agnostic] Move the scripts to the project root**

    Though _The Hitchiker’s Guide to Python_ [suggests only using this where the module consists of a single file](https://docs.python-guide.org/writing/structure/#the-actual-module).

[^1]: [Setting the working directory to the project root in GitHub Actions](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/setting-a-default-shell-and-working-directory) doesn't solve things in GitHub Actions, as this is what the default working directory is in an case.

## Further reading
- [Python - ModuleNotFoundError: No module named](https://stackoverflow.com/questions/61532337/python-modulenotfounderror-no-module-named/61532947#61532947)
- [How to Fix ModuleNotFoundError and ImportError, _Towards Data Science_](https://towardsdatascience.com/how-to-fix-modulenotfounderror-and-importerror-248ce5b69b1c/)
- [Structuring Your Project, _The Hitchiker’s Guide to Python_](https://docs.python-guide.org/writing/structure/)
