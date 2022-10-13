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
import Gallery from './containers/gallery'
import Blog from "./containers/Blog";
import Wishlist from "./containers/Wishlist";
import Contacts from "./containers/ContactUs";
import CustomerCheckoutForm from "./containers/CheckoutForm";
import Stripe from "./containers/stripe";


const BaseRouter = () => (
  <Hoc>
    <Route exact path="/products" component={ProductList} />
    <Route path="/products/:productID" component={ProductDetail} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/order-summary" component={OrderSummary} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/profile" component={Profile} />
    <Route path="/blog" component={Blog} />
    <Route path="/wishlist" component={Wishlist} />
    <Route exact path="/" component={HomepageLayout} />
    <Route path="/contact-us" component={Contacts} />
    <Route path="/checkout-form" component={CustomerCheckoutForm} />
    <Route path="/stripe-landing" component={Stripe} />
  </Hoc>
);

export default BaseRouter;
