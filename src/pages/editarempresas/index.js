import React, { useState, useEffect } from 'react';
import Head from "../../componentes/Head"
import Menu from "../../componentes/Menu"
import { useNavigate, useParams } from "react-router-dom";

export default function Editarempresas() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [nome, setNome] = useState("");
    const [responsavel, setResponsavel] = useState("");
    const [contato, setContato] = useState("");
    // const [confirmar, setConfirmar] = useState("");
    const [msg, setMsg] = useState([]);
    const [dados, setDados] = useState([]);


    // function validaremail() {
    //     var re = /\S+@\S+\.\S+/;
    //     return re.test(email);

    // }
    useEffect(() => {
        mostrardados();

    }, [])
    function mostrardados() {
        let lista = JSON.parse(localStorage.getItem("cad-empresas") || "[]");
        setDados(lista);
        let emp = lista.filter(item => item.id == id);
        setNome(emp[0].nome);
        setResponsavel(emp[0].responsavel);
        setContato(emp[0].contato);
        // setConfirmar(usu[0].senha);

    }
    // function verificarduplicidade(email) {
    //     let dadosnovos = [];
    //     dadosnovos = dados.filter(item => item.email == email);
    //     if (dadosnovos.length > 0) {
    //         return true
    //     }
    //     return false;
    // }
    function salvardados(e) {
        e.preventDefault();
        let i = 0;
        let errorMsg = [];
        // // if (validaremail()) {
        // //     errorMsg.push('por favor! coloque um e-mail valido!\n');
        // //     i++;
        // }
        if (nome.length < 3) {
            errorMsg.push("campo nome tem menos de 3 caracteres\n");
            i++;
        }
        // if (verificarduplicidade(email) == true) {
        //     errorMsg.push("O e-mail fornecido ja esta cadastrado!\n");
        //     i++;
        // }
        // if (email.length == 0) {
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
        // else if (senha !== confirmar) {
        //     errorMsg.push("Senha e confirmação não conferem\n");
        //     i++;
        // }
        if (i == 0) {

            setMsg("");
            let dadosnovos=[];
            let lista=JSON.parse(localStorage.getItem("cad-empresas") || "[]");
            dadosnovos=lista.map((function(item){
                if (item.id==id){
                    return {
                        id:id,
                        nome:nome,
                        responsavel:responsavel,
                        contato:contato

                    }
                 } else {
                    return {
                        id:item.id,
                        nome:item.nome,
                        responsavel:item.responsavel,
                        contato:item.contato

                    }
                }


            }));
            // {
            //     id: Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
            //     nome: nome,
            //     email: email,
            //     senha: senha
            // }

            localStorage.setItem("cad-empresas", JSON.stringify(dadosnovos));
            alert("Dados Salvos com Sucesso!");
            navigate("/listaempresas");

        } else {
            setMsg(errorMsg);
        }
    }
    return (
        <div className="dashboard-container">
            <Menu />
            <div className="principal">

                <Head title="Editar Empresa" />
                <section className="form-cadastro">
                    <form onSubmit={salvardados}>
                        <label>Nome</label>
                        <input placeholder="Nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)}

                        />
                        <label>Responsavel</label>
                        <input placeholder="responsavel"
                            type="text"
                            value={responsavel}
                            onChange={e => setResponsavel(e.target.value)}

                        />
                        <label>Contato</label>
                        <input placeholder="contato"
                            type="password"
                            value={contato}
                            onChange={e => setContato(e.target.value)}
                        />
                        {/* <label>confirma Senha</label>
                        <input placeholder=""
                            type="password"
                            value={confirmar}
                            onChange={e => setConfirmar(e.target.value)}

                        /> */}
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
