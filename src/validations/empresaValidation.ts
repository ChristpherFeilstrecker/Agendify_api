import { body, param } from "express-validator";

export const criarEmpresaValidation = [
  body("nome")
    .notEmpty().withMessage("O nome é obrigatório")
    .isString().withMessage("O nome deve ser um texto"),

  body("cnpj")
    .optional()
    .isString().withMessage("O CNPJ deve ser um texto"),

  body("telefone")
    .optional()
    .isString().withMessage("O telefone deve ser um texto"),

  body("endereco")
    .optional()
    .isString().withMessage("O endereço deve ser um texto"),
];

export const atualizarEmpresaValidation = [
  param("id")
    .isNumeric().withMessage("ID inválido"),

  body("nome")
    .optional()
    .isString().withMessage("O nome deve ser um texto"),

  body("cnpj")
    .optional()
    .isString().withMessage("O CNPJ deve ser um texto"),

  body("telefone")
    .optional()
    .isString().withMessage("O telefone deve ser um texto"),

  body("endereco")
    .optional()
    .isString().withMessage("O endereço deve ser um texto"),
];

export const idValidation = [
  param("id")
    .isNumeric().withMessage("ID inválido"),
];
