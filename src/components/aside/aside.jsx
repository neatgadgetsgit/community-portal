import React from "react";
import Accommodation from "./accommodation";
import Attractions from "./attractions";
import Events from "./events";

const Aside = () => {
    return (
		<div className="aside_section">
			<Attractions />
			<Events />
			<Accommodation />
		</div>
    );
};

export default Aside;
