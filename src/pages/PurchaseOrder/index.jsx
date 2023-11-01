import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  List,
  Radio,
  SelectBox,
  Switch,
  Text,
} from "components";
import Sidebar2 from "components/Sidebar2";
import ProjectTop from "components/ProjectTop";
import Azmonk31TwentySevenRowarrowdownOne from "components/Azmonk31TwentySevenRowarrowdownOne";
import Azmonk31TwentyTwoRowarrowdown from "components/Azmonk31TwentyTwoRowarrowdown";
import POComp from "components/POComp";

const shippedOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const awaitingProofOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const shippedOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const awaitingProofOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const shippedOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const awaitingProofOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const shippedOptionsList3 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const awaitingProofOptionsList3 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PurchaseOrder = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar2 className="!sticky !w-[245px] bg-black-900 flex h-screen md:hidden justify-start outline outline-indigo-50 overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col font-inter items-center justify-start md:px-5 w-full">
            <div className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1194px] outline outline-indigo-50 sm:px-5 px-6 py-5 w-full">
              <div className="flex sm:flex-1 flex-row gap-4 items-center justify-start w-[26%] sm:w-full">
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
                <Text
                  className="text-gray-900_b2 text-sm"
                  size="txtInterRegular14"
                >
                  <span className="text-black-900_7f font-montserrat text-left font-normal">
                    Home / Projects /{" "}
                  </span>
                  <span className="text-black-900 font-montserrat text-left font-semibold">
                    Gift for Trainees
                  </span>
                </Text>
              </div>
              <div className="flex flex-row font-montserrat gap-5 items-center justify-start w-auto">
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
                >
                  <div className="font-medium text-left text-sm">Quick Add</div>
                </Button>
                <Button
                  className="flex h-10 items-center justify-center w-10"
                  shape="circle"
                  color="indigo_50"
                  variant="outline"
                >
                  <Img
                    className="h-5"
                    src="/images/img_frame_gray_900.svg"
                    alt="frame_Five"
                  />
                </Button>
                <div className="flex flex-row gap-3 items-start justify-start w-auto">
                  <Img
                    className="h-10 w-10"
                    src="/images/img_checkmark.svg"
                    alt="checkmark"
                  />
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="/images/img_ellipse1262.png"
                    alt="ellipse1262"
                  />
                </div>
              </div>
            </div>
            <ProjectTop />
            <div className="flex flex-col gap-4 items-start justify-start w-[97%] md:w-full">

                <Text className="font-semibold text-black-900 text-lg w-auto">
                  Purchase Order
                </Text>

              <List
                className="flex flex-col gap-4 items-center w-full"
                orientation="vertical"
              >
                <POComp
                  className="bg-white-A700 flex flex-1 flex-col gap-4 items-start justify-start  outline outline-[0.5px] outline-black-900_1e p-4 rounded-lg w-full"
                  descriptionOne={
                    <Text className="font-medium leading-[160.00%] text-black-900 text-sm">
                      <span className="text-black-900 font-montserrat text-left">
                        <>
                          Eco Hardcover Journal & Pen
                          <br />
                        </>
                      </span>
                      <span className="text-black-900 font-montserrat text-left">
                        Jornik Manufacturing{" "}
                      </span>
                      <span className="text-black-900 font-montserrat text-left">
                        <>&gt; </>
                      </span>
                      <span className="text-black-900 font-montserrat text-left">
                        What Promos
                      </span>
                    </Text>
                  }
                  edit="Edit"
                  duplicate="Duplicate"
                  viewMore="View more"
                />
                <POComp
                  className="bg-white-A700 flex flex-1 flex-col gap-4 items-start justify-start  outline outline-[0.5px] outline-black-900_1e p-4 rounded-lg w-full"
                  descriptionOne={
                    <Text className="font-medium leading-[160.00%] text-black-900 text-sm">
                      <span className="text-black-900 font-montserrat text-left">
                        <>
                          Eco Hardcover Journal & Pen
                          <br />
                        </>
                      </span>
                      <span className="text-black-900 font-montserrat text-left">
                        Jornik Manufacturing{" "}
                      </span>
                      <span className="text-black-900 font-montserrat text-left">
                        <>&gt; </>
                      </span>
                      <span className="text-black-900 font-montserrat text-left">
                        What Promos
                      </span>
                    </Text>
                  }
                  edit="Edit"
                  duplicate="Duplicate"
                  viewMore="View more"
                />
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseOrder;
