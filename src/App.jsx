import React from 'react';

import EcommerceDemo from "./pages/EcommerceDemo.jsx";
import PortfolioDemo from "./pages/PortfolioDemo";
import SaasDemo from "./pages/SaasDemo";
import { WhatsAppIcon } from './component/WhatsAppIcon.jsx';
import { MessageCircle } from 'lucide-react';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx';
import SaasLandingDemo from './component/SaasLanding.jsx';
import AnimatorPortfolio from './component/AnimatorPortfolio.jsx';
import AgencyDashboardDemo from './component/AgencyDashboardDemo.jsx';

const WhatsAppFloat = () => {
  return (
     <a
      href="https://wa.me/9730246521" // Replace with your real number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[100px] right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <WhatsAppIcon size={28} color="white" />
    </a>

  );
};

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200">
   

    <BrowserRouter>
    
    <Routes>

<Route  path='/' element={<Home/>}>

</Route>
    <Route path="/ecommerce-demo" element={<EcommerceDemo />} />
        <Route path="/portfolio-demo" element={<PortfolioDemo />} />
        <Route path="/saas-demo" element={<SaasDemo />} />
        <Route path='/saas-landing-demo' element={<SaasLandingDemo/>}></Route>
        <Route path='/agency-landing-demo' element={<AnimatorPortfolio/>}/>
<Route path='/agency-dashboard-demo' element={<AgencyDashboardDemo/>}></Route>
    </Routes>

    </BrowserRouter>

 <WhatsAppFloat />

    </div>
  );
}

export default App;