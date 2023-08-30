const express = require("express");
const morgan = require("morgan");
const { swaggerUi, specs } = require("./src/swagger/swagger.js")

const app = express();

app.use(morgan("dev"));
app.use(express.json());

const orderRouter = require("./src/routes/order-route");
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
app.use("/", orderRouter);


app.listen(3000, () => console.log("Listening on port 3000"));
