import React from "react";
import { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//components
import { NextArrow, PrevArrow } from "./arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {

    const [images, setImages] = useState([]);

    /*useEffect(async() => {
        const getImages = await axios.get("/movie/now_playing");
        console.log(getImages);
    }, []);*/

    useEffect(() => {
        const requestNowPlayingMovies = async() => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        };
        requestNowPlayingMovies();
    }, []);

    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        centerPadding: "300px",
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }


    const settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

      return (
          <>
          <div className="lg:hidden">
          <HeroSlider {...settings}>
              {
                  images.map((image) => (
                      <div className="w-full h-64 md:80 py-3">
                          <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
                          alt="testing" 
                          className="w-full h-full rounded-md" />
                      </div>
                  ))
              }
          </HeroSlider>
          </div>

          
          <div className="hidden lg:block">
          <HeroSlider {...settingsLg}>
                {
                    images.map((image) => (
                      <div className="w-full h-96 py-3 px-2">
                          <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                           alt="testing" className="w-full h-full rounded-md" />
                      </div>
                ))
            }
          </HeroSlider>
          </div>
          </>
      );
};

export default HeroCarousel;