import React from "react";
interface props {
  className?: string;
  src?: any;
  id?: string;
  draggable?: any;
  alt?: string;
  style?: any;
}
function CardImage({
  className,
  src,
  id,
  draggable,
  alt,
  style
}: props) {
  return (
    <img
      className={className}
      src={src}
      id={id}
      draggable={draggable}
      alt={alt}
      style={style}
    />
    
  );
}

export default CardImage;
