import logo from './logo.svg';
import './App.css';
import CombinedRoutes from './CombinedRoutes';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <CombinedRoutes/>
    </Router>
  );
}

export default App;
