// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("🔥 ERRO GLOBAL:", err);

  const status = err.status || 500;

  res.status(status).json({
    sucesso: false,
    erro: err.message || "Erro interno no servidor",
  });
}
