import express, { Request, Response} from 'express';
import cors from 'cors';
import mustache from 'mustache-express';
import path from 'path'

import { router } from '../routes/index';

const app = express();
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) )

app.use(( req: Request, res: Response, next ) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', "GET POST PUT DELETE");
    res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization');
    app.use( cors() );
    next();
})

app.set( 'view engine', 'mustache' );
app.set( 'views', path.join( __dirname, '../views' ) );
app.engine('mustache', mustache());

router(app)

app.use('/public', express.static( path.join( __dirname, '../../public')))
app.use(( req: Request, res: Response ) => {
    res.status(404).send('Página não foi encontrada')
})

export default app;