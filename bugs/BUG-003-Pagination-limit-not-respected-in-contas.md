# BUG-003 - Pagination Limit Not Respected in /contas

## Description

The `/contas` endpoint does not respect the `limit` query parameter.  
When requesting a limited number of accounts (e.g., `limit=5`), the API sometimes returns more accounts than specified (e.g., 6 accounts returned).

---

## Steps to Reproduce

1. Send a GET request to `/contas` with query parameters `page=1` and `limit=5`.
2. Include a valid Authorization header.
3. Observe the number of accounts returned in the `contas` array.

Example request:

```http
GET /contas?page=1&limit=5
Authorization: Bearer <valid_token>
```
