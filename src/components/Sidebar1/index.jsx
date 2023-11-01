import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <Img
          className="h-[30px] mt-[31px] mx-auto w-[100px]"
          src="/images/img_brandlogo.svg"
          alt="brandlogo"
        />
        <div className="flex flex-col items-start justify-start mb-[674px] mt-[7px] w-auto md:w-full">
          <div className="flex flex-row gap-3 items-center justify-start px-4 py-3 w-[245px] md:w-full">
            <Img
              className="h-6 w-6"
              src="/images/img_frame_white_a700.svg"
              alt="frame"
            />
            <Text
              className="text-sm text-white-A700_90 w-auto"
              size="txtMontserratRomanMedium14WhiteA70090"
            >
              Dashboard
            </Text>
          </div>
          <div className="bg-white-A700_0c border-light_blue-A700 border-r-4 border-solid flex flex-row gap-3 items-center justify-start px-4 py-3 w-[245px] md:w-full">
            <Img
              className="h-6 w-6"
              src="/images/img_frame_light_blue_a700_24x24.svg"
              alt="frame_One"
            />
            <Text
              className="text-light_blue-A700 text-sm w-auto"
              size="txtMontserratRomanMedium14LightblueA700"
            >
              Projects
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-center justify-start px-4 py-3 w-[245px] md:w-full">
            <Img
              className="h-6 w-6"
              src="/images/img_frame_white_a700_24x24.svg"
              alt="frame_Two"
            />
            <Text
              className="text-sm text-white-A700_90 w-auto"
              size="txtMontserratRomanMedium14WhiteA70090"
            >
              Clients/Suppliers
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-center justify-start px-4 py-3 w-[245px] md:w-full">
            <Img
              className="h-6 w-6"
              src="/images/img_frame_24x24.svg"
              alt="frame_Three"
            />
            <Text
              className="text-sm text-white-A700_90 w-auto"
              size="txtMontserratRomanMedium14WhiteA70090"
            >
              Admin
            </Text>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
