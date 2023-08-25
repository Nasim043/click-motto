import { createClient } from "pexels";
import { useEffect } from "react";
import { useState } from "react";
import ShowImages from "./ShowImages";
import ShowVideos from "./ShowVideos";
import Select from "react-select";

const options = [
  { value: "popular", label: "Recommended" },
  { value: "latest", label: "Most Recent" },
  { value: "views", label: "Most Viewed" },
  { value: "downloads", label: "Most Downloaded" },
  { value: "appreciated", label: "Most Appreciated" },
];

const Gallery = () => {
  const [data, setData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [filter, setFilter] = useState("");
  const apiKey = import.meta.env.VITE_API_KEY;
  const client = createClient(apiKey);

  const handleSelectChange = (event) => {
    setFilter(event.value);
    getData();
  };

  const getData = async () => {
    if (activeTab === "Videos") {
      const query = filter || "nature";
      fetch(`https://api.pexels.com/videos/search?query=${query}&per_page=10`, {
        headers: {
          Authorization: apiKey,
        },
      })
        .then((response) => response.json())
        .then((data) => setVideoData(data.videos))
        .catch((error) => console.error("Error fetching video:", error));
    }
    if (
      activeTab === "All" ||
      activeTab === "Photos" ||
      activeTab === "Free" ||
      activeTab === "360"
    ) {
      const query = activeTab;

      client.photos
        .search({ query, order_by: filter, per_page: 15 })
        .then((photos) => {
          setData(photos.photos);
        });
    }
  };

  useEffect(() => {
    getData();
  }, [activeTab]);

  return (
    <div className="max-w-7xl xl:mx-auto mx-2 sm:mx-6 md:mx-8 mb-14">
      <div className="sm:flex sm:justify-between mb-2">
        <div className="flex sm:gap-2 mb-2">
          <div
            className={`pe-3 py-2 cursor-pointer ${
              activeTab === "All"
                ? "font-bold text-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("All")}
          >
            All
          </div>
          <div
            className={`px-3 py-2 cursor-pointer ${
              activeTab === "Photos"
                ? "font-bold text-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("Photos")}
          >
            Photos
          </div>
          <div
            className={`px-3 py-2 cursor-pointer ${
              activeTab === "Videos"
                ? "font-bold text-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("Videos")}
          >
            Videos
          </div>
          <div
            className={`px-3 py-2 cursor-pointer ${
              activeTab === "Free"
                ? "font-bold text-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("Free")}
          >
            Freebies
          </div>
          <div
            className={`px-3 py-2 cursor-pointer ${
              activeTab === "360"
                ? "font-bold text-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("360")}
          >
            360
          </div>
        </div>
        <Select options={options} onChange={handleSelectChange} className="w-full sm:w-44"/>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {activeTab !== "Videos" &&
          data?.map((item) => (
            <ShowImages
              key={item.id}
              id={item.id}
              url={item.url}
              source={item.src.medium}
            />
          ))}
        {activeTab === "Videos" &&
          videoData?.map((item) => (
            <ShowVideos
              key={item.id}
              id={item.id}
              url={item.url}
              source={item.video_files[0].link}
            />
          ))}
      </div>
    </div>
  );
};

export default Gallery;
