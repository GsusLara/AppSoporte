import { useContext } from "react"
import { Context } from '../../store/appContext'
import Layout from "../../components/layout"

export default function modUsuarios() {
    const { store, actions } = useContext(Context);

    return (
        <Layout>
            <div className="row">
                <div className="col-12 text-center">
                    <h3>Gestion de usuarios</h3>
                </div>
                <div className="col-4 text-left pt-2 p-5 ">
                    <h5 className="mb-3">Usuarios del sistema</h5>
                    <div className="listado">
                        <ul className="list-group list-group-flush ">
                            {store.usuariosCEDI.map((item, index) => {
                                return (
                                    <li className="list-group-item" key={index}>{item.nombre} <br />{item.correo}</li>
                                )
                            })
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-4 text-left pt-2 p-5">
                    <h5 className="mb-3">Usuarios en unidades</h5>
                    <h6>carrito 1</h6><CarritosUsuarios/>
                    <h6>carrito 2</h6><CarritosUsuarios/>
                    <h6>carrito 3</h6><CarritosUsuarios/>
                    <h6>carrito 4</h6><CarritosUsuarios/>
                    <h6>carrito 5</h6><CarritosUsuarios/>
                    <h6>carrito 6</h6><CarritosUsuarios/>
                </div>
                <div className="col-4 text-left pt-2 p-5">
                    <h5 className="mb-5">Usuarios  de supervición</h5>
                    <div className="m-3"><CarritosUsuarios/></div>
                    <div className="m-3"><CarritosUsuarios/></div>
                    <div className="mt-5 m-3">
                    <button type="button" className="btn btn-success">Guardar Cambios</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
const CarritosUsuarios = () => {
    const { store} = useContext(Context);
    return (
        <>
            <select className="form-select form-select" aria-label="seleccione usuario de carrito">
                <option defaultValue>Seleccione un usuario</option>
                {store.usuariosCEDI.map((item, index) => {
                    return (
                        <option key={index}>{item.nombre}</option>
                    )
                })
                }
            </select>
        </>
    )
}