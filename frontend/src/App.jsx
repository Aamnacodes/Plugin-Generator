import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Newsletter from './components/Newsletter';
import { UserProvider } from './UserContext';


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <UserProvider>
      <Navbar/>
        <Routes>
          <Route element={ <Home/>} path='/'/>
          <Route element={ <Signup/>} path='signup'/>
          <Route element={ <Login/>} path='login'/>
          <Route element={ <Newsletter/>} path='newsletter'/>
          {/* <Route element={ <Login/>} path='/login'/> */}
          {/* <Route element={ <Signup/>} path='/signup'/> */}
        </Routes>
      </UserProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;

