import React from 'react';
interface props {
    className?: string;
    children?: any;
}
function CardDeck({className, children}: props) {
  return (
    <div className={`card-deck ${className}`}>
      {children}
    </div>
  );
}

export default CardDeck;
