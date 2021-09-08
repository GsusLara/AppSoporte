import { useEffect } from "react"
import router from 'next/router'
import Navbar from "../navbar";
import Footer from "../footer";


export default function Layout(props) {
    useEffect(() => {
        if (localStorage.getItem("usuario") == "") {
            router.push("/");
        }
    }
        , [])
    const { children } = props;
    return (
        <div className="container-fluid">
            <Navbar />
            <div className="container principal">
                {children}
            </div>
            <Footer />
        </div>
    )
}