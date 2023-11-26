import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoginRegister from './components/LoginRegister';
import Home from './components/Home';
import Cars from './components/Cars';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Admin from './components/Admin';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Route exact path="/" component={LoginRegister}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/cars" component={Cars}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/admin" component={Admin}></Route>
        </Router>
        <ToastContainer
        position='top-center'
        pauseOnHover={false}
        closeOnClick={true}/>
      </div>
    </div>
  );
}

export default App;
