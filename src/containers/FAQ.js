import React from "react";
import NavBar from "../components/navbar";
import FaqBreadcrumbs from "../components/FAQbc";

class FAQ extends React.Component {
    render() {
        return (
            <>
                <div className="page-entrance">
                    < NavBar />
                    <FaqBreadcrumbs />
                </div>
            </>
        )
    }
}
export default FAQ