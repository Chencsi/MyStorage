import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from './routes';

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', routes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
});