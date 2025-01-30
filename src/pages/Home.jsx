import Navbar from "./../components/local/Navigation/Navbar"
import Sidebar from "./../components/local/SideBar/Sidebar"
import RightBar from "./../components/local/RightBar/RightBar";
import Footer from "../components/local/Footer/Footer";

const Home = () => {
    return (

            <div className="">
                <Navbar />
                <div className="py-8 h-96 place-content-around flex space-x-4">
                    <Sidebar />

                    <RightBar />
                </div>
                <Footer />
            </div>
            )
}

            export default Home