
import pool from '../db.js';

export const adicionar = async (agendamento) => {
  const { Data, Hora, Status, ID_Cliente, ID_Profissional } = agendamento;
  const [result] = await pool.query(
    'INSERT INTO agendamento (Data, Hora, Status, ID_Cliente, ID_Profissional) VALUES (?, ?, ?, ?, ?)',
    [Data, Hora, Status, ID_Cliente, ID_Profissional]
  );
  return result;
};

export const listar = async () => {
  const [rows] = await pool.query('SELECT * FROM agendamento');
  return rows;
};

export const buscarPorId = async (id) => {
  const [rows] = await pool.query('SELECT * FROM agendamento WHERE ID_Agendamento = ?', [id]);
  return rows[0];
};

export const editar = async (id, agendamento) => {
  const { Data, Hora, Status, ID_Cliente, ID_Profissional } = agendamento;
  const [result] = await pool.query(
    'UPDATE agendamento SET Data = ?, Hora = ?, Status = ?, ID_Cliente = ?, ID_Profissional = ? WHERE ID_Agendamento = ?',
    [Data, Hora, Status, ID_Cliente, ID_Profissional, id]
  );
  return result;
};

export const excluir = async (id) => {
  const [result] = await pool.query('DELETE FROM agendamento WHERE ID_Agendamento = ?', [id]);
  return result;
};
