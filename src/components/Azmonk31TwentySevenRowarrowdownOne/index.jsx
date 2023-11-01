import React from "react";

import { Img, Text } from "components";

const Azmonk31TwentySevenRowarrowdownOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-1 items-center justify-start w-auto">
          {!!props?.frame2609321one ? (
            <div className="border border-black-900_33 border-solid h-3 rounded-[50%] w-3"></div>
          ) : null}
          {!!props?.createdOne ? (
            <Text
              className="text-black-900 text-xs w-auto"
              size="txtMontserratRomanMedium12Black900"
            >
              {props?.createdOne}
            </Text>
          ) : null}
        </div>
        <Img
          className="h-3 w-3"
          src="/images/img_arrowdown_black_900_12x12.svg"
          alt="arrowdown_One"
        />
      </div>
    </>
  );
};

Azmonk31TwentySevenRowarrowdownOne.defaultProps = {};

export default Azmonk31TwentySevenRowarrowdownOne;
