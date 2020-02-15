import { Request, Response } from "express";
import * as express from "express";
import { MainController } from "../controllers/main.controller"

/**
 * Class to handle and manage all the routes.
 */
export class MainRoute
{
    mainController: MainController = new MainController();              // User controller.
    app: express.Application;                                           // Express app.

    constructor(app: express.Application)
    {
        this.app = app;
    }

    /**
     * Initializes all the routes.
     */
    public initRouters(): void
    {
        this.initBaseRoutes();
    }

    private initBaseRoutes(): void
    {
        this.app.route('/')
            .post(this.mainController.showWelcomeMessageOnPost)                         // POST Request Received. 
            .get(this.mainController.showWelcomeMessageOnGet);                          // GET Request Received.
    }
}