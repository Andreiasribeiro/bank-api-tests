// Import 'supertest' to make HTTP requests to the API endpoints in tests
// Allows sending requests (GET, POST, etc.) and inspecting responses
const request = require("supertest");

// Import 'chai' for expressive and readable assertions
// 'expect' style allows chaining assertions like expect(value).to.equal(expected)
const { expect } = require("chai");
require("dotenv").config();
const postLogin = require("../fixtures/postLogin.json");

// Test suite for login functionality
describe("login", () => {
  // Nested suite for the POST /login endpoint
  describe("POST /login", () => {
    // Test case: should return status 200 and a token string for valid credentials
    it("Should return 200 with a string token when using valid credentials", async () => {
      // Make a POST request to /login with valid credentials
      const response = await request(process.env.BASE_URL)
        .post("/login")
        .set("Content-Type", "application/json")
        .send({
          username: "andreia.ribeiro",
          senha: "1234567",
        });

      //console.log(resposta.status);
      //console.log(resposta.body);

      // Validate response status code
      expect(response.status).to.equal(200);

      // Validate that the response body contains a token of type string
      expect(response.body.token).to.be.a("string");
    });
  });
});
