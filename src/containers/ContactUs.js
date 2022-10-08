import React from "react";
import ContactUsIntro from "../components/contactusintro";
import NavBar from "../components/navbar";
import ContactUsForm from "../components/contactusform";

class Contacts extends React.Component {
    render() {
        return (
            <>
            <ContactUsIntro />
            <ContactUsForm/>
            </>
        )
    }
}
export default Contacts