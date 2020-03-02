import { Request, Response } from "express";
import * as express from "express";
import { MainController } from "../controllers/main.controller"

/**
 * Class to handle and manage all the routes.
 */
export class MainRoute {
    mainController: MainController = new MainController();              // User controller.
    app: express.Application;                                           // Express app.

    constructor(app: express.Application) {
        this.app = app;
    }

    /**
     * Initializes all the routes.
     */
    public initRouters(): void {
        this.initBaseRoutes();
        // this.initMethodSpecificRouter();
    }

    /**
     * Handles all types of request methods and route it to single controller method.
     */
    private initBaseRoutes(): void {
        this.app.use('/', this.mainController.showHomePage);
    }

    /**
     * Handle specific request methods and route it to different controller methods.
     */
    private initMethodSpecificRouter(): void {
        this.app.route('/')
            .post(this.mainController.showPOSTPage)
            .get(this.mainController.showGETPage)
            .put(this.mainController.showPUTPage)
            .delete(this.mainController.showDELETEPage);
    }
}