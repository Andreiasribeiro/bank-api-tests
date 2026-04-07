const request = require("supertest");
const { expect } = require("chai");
require("dotenv").config();
const postTransfers = require("../fixtures/postTransfers.json");

const { retrieveToken } = require("../helpers/authentication");

describe("transferencias", () => {
  let token;
  beforeEach(async () => {
    token = await retrieveToken("Andreia.Ribeiro", "1234567");
  });
  describe("POST /transferencias", () => {
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
      const response = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
        .send(bodyTranfers);

      expect(response.status).to.equal(422);
    });
    it("Should return 400 when required fields are missing", async () => {
      const response = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Authorization", `Bearer ${token}`)
        .send({});

      expect(response.status).to.equal(400);
    });
    it("Should return 401 when token is not provided", async () => {
      const response = await request(process.env.BASE_URL)
        .post("/transferencias")
        .send(postTransfers);

      expect(response.status).to.equal(401);
    });
  });
  describe("GET /transferencias/{id}", () => {
    it("Should return 200 and the transfer data matching the database record when the ID is valid", async () => {
      const response = await request(process.env.BASE_URL)
        .get("/transferencias/40")
        .set("Authorization", `Bearer ${token}`);

      //console.log(response.status);
      //console.log(response.body);
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(40);
      expect(response.body.id).to.be.a("number");
      expect(response.body.conta_origem_id).to.equal(1);
    });
  });
  describe("GET /transferencias", () => {
    it("Should return 10 items when the pagination limit is set to 10", async () => {
      const response = await request(process.env.BASE_URL)
        .get("/transferencias?page=1&limit=10")
        .set("Authorization", `Bearer ${token}`);

      //console.log(response.body);
      expect(response.status).to.equal(200);
      expect(response.body.limit).to.equal(10);
      expect(response.body.transferencias).to.have.lengthOf(10);
    });
  });
});
