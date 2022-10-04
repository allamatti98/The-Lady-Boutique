import React from "react";
import * as ReactNavbar from "react-responsive-animate-navbar";
import logo from '../static/img/Logo.png'

function Navie() {
    console.log(ReactNavbar.ReactNavbar)
    return (
        <ReactNavbar.ReactNavbar
            className="NavigationBar"
            color="#e03997"
            logo={logo}
            menu={[
                { name: "HOME", to: "/" },
                { name: "ARTICLES", to: "/articles" },
                { name: "ABOUT ME", to: "/about" },
                { name: "CONTACT", to: "/contact" },
            ]}
            social={[
                {
                    name: "Linkedin",
                    url: "https://www.linkedin.com/in/nazeh-taha/",
                    icon: ["fab", "linkedin-in"],
                },
                {
                    name: "Facebook",
                    url: "https://www.facebook.com/nazeh200/",
                    icon: ["fab", "facebook-f"],
                },
                {
                    name: "Instagram",
                    url: "https://www.instagram.com/nazeh_taha/",
                    icon: ["fab", "instagram"],
                },
                {
                    name: "Twitter",
                    url: "http://nazehtaha.herokuapp.com/",
                    icon: ["fab", "twitter"],
                },
            ]}
        />
    )
}
export default Navie