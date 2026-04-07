# BUG-004 - Account Balance (`saldo`) Returned as String Instead of Number

## Description

The `/contas/{id}` endpoint returns the account balance (`saldo`) as a **string** instead of a **number**.  
According to the API specification (OpenAPI/Swagger), `saldo` should be a number (float), but the response returns it formatted as a string, e.g., `"693.00"`.

---

## Steps to Reproduce

1. Send a GET request to `/contas/1` (or any valid account ID).
2. Include a valid Authorization header.

Example request:

```http
GET /contas/1
Authorization: Bearer <valid_token>
```
