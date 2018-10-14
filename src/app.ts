import express from "express";
import bodyParser from "body-parser";
//import session from "express-session";


const app = express();

app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

export default app;