import { motion } from "framer-motion";
const ShowImages = ({ id, url, source }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      <img className="object-cover w-full h-full" src={source} alt={id} />
    </motion.div>
  );
};

export default ShowImages;

// /import React from "react";

// const ImageGallery = () => {
//   const images = [
//     "image-url-1.jpg",
//     "image-url-2.jpg",
//     "image-url-3.jpg",
//     // Add more image URLs here
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {images.map((imageUrl, index) => (
//         <div
//           key={index}
//           className="relative group aspect-ratio-16/9 overflow-hidden"
//         >
//           <img
//             src={imageUrl}
//             alt={`Image ${index + 1}`}
//             className="object-cover w-full h-full transition-transform transform scale-100 group-hover:scale-105"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageGallery;
