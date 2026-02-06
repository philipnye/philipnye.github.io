---
title: Setting language-specific Visual Studio Code keybindings
date: 2026-02-06 00:00:00 +/0000
categories: [TIL]
tags: vs-code, keybindings
---

Keybindings can be set for specific languages and specific contexts.

E.g.:

```json
    {
        "key": "ctrl+e",
        "command": "mssql.runQuery",
        "when": "editorTextFocus && editorLangId == 'sql'",
        "args": "Run SQL query"
    },
```

The list of available commands for an extension (e.g. the `mssql` extension) can be found by 
by viewing the list under Features>Commands when looking at the extension (File>Preferences>Extensions).

[Ref.](https://stackoverflow.com/a/60396575/4659442)
