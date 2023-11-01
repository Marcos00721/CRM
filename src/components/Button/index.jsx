import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded-lg",
};
const variants = {
  fill: {
    light_blue_900: "bg-light_blue-900 text-white-A700",
    black_900_0f: "bg-black-900_0f",
    white_A700: "bg-white-A700 text-black-900_b2",
    black_900_33: "bg-black-900_33 text-white-A700",
    black_900_14: "bg-black-900_14",
    light_blue_A700: "bg-light_blue-A700 text-white-A700",
    light_blue_A700_0a: "bg-light_blue-A700_0a text-light_blue-A700",
    gray_400: "bg-gray-400 text-white-A700",
    black_900: "bg-black-900 text-white-A700",
  },
  outline: {
    indigo_50: "outline outline-[0.5px] outline-indigo-50",
    black_900_4c: "border border-black-900_4c border-solid text-black-900_a2",
    black_900_41: "border border-black-900_41 border-solid text-black-900_90",
    light_blue_900: "border border-light_blue-900 border-solid text-black-900_90",
  },
};
const sizes = { xs: "p-1", sm: "p-2", md: "p-3" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "white_A700",
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
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "light_blue_900",
    "black_900_0f",
    "white_A700",
    "black_900_33",
    "black_900_14",
    "light_blue_A700",
    "light_blue_A700_0a",
    "gray_400",
    "black_900",
    "indigo_50",
    "black_900_4c",
    "black_900_41",
  ]),
};

export { Button };
