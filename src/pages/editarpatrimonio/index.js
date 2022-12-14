import React, { useState, useEffect } from 'react';
import Head from "../../componentes/Head"
import Menu from "../../componentes/Menu"
import { useNavigate, useParams } from "react-router-dom";

export default function Editarpatrimonio() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [nome, setNome] = useState("");
    const [dataaquisicao, setDataAquisicao] = useState("");
    // const [senha, setSenha] = useState("");
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
        let lista = JSON.parse(localStorage.getItem("cad-patrimonio") || "[]");
        setDados(lista);
        let pat = lista.filter(item => item.id == id);
        setNome(pat[0].nome);
        setDataAquisicao(pat[0].dataaquisicao);
        // setSenha(pat[0].senha);
        // setConfirmar(pat[0].senha);

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
        //     errorMsg.push("Senha e confirma????o n??o conferem\n");
        //     i++;
        // }
        if (i == 0) {

            setMsg("");
            let dadosnovos=[];
            let lista=JSON.parse(localStorage.getItem("cad-patrimonio") || "[]");
            dadosnovos=lista.map((function(item){
                if (item.id==id){
                    return {
                        id:id,
                        nome:nome,
                        dataaquisicao:dataaquisicao,
                        // senha:senha

                    }
                 } else {
                    return {
                        id:item.id,
                        nome:item.nome,
                        dataaquisicao:item.dataaquisicao,
                        // senha:item.senha

                    }
                }


            }));
            // {
            //     id: Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
            //     nome: nome,
            //     email: email,
            //     senha: senha
            // }

            localStorage.setItem("cad-patrimonio", JSON.stringify(dadosnovos));
            alert("Dados Salvos com Sucesso!");
            navigate("/listapatrimonio");

        } else {
            setMsg(errorMsg);
        }
    }
    return (
        <div className="dashboard-container">
            <Menu />
            <div className="principal">

                <Head title="Editar Patrimonio" />
                <section className="form-cadastro">
                    <form onSubmit={salvardados}>
                        <label>Nome</label>
                        <input placeholder="Nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)}

                        />
                        <label>Data Aquisi????o</label>
                        <input placeholder="Data Aquisi????o"
                            type="date"
                            value={dataaquisicao}
                            onChange={e => setDataAquisicao(e.target.value)}

                        />
                        {/* <label>Senha</label>
                        <input placeholder=""
                            type="password"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                        <label>confirma Senha</label>
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
