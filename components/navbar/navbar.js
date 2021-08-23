import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/Fod.png" alt="Fundacion Omar Dengo" className="logo p-0 m-0" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link " aria-current="page" >Dashboard</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Usuarios</a>
                        </li>
                        <li className="nav-item ">
                            <Link href="/modCarga">
                                <a className="nav-link" href="#">Gestion de Labores</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#" >Generar informes</a>
                        </li>
                    </ul>
                    <div className="collapse navbar-collapse"></div>
                    <span style={{ color: "#00958F" }}>
                        <strong>Soporte-Cedi</strong>
                    </span>
                </div>
            </div>
        </nav>
    )
}
