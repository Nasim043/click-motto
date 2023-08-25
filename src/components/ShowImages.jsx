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
      <img className="w-full h-auto" src={source} alt={id} />
    </motion.div>
  );
};

export default ShowImages;
