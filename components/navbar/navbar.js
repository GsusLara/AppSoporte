import { useEffect, useState } from "react";
import Link from "next/link";
import router from 'next/router'
import Image from 'next/image'
import Fodlogo from "../../public/Fod.png"


export default function Navbar() {
    const [tipoAdmin, settipoAdmin] = useState();
    const [tipoTecnico, settipoTecnico] = useState();
    const limpiar = () => {
        localStorage.setItem("usuario", "");
        router.push("/");
    }
    useEffect(() => {
        if (localStorage.getItem("usuario")==="TECNICO"){
            settipoAdmin("d-none");
        }else if(localStorage.getItem("usuario") === "ADMINISTRADOR"){
            settipoTecnico("d-none")
        }else{
            settipoTecnico("d-none");
            settipoAdmin("d-none");
        }
    }, [])
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <Image src={Fodlogo} alt="Fundacion Omar Dengo" className="p-1 mr-1 navbar-brand" width={50} height={50} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={`nav-item ${tipoAdmin}`}>
                            <Link href="/dashboard">
                                <a className="nav-link" aria-current="page" >Dashboard</a>
                            </Link>
                        </li>
                        <li className={`nav-item ${tipoAdmin}`}>
                            <Link href="/modAcciones">
                                <a className="nav-link" >Gestion de Acciones</a>
                            </Link >
                        </li>
                        <li className={`nav-item ${tipoAdmin}`}>
                            <Link href="/modCarga">
                                <a className="nav-link" >Cargas de Trabajo</a>
                            </Link>
                        </li>
                        <li className={`nav-item ${tipoAdmin}`}>
                            <Link href="/modInformes">
                                <a className="nav-link ">Generar Informes</a>
                            </Link>
                        </li>
                        <li className={`nav-item ${tipoAdmin}`}>
                            <Link href="/modUsuarios">
                                <a className="nav-link">Usuarios</a>
                            </Link>
                        </li>
                        <li className={`nav-item ${tipoTecnico} `}>
                            <Link href="/panelTecnico">
                                <a className="nav-link">Dashboard</a>
                            </Link>
                        </li>
                        <li className={`nav-item ${tipoTecnico}`}>
                            <Link href="/asignaciones">
                                <a className="nav-link">Asignaciones</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="collapse navbar-collapse" />
                    <a className="nav-link salir" onClick={() => limpiar()}>Cerrar Sesi??n</a>
                </div>
            </div>
        </nav>
    )
}
