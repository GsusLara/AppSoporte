import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, fab)

export default function Footer() {
    return (
        <footer className="page-footer font-small bg-light mt-5 fixed-bottom footer">
            <div className="footer-copyright text-center py-3 ">© 2021 Desarrollador -{" "}
                <a href="https://github.com/GsusLara" className="link">
                    Jesus Lara Méndez{" "}
                    <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
            </div>
        </footer>
    )
}
