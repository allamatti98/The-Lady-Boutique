import React from "react";
import ProfilePage from "../components/profilepage";
import Navbar from "../components/navbar";
import ProfilePageBreadCrumbs from "../components/profilepagebc";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

class UserProfilePage extends React.Component {
    render() {
        const { isAuthenticated } = this.props
        if (!isAuthenticated) {
            return <Redirect to="/" />;
        }
        return (
            <div>
                <div className="page-entrance">
                    <Navbar />
                    <ProfilePageBreadCrumbs />
                </div>
                <br /><br /><br />
                <div>
                    <ProfilePage />
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(UserProfilePage)