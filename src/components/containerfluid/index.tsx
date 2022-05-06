import React from 'react';
interface props {
    className?: string;
    children?: any;
}
function ContainerFluid({className, children}: props) {
  return (
    <div className={`container-fluid ${className}`}>
      {children}
    </div>
  );
}

export default ContainerFluid;
