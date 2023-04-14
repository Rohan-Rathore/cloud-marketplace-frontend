import{ Route, Routes } from 'react-router-dom';
import Index from './Components/SharedComponents/Index';
import About from './Components/SharedComponents/About';
import Contact from './Components/SharedComponents/Contact';
import SessionRoutes from './Components/Session/SessionRoutes';
import Banner from './Components/SharedComponents/Banner';
import './Components/style/banner.css';
import './App.css'
import CSPRoutes from './Components/CSPDashboard/CSPRoutes';
import RoutesDashboard from './Components/Dashboard/RoutesDashboard';
import AllServices from './Components/Dashboard/AllServices';

function App() {
  return (
    <div className="">
		<div className='page-banner'>
			<Banner />
		</div>
		<Routes>
			<Route path='/' element={<Index />} exact />
			<Route path='/about' element={<About />} />
			<Route path='/services' element={<AllServices />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/session/*' element={<SessionRoutes />} />				
			<Route path='/dashboard/*' element={<RoutesDashboard />} />		
			<Route path='/csp/*' element={<CSPRoutes />} />				
		</Routes>				
    </div>
  );
}

export default App;
