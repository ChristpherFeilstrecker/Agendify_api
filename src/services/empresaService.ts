import pool from "../config/database";

const TABELA = "empresa";

// Listar todas
export const listarEmpresasService = async () => {
  const [rows] = await pool.query(`SELECT * FROM ${TABELA}`);
  return rows;
};

// Buscar por ID
export const buscarEmpresaPorIdService = async (id: number) => {
  const [rows]: any = await pool.query(
    `SELECT * FROM ${TABELA} WHERE id = ?`,
    [id]
  );

  return rows[0] || null;
};

// Criar empresa
export const criarEmpresaService = async (dados: {
  nome: string;
  cnpj?: string | null;
  telefone?: string | null;
  endereco?: string | null;
}) => {
  const { nome, cnpj = null, telefone = null, endereco = null } = dados;

  const [result]: any = await pool.query(
    `INSERT INTO ${TABELA} (nome, cnpj, telefone, endereco) VALUES (?, ?, ?, ?)`,
    [nome, cnpj, telefone, endereco]
  );

  return { id: result.insertId };
};

// Atualizar
export const atualizarEmpresaService = async (id: number, campos: any) => {
  const colunas = Object.keys(campos).map(campo => `${campo} = ?`).join(", ");
  const valores = Object.values(campos);

  await pool.query(
    `UPDATE ${TABELA} SET ${colunas} WHERE id = ?`,
    [...valores, id]
  );
};

// Deletar
export const deletarEmpresaService = async (id: number) => {
  await pool.query(
    `DELETE FROM ${TABELA} WHERE id = ?`,
    [id]
  );
};
