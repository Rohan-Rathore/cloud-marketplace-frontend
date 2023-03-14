import{ Route, Routes } from 'react-router-dom';
import Index from './Components/SharedComponents/Index';
import About from './Components/SharedComponents/About';
import Contact from './Components/SharedComponents/Contact';
import SessionRoutes from './Components/Session/SessionRoutes';
import Banner from './Components/SharedComponents/Banner';
import './Components/style/banner.css';
import { Container } from 'react-bootstrap';
import Navbar from './Components/SharedComponents/Navbar';
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="">
		<div className='page-banner'>
			<Banner />
		</div>
		<div className='nav-bar'>
			<Container>
				<Navbar />
			</Container>
		</div>
		<Routes>
			<Route path='/' element={<Index />} exact />
			<Route path='/about' element={<About />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/session/*' element={<SessionRoutes />} />				
			<Route path='/dashboard' element={<Dashboard />} />				
		</Routes>				
    </div>
  );
}

export default App;
