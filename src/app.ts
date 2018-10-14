import * as express from "express";
import * as  bodyParser from "body-parser";
import { serverIo } from './serverio/ServerIO'

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.route('/uups')
    .all((_, res: any) => {
        serverIo.sendError(res, 500, 'uups');
    });

export default app;