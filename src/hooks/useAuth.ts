// src/hooks/useAuth.ts
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
  // 1. Pega o contexto
  const context = useContext(AuthContext);
    // 2. Verifica se o contexto existe
  if (!context) {
    throw new Error("useAuth precisa ser usado dentro de um AuthProvider");
  }

  // 3. Retorna os valores do contexto (login, logout, accessToken)
  return context;
};