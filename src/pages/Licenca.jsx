// import Cards from "../components/Content/Cards"
import Cards from "../components/Content/Cards"
import Hero from "../components/Content/Hero"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navigation/Navbar"
import footerData from "../Data/footerData.json"
import navbarData from "../Data/navbarData.json"
// import cardData from "./../Data/cardData.json"
// import imgUrl from "/testHero.jpeg"
import { useEffect } from "react"
// import Licenses from "../components/Planos/Licenses"
import licenseData from "./../Data/licenseData.json"
const Licenca = () => {
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
            <div className="grid ">
                <div className=''>
                    <h3>
                        Escolha entre nossas opcoes 
                    </h3>
                </div>
                <Cards
                    cardData={licenseData}
                    style={'space-y-1 bg-violet-600 border-yellow-500 border-4  font-semibold text-slate-200 text-border min-h-full  bg-opacity-80 hover:bg-opacity-100 w-96 h- '}
                    imageStyle={'border-4 border-white rounded-lg object-cover'}
                />
            </div>

            <Footer
                data={footerData}
            />
        </>
    )
}

export default Licenca
