---
title: JSON serialization of nan values in Django REST Framework
date: 2025-11-07 00:00:00 +/0000
categories: [TIL]
tags: python, django, django-rest-framework,JSON
---

`nan` values cannot be directly serialized to JSON. Django REST Framework uses `json.dumps()`, which throws an error unless `allow_nan=False` is passed to it.

Ref.: https://chatgpt.com/share/6907c3ca-4a7c-8009-89a7-86e4a4c6b4c4
