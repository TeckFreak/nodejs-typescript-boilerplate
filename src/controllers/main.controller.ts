import { Request, Response } from 'express';

export class MainController
{
    /**
     * Shows the welcome message of the routed page when POST request is sent.
     * @param req Request received.
     * @param res Response to send.
     */
    public showWelcomeMessageOnPost(req: Request, res: Response)
    {
        res.status(200).send("<h1>Welcome on the POST page.</h1>");
    }

    /**
     * Shows the welcome message of the routed page when GET request is sent.
     * @param req Request received.
     * @param res Response to send.
     */
    public showWelcomeMessageOnGet(req: Request, res: Response)
    {
        res.status(200).send("<h1>Welcome on the GET page</h1>");
    }
}