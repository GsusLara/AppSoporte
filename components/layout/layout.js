import Navbar from "../navbar";
import Footer from "../footer";


export default function Layout(props) {
  const {children}=props;
    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="container">
            {children} 
            </div>
            <Footer/>
        </div>
    )
}