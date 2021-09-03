import Layout from "../../components/layout"
import Dia from "../../components/informes/dia"

export default function ModInformes() {
    return (
        <Layout>
            <div className="container mt-3 mb-2">
                <div className="row justify-content-center">
                    <div className="col-12 mb-2 text-center">
                        <h3>Informes</h3>
                    </div>
                    <div className="col-8 menuInformes mb-4">
                        <div className="row">
                            <div className="col-4 text-center"><button type="button" className="btn btn-primary btn-lg ">Informe del dia</button></div>
                            <div className="col-4 text-center"><button type="button" className="btn btn-primary btn-lg ">Informe por accion</button></div>
                            <div className="col-4 text-center"><button type="button" className="btn btn-primary btn-lg ">Informe por periodo</button></div>
                        </div>
                    </div>
                </div>
                <Dia/>
            </div>
        </Layout>
    )
}