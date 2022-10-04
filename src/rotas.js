import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastrousuario from "./pages/cadastroUsuario";
import Editarusuario from "./pages/editarUsuario";
import ListaUsuarios from "./pages/listaUsuarios";
import Dashboard from "./pages/dashboard";
import Logon from "./pages/logon";
import ListaEmpresas from "./pages/listaempresas";
import Editarempresas from "./pages/editarempresas";
import Cadastroempresas from "./pages/cadastroEmpresa";
import Cadastropatrimonio from "./pages/cadastroPatrimonio";
import ListaPatrimonio from "./pages/listapatrimonio";
import Editarpatrimonio from "./pages/editarpatrimonio";
import Cadastrosetores from "./pages/cadastroSetores";
import ListaSetores from "./pages/listaSetores";
import Editarsetores from "./pages/editarSetores";
import ListaLotacao from "./pages/listaLotacao";
import Cadastrolotacao from "./pages/cadastroLotacao";
import Editarlotacao from "./pages/editarLotacao"

export default function Rotas(){
    return(
<BrowserRouter>
        <Routes>
             <Route path="/" element= {<Logon/>} />
             <Route path="/listausuarios" element={<ListaUsuarios/>} />
             <Route path="/listaempresas" element={<ListaEmpresas/>} />
             <Route path="/listapatrimonio" element={<ListaPatrimonio/>} />
             <Route path="/listasetores" element={<ListaSetores/>} />
             <Route path="/listalotacao" element={<ListaLotacao/>} />
             <Route path="/cadastrousuario" element={<Cadastrousuario/>} />
             <Route path="/cadastrolotacao" element={<Cadastrolotacao/>} />
             <Route path="/editarusuario/:id" element={<Editarusuario/>} />
             <Route path="/editarpatrimonio/:id" element={<Editarpatrimonio/>} />
             <Route path="/editarsetores/:id" element={<Editarsetores/>} />
             <Route path="/editarlotacao/:id" element={<Editarlotacao/>} />
             
             
             <Route path="/editarempresas/:id" element={<Editarempresas/>} />
             <Route path="/cadastroempresas" element={<Cadastroempresas/>} />
             <Route path="/cadastropatrimonio" element={<Cadastropatrimonio/>} />
             <Route path="/cadastrosetores" element={<Cadastrosetores/>} />
             <Route path="/dashboard" element={<Dashboard/>} />
       </Routes>
</BrowserRouter>
    )
}