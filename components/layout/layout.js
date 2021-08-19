import Navbarpage from "../navbar/navbar";


export default function Layout(props) {
  const {children}=props;
    return (
        <div className="container-fluid">
            <Navbarpage/>
            <div className="container">
            {children} 
            </div>
        </div>
    )
}