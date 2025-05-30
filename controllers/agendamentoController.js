
import {
  adicionar,
  listar,
  buscarPorId,
  editar,
  excluir
} from '../models/agendamentoModel.js';

// Criar agendamento
export const adicionar = async (req, res) => {
  try {
    const resultado = await criarAgendamento(req.body);
    res.status(201).json({ mensagem: 'Agendamento criado com sucesso', id: resultado.insertId });
  } catch (error) {
    console.error('Erro ao criar agendamento:', error);
    res.status(500).json({ erro: 'Erro ao criar agendamento' });
  }
};

// Listar agendamentos
export const listar = async (req, res) => {
  try {
    const agendamentos = await listarAgendamentos();
    res.json(agendamentos);
  } catch (error) {
    console.error('Erro ao listar agendamentos:', error);
    res.status(500).json({ erro: 'Erro ao listar agendamentos' });
  }
};

// Buscar agendamento por ID
export const buscarPorId = async (req, res) => {
  try {
    const agendamento = await buscarAgendamentoPorId(req.params.id);
    if (!agendamento) {
      return res.status(404).json({ erro: 'Agendamento não encontrado' });
    }
    res.json(agendamento);
  } catch (error) {
    console.error('Erro ao buscar agendamento:', error);
    res.status(500).json({ erro: 'Erro ao buscar agendamento' });
  }
};

// Atualizar agendamento
export const editar = async (req, res) => {
  try {
    const resultado = await atualizarAgendamento(req.params.id, req.body);
    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: 'Agendamento não encontrado para atualizar' });
    }
    res.json({ mensagem: 'Agendamento atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar agendamento:', error);
    res.status(500).json({ erro: 'Erro ao atualizar agendamento' });
  }
};

// Deletar agendamento
export const excluir = async (req, res) => {
  try {
    const resultado = await deletarAgendamento(req.params.id);
    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: 'Agendamento não encontrado para deletar' });
    }
    res.json({ mensagem: 'Agendamento deletado com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar agendamento:', error);
    res.status(500).json({ erro: 'Erro ao deletar agendamento' });
  }
};
