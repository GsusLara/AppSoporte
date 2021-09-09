import Layout from "../../components/layout"
import { Line} from "react-chartjs-2"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fas} from "@fortawesome/free-solid-svg-icons"
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas)

export default function Dashboard() {
    
    return (
        <Layout>
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Panel Informativo</h1>
                    </div>
                    <div className="col-12 detalles mt-4 mb-1">
                        <div className="row">
                            <div className="col-12 col-lg-5">
                                <h4 className="subtitulos">Conteo diario de activos revisados</h4>
                                <div className="card mt-3  py-0 cardDia">
                                    <div className="card-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Estación</th>
                                                    <th scope="col">Bueno</th>
                                                    <th scope="col">Reciclaje</th>
                                                    <th scope="col">Proveedor</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <TablaData hoyEstacion="1" hoyBueno="46" hoyMalo="72" hoyProveedor="0" />
                                                <TablaData hoyEstacion="2" hoyBueno="51" hoyMalo="65" hoyProveedor="6" />
                                                <TablaData hoyEstacion="3" hoyBueno="38" hoyMalo="87" hoyProveedor="4" />
                                                <TablaData hoyEstacion="4" hoyBueno="41" hoyMalo="79" hoyProveedor="0" />
                                                <TablaData hoyEstacion="5" hoyBueno="0" hoyMalo="0" hoyProveedor="0" />
                                                <TablaData hoyEstacion="6" hoyBueno="0" hoyMalo="0" hoyProveedor="0" />
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-7">
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
                    <div className="col-12 col-lg-5">
                        <h4 className="subtitulos">Listado de acciones del día</h4>
                        <div className="text-center mt-5 px-5">
                            <ul className="list-group list-group-flush">
                                <DataAcciones numero="123110" trabajo="Reequipamiento" />
                                <DataAcciones numero="123119" trabajo="Reequipamiento" />
                                <DataAcciones numero="123244" trabajo="Reequipamiento" />
                                <DataAcciones numero="123245" trabajo="Reequipamiento" />
                                <DataAcciones numero="123250" trabajo="Reequipamiento" />
                                <DataAcciones numero="123252" trabajo="Reequipamiento" />
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 px-5">
                        <h4 className="subtitulos">Registro Periodico</h4>
                        <GraficoAño />
                    </div>
                </div>
        </Layout>
    )
}
function DataAcciones(props) {
    const { numero, trabajo } = props
    return (
        <li className="list-group-item">{numero} - {trabajo}</li>
    )
}
function TablaData(props) {
    const { hoyEstacion, hoyBueno, hoyMalo, hoyProveedor } = props
    return (
        <tr>
            <th scope="row">{hoyEstacion}</th>
            <td>{hoyBueno}</td>
            <td>{hoyMalo}</td>
            <td>{hoyProveedor}</td>
        </tr>
    )
}
function UnidTrabajo(props) {
    const { tecnico, estacion, estadoActual } = props;
    return (
        <div className="card col-6 col-lg-4 p-2 cardCarros">
            <div className="card-body">
                <div className="d-flex justify-content-end">
                    <FontAwesomeIcon icon="globe" color={estadoActual != "inactivo" ? "#49DA54 " : "gray" } />
                </div>
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
            ],
            options: {
                maintainAspectRatio: false
            }
        }} />
    )
}
