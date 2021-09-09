import Layout from "../../components/layout/layout"
export default function Asignaciones() {
    return (
        <Layout>
        <div className="row">
            <div className="col-12 text-center mb-4">
                <h3>Gestión de labores</h3>
            </div>
            <div className="col-6 text-center">
                <h5>acciones asignadas</h5>
            </div>
            <div className="col-6 text-center">
                <h5>Seleccione la accion a trabajar</h5>
                <select name="acciones" id="acciones">
                    
                </select>
                <button>ingresar</button>
            </div>
        </div>
    </Layout>
    )
}
