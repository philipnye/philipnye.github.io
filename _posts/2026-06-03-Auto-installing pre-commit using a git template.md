---
title: Auto-installing pre-commit using a git template
date: 2026-06-03 00:00:00 +/0000
categories: [TIL]
tags: [windows, pre-commit, git]
---

Pre-commit hooks aren't copied when a repo is cloned, and aren't installed when a repo is created with `git init`. This means it's easy to add a `.pre-commit-config.yaml` to a repo and forget to run `pre-commit install`.

Git's `init.templateDir` setting lets you seed every new repo with hook files. You can use this to add a `pre-commit` git hook that auto-installs and runs the pre-commit tool whenever a `.pre-commit-config.yaml` is present.

Create the template directory and hook file:
```powershell
New-Item -ItemType Directory -Path "$env:USERPROFILE\.git-templates\hooks" -Force
```

Save the following as `C:\Users\<username>\.git-templates\hooks\pre-commit.cmd`:
```bat
@echo off
if not exist ".pre-commit-config.yaml" exit /b 0
where pre-commit >nul 2>&1 || exit /b 0
pre-commit install --install-hooks 2>nul
pre-commit run
```

Register the template directory globally:
```powershell
git config --global init.templateDir "$env:USERPROFILE/.git-templates"
```

From this point, every repo created via `git init` or `git clone` will contain the hook. The hook:

- Does nothing if `.pre-commit-config.yaml` doesn't exist, so commits in repos without the config are unaffected
- Auto-installs pre-commit and runs the hooks on the first commit after `.pre-commit-config.yaml` is added, replacing itself with pre-commit's own hook so subsequent commits work normally

NB: This only applies to repos initialised after the template is configured. For existing repos, run `pre-commit install` manually.
