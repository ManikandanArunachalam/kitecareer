import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Technology from './pages/Technology';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
         <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/about' element={<About />}>
          </Route>
          <Route path='/services' element={<Services />}>
          </Route>
          <Route path='/technology' element={<Technology />}>
          </Route>
          <Route path='/portfolio' element={<Portfolio />}>
          </Route>
          <Route path='/contactus' element={<ContactUs />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
