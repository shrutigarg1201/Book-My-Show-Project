import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import { BiCameraMovie } from "react-icons/bi";

const launchRazorPay = () => {
    let options = {
        key : "rzp_test_VkuA6fmj4qKC6L",
        amount: 500,
        currency: "INR",
        name: "Book My Show clone",
        description: "Movie purcase on rental",
        image : "https://in.bmscdn.com/webin/common/icons/logo.svg",
        handler: () => {
            alert("Payment done")
        },
        theme: {color: "#c4242d"}
    } ;
    let rzp =new window.Razorpay(options);
    rzp.open();
};

const Movie = () => {
    return(
        <>
         <MovieHero/>
         <div className="my-12 container px-4 mx-auto lg:w-2/3 lg:ml-20">
             <div className="flex flex-col items-start gap-3">
                 <h2 className="text-2xl font-bold text-black">About the movie</h2>
                 <p className="text-gray-700">Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.</p>
             </div>
             <div className="my-8">
                 <hr />
             </div>
             <div className="flex flex-col items-start gap-3">
                <h2 className="text-2xl font-bold text-black">Applicable Offers</h2>
                <div className="flex items-start gap-2 bg-yellow-100 border-dashed border-yellow-400 border-2 rounded-md p-3 w-96">
                    <div className="w-8 h-8">
                        <BiCameraMovie className="w-full h-full"/>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
                        <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                    </div>
                </div>
                <button onClick={launchRazorPay} className="mt-4 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Book Ticket
                </button>
             </div>
         </div>
        </>
    );
};

export const RazorPayExport = launchRazorPay;
export const MoviePage= Movie;