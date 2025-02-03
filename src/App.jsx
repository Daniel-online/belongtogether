import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Policy from "./pages/Policy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import Auth from "./pages/Auth.jsx";
function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/policy" element={<Policy/>}/>
      <Route path="/termsofservice" element={<TermsOfService/>}/>
      <Route path="/Auth" element={<Auth/>}/>
    </Routes>
  )
}

export default App
