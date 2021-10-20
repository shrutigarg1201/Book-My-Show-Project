import axios from "axios";
import React, {useState,useEffect} from "react";
import EntertainmentCardSlider from "../components/Entertainment.js/entertainment.component";
import { Premier } from "../components/premiere/premiere.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import PremierImages from "../config/tempPosters.config";

const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async() => {
            const getPopukarMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopukarMovies.data.results);
        };
        requestPopularMovies();
    }, []);

    console.log({popularMovies});

    return(
        <>
        <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-gray-800">
                The Best of Entertainment  
            </h1>
        <EntertainmentCardSlider/>
        </div>

        <div className="bg-premier-100 py-16">
            
            <div className="container mx-auto px-4 flex flex-col">
                <div className="flex">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                    alt="Rupay"
                    className="w-full h-full"/>
                </div>
                <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand New releases every Friday" isDark/>
            </div>
        </div>
        </div>
        
        <div className="conatainer mx-auto px-20">
            <PosterSlider
            images={popularMovies}
            title="Online Streaming Events"
            subtitle=""
            isDark={false}
            />
        </div>

        <div className="conatainer mx-auto px-20">
            <PosterSlider
            images={popularMovies}
            title="Outdoor Events"
            subtitle=""
            isDark={false}
            />
        </div>
        </>
    );
};

export default HomePage;