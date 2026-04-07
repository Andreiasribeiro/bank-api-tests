const request = require("supertest");
const { expect } = require("chai");
require("dotenv").config();

const { retrieveToken } = require("../helpers/authentication");

describe("accounts", () => {
  let token;

  beforeEach(async () => {
    token = await retrieveToken("Andreia.Ribeiro", "1234567");
  });

  describe("GET /contas", () => {
    it("Should return 200 and a list of accounts when token is valid", async () => {
      // Send a GET request to /contas with a valid JWT token
      const response = await request(process.env.BASE_URL)
        .get("/contas")
        .set("Authorization", `Bearer ${token}`);

      // Assert that the response status is 200 (OK)
      expect(response.status).to.equal(200);

      // Assert that the response body contains the "contas" property
      expect(response.body).to.have.property("contas");

      // Assert that "contas" is an array
      expect(response.body.contas).to.be.an("array");

      // If there is at least one account, check that it has all expected keys
      if (response.body.contas.length > 0) {
        expect(response.body.contas[0]).to.have.all.keys(
          "id", // Account ID
          "titular", // Account holder name
          "saldo", // Account balance
          "ativa", // Account active status
        );
      }
    });

    it("Should return 401 when token is missing", async () => {
      // Send a GET request to /contas without a JWT token
      const response = await request(process.env.BASE_URL).get("/contas");

      // Assert that the response status is 401 (Unauthorized)
      expect(response.status).to.equal(401);
    });

    it("Should support pagination with page and limit query params", async () => {
      // Send a GET request to /contas with pagination query parameters: page=1 and limit=5
      const response = await request(process.env.BASE_URL)
        .get("/contas?page=1&limit=5")
        .set("Authorization", `Bearer ${token}`); // Include valid JWT token

      // Assert that the number of accounts returned does not exceed the requested limit
      expect(response.body.contas).to.have.lengthOf.at.most(5);
    });
  });

  describe("GET /contas/{id}", () => {
    it("Should return 200 and account details when ID is valid", async () => {
      // Send a GET request to /contas/1 with a valid JWT token
      const response = await request(process.env.BASE_URL)
        .get("/contas/1")
        .set("Authorization", `Bearer ${token}`);
      // Assert that the response status code is 200 (OK)
      expect(response.status).to.equal(200);
      // Assert that the response body contains all expected keys for an account
      expect(response.body).to.have.all.keys("id", "titular", "saldo", "ativa");
      // Assert that the ID returned matches the requested account ID
      expect(response.body.id).to.equal(1);
      // Assert that the saldo (balance) is a number
      expect(response.body.saldo).to.be.a("number");
      // Assert that the titular (account holder) is a string
      expect(response.body.titular).to.be.a("string");
    });

    it("Should return 404 when account ID does not exist", async () => {
      // Send a GET request to /contas/999999 with a valid JWT token
      // Using a non-existent account ID to test how the API handles missing resources
      const response = await request(process.env.BASE_URL)
        .get("/contas/999999")
        .set("Authorization", `Bearer ${token}`);

      // Assert that the response status code is 404 (Not Found)
      expect(response.status).to.equal(404);
    });

    it("Should return 401 when token is missing", async () => {
      // Send a GET request to /contas/1 **without providing a JWT token**
      // This tests the API's authentication enforcement
      const response = await request(process.env.BASE_URL).get("/contas/1");

      // Assert that the response status code is 401 (Unauthorized)
      expect(response.status).to.equal(401);
    });

    it("Should return 400 when account ID is invalid", async () => {
      // Swagger defines `id` as integer. Expected 404 if account not found.
      // Behavior for non-integer/invalid IDs is not specified in Swagger.
      const response = await request(process.env.BASE_URL)
        .get("/contas/invalidID")
        .set("Authorization", `Bearer ${token}`);

      // Assert that the status is either 400 (Bad Request) or 404 (Not Found)
      expect([400, 404]).to.include(response.status);
    });
  });
});
