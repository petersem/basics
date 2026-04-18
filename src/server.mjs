import express from 'express';
import path from 'path';
import itemRoute from './routes/item.mjs';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger.config.mjs';
import { fileURLToPath } from "url";
import helmet from 'helmet';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// Load environment values to variables
const PORT = process.env.PORT || 3000;
console.log(`Environment: ${process.env?.NODE_ENV}`);

const app = express();  // setup express app
app.use(helmet());

app.set("view engine", "ejs");  // use ejs for the view engine
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


// setup basic express middleware
app.use(express.json());  // handle json payloads that come in
app.use(express.urlencoded({ extended: true }));  // handle querystring nested data inputs


app.use("/api", itemRoute);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// start listening on a specified port 
app.listen(PORT, () => {
    console.log(`Express app: Listening on port ${PORT}`)
});