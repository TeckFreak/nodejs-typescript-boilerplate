import { Request, Response } from 'express';

export class MainController {
    /**
     * Shows the welcome message of the routed page when GET request is sent.
     * @param req Request received.
     * @param res Response to send.
     */
    public showHomePage(req: Request, res: Response) {
        res.status(200).json({
            success: true,
            requestMethod: req.method
        });
    }

    public showPOSTPage(req: Request, res: Response) {
        res.status(200).send("<h1>" + req.method + " Request Handled</h1>");
    }

    public showGETPage(req: Request, res: Response) {
        res.status(200).send("<h1>" + req.method + " Request Handled</h1>");
    }

    public showPUTPage(req: Request, res: Response) {
        res.status(200).send("<h1>" + req.method + " Request Handled</h1>");
    }

    public showDELETEPage(req: Request, res: Response) {
        res.status(200).send("<h1>" + req.method + " Request Handled</h1>");
    }
}