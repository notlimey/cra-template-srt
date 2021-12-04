import React from "react";
import { Helmet } from "react-helmet";
import FavIcon from '@Assets/favicon.ico';

// Tilte = Websites Title
// SubTitle = is the subtitle E.g Title | Subtitle
// Description = A simple description of the website

const WebsiteUrl = window.location.href; // Full url of the website E.g https://limeyfy.no
const DefaultTitle = "Test app"; // Default title incase you dont want to set the title every time you use the DefaultHelmet
const ThemeColor = "#000000" // The theme color of the website
const DefaultDescription = 
    `This is a react application made with React-Typescript structured template (https://github.com/NotLimey/React-Typescript-Structured-Template)`

const DefaultHelmet = ({Title, Description, SubTitle, MetaImage} : any) => {

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{SubTitle ? `${Title ? Title : DefaultTitle} | ${SubTitle}` : `${Title}`}</title>
            <meta name="title" content={SubTitle ? `${Title ? Title : DefaultTitle} | ${SubTitle}` : `${Title}`} />
            <meta name="application-name" content={SubTitle ? `${Title ? Title : DefaultTitle} | ${SubTitle}` : `${Title}`} />

            <meta name="description" content={Description ? Description : DefaultDescription} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={WebsiteUrl}  />
            <meta property="og:title" content={SubTitle ? `${Title ? Title : DefaultTitle} | ${SubTitle}` : `${Title}`} />
            <meta property="og:description" content={Description ? Description : DefaultDescription} />
            <meta property="og:image" content={MetaImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={WebsiteUrl} />
            <meta property="twitter:title" content={SubTitle ? `${Title ? Title : DefaultTitle} | ${SubTitle}` : `${Title}`} />
            <meta property="twitter:description" content={Description ? Description : DefaultDescription} />
            <meta property="twitter:image" content={MetaImage}></meta>

            {/* Apple */}
            <meta name="apple-mobile-web-app-title" content={SubTitle ? `${Title ? Title : DefaultTitle} | ${SubTitle}` : `${Title}`} />
	
            <link rel="apple-touch-icon" sizes="180x180" href={FavIcon} ></link>

            {/* FavIcons */}
            <link rel="shortcut icon" href={FavIcon} />
            <link rel="icon" type="image/png" sizes="32x32" href={FavIcon} />
            <link rel="icon" type="image/png" sizes="16x16" href={FavIcon}></link>

            {/* Theme Color */}
	        <meta name="theme-color" content={ThemeColor}></meta>
        </Helmet>
    );
}

export default DefaultHelmet;