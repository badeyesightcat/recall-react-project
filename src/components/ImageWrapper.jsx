import React from "react";

function ImageWrapper(props) {
  const { img } = props;

  return (
    <img
      className="image-wrapper"
      src={img.src}
      width={img.width}
      height={img.height}
    />
  );
}

export default ImageWrapper;
