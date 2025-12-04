import { Router } from "express";
import {
  listarEmpresas,
  criarEmpresa,
  buscarEmpresaPorId,
  atualizarEmpresa,
  deletarEmpresa
} from "../controllers/empresaController";

import {
  criarEmpresaValidation,
  atualizarEmpresaValidation,
  idValidation
} from "../validations/empresaValidation";

import { validar } from "../middleware/validationMiddleware";

const router = Router();

router.get("/", listarEmpresas);

router.get("/:id", idValidation, validar, buscarEmpresaPorId);

router.post("/", criarEmpresaValidation, validar, criarEmpresa);

router.put("/:id", atualizarEmpresaValidation, validar, atualizarEmpresa);

router.delete("/:id", idValidation, validar, deletarEmpresa);

export default router;
