import Consoles from './components/Consoles'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark" id="nav">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Connie's Consoles</span>
        </div>
      </nav>

      <div className="container mt-3">
        <Consoles />
      </div>
    </>
  );
}

export default App;
