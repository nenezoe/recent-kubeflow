import React from "react";
interface props {
  className?: string;
  href?: any;
  children?: any;
  id?: string;
  role?: string;
  dataToggle?: boolean;
  ariaHaspopup?: boolean;
  ariaExpanded?: boolean;
  target?: string;
  rel?: string;
}
function PageLink({ className, href, children , id, role,dataToggle,ariaHaspopup,ariaExpanded, target, rel}: props) {
  return (
    <a className={className} href={href} id={id} role={role}
     data-toggle={dataToggle} 
     aria-haspopup={ariaHaspopup} aria-expanded={ariaExpanded}  target={target} rel={rel}>
      {children}
    </a>
  );
}

export default PageLink;
