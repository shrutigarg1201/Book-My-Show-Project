import React from "react";
import {RazorPayExport} from "../../pages/moviePage";
import { FaHeart } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";


const MovieHero = () => {
  return(
    <>
    <div className="md:hidden">
      <img
      src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/venom-let-there-be-carnage-et00122532-29-09-2021-06-14-07.jpg"
      alt="poster"
      />
    </div>

    <div className="hidden md:block lg:hidden">
      <img
      src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/venom-let-there-be-carnage-et00122532-29-09-2021-06-14-07.jpg"
      alt="poster"
      />
    </div>
    
    <div className="relative hidden lg:block" style={{height: "35rem"}}>
      <div className="absolute h-full w-full z-10"
        style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%,rgb(34, 34, 34) 100%)"}}>
        <div className="container flex flex-row gap-10 w-3/5">
          <div className="z-30 h-96 w-64 ml-24 mt-10 w-1/3">
              <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/venom-let-there-be-carnage-et00122532-29-09-2021-06-14-07.jpg"
              alt="poster"
              className="w-full h-full rounded-xl"/>
          </div>

          <div className="z-30 text-white flex mt-10 flex-col gap-4">
              <h1 className="text-4xl font-semibold">Venom: Let There Be Carnage</h1>
              <button className="flex flex-row gap-2 items-center">
                <FaHeart className="text-red-500 text-2xl"/>
                <h1 className="text-2xl font-semibold">82%</h1>
                <h1 className="font-light flex flex-row items-center">22.9K ratings <BiChevronRight className="text-lg bold-thin"/></h1>
              </button>
              <button className="bg-rating-100 mr-10 flex items-center justify-between py-3 px-6 rounded-lg">
                <div className="flex flex-col gap-1 items-start">
                  <h1>Add your ratings & reviews</h1>
                  <p className="text-xs text-review-100">Your ratings matter</p>
                </div>
                <button className="bg-white rounded-lg">
                  <h1 className="text-gray-700 px-2 py-1">Rate Now</h1>
                </button>
              </button>
              <div className="flex flex-col gap-1.5">
                <div className="bg-white flex flex-wrap rounded-sm">
                  <a href="#" className="hover:underline text-black font-medium">2D,</a>
                  <a href="#" className="hover:underline text-black font-medium">3D SCREEN X,</a>
                  <a href="#" className="hover:underline text-black font-medium">MX4D,</a>
                  <a href="#" className="hover:underline text-black font-medium">4DX 3D,</a>
                  <a href="#" className="hover:underline text-black font-medium">IMAX 2D,</a>
                  <a href="#" className="hover:underline text-black font-medium">4DX,</a>
                  <a href="#" className="hover:underline text-black font-medium">3D,</a>
                  <a href="#" className="hover:underline text-black font-medium">2D SCREEN X,</a>
                  <a href="#" className="hover:underline text-black font-medium">2D SCREEN X</a>
                </div>
                <div className="bg-white flex flex-wrap mr-72 rounded-sm">
                  <a href="#" className="hover:underline text-black font-medium">Hindi,</a>
                  <a href="#" className="hover:underline text-black font-medium">English,</a>
                  <a href="#" className="hover:underline text-black font-medium">Tamil,</a>
                  <a href="#" className="hover:underline text-black font-medium">Telugu</a>
                </div>
              </div>
              <div className="flex gap-3 font-light">
                <h2>1h 30m</h2>
                <span className="leading-3 font-extrabold">.</span>
                <div>
                  <a href="#" className="hover:underline">Action,</a>
                  <a href="#" className="hover:underline">Horror,</a>
                  <a href="#" className="hover:underline">Sci-Fi,</a>
                  <a href="#" className="hover:underline">Thriller</a>
                </div>
                <span className="leading-3 font-extrabold">.</span>
                <h2>UA</h2>
                <span className="leading-3 font-extrabold">.</span>
                <h2>14 Oct, 2021</h2>
              </div>
              <button onClick={(e) => {RazorPayExport(e)}} class="mt-4 w-1/2 h-14 bg-signin-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                Book Ticket
              </button>
            </div>
        </div>
      </div>
      <img
      src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/venom-let-there-be-carnage-et00122532-29-09-2021-06-14-07.jpg"
      alt="poster"
      className="w-full h-full"/>
    </div>
    </>
  )
};

export default MovieHero;