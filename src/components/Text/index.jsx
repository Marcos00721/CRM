import React from "react";

const sizeClasses = {
  txtMontserratRegular8: "font-montserrat font-normal",
  txtMontserratRomanSemiBold1474: "font-montserrat font-semibold",
  txtMontserratRegular14Black900: "font-montserrat font-normal",
  txtMontserratRegular14Black90066: "font-montserrat font-normal",
  txtMontserratRomanSemiBold10Gray60002: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold14Black900cc: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold18Black900: "font-montserrat font-semibold",
  txtInterRegular14Black900b2: "font-inter font-normal",
  txtMontserratRegular1289Black900b2: "font-montserrat font-normal",
  txtMontserratRomanMedium12Black90090: "font-medium font-montserrat",
  txtMontserratRegular16Black900cc: "font-montserrat font-normal",
  txtMontserratRomanSemiBold921: "font-montserrat font-semibold",
  txtMontserratRomanMedium1474: "font-medium font-montserrat",
  txtMontserratRegular14Black90099: "font-montserrat font-normal",
  txtMontserratRegular10: "font-montserrat font-normal",
  txtInterMedium16: "font-inter font-medium",
  txtMontserratRegular1289: "font-montserrat font-normal",
  txtMontserratRomanMedium14WhiteA70090: "font-medium font-montserrat",
  txtMontserratRegular14Black900b2: "font-montserrat font-normal",
  txtMontserratRegular921: "font-montserrat font-normal",
  txtMontserratRomanMedium16Black9007f: "font-medium font-montserrat",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtMontserratRegular14WhiteA700: "font-montserrat font-normal",
  txtMontserratRomanMedium12Black900: "font-medium font-montserrat",
  txtMontserratRomanMedium14Black90066: "font-medium font-montserrat",
  txtMontserratRomanMedium14035: "font-medium font-montserrat",
  txtMontserratRomanMedium1105: "font-medium font-montserrat",
  txtInterRegular14Black90066: "font-inter font-normal italic",
  txtMontserratRomanSemiBold1658: "font-montserrat font-semibold",
  txtInterSemiBold10Gray700: "font-inter font-semibold",
  txtMontserratRomanSemiBold14: "font-montserrat font-semibold",
  txtMontserratRomanMedium14: "font-medium font-montserrat",
  txtMontserratRegular16: "font-montserrat font-normal",
  txtMontserratRomanMedium16: "font-medium font-montserrat",
  txtMontserratRegular14: "font-montserrat font-normal",
  txtMontserratRomanSemiBold10: "font-montserrat font-semibold",
  txtInterSemiBold10: "font-inter font-semibold",
  txtMontserratRegular12: "font-montserrat font-normal",
  txtInterSemiBold10Gray60002: "font-inter font-semibold",
  txtMontserratRomanSemiBold18: "font-montserrat font-semibold",
  txtMontserratItalicRegular14: "font-montserrat font-normal italic",
  txtMontserratRomanMedium10: "font-medium font-montserrat",
  txtMontserratRomanSemiBold221: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold16: "font-montserrat font-semibold",
  txtMontserratRomanMedium12: "font-medium font-montserrat",
  txtMontserratRomanMedium16LightblueA700: "font-medium font-montserrat",
  txtMontserratRegular12Black900b2: "font-montserrat font-normal",
  txtMontserratRomanSemiBold1289: "font-montserrat font-semibold",
  txtMontserratRegular1289Black900: "font-montserrat font-normal",
  txtMontserratRomanMedium1474Black90099: "font-medium font-montserrat",
  txtMontserratRomanMedium14WhiteA700: "font-medium font-montserrat",
  txtMontserratRegular1105Black900: "font-montserrat font-normal",
  txtMontserratRomanSemiBold1289WhiteA700: "font-montserrat font-semibold",
  txtMontserratRegular1474: "font-montserrat font-normal",
  txtMontserratRomanSemiBold14Black900: "font-montserrat font-semibold",
  txtMontserratRomanMedium14Black9007f: "font-medium font-montserrat",
  txtMontserratRomanMedium10Black90066: "font-medium font-montserrat",
  txtMontserratRegular1105: "font-montserrat font-normal",
  txtMontserratRomanSemiBold24: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold20: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold921Bluegray400: "font-montserrat font-semibold",
  txtMontserratRomanMedium14LightblueA700: "font-medium font-montserrat",
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
