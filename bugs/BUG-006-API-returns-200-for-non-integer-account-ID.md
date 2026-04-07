# BUG-006 - API Returns 200 for Non-integer Account ID

## Description

The `/contas/{id}` endpoint returns a 200 OK status code when a non-integer account ID is provided (e.g., `"invalidID"`).  
Swagger specifies that `id` should be an integer, but the API does not validate this input properly.

---

## Steps to Reproduce

1. Send a GET request to `/contas/invalidID` with a valid JWT token.
2. Observe the response status code and body.

Example request:

```http
GET /contas/invalidID
Authorization: Bearer <valid_token>
```
