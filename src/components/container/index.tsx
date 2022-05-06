import React from 'react';
interface props {
    className?: string;
    children?: any;
}
function Container({className, children}: props) {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  );
}

export default Container;
