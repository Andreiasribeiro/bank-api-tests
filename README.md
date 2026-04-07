# Bank API Tests

## 🎯 Objective
This project aims to automate REST API testing for the Bank API developed by Júlio de Lima:
https://github.com/juliodelimas/banco-api

The goal is to validate endpoints, ensure reliability, and verify expected behaviours using automated tests.

---

## 🛠️ Tech Stack

- JavaScript (Node.js)
- Mocha (test framework)
- Chai (assertions)
- Supertest (HTTP assertions)
- Mochawesome (HTML reports)
- dotenv (environment variables)

---

## 📁 Project Structure

```
bank-api-tests/
├── test/
│   ├── login.test.js           # Authentication tests
│   ├── transfer.test.js        # Money transfer tests
│   └── accounts.test.js        # Account tests 
│
├── bugs/                       # Documented bugs found during testing
│   ├── BUG-001-Incorrect-status-code-for-missing-fields.md
│   ├── BUG-002-Missing-transaction-token-for-transfers-above-5000.md
│   ├── BUG-003-Pagination-limit-not-respected-in-contas.md
│   ├── BUG-004-saldo-returned-as-string.md
│   ├── BUG-005-account-not-found-returns-200-instead-of-404.md
│   └── BUG-006-API-returns-200-for-non-integer-account-ID.md
│
├── fixtures/                  # JSON payloads for tests
├── helpers/                   # Helper functions (e.g., authentication)
├── mochawesome-report/        # Generated HTML reports
├── .env                       # Environment variables
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Environment Configuration (.env)

Before running the test, you must create a `.env` file in the root directory with the following structure:
BASE_URL=http://localhost:3000

Replace the URL with the correct API endpoint if necessary.

---

## ▶️ Running the Tests

### 1. Install dependencies

npm install

### 2. Run the tests

npm test

---

## 📊 Test Report

After running the tests, an HTML report will be generated in the `mochawesome/` directory.

To view the report:
1. Navigate to the folder
2. Open the `.html` file in your browser

---

## 📚 Documentation Links

- Mocha: https://mochajs.org/
- Chai: https://www.chaijs.com/
- Supertest: https://github.com/ladjs/supertest
- Mochawesome: https://github.com/adamgruber/mochawesome
- dotenv: https://github.com/motdotla/dotenv

---

## ✅ Notes

- Ensure the API server is running before executing the tests
- Update the BASE_URL accordingly
- Reports are overwritten on each test run

---

## 👩‍💻 Author

Andréia Ribeiro

## 🔍 Known Issues

Some issues were identified during automated API testing.

- Incorrect status code for missing fields in `POST /transferencias`
- Missing transaction token validation for transfers above 5000
- Pagination limit not respected in `GET /contas`
- `saldo` returned as string instead of number
- `GET /contas/{id}` returns 200 for non-existent accounts
- `GET /contas/{id}` accepts invalid (non-integer) IDs

📂 For detailed bug reports, see the [bugs folder](./bugs/).
