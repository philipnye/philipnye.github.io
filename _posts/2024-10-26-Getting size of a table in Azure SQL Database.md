---
title: Installing node.js
date: 2024-10-26 19:10:00 +/0000
categories: [TIL]
tags: [azure, azure-sql-database]
---

```sql
select
    obj.name,
    sum(reserved_page_count) * 8.0 as "size in KB"
from
    sys.dm_db_partition_stats part,
    sys.objects obj
where
    part.object_id = obj.object_id
group by
    obj.name
```

[Ref.](https://learn.microsoft.com/en-us/answers/questions/1294265/how-to-get-the-data-space-of-a-table-in-azure-sql)
