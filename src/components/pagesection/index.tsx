import React from 'react';
interface props {
    id?: any;
    className?: string;
    children?:any;
}
function PageSection({id, className, children}: props) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

export default PageSection;
