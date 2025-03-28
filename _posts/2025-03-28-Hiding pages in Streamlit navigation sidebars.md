---
title: Hiding pages in Streamlit navigation sidebars
date: 2025-03-28 00:00:00 +/0000
categories: [TIL]
tags: [python, streamlit, navigation]
---

If using `st.navigation` to manage creation of the navigation, as of version 1.44.0 there [is no way of hiding individual pages from the navigation](https://docs.streamlit.io/develop/api-reference/navigation/st.navigation).

This can be done by including code such as the following in the file that creates the navigation (generally `streamlit_app.py`), however:

```python
st.markdown(
    """
        <style>
            a[href$="web_metrics_page_detail"]{
                display: none;
            }
        </style>
    """,
    unsafe_allow_html=True
)
```

In this specific case, links [ending with `web_metrics_page_detail`](https://stackoverflow.com/a/16009756/4659442) would be hidden from the sidebar.
