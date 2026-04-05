// Import 'supertest' to make HTTP requests to the API endpoints in tests
// Allows sending requests (GET, POST, etc.) and inspecting responses
const request = require("supertest");

// Import 'chai' for expressive and readable assertions
// 'expect' style allows chaining assertions like expect(value).to.equal(expected)
const { expect } = require("chai");

// Test suite for login functionality
describe("login", () => {
  // Nested suite for the POST /login endpoint
  describe("POST /login", () => {
    // Test case: should return status 200 and a token string for valid credentials
    it("Deve retornar 200 com um token string quando usar credenciais válidas", async () => {
      // Make a POST request to /login with valid credentials
      const resposta = await request("http://localhost:3000")
        .post("/login")
        .set("Content-Type", "application/json")
        .send({
          username: "andreia.ribeiro",
          senha: "1234567",
        });

      //console.log(resposta.status);
      //console.log(resposta.body);
      
      // Validate response status code
      expect(resposta.status).to.equal(200);

      // Validate that the response body contains a token of type string
      expect(resposta.body.token).to.be.a("string");
    });
  });
});
