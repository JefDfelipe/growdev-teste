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

app.listen(8080, () => {
    console.log('Servidor rodando.');
});