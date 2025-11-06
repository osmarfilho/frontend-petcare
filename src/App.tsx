import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/Dashboard";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { AnimaisLista } from "./pages/AnimaisLista";
import { AnimalForm } from "./pages/AnimalForm";
import { AdotanteForm } from "./pages/AdotanteForm";
import { AdotantesList } from "./pages/AdotantesList";
import { ConsultasLista } from "./pages/ConsultasListas"; 
import { ConsultaForm } from "./pages/ConsultasForm";
import { OngList } from "./pages/OngList";
import { OngForm } from "./pages/OngForm";

function App() {
 return (
  <Routes>
   {/* 🔓 Rota pública (Login) */}
   <Route path="/login" element={<Login />} />

   {/* 🔒 Rotas protegidas (somente usuários logados) */}
   <Route element={<ProtectedRoutes />}>
    {/* Página inicial (Dashboard) */}
    <Route path="/" element={<Dashboard />} />

    {/* 🐶 Rotas de Animais */}
    <Route path="/animais" element={<AnimaisLista />} />
    <Route path="/animais/novo" element={<AnimalForm />} />
    <Route path="/animais/editar/:id" element={<AnimalForm />} />

    {/* 🧑‍🤝‍🧑 Rotas de Adotantes */}
    <Route path="/adotantes" element={<AdotantesList />} />
    <Route path="/adotantes/novo" element={<AdotanteForm />} />
    <Route path="/adotantes/editar/:id" element={<AdotanteForm />} />

    {/* 🩺 Rotas de Consultas Veterinárias */}
    <Route path="/consultas" element={<ConsultasLista />} />
    <Route path="/consultas/novo" element={<ConsultaForm />} />
    <Route path="/consultas/editar/:id" element={<ConsultaForm />} />
        
        {/* 2. Rotas de ONGs (NOVAS) 🏥 */}
    <Route path="/ongs" element={<OngList />} />
    <Route path="/ongs/novo" element={<OngForm />} />
    <Route path="/ongs/editar/:id" element={<OngForm />} />
   </Route>
  </Routes>
 );
}

export default App;