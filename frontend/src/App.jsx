import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <UserProvider>
          


          

          <Routes>
          <Route element={ <Login /> } path='login' />
          <Route element={ <Signup /> } path='signup' />
            </Routes>  
            
        </UserProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
