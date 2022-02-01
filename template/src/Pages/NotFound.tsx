import { DefaultHelmet } from "nl-ui";
import NotFoundComponent from "@components/NotFoundComponent";
import React from "react";

const NotFound = () => {
    return (
        <React.Fragment>
            <DefaultHelmet 
                title="404 Not found"
            />
            <NotFoundComponent />
        </React.Fragment>
    );
}

export default NotFound;