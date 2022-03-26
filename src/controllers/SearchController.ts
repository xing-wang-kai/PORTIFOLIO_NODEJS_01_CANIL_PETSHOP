import { Request, Response } from 'express';

class SearchController {
    static search = ( req: Request, res: Response ) => {
        res.render('pages/index')
    }
}

export default SearchController;