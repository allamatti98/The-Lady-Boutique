import React from "react";
import ProfilePage from "../components/profilepage";
import Navbar from "../components/navbar";
import ProfilePageBreadCrumbs from "../components/profilepagebc";

class UserProfilePage extends React.Component {
    render() {
        return (
            <div>
                <div className="page-entrance">
                    <Navbar />
                    <ProfilePageBreadCrumbs />
                </div>
                <div>
                    <ProfilePage />
                </div>
            </div>
        )
    }
}
export default UserProfilePage