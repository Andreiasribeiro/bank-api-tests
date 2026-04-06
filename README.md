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

bank-api-tests/

```
├── test/
│ ├── login.test.js # Authentication tests
│ └── transfer.test.js # Money transfer tests
│
├── mochawesome-report/ # Generated HTML reports
│
├── .env # Environment variables (must be created)
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
