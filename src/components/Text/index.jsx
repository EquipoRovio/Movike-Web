import React from "react";

const sizeClasses = {
  txtCousineRegular18: "font-cousine font-normal",
  txtCousineBold30WhiteA700: "font-bold font-cousine",
  txtCousineBold20Gray100: "font-bold font-cousine",
  txtCousineRegular30: "font-cousine font-normal",
  txtCousineBold35: "font-bold font-cousine",
  txtAmiriBold30: "font-amiri font-bold",
  txtCousineBold30: "font-bold font-cousine",
  txtCousineBold32: "font-bold font-cousine",
  txtCousineBold30Amber300: "font-bold font-cousine",
  txtCousineBold50: "font-bold font-cousine",
  txtCousineBold25Black900: "font-bold font-cousine",
  txtCousineItalic35: "font-cousine font-normal italic",
  txtCousineRegular25Bluegray800: "font-cousine font-normal",
  txtCousineBold20Black90001: "font-bold font-cousine",
  txtCousineBold30Black900: "font-bold font-cousine",
  txtCousineRegular25: "font-cousine font-normal",
  txtCousineRegular20: "font-cousine font-normal",
  txtCousineBold29: "font-bold font-cousine",
  txtCousineBold45: "font-bold font-cousine",
  txtCousineBold26: "font-bold font-cousine",
  txtCousineBold25: "font-bold font-cousine",
  txtCousineBold20: "font-bold font-cousine",
  txtCousineRegular25Black900: "font-cousine font-normal",
  txtCousineBold22: "font-bold font-cousine",
  txtCousineBold60: "font-bold font-cousine",
  txtCousineBold40: "font-bold font-cousine",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
