# BUG-005 - Account Not Found Returns 200 Instead of 404

## Description

The `/contas/{id}` endpoint returns **200 OK** even when the account ID does not exist.  
According to the API specification (OpenAPI/Swagger), it should return **404 Not Found** for non-existent account IDs.

---

## Steps to Reproduce

1. Send a GET request to `/contas/999999` (use an ID that does not exist).
2. Include a valid Authorization header.

Example request:

```http
GET /contas/999999
Authorization: Bearer <valid_token>
```
