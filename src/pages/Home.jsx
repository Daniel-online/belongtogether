import Navbar from "../components/Navigation/Navbar"
import Hero from "../components/Home/Hero"
import Presentation from "../components/Home/Presentation";
import Planos from "../components/Home/Planos";
import Footer from "../components/Footer/Footer";
import footerData from "./../Data/footerData.json"

const Home = () => {
    return (

            <div className="">
                <Navbar />
                <Hero/>
                <Presentation/>
                <Planos/>
                <Footer data={footerData}/>
            </div>
            )
}

export default Home