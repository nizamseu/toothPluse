
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import NotFound from './Pages/404/NotFound'
import Login from './Pages/Auhentication/Login/Login';
import Resgistration from './Pages/Auhentication/Resgistration/Resgistration';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';

function App() {
  return (
    <div >
    <Router>
    <Header></Header>
      <Switch>

          <Route exact path ='/' >
            <Home></Home>
          </Route>

          <Route exact path ='/home' >
            <Home></Home>
          </Route>

          <Route exact path ='/services' >
            <Services></Services>
          </Route>

          <Route exact path ='/login' >
            <Login></Login>
          </Route>

          <Route exact path ='/reg' >
           <Resgistration></Resgistration>
          </Route>

          
          <Route path="*">
              <NotFound></NotFound>
          </Route>

      </Switch>
      <Footer></Footer>
    </Router>

    </div>
  );
}

export default App;
