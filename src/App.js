import { Route } from "react-router-dom";

//axios
import axios from "axios";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/movie.HOC";

//pages
import HomePage from "./pages/Home.page";
import {MoviePage} from "./pages/moviePage";
import Plays from "./pages/plays.page";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <> 
     <DefaultHOC path="/" exact component={HomePage} />
     <MovieHOC path="/movie/:id" exact component={MoviePage} />
     <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}

export default App;

/*
const aradhana = {
  name: "aradhana",
  dob: 1800
};

const student = aradhana;
student.goodStudent = true; (parameter we wanted to add)

const student = {
  name: "aradhana",
  dob: 1800,
  goodStudent = true
};

//Spread Operator

const aradhana = {
  name: "aradhana",
  dob: 1800
};

const student = {...aradhana, goodStudent: ture};*/