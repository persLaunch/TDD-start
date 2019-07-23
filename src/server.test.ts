import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

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

  describe("MongoDb", () => {
    it("should be connected", async () => {
      // Arrange
      const mongoDbUri = process.env.MONGODB_URI || "mongodb://localhost:27017";
      const mongoDbDatabase = process.env.MONGODB_DATABASE || "laranode";

      // Act
      await mongoose.connect(`${mongoDbUri}/${mongoDbDatabase}`, {
        useNewUrlParser: true
      });
      const connectionState = await mongoose.connection.readyState;
      mongoose.connection.close();

      // Assert
      expect(connectionState).toEqual(1);
    });
  });
});
