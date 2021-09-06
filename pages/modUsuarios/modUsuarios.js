import Layout from "../../components/layout"

export default function modUsuarios() {
    return (
        <Layout>
            <div className="row">
                <div className="col-12 text-center"><h3 className="mb-5">Gestion de usuarios</h3></div>

                <div className="col-4 text-left p-5">
                    <h5 className="mb-3">Usuarios del sistema</h5>
                    <ul className="list-group list-group-flush ">
                        <li className="list-group-item">Jesus Lara <br />jesus.lara@fod.ac.cr</li>
                        <li className="list-group-item">Danny Mondragon <br />danny.mondragon@fod.ac.cr</li>
                        <li className="list-group-item">Marvin Castro <br />marvin.castro@fod.ac.cr</li>
                        <li className="list-group-item">Diego Gamboa<br />diego.gamboa@fod.ac.cr</li>
                        <li className="list-group-item">Keneth Navarrete <br />kenneth.navarrete@fod.ac.cr</li>
                        <li className="list-group-item">Armando Cespedes<br />armando.cespedes@fod.ac.cr</li>
                        <li className="list-group-item">Adrian Obando<br />adrian.obando@fod.ac.cr</li>
                        <li className="list-group-item">Alvaro Jaen<br />alvaro.jaen@fod.ac.cr</li>
                        <li className="list-group-item">Cessar Solis<br />cessar.solis@fod.ac.cr</li>
                    </ul>
                </div>
                <div className="col-4 text-left p-5">
                    <h5 className="mb-3">Usuarios en unidades</h5>
                    <h6>Carrito 1</h6>
                    <select className="form-select form-select" aria-label="seleccione usuario de carrito">
                        <option defaultValue>unidad inhabilitada</option>
                    </select>
                    <h6>Carrito 2</h6>
                    <select className="form-select form-select" aria-label="seleccione usuario de carrito">
                        <option defaultValue>unidad inhabilitada</option>
                    </select>
                    <h6>Carrito 3</h6>
                    <select className="form-select form-select" aria-label="seleccione usuario de carrito">
                        <option defaultValue>unidad inhabilitada</option>
                    </select>
                    <h6>Carrito 4</h6>
                    <select className="form-select form-select" aria-label="seleccione usuario de carrito">
                        <option defaultValue>unidad inhabilitada</option>
                    </select>
                    <h6>Carrito 5</h6>
                    <select className="form-select form-select" aria-label="seleccione usuario de carrito">
                        <option defaultValue>unidad inhabilitada</option>
                    </select>
                    <h6>Carrito 6</h6>
                    <select className="form-select form-select" aria-label="seleccione usuario de carrito">
                        <option defaultValue>unidad inhabilitada</option>
                    </select>
                </div>
                <div className="col-4 text-left p-5">
                    <h5 className="mb-5">Usuarios  de supervición</h5>
                    <select className="form-select form-select" aria-label="seleccione usuario de carrito">
                        <option defaultValue>Sin asignar</option>
                    </select>
                    <select className="form-select form-select mt-3" aria-label="seleccione usuario de carrito">
                        <option defaultValue>Sin asignar</option>
                    </select>
                </div>
            </div>
        </Layout>
    )
}
