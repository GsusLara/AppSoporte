import {useContext} from 'react';
import { Context } from '../../store/appContext';
import Layout from "../../components/layout/layout"

export default function ModAcciones() {
    const { store, actions } = useContext(Context);
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
                    <h1>{store.saludo}</h1>
                    <button onClick={()=>actions.setSaludo("bien")}>cambiar</button>
                </div>
            </div>
        </Layout>
    )
}
