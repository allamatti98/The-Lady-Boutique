import React from "react";
import ContactUsIntro from "../components/contactusintro";
import NavBar from "../components/navbar";
import ContactUsForm from "../components/contactusform";
import ContactUsBreadcrumbs from "../components/ContactUsbc";

class Contacts extends React.Component {
    render() {
        return (
            <>
                <div className="page-entrance" style={{ margin: "0px" }}>
                    <NavBar />
                    <ContactUsBreadcrumbs />
                </div>
                <br /><br /><br /><br /><br /><br /><br />
                <ContactUsIntro />
                <ContactUsForm />
            </>
        )
    }
}
export default Contacts