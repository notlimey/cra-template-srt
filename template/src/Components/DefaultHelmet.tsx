import React from "react";
import { Helmet } from "react-helmet";
import FavIcon from '@Assets/favicon.ico';

// Default helmet is the default react-helmet that comes with this template. It is made to make it easier for you to keep good SEO on your website with as little as possible work.

// Tilte = The title of the website. You don't have to set the title each time, you can just set a DefaultTitle in the DefaultHelemet file. 
// SubTitle = is the subtitle E.g Title | Subtitle
// Description = The description of the website. You don't have to set the description each time, you can just set a DefaultDescription in the DefaultHelemet file.
// MetaImage = The image which is shown when the website appears in a search

const WebsiteUrl = window.location.href; // Full url of the website E.g https://limeyfy.no
const DefaultTitle = "RTS Template"; // s the default title of the website so you don't need to set the title on every page. 
const ThemeColor = "#000000" // is the theme color of the website. The default is #000000
const DefaultDescription = 
    `This is a react application made with React-Typescript structured template (https://github.com/NotLimey/React-Typescript-Structured-Template)`
// is the default description of the website so you don't need to set the description on every page. 

const DefaultHelmet = ({Title, Description, SubTitle, MetaImage} : any) => {

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{Title ? Title : `${DefaultTitle}${SubTitle ? ` | ${SubTitle}` : ""}`}</title>
            <meta name="title" content={Title ? Title : `${DefaultTitle}${SubTitle ? ` | ${SubTitle}` : ""}`} />
            <meta name="application-name" content={SubTitle ? `${Title ? Title : DefaultTitle} | ${SubTitle}` : `${Title}`} />

            <meta name="description" content={Description ? Description : DefaultDescription} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={WebsiteUrl}  />
            <meta property="og:title" content={Title ? Title : `${DefaultTitle}${SubTitle ? ` | ${SubTitle}` : ""}`} />
            <meta property="og:description" content={Description ? Description : DefaultDescription} />
            
            {MetaImage && <meta property="og:image" content={MetaImage} />}

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={WebsiteUrl} />
            <meta property="twitter:title" content={Title ? Title : `${DefaultTitle}${SubTitle ? ` | ${SubTitle}` : ""}`} />
            <meta property="twitter:description" content={Description ? Description : DefaultDescription} />
            
            {MetaImage && <meta property="twitter:image" content={MetaImage}></meta>}

            {/* Apple */}
            <meta name="apple-mobile-web-app-title" content={Title ? Title : `${DefaultTitle}${SubTitle ? ` | ${SubTitle}` : ""}`} />
	
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