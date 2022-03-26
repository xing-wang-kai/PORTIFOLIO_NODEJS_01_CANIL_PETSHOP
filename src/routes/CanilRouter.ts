import { Router } from 'express';
import Controller from '../controllers/Controller';
import SearchController from '../controllers/SearchController';

const router = Router();

router.get( '/', Controller.home );
router.get('/dogs', Controller.dogs);
router.get('/cats', Controller.cats);
router.get('/fishes', Controller.fishes);

router.get('/search', SearchController.search);

export default router;