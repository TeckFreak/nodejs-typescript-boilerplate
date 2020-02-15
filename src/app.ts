import express = require("express");
import * as bodyParser from "body-parser";
import { MainRoute } from "./routes/main.route";

class App
{
    public app: express.Application = express();
    private router: MainRoute;

    constructor()
    {
        this.config();

        this.router = new MainRoute(this.app);
        this.router.initRouters();
    }

    private config(): void
    {
        // support application/json
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;