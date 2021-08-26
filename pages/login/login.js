import Link from "next/link";
import Particles from 'react-particles-js';

export default function Login() {
  return (
    <div className="container-fluid caja">
      <Decoracion />
      <div className="row justify-content-center cajalogin">
        <div className="col-8 col-lg-4 col-xl-3 arealogin">
          <h2 className="text-center mt-3 mb-3">Soporte CEDI</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label ">Correo Electronico</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">Utiliza tu cuenta institucional.</div>
            </div>
            <div className="mb-3 ">
              <label htmlFor="exampleInputPassword1" className="form-label ">Contraseña</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <Link href="/dashboard">
              <a type="submit" className="btn btn-success mt-2 mb-3">Ingresar</a>
            </Link>
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