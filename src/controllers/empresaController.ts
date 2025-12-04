// controllers/empresaController.ts
import { Request, Response } from "express";
import {
  listarEmpresasService,
  buscarEmpresaPorIdService,
  criarEmpresaService,
  atualizarEmpresaService,
  deletarEmpresaService,
} from "../services/empresaService";

// Listar
export const listarEmpresas = async (req: Request, res: Response) => {
  try {
    const empresas = await listarEmpresasService();
    res.json({ sucesso: true, dados: empresas });
  } catch (err) {
    res.status(500).json({ sucesso: false, erro: "Erro ao listar empresas" });
  }
};

// Buscar por ID
export const buscarEmpresaPorId = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ sucesso: false, erro: "ID inválido" });
    }

    const empresa = await buscarEmpresaPorIdService(id);

    if (!empresa) {
      return res
        .status(404)
        .json({ sucesso: false, erro: "Empresa não encontrada" });
    }

    res.json({ sucesso: true, dados: empresa });
  } catch (err) {
    res.status(500).json({ sucesso: false, erro: "Erro ao buscar empresa" });
  }
};

// Criar
export const criarEmpresa = async (req: Request, res: Response) => {
  try {
    const dados = await criarEmpresaService(req.body);

    res.json({
      sucesso: true,
      mensagem: "Empresa criada com sucesso!",
      dados,
    });
  } catch (err) {
    res.status(500).json({ sucesso: false, erro: "Erro ao criar empresa" });
  }
};

// Atualizar
export const atualizarEmpresa = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ sucesso: false, erro: "ID inválido" });
    }

    const campos = Object.fromEntries(
      Object.entries(req.body).filter(
        ([_, valor]) => valor !== "" && valor !== null && valor !== undefined
      )
    );

    if (Object.keys(campos).length === 0) {
      return res.status(400).json({
        sucesso: false,
        erro: "Nenhum campo válido enviado para atualizar.",
      });
    }

    await atualizarEmpresaService(id, campos);

    res.json({
      sucesso: true,
      mensagem: "Empresa atualizada com sucesso!",
    });
  } catch (err) {
    res.status(500).json({ sucesso: false, erro: "Erro ao atualizar empresa" });
  }
};

// Deletar
export const deletarEmpresa = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ sucesso: false, erro: "ID inválido" });
    }

    await deletarEmpresaService(id);

    res.json({
      sucesso: true,
      mensagem: "Empresa deletada com sucesso!",
    });
  } catch (err) {
    res.status(500).json({ sucesso: false, erro: "Erro ao deletar empresa" });
  }
};
