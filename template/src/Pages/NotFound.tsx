import DefaultHelmet from "@/Components/DefaultHelmet";
import NotFoundComponent from "@/Components/NotFoundComponent";
import React from "react";

const NotFound = () => {
    return (
        <React.Fragment>
            <DefaultHelmet 
                SubTitle="404 Not found"
            />
            <NotFoundComponent />
        </React.Fragment>
    );
}

export default NotFound;