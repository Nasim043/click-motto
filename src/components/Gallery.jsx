import { createClient } from "pexels";
import { useEffect } from "react";
import { useState } from "react";

const Gallery = () => {
  const [data, setData] = useState([]);
  const client = createClient(import.meta.env.VITE_API_KEY);
  const getData = async () => {
    // await fetch("https://api.pexels.com/v1/curated?page=1&per_page=15", {
    //   header: {
    //     Authorization: "import.meta.env.VITE_API_KEY",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => setData(data.photos));

    client.photos.curated({ per_page: 15 }).then((photos) => {
      setData(photos.photos);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {data?.map((item) => {
        return (
          <div className="" key={item.id}>
            <img
              className="w-full h-auto"
              src={item.src.original}
              alt={item.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
