import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navigation/Navbar"
import Hero from "../components/Content/Hero"
import footerData from "./../Data/footerData.json"
import navbarData from "./../Data/navbarData.json"
import thumbHero from "./../assets/Pages/purple/thumb-contatos.jpg"
import WhatsappButton from "../components/Buttons/WhatsappButton"
const Support = () => {
    return (
        <>
            <Navbar data={navbarData}></Navbar>
            <Hero

                id="Hero"
                title={""}
                data={[]}

                hasButton={false}
                hasText={true}

                bgImage={thumbHero}
                scrollRef=""
                scrollStyle={""}

                titleStyle={"transition transform ease-in-out delay-100 text-border-lg border-white text-5xl h-1/2  text-yellow-500 font-bold"}
                // subTitleStyle={"transition delay-200 easy-in duration-300 items-center flex flex-col content-center w-1/2 text-white font-bold"}
                // textStyle={"indent-2 line-clamp-3 break-words text-wrap overflow-auto text-clip h-24 w-1/2 place-content-center text-white font-semibold"}
                // // spanStyle={"rounded-xl bg-opacity-70  bg-yellow-600 outline outline-white items-center flex flex-col content-center h-1/3 w-1/2 place-content-center"}
                //rounded-xl bg-opacity-70  bg-yellow-600 outline outline-white items-center flex flex-col content-center h-1/3 w-1/2 place-content-center
                //altere aqui o posicionamento dos items, evite usar spanStyle
                style={"px-6 bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center h-72 md:h-64 overflow-hidden place-content-center"}
            //px-6 bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center h-screen  overflow-hidden place-content-center
            />

            <WhatsappButton url={"https://wa.me/5521999462860"}/>
            <Footer data={footerData}></Footer>
        </>
    )
}

export default Support
