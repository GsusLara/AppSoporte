import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img src="/Fod.png" alt="Fundacion Omar Dengo" className="logo p-1 mr-1 navbar-brand" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/dashboard">
                                <a className="nav-link " aria-current="page" >Dashboard</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/modAcciones">
                                <a className="nav-link" >Gestion de Acciones</a>
                            </Link >
                        </li>
                        <li className="nav-item ">
                            <Link href="/modCarga">
                                <a className="nav-link" >Cargas de Trabajo</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/modInformes"> 
                            <a className="nav-link ">Generar Informes</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#" >Usuarios</a>
                        </li>
                    </ul>
                    <div className="collapse navbar-collapse" />
                    <Link href="/">
                        <a className="nav-link salir" >Cerrar Sesión</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
