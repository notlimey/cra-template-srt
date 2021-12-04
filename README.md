# SRT-Template / Structured React-Typescript Template
A structured react-typescript template <br />
`Preinstalled packages` React-Helmet, React-Router-Dom, Node-Sass And Craco <br />

React-Router is already set up with path home and a not found page

# Getting Started

1. Clone the repository to your computer
2. Open a terminal in the directory where you want your app
3. Run `npx create-react-app my-app --template file:/path/to/React-Typescript Structured Template`

(Make sure you specify where the template directory is)

Once the installation process is completed, simply run

`cd my-app`
and
`npm start`

Now your app should be working!

#### This template was inspired by **Joaisa17**'s [Craco-Template](https://github.com/joaisa17/Craco-Template)

# Components

## Default Helmet
Default helmet is the default react-helmet that comes with this template. It is made to make it easier for you to keep good SEO on your website with as little as possible work.

### Parameters
 - `Title` The title of the website. You don't have to set the title each time, you can just set a `DefaultTitle` in the DefaultHelemet file. <br />
 - `Description` The description of the website. You don't have to set the description each time, you can just set a **DefaultDescription** in the DefaultHelemet file.<br />
 - `SubTitle` is the subtitle E.g 'Title | SubTitle'<br />
 - `MetaImage` The image which is shown when the website appears in a search<br />

### Parameters inside the DefaultHelmet.tsx file
 - `DefaultTitle` is the default title of the website so you don't need to set the title on every page. <br />
 - `DefaultDescription` is the default description of the website so you don't need to set the description on every page. <br />
 - `ThemeColor` is the theme color of the website. The default is #000000
