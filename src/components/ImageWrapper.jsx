import React from "react";

function ImageWrapper(props) {
  const { img } = props;

  return (
    <figure>
      <img
        className="image-wrapper"
        src={img.src}
        width={img.width}
        height={img.height}
        title={img.title}
      />
      <figcaption>{img.title}</figcaption>
    </figure>
  );
}

export default ImageWrapper;
