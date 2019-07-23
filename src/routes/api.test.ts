import request from "supertest";
import app from "../app";

describe("Routes", () => {

  describe("API", () => {

    describe("Generic", () => {

      describe("GET /undefined-route", () => {
        it("Should return a 404 error", () => {
          return request(app)
            .get("/undefined-route")
            .expect(404);
        });
      });

    });

    describe("Users", () => {

      describe("GET /users", () => {
        it("Should return JSON with status 200", () => {
          return request(app)
            .get("/users")
            .expect("Content-Type", /json/)
            .expect(200);
        });
      });

    });

  });

});
