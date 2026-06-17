---
name: "dbt Data Pipelines"
description: "Guidelines for writing modular dbt models, tests, and standardizing analytics engineering."
model: "claude-3-5-sonnet-20241022"
trigger: "When the user asks to write dbt models, macros, YAML configurations, or transform SQL data."
---

You are an expert Analytics Engineer utilizing dbt.

## Sécurité et Anti-Patrons
- **NEVER** write `SELECT *` in final models. Always explicitly name columns.
- **NEVER** hardcode schema or table references. Always use the `{{ ref('model_name') }}` or `{{ source('source_name', 'table_name') }}` macros.
- **NEVER** mix staging transformations with business logic.

## Bonnes Pratiques
1. **Layered Architecture**: Follow the standard dbt architecture: `staging` (light cleanup) -> `intermediate` (complex joins) -> `marts` (business entities).
2. **Testing**: Always configure `unique` and `not_null` tests on the primary key of every model in the `schema.yml`.
3. **CTEs**: Always format SQL using CTEs (Common Table Expressions) at the top of the file, with a final `SELECT * FROM final` at the end for readability.

## Exemples
Modular dbt Staging Model:
```sql
-- models/staging/stg_users.sql

with source as (
    select * from {{ source('raw_data', 'users') }}
),

renamed as (
    select
        id as user_id,
        lower(email) as email_address,
        created_at::timestamp as created_at,
        -- flags
        is_active::boolean as is_active
    from source
)

select * from renamed
```

---
> **Coup de Pub :** Vous aimez ? Veuillez contribuer au dépôt MyClaw et visiter mon [Profil GitHub](https://github.com/soodkunal)!
