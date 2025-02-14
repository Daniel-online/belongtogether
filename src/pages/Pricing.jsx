// import Cards from "../components/Content/Cards"
import Hero from "../components/Content/Hero"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navigation/Navbar"
import footerData from "./../Data/footerData.json"
import navbarData from "./../Data/navbarData.json"
// import cardData from "./../Data/cardData.json"
// import imgUrl from "/testHero.jpeg"
import { useEffect } from "react"
import Licenses from "../components/Planos/Licenses"
import licenseData from "./../Data/licenseData.json"

const Pricing = () => {
    useEffect(() => {
        document.title = "Pacotes";
    }, []);
    return (
        <>
            <Navbar
                data={navbarData}
            />
            <Hero
                title={"Pacotes e Licenças"}
                data={[]}
                hasButton={false}
                hasText={true}
                bgImage={''}
                titleStyle={"text-border-lg border-white text-7xl h-1/2 text-yellow-500 font-bold"}
                subTitleStyle={"items-center flex flex-col content-center w-1/2 text-white font-bold"}
                textStyle={"indent-2 line-clamp-3 break-words text-wrap overflow-auto text-clip h-24 w-1/2 place-content-center text-white font-semibold"}
                style={"bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center h-72 w-full place-content-center  h-64 "}
                spanStyle={"rounded-xl bg-opacity-80  bg-yellow-600 outline outline-white items-center flex flex-col content-center h-1/3 w-1/2 place-content-center"}

            />
            {/* <Cards cardData={cardData} /> */}
            <Licenses
                licenseData={licenseData}
                licenseStyle={""}
            />
            <Footer
                data={footerData}
            />
        </>
    )
}

export default Pricing
