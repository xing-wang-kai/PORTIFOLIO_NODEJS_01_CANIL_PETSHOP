
import { Request, Response } from 'express';
import { activeBanner } from '../models/index'
import { pet } from '../models/Pets'

class PetshopController {

    static home = ( req: Request, res: Response ) => {

        res.render('pages/index', {
            menu: activeBanner('all'),
            banner: {
                title: 'Todos os Animais',
                background: 'allanimals.jpg'
            },
            pet: pet.getAll()
        });
    }
    static dogs = (req: Request, res: Response ) => {

        res.render('pages', {
            menu: activeBanner("dogs"),
            banner: {
                title: 'Todos os Cachorros',
                background: 'banner_dog.jpg'
            },
            pet: pet.getFromType('dogs')
        })
    }
    static cats = (req: Request, res: Response ) => {

        
        res.render('pages', {
            menu: activeBanner('cats'),
            banner: {
                title: 'Todos os Gatos',
                background: 'banner_cat.jpg'
            },
            pet: pet.getFromType('cats')
        })
    }
    static fishes = (req: Request, res: Response ) => {

        res.render('pages', {
            menu: activeBanner('fishes'),
            banner: {
                title: 'Todos os Peixes',
                background: 'banner_fish.jpg'
            },
            pet: pet.getFromType('fishes')
        })
    }
}


export default PetshopController;