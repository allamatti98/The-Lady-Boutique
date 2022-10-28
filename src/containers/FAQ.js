import React from "react";
import NavBar from "../components/navbar";
import FaqBreadcrumbs from "../components/FAQbc";
import FaqAcordion from "../components/Faq";
import Row7 from "../components/Row7";

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
                    <br /><br /><br /><br /><br />
                    <Row7 />
                </div>
            </>
        )
    }
}
export default FAQ