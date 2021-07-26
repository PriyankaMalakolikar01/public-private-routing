import logo from './logo.svg';
import './styles/App.scss';
import { Navbar } from './components/header/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from './components/home/Home';
import { AboutUs } from './components/aboutus/AboutUs';
import { ContactUs } from './components/contactus/ContactUs';
import PrivateRoute from './components/privateout/PrivateRout';
import { Dashboard } from './components/dashboard/Dashboard';
function App() {
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <div className="container">
            <div className="py-3">
                <Switch>
                     <Route exact path="/" component={Home} />
                     <Route exact path="/aboutus" component={AboutUs} />
                     <Route exact path="/contactus" component={ContactUs} />
                     <PrivateRoute path="/secret" exact component={Dashboard} />
                </Switch>
                
            </div>
          </div>
     </div>
    </Router>
  );
}

export default App;
