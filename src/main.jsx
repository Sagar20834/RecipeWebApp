import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Trendingrecipe from "./Components/Trendingrecipe/Trendingrecipe.jsx";
import Blog from "./Components/Blog/Blog.jsx";
// import Navigation from "./Components/Navigation/Navigation.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Sharerecipe from "./Components/Sharerecipe/Sharerecipe.jsx";
import Explorerecipe from "./Components/Explorerecipe/Explorerecipe.jsx";
import Letsstayintouch from "./Components/Letsstayintouch/Letsstayintouch.jsx";
import Popularcategories from "./Components/Popularcategories/Popularcategories.jsx";
import Clientssection from "./Components/Clientssection/Clientssection.jsx";
import Footer from "./Components/Footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Hero />
    <Sharerecipe />
    <Trendingrecipe />
    <Blog />
    <Explorerecipe />
    <Letsstayintouch />
    <Popularcategories />
    <Clientssection />
    <Footer />
  </React.StrictMode>
);
