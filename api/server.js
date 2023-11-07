import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 3001; 

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get('/cep/:cep', async (req, res) => {
  const { cep } = req.params;
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar CEP', error: error.message });
  }
});
