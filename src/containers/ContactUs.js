import React from "react";
import ContactUs from "../components/contactus";
import NavBar from "../components/navbar";

class Contacts extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <ContactUs />
            </>
        )
    }
}
export default Contacts