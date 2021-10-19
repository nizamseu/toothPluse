
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
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import UserContext from './UserContext/UserContext';
import { Details } from '@mui/icons-material';
import CardDetails from './Pages/CardDetails/CardDetails';
import Doctors from './Pages/Home/Doctors/Doctors';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <UserContext>
    <Router>
    <Header></Header>
      <Switch>

          <Route exact path ='/' >
            <Home></Home>
          </Route>

          <Route exact path ='/home' >
            <Home></Home>
          </Route>

          <Route  path ='/services' >
            <Services></Services>
          </Route>

          <Route exact path ='/login' >
            <Login></Login>
          </Route>

          <PrivateRoute  path ='/details/:id' >
            <CardDetails></CardDetails>
          </PrivateRoute>


          <Route exact path ='/reg' >
           <Resgistration></Resgistration>
          </Route>

          <Route exact path ='/doctors' >
           <Doctors></Doctors>
          </Route>

          <Route exact path='/appointment'>
            <Appointment></Appointment>
          </Route>

          
          <Route path="*">
              <NotFound></NotFound>
          </Route>

      </Switch>
      <Footer></Footer>
    </Router>

    </UserContext>
  );
}

export default App;
