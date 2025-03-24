import PropTypes from "prop-types";

export const GifItem = ({ image }) => {
  return (
    <div className="card">
      <img src={image.url} alt={image.title || "GIF"} />
      <p>{image.title || "No title available"}</p>
    </div>
  );
};

GifItem.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
