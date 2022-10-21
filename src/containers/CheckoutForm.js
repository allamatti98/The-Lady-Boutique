import React from "react";
import CheckoutFormPiece from "../components/userformcheckout";
import style from '../Style.css'
import CheckoutFormBreadcrumbs from "../components/CheckoutFormbc";
import NavBar from '../components/navbar'

function CustomerCheckoutForm() {
    return (
        <div>
            <div className="page-entrance" style={{ margin: "0px" }}>
                <NavBar />
                <CheckoutFormBreadcrumbs />
            </div>
            <br /><br /><br /><br /><br /><br /><br />
            <CheckoutFormPiece />
        </div>)
}
export default CustomerCheckoutForm