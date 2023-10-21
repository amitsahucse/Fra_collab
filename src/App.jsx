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

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">LoginPage</Link>
                    </li>
                    <li>
                        <Link to="/existing-customer">ExistingCustomer</Link>
                    </li>
                    <li>
                        <Link to="/new-customer">NewCustomer</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/existing-customer" element={<ExistingCustomer/>}/>
                <Route path="/new-customer" element={<NewCustomer/>}/>
            </Routes>
        </Router>
    );
}

export default App;