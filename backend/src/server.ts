import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route params: Identificar qual recurso eu quero atualizar ou deletar
// Query params: Paginação, filtros, ordenação


app.listen(3333);
