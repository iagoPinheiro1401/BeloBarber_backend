import express from 'express';
import cors from 'cors';
import clienteRoutes from './routes/clienteRoutes.js';
import profissionalRoutes from './routes/profissionalRoutes.js';
import agendamentoRoutes from './routes/agendamentoRoutes.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}));


app.use(express.json());
app.use('/clientes', clienteRoutes);
app.use('/profissionais', profissionalRoutes);
app.use('/agendamentos', agendamentoRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
