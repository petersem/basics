// swagger.config.mjs
import swaggerJsdoc from "swagger-jsdoc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Matt's API",
      version: "1.0.0",
      description: "API documentation for my ES module Node app"
    },
    servers: [{ url: "http://localhost:3000" }]
  },
  apis: [path.join(__dirname, "routes/*.mjs")]
};

export const swaggerSpec = swaggerJsdoc(options);
