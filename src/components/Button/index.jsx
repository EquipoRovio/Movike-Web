import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[40px]" };
const variants = {
  fill: {
    red_A700: "bg-red-A700 text-gray-100",
    blue_gray_700: "bg-blue_gray-700 text-white-A700",
    blue_gray_100: "bg-blue_gray-100 text-black-900",
    blue_gray_800: "bg-blue_gray-800 text-amber-300",
    amber_300: "bg-amber-300 text-blue_gray-800",
  },
};
const sizes = {
  xs: "p-px",
  sm: "p-[17px]",
  md: "p-5",
  lg: "p-[27px] sm:px-5",
  xl: "pl-[19px] sm:pr-5 pr-[21px] py-8",
  "2xl": "p-[33px] sm:px-5",
  "3xl": "pl-[11px] pr-[15px] py-[34px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "lg",
  variant = "fill",
  color = "blue_gray_800",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "red_A700",
    "blue_gray_700",
    "blue_gray_100",
    "blue_gray_800",
    "amber_300",
  ]),
};

export { Button };
