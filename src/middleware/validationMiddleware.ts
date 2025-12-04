import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export function validar(req: Request, res: Response, next: NextFunction) {
  const erros = validationResult(req);

  if (!erros.isEmpty()) {
    return res.status(400).json({
      sucesso: false,
      erros: erros.array().map(e => e.msg)
    });
  }

  next();
}
