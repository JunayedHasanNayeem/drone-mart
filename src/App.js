import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header/Header';
import SignIn from './Components/SignIn/SignIn';
import AuthProvider from './AuthProvider/AuthProvider';
import SignUp from './Components/SignUp/SignUp';
import NotFound from './Components/NotFound/NotFound';
import Dashboard from './Components/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import PrivateRoute from './Components/SignIn/PrivateRoute';
import AllProducts from './Components/AllProducts/AllProducts';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/all-products">
              <AllProducts></AllProducts>
            </Route>
            <Route path="/product-details/:id">
              <ProductDetails></ProductDetails>
            </Route>
            <Route path="/sign-in">
              <SignIn></SignIn>
            </Route>
            <Route path="/sign-up">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/place-order/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
