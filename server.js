// server.js
import express from 'express';
import clienteRoutes from './routes/clienteRoutes.js';

const app = express();

app.use(express.json());
app.use('/clientes', clienteRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
