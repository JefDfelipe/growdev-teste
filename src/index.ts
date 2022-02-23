import express, {Request,Response} from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

/*GIT → versionador (repositório)
    add → cria um commit
    pull → puxa
*/
//GITHUB → plataforma de respositórios
app.get('/', (req:Request, res:Response) => {
    return res.send('ok');
});
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Servidor rodando.');
});