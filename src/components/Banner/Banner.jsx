import React from "react";
import bookimage from "../../assets/heroBook.png";

export default function Banner() {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse px-10 ">
        <img
          alt="Tailwind CSS hero component"
          src={bookimage}
          className="max-w-sm rounded-lg shadow-2xl flex-1"
        />
        <div className="flex-1">
          <h1 className="text-5xl font-bold">
            Discover the World’s Best Free Stock Photos.
          </h1>
          <p className="py-6 mr-6">
            High-resolution photos shared by a community of talented creators.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
