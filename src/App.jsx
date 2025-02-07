import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Policy from "./pages/Policy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import Auth from "./pages/Auth.jsx";
import Afiliate from "./pages/Afiliate.jsx";
import Carreers from "./pages/Carreers.jsx";
import Products from "./pages/Products.jsx";
import Pricing from "./pages/Pricing.jsx";
import Support from "./pages/Support.jsx";
import AboutUs from "./pages/AboutUs.jsx"
import Cookies from "./pages/Cookies.jsx"
import Privacy from "./pages/Privacy.jsx"
import Prohibited from "./pages/Prohibited.jsx"
import Conflicts from "./pages/Conflicts.jsx";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/termos-de-servico" element={<TermsOfService />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/seja-afiliado" element={<Afiliate />} />
      <Route path="/nossos-produtos" element={<Products />} />
      <Route path="/investimento" element={<Pricing />} />
      <Route path="/suporte" element={<Support />} />
      <Route path="/trabalhe-conosco" element={<Carreers />} />
      <Route path="/politica-cookies" element={<Cookies  />} />
      <Route path="/politica-conflitos" element={<Conflicts />} />
      <Route path="/politica-privacidade" element={<Privacy />} />
      <Route path="/politica-proibicao" element={<Prohibited />} />
      <Route path="/condicoes-de-uso" element={<Policy />} />
      <Route path="/sobre-nos" element={<AboutUs/>}></Route>
    </Routes>
  )
}

export default App
