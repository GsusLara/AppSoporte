import "../scss/global.scss";
import injectContext from "../store/appContext";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default injectContext(MyApp) 
