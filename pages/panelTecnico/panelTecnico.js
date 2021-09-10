import Layout from "../../components/layout/layout"

export default function PanelTecnico() {
    return (
        <Layout>
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Panel técnico</h1>
                </div>
                <div className="p-5 text-left">
                    <h4>Estación de trabajo 3</h4>
                    <h5>Técnico <strong>Jesus Lara Mendez</strong></h5>
                </div>
                <div className="col-4 p-2">
                    <div className="container text-center">
                        <h4>Detalle del día</h4>
                    </div>
                    <div className="mt-3 text-left">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="d-flex justify-content-between">
                                    <div >Equipo en buen estado</div>
                                    <div className="me-3"><strong>25</strong></div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex justify-content-between">
                                    <div >Equipo enviado por garantia</div>
                                    <div className="me-3"><strong>2</strong></div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex justify-content-between">
                                    <div >Equipo para reciclaje</div>
                                    <div className="me-3"><strong>42</strong></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-4 p-2 text-center">
                    <h4>Acciones revisadas</h4>
                    <div className="finalizadas pt-3">
                        <ul className="lista">
                            <li className="p-2">208850</li>
                            <li className="p-2">208851</li>
                            <li className="p-2">208853</li>
                            <li className="p-2">208854</li>
                            <li className="p-2">208855</li>
                            <li className="p-2">208859</li>
                            <li className="p-2">208862</li>
                            <li className="p-2">208863</li>
                        </ul>
                    </div>
                </div>
                <div className="col-4 p-2 text-center">
                    <h4>Acciones pendientes</h4>
                    <div className="p-3 px-4">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">208867</div>
                                    hp 440g3
                                </div>
                                <span className="badge bg-primary rounded-pill">14</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">208868</div>
                                    hp 245g7
                                </div>
                                <span className="badge bg-primary rounded-pill">51</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">208869</div>
                                    dell latitude 3500
                                </div>
                                <span className="badge bg-primary rounded-pill">1</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
