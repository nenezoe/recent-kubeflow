import React from "react";
interface props {
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  dataToggle?: boolean;
  dataTarget?: string;
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaLabel?: string;
  children?: any;
}
function PageButton({
  className,
  type,
  dataToggle,
  dataTarget,
  ariaControls,
  ariaExpanded,
  ariaLabel,
  children,
}: props) {
  return (
    <button
      className={className}
      type={type}
      data-Toggle={dataToggle}
      data-Target={dataTarget}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
    ></button>
  );
}

export default PageButton;
