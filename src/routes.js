import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import HomepageLayout from "./containers/Home";
import ProductList from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetail";
import OrderSummary from "./containers/OrderSummary";
import Checkout from "./containers/Checkout";
import Profile from "./containers/Profile";
import Gallery from './containers/Gallery'
import Blog from "./containers/Blog";
import Wishlist from "./containers/Wishlist";
import Contacts from "./containers/ContactUs";
import CustomerCheckoutForm from "./containers/CheckoutForm";
import FAQ from "./containers/FAQ";
import MoMo from "./containers/MobileMoney";
import UserProfilePage from "./containers/ProfilePage";

const BaseRouter = () => (
  <Hoc>
    <Route exact path="/products" component={ProductList} />
    <Route path="/products/:productID" component={ProductDetail} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/order-summary" component={OrderSummary} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/profile" component={UserProfilePage} />
    <Route path="/blog" component={Blog} />
    <Route path="/wishlist" component={Wishlist} />
    <Route exact path="/" component={HomepageLayout} />
    <Route path="/contact-us" component={Contacts} />
    <Route path="/checkout-form" component={CustomerCheckoutForm} />
    <Route path="/faq" component={FAQ} />
    < Route path="/MoMo" component={MoMo} />
  </Hoc>
);

export default BaseRouter;
