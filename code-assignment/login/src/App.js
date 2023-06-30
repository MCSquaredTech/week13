import logo from './logo.svg';
import LogInDialog from './components/login-dialog';
import NavBar from './components/nav-bar';
import './App.css';
import './index.css'

function App() {
  
  return (
    <div className="container">
      <div className="row">
          <div className="col-sm">
              <NavBar />
          </div>
      </div>
      <div className="row">
          <div className="col">
              <LogInDialog />    
          </div> 
      </div>
    </div>
  );
}

export default App;
