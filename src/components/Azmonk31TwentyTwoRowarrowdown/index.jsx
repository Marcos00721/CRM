import React from "react";

import { Img, Text } from "components";

const Azmonk31TwentyTwoRowarrowdown = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-1 items-center justify-start w-auto">
          {!!props?.frame2609321 ? (
            <div className="border border-black-900_33 border-solid h-3 rounded-[50%] w-3"></div>
          ) : null}
          {!!props?.created ? (
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtMontserratRomanMedium14Black900"
            >
              {props?.created}
            </Text>
          ) : null}
        </div>
        <Img
          className="h-4 w-4"
          src="/images/img_arrowdown_black_900_12x12.svg"
          alt="arrowdown"
        />
      </div>
    </>
  );
};

Azmonk31TwentyTwoRowarrowdown.defaultProps = {};

export default Azmonk31TwentyTwoRowarrowdown;
