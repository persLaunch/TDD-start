import request from "supertest";
import app from "../app";

describe("API", () => {

  describe("Routes", () => {

    test("Undefined route should return a 404 error", () => {
      request(app).get("/a-route-that-does-not-exist").expect(404);
    });
  });
});
