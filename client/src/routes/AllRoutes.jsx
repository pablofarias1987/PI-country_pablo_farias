import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import CountryDetails from '../components/CountryDetails';
import CreateActivity from '../components/CreateActivity';
import About from '../components/About';
import Page404 from '../components/Page404';
import Navbar from '../components/Navbar.jsx';


const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
         <Route path='/details/:id' element={<CountryDetails />} />
        <Route path='/create-activities' element={<CreateActivity />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Page404 />} /> 
      </Routes>
    </>
  )
}

export default AllRoutes