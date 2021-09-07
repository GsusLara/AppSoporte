import { useContext, useState } from 'react';
import { Context } from '../../store/appContext';
import Layout from "../../components/layout/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fas} from "@fortawesome/free-solid-svg-icons"
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas)

export default function ModAcciones() {
    
    const { store, actions } = useContext(Context);
    let todasAccionesVista = Object.keys(store.accionesCEDI);
    let todasAcciones = Object.values(store.accionesCEDI);
    const [numAccion, setnumAccion] = useState(store.accionesCEDI.AC208818);
    const [boleta, setboleta] = useState(-1);
    const handlerVerActivos = (e) => {
        let seleccion = e.target.value;
        setboleta(seleccion);
        setnumAccion(todasAcciones[seleccion]); 
    }
    return (
        <Layout>
            <div className="row mb-5">
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
                            <select className="form-select " aria-label="acciones" onChange={handlerVerActivos}>
                                <option value={-1}>Seleccione la accion a revisar</option>
                                {todasAccionesVista.map((item, index) => {
                                    return (
                                        <option value={index} key={index}>{item}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="col-4">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Buscar Activo" aria-label="Buscar Activo" aria-describedby="button-addon2" />
                                <button className="btn btn btn-primary" type="button" id="button-addon2"><FontAwesomeIcon icon="search"/></button>
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
            </div>
        </Layout>
    )
}