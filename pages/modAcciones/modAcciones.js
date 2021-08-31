
import Layout from "../../components/layout/layout"



export default function ModAcciones() {
    const accionPendiente = "alert m-0 p-2 alert-dark";
    const accionActiva = "alert m-0 p-2 alert-success";

    return (
        <Layout>
            <div className="container mb-5">
                <div className="row">
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
                        <div class="row justify-content-center">
                            <div className="col-7">
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
                        </div>
                    </div>
                    <div className="col-3">
                        <Carritos unidad="C-1" usuario="Diego Gamboa" />
                        <Carritos unidad="C-2" usuario="Kennet Navarrete" />
                        <Carritos unidad="C-3" usuario="Marvin Castro" />
                    </div>
                    <div className="col-3">
                        <Carritos unidad="C-4" usuario="Armando Cespedes" />
                        <Carritos unidad="C-5" usuario="Inhabilitado" />
                        <Carritos unidad="C-6" usuario="Inhabilitado" />
                    </div>
                    <div className="col-12 mt-4 text-center">
                        <h3>Detalle de Produccion</h3>
                    </div>
                    <div className="row mb-2">
                        <div className="col-4 m-0">
                            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option defaultValue>En Orden de Acción</option>
                                <option value="1">Activas</option>
                                <option value="2">pendientes</option>
                            </select>
                        </div>
                        <div className="col-4 m-0">
                            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option defaultValue>Todas las opciones</option>
                                <option value="1">Reequipámiento</option>
                                <option value="2">Revisión</option>
                                <option value="3">Robos y Hurtos</option>
                                <option value="4">Solicitud Especial</option>
                            </select>
                        </div>
                        <div className="col-4 m-0">
                            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option defaultValue>Todos los tecnicos</option>
                                <option value="1">C-1</option>
                                <option value="2">C-2</option>
                                <option value="3">C-3</option>
                                <option value="4">C-4</option>
                                <option value="5">C-5</option>
                                <option value="6">C-6</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 ">
                        <Detalle estadoAccion={accionActiva} numeroAccion="278891" trabajo="Revision" carritoAsignado="C-3, C-4" />
                        <Detalle estadoAccion={accionActiva} numeroAccion="278892" trabajo="Revision" carritoAsignado="C-1" />
                        <Detalle estadoAccion={accionActiva} numeroAccion="278893" trabajo="Reequipamiento" carritoAsignado="C-2" />
                        <Detalle estadoAccion={accionActiva} numeroAccion="278895" trabajo="Revision" carritoAsignado="C-1" />
                        <Detalle estadoAccion={accionPendiente} numeroAccion="278896" trabajo="Revision" carritoAsignado="C-3" />
                        <Detalle estadoAccion={accionPendiente} numeroAccion="278900" trabajo="pendiente" carritoAsignado="pendiente" />
                        <Detalle estadoAccion={accionPendiente} numeroAccion="278900" trabajo="pendiente" carritoAsignado="pendiente" />
                        <Detalle estadoAccion={accionPendiente} numeroAccion="278900" trabajo="pendiente" carritoAsignado="pendiente" />
                        <Detalle estadoAccion={accionPendiente} numeroAccion="278900" trabajo="pendiente" carritoAsignado="pendiente" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
function Carritos(props) {
    const { unidad, usuario } = props
    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" />
            <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">{unidad} {usuario}</label>
        </div>
    )
}

function Detalle(props) {
    const { estadoAccion, numeroAccion, trabajo, carritoAsignado } = props;
    return (
        <div className="col-12">
            <div className={estadoAccion} role="alert">
                <div className="row">
                    <div className="col-4">{numeroAccion}</div>
                    <div className="col-4">{trabajo}</div>
                    <div className="col-4">{carritoAsignado}</div>
                </div>
            </div>
        </div>
    )
}
