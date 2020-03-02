import express = require("express");
import * as bodyParser from "body-parser";
import { MainRoute } from "./routes/main.route";
import helmet = require('helmet');

class App {
    public app: express.Application = express();
    private router: MainRoute;

    constructor() {
        this.config();

        this.router = new MainRoute(this.app);
        this.router.initRouters();
    }

    private config(): void {
        // Secure application from well-known vulnerabilities. URL: https://helmetjs.github.io/docs/
        this.app.use(helmet());
        // support application/json
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;