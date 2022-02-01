import React from "react";
import Logo from '@assets/Images/LimeyfyLogo.png'

const Home = () => {
    return (
        <React.Fragment>
            <div className="text-center welcome-app">
                <h1>Welcome to React-Typescript</h1>
                <p>Thanks for using <code>SRT Template!</code></p>
                <div className="spinning-logo">
                    <img src={Logo} alt="Limeyfy logo" />
                </div>
                <p style={{marginTop: '200px'}}>Made with 
                    <svg style={{margin: '0px 5px'}} role="img" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px"   viewBox="0 0 24 24" aria-labelledby="favouriteIconTitle" stroke="#e31b23" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="#e31b23" color="#e31b23"> <title id="favouriteIconTitle">Heart Icon</title> <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"/> </svg>
                By <a style={{color: '#f1f1f1'}} href="https://github.com/Notlimey" target="_blank" rel="noreferrer">Limey</a></p>
            </div>
        </React.Fragment>
    );
}

export default Home;