import { Response } from "express";

export const sucesso = (
  res: Response,
  data: any = {},
  message: string = "OK",
  status: number = 200
) => {
  return res.status(status).json({
    success: true,
    message,
    data
  });
};

export const erro = (
  res: Response,
  message: string = "Erro inesperado",
  status: number = 500
) => {
  return res.status(status).json({
    success: false,
    message
  });
};
