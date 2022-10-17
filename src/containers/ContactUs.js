import React from "react";
import ContactUsIntro from "../components/contactusintro";
import NavBar from "../components/navbar";
import ContactUsForm from "../components/contactusform";

class Contacts extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <ContactUsIntro />
                <ContactUsForm />
            </>
        )
    }
}
export default Contacts