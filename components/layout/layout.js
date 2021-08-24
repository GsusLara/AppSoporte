import Navbar from "../navbar";


export default function Layout(props) {
  const {children}=props;
    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="container">
            {children} 
            </div>
        </div>
    )
}