import { useState } from "react";
import router from 'next/router'
import Particles from 'react-particles-js';

export default function Login() {
  const [usuario, setusuario] = useState("")

  const validar = (nombre) => {
    nombre = nombre.toUpperCase();
    if (nombre == "TECNICO" || nombre == "SUPERVISOR" || nombre == "ADMINISTRADOR") {
      localStorage.setItem("usuario", nombre)
      router.push("/dashboard")
    } else {
      alert("nombre de usuario invalido");
      setusuario("")
    }
  }

  return (
    <div className="container-fluid caja">
      <Decoracion />
      <div className="row justify-content-center cajalogin">
        <div className="col-8 col-lg-4 col-xl-3 arealogin">
          <h2 className="text-center mt-3 mb-3">Soporte CEDI</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label ">Usuario o Correo Electrónico</label>
              <input type="userName" className="form-control" onChange={e => setusuario(e.target.value)} onKeyPress={e => { if (e.key == "Enter") { validar(usuario) } }} />
              <div id="emailHelp" className="form-text">Ingrese (tecnico,supervisor o administrador)</div>
            </div>
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">Password</label>
              <input type="text" id="disabledTextInput" className="form-control" placeholder="no requiere password" disabled />
            </div>
            <a type="submit" className="btn btn-success mt-2 mb-3" onClick={() => validar(usuario)}>Ingresar</a>
          </form>
        </div>
      </div>
    </div>
  )
}
function Decoracion() {
  return (
    <Particles
      params={{
        "particles": {
          "number": {
            "value": 160,
            "density": {
              "enable": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "speed": 4,
              "size_min": 0.3
            }
          },
          "line_linked": {
            "enable": false
          },
          "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
          }
        },
        "interactivity": {
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            }
          },
          "modes": {
            "bubble": {
              "distance": 250,
              "duration": 2,
              "size": 0,
              "opacity": 0
            },
            "repulse": {
              "distance": 400,
              "duration": 4
            }
          }
        }
      }} />
  )

}