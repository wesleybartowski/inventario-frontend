import {FiUser, FiTruck, FiFcViewDetails, FiActivity} from "react-icons/fi";
import {GiReceiveMoney} from "react-icons/gi";
import { AiOutlineApartment } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";


export default function Menu(){
    return(
        <div className="menu">
        <p>Menu</p>
        <a href="/listausuarios"><FiUser/> Usuario</a>
        <a href="/listaempresas"><FiTruck/> Empresas</a>
        <a href="/listapatrimonio"><GiReceiveMoney/> Patrimonio</a>
        <a href="/listasetores"><AiOutlineApartment/> Setor</a>
        <a href="/listalotacao"><IoLocationOutline/> Lotação</a>
        
        </div>
    )
}
