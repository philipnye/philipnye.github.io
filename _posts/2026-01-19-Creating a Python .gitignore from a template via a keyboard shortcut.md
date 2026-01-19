---
title: Creating a Python .gitignore from a template via a keyboard shortcut
date: 2026-01-19 00:00:00 +/0000
categories: [TIL]
tags: vscode, python, gitignore
---

Save the template to a central location e.g. `C:\Users\nyep\<username>\templates`.

Create a new task in `tasks.json` in VS Code, replacing `<file path>` with the actual path to your templates folder: 
```
...
{
    "label": "Add .gitignore from template",
    "type": "shell",
    "command": "Copy-Item -Path '<file path>>\\.gitignore' -Destination '${workspaceFolder}\\.gitignore'",
    "presentation": {
        "reveal": "silent",
        "panel": "shared"
    }
}
...
```

Add a key binding in `keybindings.json`:
```
...
{
    "key": "ctrl+f1",
    "command": "workbench.action.tasks.runTask",
    "args": "Add .gitignore from template"
}
...
```