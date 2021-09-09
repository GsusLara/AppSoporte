import { useEffect,useState } from "react"
import router from 'next/router'
import Navbar from "../navbar";
import Footer from "../footer";


export default function Layout(props) {
    const [user, setuser] = useState("");
    useEffect(() => {
        if (localStorage.getItem("usuario") == "") {
            router.push("/");
        }else{
            setuser(localStorage.getItem("usuario"))
        }
    }
        , [])
    const { children } = props;
    return (
        <div className="container-fluid">
            <Navbar usuario={user}/>
            <div className="container principal">
                {children}
            </div>
            <Footer />
        </div>
    )
}