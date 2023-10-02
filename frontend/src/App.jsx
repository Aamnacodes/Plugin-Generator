import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Newsletter from './components/Newsletter';
import { UserProvider } from './UserContext';
import ManageSubscriber from './components/ManageSubscriber';
import MailContent from './components/MailContent';
import Plugin from './components/Plugin';


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
          <Route element={ <Newsletter ownerId={'65190df8918b18449043ff65'} />} path='newsletter'/>
          {/* <Route element={ <Login/>} path='/login'/> */}
          {/* <Route element={ <Signup/>} path='/signup'/> */}
          <Route element={ <ManageSubscriber /> } path='subscriber' />
          <Route element={ <MailContent/>} path='content'/>
          <Route element={ <Plugin/>} path='plugin'/>

        </Routes>
      </UserProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;

