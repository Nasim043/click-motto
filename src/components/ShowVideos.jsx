const ShowVideos = ({ id, url, source }) => {
  return (
    <div
      className="w-full h-auto"
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      <video controls>
        <source
          src={source}
          type="video/mp4"
          className="object-cover w-full h-full"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ShowVideos;
