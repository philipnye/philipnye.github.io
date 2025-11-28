---
title: Creating indexed views in Azure SQL Database
date: 2025-11-28 00:00:00 +/0000
categories: [TIL]
tags: azure, sql, azure-sql-database, indexed-views
---

Indexed views (known as materialized views in other RDBMSs) can improve query performance as they store the result set of the view physically on disk, with details updated automatically when the underlying data changes.

However, the definition of them can't involve:
- Outer joins
- `select *`
- Derived tables (e.g. subqueries in the `from` clause)
- Window functions (e.g., `row_number()`, `rank()`)

They must also include a `schemabinding` clause in the view definition.

Example:
```sql
drop view if exists dbo.vw_people_places;
go

create view dbo.vw_people_places
with schemabinding
as
select
    p.id,
    p.name,
    pl.location,
    pl.country
from dbo.people p
    left join dbo.places pl on
        p.id = pl.person_id;
go

create unique clustered index ix_vw_people_places_id on dbo.vw_people_places (id);
```
