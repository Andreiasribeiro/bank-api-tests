# BUG-002 - Missing Transaction Token for Transfers Above 5000

## Description

API returns 422 instead of 401 when a transaction above 5000 is submitted without the required `token` field.

## Steps to Reproduce

1. POST /transferencias
2. Send body with `valor` greater than 5000 (e.g., 6000) and without `token`.
3. Include valid Authorization header.

```json
{
  "contaOrigem": 1,
  "contaDestino": 2,
  "valor": 6000
}
```
