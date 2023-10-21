import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import ExistingCustomer from "./components/existing_customer/ExistingCustomer";
import NewCustomer from "./components/new_customer/NewCustomer";
import LoginPage from "./components/login/LoginPage";
import WelcomePage from "./components/welcome/WelcomePage";

function App() {
  return (
    <Router>
      {/*<nav>*/}
      {/*  <Link to="/login">LoginPage</Link>*/}
      {/*  <Link to="/existing-customer">ExistingCustomer</Link>*/}
      {/*  <Link to="/new-customer">NewCustomer</Link>*/}
      {/*  <Link to="/welcome">Welcome</Link>*/}
      {/*</nav>*/}
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/existing-customer" element={<ExistingCustomer/>}/>
        <Route path="/new-customer" element={<NewCustomer/>}/>
        <Route path="/welcome" element={<WelcomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;