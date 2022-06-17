import React from "react";
import Welcome from "./welcome";
import PortalSlides from "./portal_slides";
import Weather from "./weather_dashboard";
import CommunityBlog from "./community_blog";
import Blog from "./blog";
import Contact from "./contact_us";


const Main = () => {
   const blogText "This is a web app to provide information about the 
                  local community for locals and tourists.";

    return (
		<div className="main_section">
			<Welcome />
			<PortalSlides />
			<Weather />
			<CommunityBlog />
                <div className="blog">
                    <Blog text={blogText}/>
                </div>
			<Contact />
		</div>
    );
};

export default Main;