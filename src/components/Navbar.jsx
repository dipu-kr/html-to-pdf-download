import React from "react";
import logo1 from "../assets/logo1.jpeg";
import logo2 from "../assets/logo2.jpeg";

export default function Navbar() {
  return (
    <div className="bg-gray-50 shadow-zinc-200">
      <div className="container mx-auto py-4">
        <div className="flex gap-4 items-center justify-between">
          <img src={logo1} alt="" className="h-20 w-20" />
          <div className="flex-grow">
            <h1 className="text-center font-bold text-3xl">
              बिहार गृह रक्षा वाहिनी
            </h1>
            <h1 className="text-center font-bold  text-3xl">कटिहार</h1>
          </div>
          <img src={logo2} alt="" className="h-20 w-20" />
        </div>
      </div>
    </div>
  );
}
