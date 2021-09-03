import Login from "./login";
import Script from 'next/script'

export default function Home() {
  return (
    <Login>
    <Script src="https://third-party-script.js"></Script>
    </Login>
  ) 
}
