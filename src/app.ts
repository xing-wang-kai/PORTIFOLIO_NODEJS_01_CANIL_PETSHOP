import app from './config/customExpress';
import 'dotenv/config';

const port = process.env.PORT;

app.listen( port, () => {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port}`);
} )