import Navbar from "../components/Navigation/Navbar"
import Hero from "../components/Content/Hero.jsx"
import Presentation from "../components/Home/Presentation";
import Planos from "../components/Home/Planos";
import Footer from "../components/Footer/Footer";
import footerData from "./../Data/footerData.json"
import navbarData from "./../Data/navbarData.json"
import heroTestData from "./../Data/heroTestData.json"

const Home = () => {
    return (

        <div className="">
            <Navbar data={navbarData} />
            <Hero
                title="TEST"
                data={heroTestData}
                bgImage={"./images/testHero.jpeg"}
                titleStyle={"justify-center text-white font-bold"}
                textStyle={"place-content-center text-white font-semibold"}
                style={"justify-center place-content-center w-screen h-64 bg-red-600"} />
            <Presentation />
            <Planos />
            <Footer data={footerData} />
        </div>
    )
}

export default Home