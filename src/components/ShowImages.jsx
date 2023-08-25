const ShowImages = ({ id, url, source }) => {
  return (
    <div
      className=""
      onClick={() => {
        window.open(url, "_blank");
        console.log("here");
      }}
    >
      <img className="w-full h-auto" src={source} alt={id} />
    </div>
  );
};

export default ShowImages;
