import React from "react";

//Components
import MovieNavbar from "../components/NavBar/movieNavbar";

const MovieLayout = (props) => {
    return(
        <>
        <MovieNavbar />
        {props.children}
        </>
    );
};

export default MovieLayout;