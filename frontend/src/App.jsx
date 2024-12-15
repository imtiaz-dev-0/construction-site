import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import './assets/css/style.scss';
import Services from './components/frontend/Services';
import Projects from './components/frontend/Projects';
import Blogs from './components/frontend/Blogs';
import Contact from './components/frontend/Contact';
import Login from './components/backend/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/backend/Dashboard';
import RequriedAuth from './components/common/RequriedAuth';
import { default as ShowServices} from './components/backend/services/Show';
import { default as CreateServices} from './components/backend/services/Create';

function App() {

  return (
    <>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path='/admin/login' element={<Login/>}/>
          <Route path='/admin/dashboard' element={
            <RequriedAuth>
              <Dashboard/>
            </RequriedAuth>
              } />
          <Route path='/admin/services' element={
            <RequriedAuth>
              <ShowServices/>
            </RequriedAuth>
              } />
          <Route path='/admin/services/create' element={
            <RequriedAuth>
              <CreateServices/>
            </RequriedAuth>
              } />
        </Routes>
     
      <ToastContainer />
    </>
  )
}

export default App
