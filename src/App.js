import "./assets/globalStyle.css";
import './App.css';
import Footer from './component/footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/header/Header";
import FrontPage from "./component/frontPage/FrontPage";
import About from "./component/about/About";
import Portfolio from "./component/portfolio/Portfolio";
import Services from "./component/services/Services";
import Contact from "./component/contact/Contact";



function App() {
  return (
    <div className="App">
        <Router>
          <Header />
              <Switch>
                  <Route path="/" exact component={FrontPage } /> 
                  <Route path="/about" component={About } /> 
                  <Route path="/services" component={Services } /> 
                  <Route path="/portfolio" component={Portfolio } />  
                  <Route path="/contact" component={Contact } />  
              </Switch> 
               <Footer /> 
          </Router>
    </div>
  );
}

export default App;
