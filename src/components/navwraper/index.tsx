import React from 'react';
interface props {
    className?: string;
    children?: any;
}
function NavWrapper ({className, children} : props) {
  return (
    <nav className={className} >
        {children}
    </nav>
  );
}

export default NavWrapper;
