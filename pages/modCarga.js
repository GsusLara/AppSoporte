import Layout from "../components/layout/layout"

export default function ModCarga() {
  return (
    <Layout>
      <div className="row mt-2">
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
          <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
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
        <div className="col-3">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">C-1 Diego Gamboa</label>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">C-2 Kennet Navarrete</label>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">C-3 Marvin Castro</label>
          </div>
        </div>
        <div className="col-3">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" />
            <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">C-4 Armando Cespedes</label>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" disabled />
            <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">C-5 -Inhabilitado-</label>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" disabled />
            <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">C-6 -Inhabilitado-</label>
          </div>
        </div>
      </div>
      <div className="col-12 mt-4 text-center">
        <h3>Detalle de Produccion</h3>
      </div>
      <div className="row mb-2">
      <div className="col-4 m-0">
          <select className="form-select form-select-sm" aria-label=".form-select-sm example">
            <option defaultValue>Estado</option>
            <option value="1">Activas</option>
            <option value="2">pendientes</option>
          </select>
        </div>
        <div className="col-4 m-0">
          <select className="form-select form-select-sm" aria-label=".form-select-sm example">
            <option defaultValue>Accion</option>
            <option value="1">0-9</option>
            <option value="2">9-0</option>
            <option value="1">No importa</option>
          </select>
        </div>
        <div className="col-4 m-0">
          <select className="form-select form-select-sm" aria-label=".form-select-sm example">
            <option defaultValue>Tecnico</option>
            <option value="1">C-1</option>
            <option value="1">C-2</option>
            <option value="1">C-3</option>
            <option value="1">C-4</option>
            <option value="1">C-5</option>
            <option value="1">C-6</option>
            <option value="1">Todos</option>
          </select>
        </div>
        </div>
      <div className="col-12">
        <div className="alert m-0 p-2 alert-success" role="alert">
          <div className="row">
            <div className="col-4">12313</div>
            <div className="col-4">Revision</div>
            <div className="col-4">C-1, C-3</div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="alert  m-0 p-2 alert-success" role="alert">
          <div className="row">
            <div className="col-4">12314</div>
            <div className="col-4">Reequipamiento</div>
            <div className="col-4">C-4</div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="alert  m-0 p-2 alert-dark" role="alert">
          <div className="row">
            <div className="col-4">12315</div>
            <div className="col-4">Revision</div>
            <div className="col-4">C-1</div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="alert   m-0 p-2 alert-dark" role="alert">
          <div className="row">
            <div className="col-4">12318</div>
            <div className="col-4">Revision</div>
            <div className="col-4">C-3</div>

          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="alert m-0 p-2 alert-dark" role="alert">
          <div className="row">
            <div className="col-4">12321</div>
            <div className="col-4">Revision</div>
            <div className="col-4">C-4</div>
          </div>
        </div>
      </div>
    </Layout>
    )
}
