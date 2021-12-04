import DefaultHelmet from "@/Components/DefaultHelmet";
import React from "react";

const NotFound = () => {
    return (
        <React.Fragment>
            <DefaultHelmet 
                SubTitle="404 Not found"
            />
            <h1 className="text-center">Page not found</h1>
        </React.Fragment>
    );
}

export default NotFound;