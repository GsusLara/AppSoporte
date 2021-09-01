import { useContext } from 'react';
import { Context } from '../../store/appContext';
import Layout from "../../components/layout/layout"

export default function ModAcciones() {
    const { store, actions } = useContext(Context);
    let todasAcciones = Object.keys(store.accionesCEDI);
    return (
        <Layout>
            <div className="row  mb-5">
                <h1 className="mt-3 mb-2 mx-auto">Gestion de Acciones</h1>
                <div className="col-12 text-center">
                    <h3 className="mb-4">Cargar Acciones al Sistema</h3>
                    <div className="row justify-content-center">
                        <div className="col-4 mb-4">
                            <div className=" input-group">
                                <input type="file" className="form-control" multiple />
                                <button className="btn btn-outline-primary" type="button" id="button-addon2">Cargar</button>
                            </div>
                            <p className="textoSecundario">Seleccione uno o más archivos de tipo xls</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 text-center">
                    <h3 className="mb-4">Revision de Activos por Acción</h3>
                    <div className="row justify-content-center">
                        <div className="col-4 ">
                            <select className="form-select " aria-label=".form-select-sm example">
                                <option defaultValue>Seleccione la accion a revisar</option>
                                {todasAcciones.map((item, index) => {
                                    return (
                                        <ItemAccion identificador={item} key={index} />
                                    )
                                })}
                            </select>
                        </div>
                        <div className="col-4">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Buscar Activo" aria-label="Buscar Activo" aria-describedby="button-addon2" />
                                <button className="btn btn btn-primary" type="button" id="button-addon2"><i className="fas fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Placa</th>
                                    <th scope="col">Serie</th>
                                    <th scope="col">Descripcion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {store.accionesCEDI.AC208818.map((item, index) => {
                                    return (
                                        <TablaAccion key={index} placa={item.__EMPTY_7} serie={item.__EMPTY_8} descripcion={item.__EMPTY_11} />
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
function ItemAccion(props) {
    const { identificador } = props
    return (
        <option>{identificador}</option>
    )
}
function TablaAccion(props) {
    const { placa, serie, descripcion } = props
    return (
        <tr>
            <td>{placa}</td>
            <td>{serie}</td>
            <td>{descripcion}</td>
        </tr>
    )
}