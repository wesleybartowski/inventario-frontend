import React, { useState, useEffect } from "react"
import { icons } from "react-icons/lib";
import Head from "../../componentes/Head"
import Menu from "../../componentes/Menu"
import { FiEdit, FiDelete, FiFilePlus, FiTrash } from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate, Link } from "react-router-dom";
export default function ListaSetores() {
    const navigate=useNavigate();
    const [dados, setDados] = useState([]);
    const [row,setRow] = useState([]);
    useEffect(() => {
        mostrardados();

    }, [])
    function editar(id) {
        navigate(`/editarsetores/${id}`)
        
    }
    // function excluir(){
    //     alert ("excluir");
    // }
    function excluir(id) {
        confirmAlert({
            title: 'excluir cadastro',
            message: 'Deseja realmente excluir?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => {
                        let dadosnovos = [];
                        dadosnovos = dados.filter(item => item.id != id);
                        setDados(dadosnovos);
                        localStorage.setItem('cad-setores', JSON.stringify(dadosnovos));
                        setRow(dadosnovos.length)
                    }
                },
                {
                    label: 'Não',
                    onClick: () => alert('Click No')
                }
            ]
        });

    };
    function mostrardados() {
        let lista = JSON.parse(localStorage.getItem("cad-setores") || "[]");
        setDados(lista);
        setRow(lista.length)
    }
    return (
        <div className="dashboard-container">
            <Menu />
            <div className="principal">

                <Head title="Lista de Setores" />
                <div className="button_new">
                    <a href="/cadastrosetores">
                        <FiFilePlus
                            size={24}
                            color="green"
                            cursor="pointer"
                        />

                    </a>

                </div>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        {/* <th>Data Aquisição</th> */}
                    </tr>
                    {
                        dados.map((set) => {
                            return (
                                <tr key={set.toString()}>
                                    <td>{set.id}</td>
                                    <td>{set.nome}</td>
                                    {/* <td>{set.dataaquisicao}</td> */}
                                    <td>
                                        <FiEdit
                                            color="blue"
                                            size={18}
                                            cursor="pointer"
                                            onClick={(e) => editar(set.id)}
                                        />
                                    </td>
                                    <td>
                                        <FiTrash
                                            color="red"
                                            size={18}
                                            cursor="pointer"
                                            onClick={(e) => excluir(set.id)}
                                        />
                                    </td>

                                </tr>
                            )

                        })


                    }
                    <tr>
                        <td colSpan={3} style={{textAlign:"right",fontWeight:"bold"}}>Total</td>
                        <td colSpan={2}style={{fontWeight:"bold"}}>{row}</td>
                    </tr>
                </table>

            </div>
        </div >

    )
}