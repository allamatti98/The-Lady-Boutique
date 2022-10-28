import React from "react";
import NavBar from "../components/navbar";
import FaqBreadcrumbs from "../components/FAQbc";
import FaqAcordion from "../components/Faq";

class FAQ extends React.Component {
    render() {
        return (
            <>
                <div className="page-entrance">
                    < NavBar />
                    <FaqBreadcrumbs />
                </div>
                <div className="FAQ">
                    <FaqAcordion />
                </div>
            </>
        )
    }
}
export default FAQ