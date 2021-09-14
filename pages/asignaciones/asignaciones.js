import Layout from "../../components/layout/layout"
import { useContext, useState } from 'react';
import { Context } from '../../store/appContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from "@fortawesome/free-solid-svg-icons"
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas)

export default function Asignaciones() {
    const { store, actions } = useContext(Context);
    const [boleta, setboleta] = useState(-1);
    const [numAccion, setnumAccion] = useState(store.accionesCEDI.AC208818);
    let todasAcciones = Object.values(store.accionesCEDI);
    let todasAccionesVista = Object.keys(store.accionesCEDI);
    const handlerVerActivos = (e) => {
        let seleccion = e.target.value;
        setboleta(seleccion);
        setnumAccion(todasAcciones[seleccion]);
    }
    return (
        <Layout>
            <div className="row">
                <div className="col-12 text-center mb-4">
                    <h3>Gestión de labores</h3>
                </div>
                <div className="col-4 text-center">
                    <div className="mb-3">
                        <h5><strong>Listado de acciones</strong></h5>
                    </div>
                    <select className="form-select selector" aria-label="acciones" onChange={handlerVerActivos}>
                        <option value={-1}>Seleccione la accion a revisar</option>
                        {todasAccionesVista.map((item, index) => {
                            return (
                                <option value={index} key={index}>{item}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="col-4 text-center">
                    <div className="mb-3">
                        <h5><strong>Inventario</strong></h5>
                    </div>
                    <div className="input-group selector">
                        <input type="text" className="form-control" placeholder="Placa del equipo" aria-label="Buscar Activo" aria-describedby="button-addon2" />
                        <button className="btn btn btn-primary" type="button" id="button-addon2"><FontAwesomeIcon icon="check" /></button>
                    </div>
                    <div className="mt-3">
                        <RadioOption condicion="Buen estado" />
                        <RadioOption condicion="Proveedor" />
                        <RadioOption condicion="Reciclaje" />
                    </div>
                </div>
                <div className="col-4 ">
                    <div className="row">
                        <div className=" col-12 text-center mb-2">
                            <h5> <strong>Tipo de Daño</strong></h5>
                        </div>
                        <div className="col-4">
                            <Daños etiqueta="Pantalla" />
                            <Daños etiqueta="Teclado" />
                            <Daños etiqueta="Touchpad" />
                            <Daños etiqueta="Boton ON" />
                            <Daños etiqueta="Botones mouse" />
                        </div>
                        <div className="col-4">
                            <Daños etiqueta="Memoria Ram" />
                            <Daños etiqueta="Fan" />
                            <Daños etiqueta="Flex" />
                            <Daños etiqueta="Disco Duro" />
                            <Daños etiqueta="Tarjeta Madre" />
                        </div>
                        <div className="col-4">
                            <Daños etiqueta="Camara" />
                            <Daños etiqueta="Tarjeta IO" />
                            <Daños etiqueta="Jack de carga" />
                            <Daños etiqueta="Fisico" />
                            <Daños etiqueta="otros" />
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <div className="text-center mb-3">
                        <h5><strong>Revision de equipos</strong></h5>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Placa</th>
                                <th scope="col">Serie</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Daño</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                boleta == -1 ? <tr>
                                    <td></td>
                                    <td ></td>
                                    <td ></td>
                                </tr> :
                                    numAccion.map((item, index) => {
                                        return (
                                            <tr key={"linea" + index}>
                                                <td key={"placa" + index}>{item.__EMPTY_7}</td>
                                                <td key={"serie" + index}>{item.__EMPTY_8}</td>
                                                <td key={"descripcion" + index}>{item.__EMPTY_11}</td>
                                            </tr>
                                        )
                                    })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}
const RadioOption = (props) => {
    const { condicion } = props;
    return (
        <div className="form-check-inline">
            <input className="form-check-input" type="radio" name="flexRadioDefault" />
            <label className="form-check-label px-2">
                {condicion}
            </label>
        </div>
    )
}
const Daños = (props) => {
    const { etiqueta } = props;
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" />
            <label className="form-check-label">
                {etiqueta}
            </label>
        </div>
    )
}