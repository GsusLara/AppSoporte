import Link from "next/link";

export default function Login() {
  return (
    <div className="container">
      <div className="row justify-content-md-center boxlogin">
        <div className="col-4 arealogin">
          <h2 className="text-center mb-3">Bienvenido</h2>
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
              <a type="submit" className="btn btn-success mt-2">Ingresar</a>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
