import Layout from "../../components/layout"
import { Line, Bar } from "react-chartjs-2"

export default function Dashboard() {
    return (
        <Layout>
            <div className="container">
                <h1>Panel Informativo</h1>
                <div className="row">
                    <div className="col-12 detalles mt-4 mb-3">
                        <div className="row">
                            <div className="col-5">
                                <h4 className="subtitulos">Resumen de acciones en producción</h4>

                            </div>
                            <div className="col-7">
                                <h4 className="subtitulos">Unidades de trabajo</h4>
                                <div className="row">
                                    <UnidTrabajo tecnico={"Jesus Lara"} estacion={"1"} estadoActual={"Revicion - 283110"} />
                                    <UnidTrabajo tecnico={"Diego Gamboa"} estacion={"2"} estadoActual={"Robos y H. - 283119"} />
                                    <UnidTrabajo tecnico={"Kenneth Navarrete"} estacion={"3"} estadoActual={"Reequipamiento - 283244"} />
                                    <UnidTrabajo tecnico={"Marvin Castro"} estacion={"4"} estadoActual={"Reequipamiento - 283244"} />
                                    <UnidTrabajo tecnico={"N/A"} estacion={"5"} estadoActual={"inactivo"} />
                                    <UnidTrabajo tecnico={"N/A"} estacion={"6"} estadoActual={"inactivo"} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 col-lg-6 px-5">
                        <h4 className="subtitulos mb-2">Registro mensual</h4>
                        <GraficoMes />
                    </div>
                    <div className="col-sm-12 col-lg-6 px-5">
                        <h4 className="subtitulos">Registro anual</h4>
                        <GraficoAño />
                    </div>
                </div>

            </div>
        </Layout>
    )
}
function UnidTrabajo(props) {
    const { tecnico, estacion, estadoActual } = props;
    return (
        <div className="card col-4 p-2">
            <i className="fas fa-globe" />
            <div className="card-body">
                <p className="mb-4">Estacion de trabajo:{" "}{estacion}</p>
                <p className="fs-30 mb-2">Tecnico:{tecnico}</p>
                <p>{estadoActual}</p>
            </div>
        </div>
    )
}
function GraficoAño() {
    return (
        <Line data={{
            labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "jul", "ago", "set", "oct", "nov", "dic"],
            datasets: [
                {
                    label: "Bueno",
                    data: [2260, 2825, 1634, 2029, 2687, 3102, 3410, 2496],
                    fill: true,
                    backgroundColor: "rgba(75,192,192,0.2)",
                    borderColor: "rgba(75,192,192,1)"
                },
                {
                    label: "Reciclaje",
                    data: [4536, 3825, 4635, 4751, 3954, 4176, 3996, 2881],
                    fill: false,
                    borderColor: "#742774"
                },
                {
                    label: "Proveedor",
                    data: [239, 115, 225, 321, 424, 146, 326, 137],
                    fill: false,
                    borderColor: "green"
                }
            ]
        }} />
    )
}

function GraficoMes() {
    return (
        <Bar
            data={{
                labels: ["Bueno", "Reciclaje", "Proveedor"],
                datasets: [
                    {
                        label: "revision de equipos",
                        data: [2260, 4536, 239],
                        backgroundColor: ["#5050b293", "#F3797E", "#7DA0FA",],
                        borderColor: ['#5050B2', 'red', 'blue'],
                        borderWidth: 1
                    }
                ]
            }}

        />
    )
}
