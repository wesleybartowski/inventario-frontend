import React, { useState, useEffect } from 'react';
import Head from "../../componentes/Head"
import Menu from "../../componentes/Menu"
import { useNavigate } from "react-router-dom";

export default function Cadastrolotacao() {
    const navigate =useNavigate();
    const [data_lotacao, setData_Lotacao] = useState("");
    const [idusu,seTIdusu] = useState("");
    const [idemp,seTEmp] = useState("");
    const [idset,seTSet] = useState("");
    const [idpat,seTPat] = useState("");
    const [msg, setMsg] = useState([]);
    const [dados,setDados] = useState([]);
    const [usuarios,setUsuarios] = useState([]);
    const [empresa,setEmpresa] = useState([]);
    const [setor,setSetor] = useState([]);
    const [patrimonio,setPatrimonio] = useState([]);
    

    useEffect(() => {
        mostrardados();

    }, [])
    function mostrardados() {
        let lista = JSON.parse(localStorage.getItem("cad-lotacao") || "[]");
        setDados(lista);
        let lista = JSON.parse(localStorage.getItem("cad-usuarios") || "[]");
        setDados(lista);
        let lista = JSON.parse(localStorage.getItem("cad-empresas") || "[]");
        setDados(lista);
        let lista = JSON.parse(localStorage.getItem("cad-patrimonios") || "[]");
        setDados(lista);
        let lista = JSON.parse(localStorage.getItem("cad-setores") || "[]");
        setDados(lista);
    }

    function salvardados(e) {
        e.preventDefault();
        let i = 0;
        let errorMsg = [];
        // if (validaremail() == false) {
        //     errorMsg.push('por favor! coloque um e-mail valido!\n');
        //     i++;
        // }
        if (data_lotacao.length < 3) {
            errorMsg.push("campo nome tem menos de 3 caracteres\n");
            i++;
        }
        // if(verificarduplicidade(email)==true){
        //     errorMsg.push("O e-mail fornecido ja esta cadastrado!\n");
        //     i++;
        // }
        //  if (email.length==0) {
        //     errorMsg.push("Campo de e-mail esta vazio\n");
        //     i++;
        // }
        // else if (!validaremail()) {
        //     errorMsg.push("Por favor! coloque um e-mail valido!\n")
        // }
        // if (senha.length < 3) {
        //     errorMsg.push("campo senha tem menos de 3 caracteres\n");
        //     i++;
        // }
        // else if(senha!==confirmar){
        //     errorMsg.push("Senha e confirmação não conferem\n");
        //     i++;
        // }    
        if (i == 0) {
           
            setMsg("");
            let lista = JSON.parse(localStorage.getItem("cad-lotacao")||"[]");
            lista.push(
                {
                 id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
                 data_lotacao:data_lotacao,
                //  dataaquisicao:dataaquisicao,
                 
                }
            )
            localStorage.setItem("cad-lotacao",JSON.stringify(lista));
            alert("Dados Salvos com Sucesso!");
            navigate("/listalotacao");

        } else {
            setMsg(errorMsg);
        }
    }
    return (
        <div className="dashboard-container">
            <Menu />
            <div className="principal">

                <Head title="Cadastro de Lotação " />
                <section className="form-cadastro">
                    <form onSubmit={salvardados}>
                        <label>Usuarios</label>
                        <select
                        onChange={(e) => seTIdusu(e.target.value)}
                        >
                        {
                        usuarios.map((usu))=>{
                            return(
                                <option value={usu.id}> {usu.nome} </option>
                            )
                        

                        }
                        </select>
                           
                        />
                       
                        <button className="button_save" type="submit">
                            Salvar
                        </button>
                        <pre>{msg}</pre>

                    </form>
                </section>
            </div>
        </div>

    )
}
