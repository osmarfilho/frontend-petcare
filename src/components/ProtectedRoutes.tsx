// src/components/ProtectedRoutes.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Nosso hook!

export const ProtectedRoutes = () => {
  // 1. Pega o estado de autenticação do nosso hook
  const { accessToken } = useAuth();

  if (!accessToken) {
    // 2. Se NÃO houver token (usuário não logado),
    // redireciona para a página de login.
    // 'replace' impede o usuário de "voltar" para a página protegida
    return <Navigate to="/login" replace />;
  }

  // 3. Se HOUVER token (usuário logado),
  // renderiza o componente da rota "filha".
  // <Outlet> é um placeholder do React Router para
  // "renderize aqui a página que o usuário quer ver"
  // (ex: o Dashboard, a lista de animais, etc.)
  return <Outlet />;
};