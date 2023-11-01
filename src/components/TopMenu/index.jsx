import React from "react";

import { Button, Img, Input, Text } from "components";
import { CloseSVG } from "assets/images";

const TopMenu = (props) => {
  const [frame53369value, setFrame53369value] = React.useState("");

  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="flex flex-row gap-4 items-center justify-start w-auto">
          <Button
                className="flex h-8 items-center justify-center w-8"
                shape="round"
                color="indigo_50"
                variant="outline"
              >
                <Img
                  className="h-[17px]"
                  src="/images/img_frame_black_900_32x32.svg"
                  alt="frame_Four"
                />
              </Button>
            {props?.searchtext}
          </div>
          <Input
            name="frame53369"
            placeholder="Search projects, clients, suppliers etc "
            value={frame53369value}
            onChange={(e) => setFrame53369value(e)}
            className="!placeholder:text-black-900_66 !text-black-900_66 font-montserrat leading-[normal] p-0 text-left text-sm w-full"
            wrapClassName="flex md:flex-1 rounded-lg w-[400px] md:w-full"
            suffix={
              frame53369value?.length > 0 ? (
                <CloseSVG
                  className="mt-auto mb-px cursor-pointer h-5 ml-[35px]"
                  onClick={() => setFrame53369value("")}
                  fillColor="#0b150f66"
                  height={20}
                  width={20}
                  viewBox="0 0 20 20"
                />
              ) : (
                <Img
                  className="mt-auto mb-px cursor-pointer h-5 ml-[35px]"
                  src="/images/img_search.svg"
                  alt="search"
                />
              )
            }
            color="gray_50"
            size="md"
            variant="fill"
          ></Input>
          <div className="flex flex-row gap-5 items-center justify-start w-auto">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[119px]"
              leftIcon={
                <Img
                  className="h-4 mr-1 my-px"
                  src="/images/img_frame_white_a700_16x16.svg"
                  alt="Frame"
                />
              }
              shape="round"
              color="light_blue_A700"
              size="md"
              variant="fill"
            >
              <div className="font-medium font-montserrat text-left text-sm">
                {props?.quickaddbutton}
              </div>
            </Button>
            <div className="flex flex-row gap-3 items-start justify-start w-auto">
              <Img
                className="h-10 w-10"
                src="/images/img_checkmark.svg"
                alt="checkmark"
              />
              {/* <Img className="h-10 w-10" src="images/img_checkmark_gray_100.svg" alt="checkmark" /> */}
              {!!props?.userimage ? (
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  alt="ellipse1262"
                  src={props?.userimage}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TopMenu.defaultProps = {
  searchtext: (
    <Text className="font-inter text-gray-900_b2 text-sm w-auto">
      <span className="text-black-900_7f font-montserrat text-left font-normal">
        Home / Projects /{" "}
      </span>
      <span className="text-black-900 font-montserrat text-left font-semibold">
        Gift for Trainees
      </span>
    </Text>
  ),
  quickaddbutton: "Quick Add",
};

export default TopMenu;
