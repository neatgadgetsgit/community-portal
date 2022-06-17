import React from "react";
import Welcome from "./welcome";
import PortalSlides from "./portal_slides";
import Weather from "./weather_dashboard";
import CommunityBlog from "./community_blog";
import Contact from "./contact_us";


const Main = () => {
    return (
		<div className="main_section">
			<Welcome />
			<PortalSlides />
			<Weather />
			<CommunityBlog />
			<Contact />
		</div>
    );
};

export default Main;