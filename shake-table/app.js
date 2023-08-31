const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { swaggerUi, specs } = require("./src/swagger/swagger.js")

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// const corsOptions = { //옵션 세부내역
//     origin: "https://www.domain.com",
//     credentials: true,
// };
// app.use(cors(corsOptions)); // cors 옵션

const indexRoute = require("./src/routes/Index.js");
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
app.use("/", indexRoute);


app.listen(3000, () => console.log("Listening on port 3000"));
