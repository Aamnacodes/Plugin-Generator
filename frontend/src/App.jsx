import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

import { NewsLetter } from './components/NewsLetter';

const App = () => {
  return (
    <div>
    <BrowserRouter>
      {/* <UserProvider> */}
      <Navbar/>
        <Routes>
          <Route element={ <Home/>} path='/'/>
          <Route element={ <Signup/>} path='signup'/>
          <Route element={ <Login/>} path='login'/>
          <Route element={ <NewsLetter/>} path='news'/>
          {/* <Route element={ <Login/>} path='/login'/> */}
          {/* <Route element={ <Signup/>} path='/signup'/> */}
        </Routes>
      {/* </UserProvider> */}
    </BrowserRouter>
    </div>
  );
}

export default App;

