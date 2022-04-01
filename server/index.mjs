import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import swaggerUI from "swagger-ui-express";
import docs from "./docs/index.mjs";

import router from "./routes.mjs";

// APP
const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARES
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(router);

// MAIN SERVER
app.listen(port, () => {
  console.log("\x1b[36m%s\x1b[0m", `\nListening at http://localhost:${port}`);
});
