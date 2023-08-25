import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-64 md:h-96 text-white relative max-w-[1440px] mx-auto"
      style={{ backgroundImage: "url(/sunflower.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Your local source of high quality images and videos directly from
            their creators
          </h1>
          <div className="max-w-4xl mx-auto p-4">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-full bg-opacity-25 text-black placeholder-black"
              placeholder="Search photos and videos"
            />
            <p className="text-start ps-5 mt-3 text-gray-300">Recommended: summer, food, covid-19, real estate, love</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
