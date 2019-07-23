require("dotenv").config();

describe("Server", () => {
  describe("MongoDb_uri", () => {
    it("should be defined in env", () => {
      // Arrange

      // Act

      // Assert
      expect(process.env.MONGODB_URI).not.toBeUndefined();
    });
  });

  describe("MongoDb database", () => {
    it("should be defined in env", () => {
      // Arrange

      // Act

      // Assert
      expect(process.env.MONGODB_DATABASE).not.toBeUndefined();
    });
  });
});
