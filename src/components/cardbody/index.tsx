import React from 'react';
interface props {
    className?: string;
    children?: any;
}
function CardBody({className, children}: props) {
  return (
    <div className={`card-body ${className}`}>
      {children}
    </div>
  );
}

export default CardBody;
