import React, { useState, useEffect } from "react"
import { icons } from "react-icons/lib";
import Head from "../../componentes/Head"
import Menu from "../../componentes/Menu"
import { FiEdit, FiDelete, FiFilePlus, FiTrash } from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate, Link } from "react-router-dom";
export default function ListaEmpresas() {
    const navigate=useNavigate();
    const [dados, setDados] = useState([]);
    const [row,setRow] = useState([]);
    useEffect(() => {
        mostrardados();

    }, [])
    function editar(id) {
        navigate(`/editarempresas/${id}`)
        
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
                        localStorage.setItem('cad-empresas', JSON.stringify(dadosnovos));
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
        let lista = JSON.parse(localStorage.getItem("cad-empresas") || "[]");
        setDados(lista);
        setRow(lista.length)
    }
    return (
        <div className="dashboard-container">
            <Menu />
            <div className="principal">

                <Head title="Lista de Empresas" />
                <div className="button_new">
                    <a href="/cadastroempresas">
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
                        <th>Responsavel</th>
                        <th>Contato</th>
                    </tr>
                    {
                        dados.map((emp) => {
                            return (
                                <tr key={emp.toString()}>
                                    <td>{emp.id}</td>
                                    <td>{emp.nome}</td>
                                    <td>{emp.responsavel}</td>
                                    <td>{emp.contato}</td>
                                    <td>
                                        <FiEdit
                                            color="blue"
                                            size={18}
                                            cursor="pointer"
                                            onClick={(e) => editar(emp.id)}
                                        />
                                    </td>
                                    <td>
                                        <FiTrash
                                            color="red"
                                            size={18}
                                            cursor="pointer"
                                            onClick={(e) => excluir(emp.id)}
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