---
title: Adding hyperlinks to columns in AG Grid
date: 2025-03-14 00:00:00 +/0000
categories: [TIL]
tags: [javascript, ag-grid, python, streamlit, streamlit-aggrid]
---

Hyperlinks can be added to columns in AG Grid as in the following script:
```javascript
class UrlCellRenderer {
    init(params) {
        this.eGui = document.createElement("a");
        this.eGui.innerText = "View page ⮺";
        this.eGui.setAttribute("href", params.value);
        this.eGui.setAttribute("style", "text-decoration:none");
        this.eGui.setAttribute("target", "_blank");
    }
    getGui() {
        return this.eGui;
    }
}
```

[Ref.](https://github.com/PablocFonseca/streamlit-aggrid/issues/198)

Other columns can be referenced as follows:
```javascript
class UrlCellRenderer {
    init(params) {
        this.eGui = document.createElement("a");
        this.eGui.innerText = params.data.page_title;
        this.eGui.setAttribute("href", params.value);
        this.eGui.setAttribute("style", "text-decoration:none");
        this.eGui.setAttribute("target", "_blank");
    }
    getGui() {
        return this.eGui;
    }
}
```

