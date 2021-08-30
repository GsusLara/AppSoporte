
import Layout from "../../components/layout/layout"



export default function ModAcciones() {

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <h1 className="mt-3 mb-5 mx-auto">Gestion de Acciones</h1>
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



                    <div className="col-12 mb-4 text-center">
                        <h3>Asignacion de cargas de trabajo</h3>
                    </div>
                    <div className="col-3">
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option defaultValue>Accion</option>
                            <option value="1">12325</option>
                            <option value="2">12326</option>
                            <option value="3">12327</option>
                        </select>
                        <button type="button" className="btn btn-success mt-3">Asignar</button>
                    </div>
                    <div className="col-3">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Revision
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                            <label className="form-check-label" htmlFor="exampleRadios2">
                                Reequipamiento
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                            <label className="form-check-label" htmlFor="exampleRadios3">
                                Robos y hurtos
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                            <label className="form-check-label" htmlFor="exampleRadios3">
                                Solicitud especial
                            </label>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">C-1 Diego Gamboa</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">C-2 Kennet Navarrete</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">C-3 Marvin Castro</label>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">C-4 Armando Cespedes</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" disabled />
                            <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">C-5 -Inhabilitado-</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" disabled />
                            <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">C-6 -Inhabilitado-</label>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-4 text-center">
                    <h3>Detalle de Produccion</h3>
                </div>
                <div className="row mb-2">
                    <div className="col-4 m-0">
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option defaultValue>Estado</option>
                            <option value="1">Activas</option>
                            <option value="2">pendientes</option>
                        </select>
                    </div>
                    <div className="col-4 m-0">
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option defaultValue>Accion</option>
                            <option value="1">0-9</option>
                            <option value="2">9-0</option>
                            <option value="1">No importa</option>
                        </select>
                    </div>
                    <div className="col-4 m-0">
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option defaultValue>Tecnico</option>
                            <option value="1">C-1</option>
                            <option value="1">C-2</option>
                            <option value="1">C-3</option>
                            <option value="1">C-4</option>
                            <option value="1">C-5</option>
                            <option value="1">C-6</option>
                            <option value="1">Todos</option>
                        </select>
                    </div>
                </div>
                <div className="col-12 ">
                    <Detalle estadoAccion="alert-success" numeroAccion="278891" trabajo="Revision" carritoAsignado="C-3, C-4" />
                    <Detalle estadoAccion="alert-success" numeroAccion="278892" trabajo="Revision" carritoAsignado="C-1" />
                    <Detalle estadoAccion="alert-success" numeroAccion="278893" trabajo="Reequipamiento" carritoAsignado="C-2" />
                    <Detalle estadoAccion="alert-success" numeroAccion="278895" trabajo="Revision" carritoAsignado="C-1" />
                    <Detalle estadoAccion="alert-dark" numeroAccion="278896" trabajo="Revision" carritoAsignado="C-3" />
                    <Detalle estadoAccion="alert-dark" numeroAccion="278900" trabajo="pendiente" carritoAsignado="pendiente" />
                    <Detalle estadoAccion="alert-dark" numeroAccion="278900" trabajo="pendiente" carritoAsignado="pendiente" />
                    <Detalle estadoAccion="alert-dark" numeroAccion="278900" trabajo="pendiente" carritoAsignado="pendiente" />
                    <Detalle estadoAccion="alert-dark" numeroAccion="278900" trabajo="pendiente" carritoAsignado="pendiente" />
                </div>
            </div>
        </Layout>
    )
}
function Detalle(props) {
    const { estadoAccion, numeroAccion, trabajo, carritoAsignado } = props;
    return (
        <div className="col-12">
            <div className={'alert m-0 p-2' + estadoAccion} role="alert">
                <div className="row">
                    <div className="col-4">{numeroAccion}</div>
                    <div className="col-4">{trabajo}</div>
                    <div className="col-4">{carritoAsignado}</div>
                </div>
            </div>
        </div>
    )
}