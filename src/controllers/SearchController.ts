import { Request, Response } from 'express';
import { pet } from '../models/Pets'
import { activeBanner } from '../models/index'

class SearchController {

    static search = ( req: Request, res: Response ) => {
        const valores:string = req.query.q as string;
        
        res.render('pages/index',{
            pet: pet.getFromName(valores),
            menu: activeBanner('')
        })
    }
}

export default SearchController;