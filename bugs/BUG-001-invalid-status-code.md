# BUG-001 - Incorrect Status Code on POST /transferencias

## Description

API returns 404 instead of 400 when required fields are missing.

## Steps to Reproduce

1. POST /transferencias
2. Send empty body {}

## Expected

400 Bad Request

## Actual

404 Not Found

## Severity

Medium

## Discovered by

Automated test: transfer.test.js
