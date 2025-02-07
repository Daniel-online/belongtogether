import Navbar from "../components/Navigation/Navbar.jsx"
import Login from "./../local/Forms/Login.jsx"
import Footer from "./../components/Footer/Footer.jsx"
import footerData from "./../Data/footerData.json"
import navbarData from "./../Data/navbarData.json"
const Auth = () => {
  return (
    <div>
      <Navbar data={navbarData}></Navbar>
      <Login></Login>
      <Footer data={footerData}></Footer>
    </div>
  )
}

export default Auth
