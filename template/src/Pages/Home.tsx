import React from "react";
import Logo from '@Images/LimeyfyLogo.png'

const Home = () => {
    return (
        <React.Fragment>
            <div className="text-center welcome-app">
                <h1>Welcome to React!</h1>
                <p>Thanks for using <code>Limeyfy</code> react template :)</p>
                <div className="spinning-logo">
                    <img src={Logo} alt="Limeyfy logo" />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;