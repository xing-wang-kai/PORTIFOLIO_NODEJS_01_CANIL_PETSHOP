
import { Request, Response } from 'express';

class PetshopController {
    static pegartodos = ( req: Request, res: Response ) => {
        res.render('pages');
    }
    static home = ( req: Request, res: Response ) => {
        res.render('pages');
    }
    static dogs = (req: Request, res: Response ) => {
        res.render('pages')
    }
    static cats = (req: Request, res: Response ) => {
        res.render('pages')
    }
    static fishes = (req: Request, res: Response ) => {
        res.render('pages')
    }
}


export default PetshopController;