export default function Dia() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mt-3">
                    <h3 className="d-inline-flex mx-5">Informe del día</h3>
                    <button type="button" className="btn btn-success float-end">Exportar informe</button>
                </div>
                <div className="col-12 informacion mt-5 mb-5 pb-3 px-5">
                    <div className="row">
                        <div className="col-7">
                            <h5 className="mt-5 mb-3"> <strong>Cantidad de equipos</strong> </h5>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">tecnico</th>
                                        <th scope="col">Bueno</th>
                                        <th scope="col">Reciclaje</th>
                                        <th scope="col">Proveedor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TablaData hoyEstacion="Marvin C" hoyBueno="46" hoyMalo="72" hoyProveedor="0" />
                                    <TablaData hoyEstacion="Diego G" hoyBueno="51" hoyMalo="65" hoyProveedor="6" />
                                    <TablaData hoyEstacion="Kennet N" hoyBueno="38" hoyMalo="87" hoyProveedor="4" />
                                    <TablaData hoyEstacion="N/A" hoyBueno="0" hoyMalo="0" hoyProveedor="0" />
                                    <TablaData hoyEstacion="N/A" hoyBueno="0" hoyMalo="0" hoyProveedor="0" />
                                    <TablaData hoyEstacion="N/A" hoyBueno="0" hoyMalo="0" hoyProveedor="0" />
                                </tbody>
                            </table>
                        </div>
                        <div className="col-5 text-center">
                            <h5 className="mt-5 mb-4"> <strong>Acciones</strong> </h5>
                            <ul className="list-group p-3">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    208810
                                    <span className="badge bg-primary rounded-pill">14</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    208811
                                    <span className="badge bg-primary rounded-pill">2</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    208813
                                    <span className="badge bg-primary rounded-pill">98</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
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