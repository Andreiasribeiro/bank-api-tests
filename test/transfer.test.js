const request = require("supertest");
const { expect } = require("chai");
require("dotenv").config();
const postTransfers = require("../fixtures/postTransfers.json");

const { retrieveToken } = require("../helpers/authentication");

describe("transferencias", () => {
  describe("POST /transferencias", () => {
    let token;
    beforeEach(async () => {
      token = await retrieveToken("Andreia.Ribeiro", "1234567");
    });
    it("Should return success with 201 when the transfer amount is equal or above $10", async () => {
      const bodyTranfers = { ...postTransfers };

      const response = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
        .send(bodyTranfers);

      expect(response.status).to.equal(201);
      console.log(response.body);
    });

    it("Should return fail with 422 when the transfer amount is lower than $10", async () => {
      const bodyTranfers = { ...postTransfers };
      bodyTranfers.valor = 7;
      const response = await request("http://localhost:3000")
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
        .send(bodyTranfers);

      expect(response.status).to.equal(422);
    });
  });
});
