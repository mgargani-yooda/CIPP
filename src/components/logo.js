import PropTypes from "prop-types";

export const Logo = (props) => {
  // Directly reference the SVG file path.
  // The path starts from the public directory.
  const logoPath = "/assets/yooda.svg";

  return <img src={logoPath} alt="Yooda Logo" />;
};

Logo.propTypes = {
  // You might want to remove this prop if it's no longer used,
  // or you could use it to dynamically change the SVG source.
  color: PropTypes.oneOf(["black", "primary", "white"]),
};