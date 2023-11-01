import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Switch, Text } from "components";
import ProjectTop from "components/ProjectTop";
import Sidebar1 from "components/Sidebar1";

const normalOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const arialOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Feedback = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto w-full">
      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
        <Sidebar1 className="!sticky !w-[245px] bg-black-900 flex h-screen md:hidden justify-start outline outline-indigo-50 overflow-auto md:px-5 top-[0]" />
        <div className="flex flex-1 flex-col font-inter items-start justify-start overflow-auto md:px-5 w-full">
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
          <div className="bg-white-A700 flex font-montserrat mx-auto relative w-full">
            <div className="flex flex-col h-full items-start justify-start mb-[185px] mr-6 mt-auto px-6 w-full">
              <div className="flex flex-col max-w-[1147px] ml-1 md:ml-[0] w-full">
                <Text
                  className="text-black-900 text-lg w-auto"
                  size="txtMontserratRomanSemiBold18Black900"
                >
                  Compose Mail
                </Text>
              </div>
              <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-col items-start justify-start max-w-[1147px] mt-4 rounded-lg w-full">
                <div className="border-b border-black-900_28 border-solid flex flex-row gap-2 items-start justify-start p-3 w-full">
                  <Text
                    className="text-black-900_99 text-sm w-auto"
                    size="txtMontserratRegular14Black90099"
                  >
                    From:
                  </Text>
                  <Text
                    className="text-black-900_66 text-sm w-auto"
                    size="txtMontserratRegular14Black90066"
                  >
                    noreply@azmonk.com
                  </Text>
                </div>
                <div className="border-b border-black-900_28 border-solid flex sm:flex-col flex-row gap-2 items-center justify-between p-3 w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-black-900_99 text-sm w-auto"
                      size="txtMontserratRegular14Black90099"
                    >
                      To:
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[328px]"
                      rightIcon={
                        <Img
                          className="h-4 mb-0.5 ml-2"
                          src="/images/img_close.svg"
                          alt="close"
                        />
                      }
                      shape="round"
                      color="black_900_19"
                      size="md"
                      variant="fill"
                    >
                      <div className="font-medium leading-[normal] text-left text-sm">
                        <>Jornik Manufacturing &lt;sales.jornik.com&gt;</>
                      </div>
                    </Button>
                  </div>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtMontserratRomanMedium14Black900"
                  >
                    Cc | Bcc
                  </Text>
                </div>
                <div className="border-b border-black-900_28 border-solid flex flex-row gap-2 items-start justify-start p-3 w-full">
                  <Text
                    className="text-black-900_99 text-sm w-auto"
                    size="txtMontserratRegular14Black90099"
                  >
                    Subject:
                  </Text>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtMontserratRomanMedium14Black900"
                  >
                    Bel Promo - PO 1005
                  </Text>
                </div>
                <div className="border-b border-black-900_28 border-solid flex flex-row gap-2 items-center justify-start p-3 w-full">
                  <Text
                    className="text-black-900_99 text-sm w-auto"
                    size="txtMontserratRegular14Black90099"
                  >
                    Includes:
                  </Text>
                  <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                    <div className="bg-light_blue-A700 flex flex-col h-4 items-center justify-start p-1 rounded w-4">
                      <Img
                        className="h-[5px]"
                        src="/images/img_vector.svg"
                        alt="vector"
                      />
                    </div>
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtMontserratRomanMedium14Black900"
                    >
                      PDF
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start p-3 w-full">
                  <Text
                    className="text-black-900_99 text-sm w-auto"
                    size="txtMontserratRegular14Black90099"
                  >
                    Attachments:
                  </Text>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtMontserratRomanMedium14Black900"
                  >
                    Bel Promo - PO 1005
                  </Text>
                </div>
              </div>
              <div className="bg-gray-50 border-b border-black-900_28 border-solid flex flex-col items-center justify-start max-w-[1147px] mt-4 p-3 rounded-tl rounded-tr w-full">
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                  <SelectBox
                    className="sm:flex-1 font-medium leading-[normal] text-black-900_99 text-left text-sm w-[8%] sm:w-full"
                    placeholderClassName="text-black-900_99"
                    indicator={
                      <Img
                        className="h-6 w-6"
                        src="/images/img_frame_2609304.svg"
                        alt="Frame 2609304"
                      />
                    }
                    isMulti={false}
                    name="frame2609305"
                    options={normalOptionsList}
                    isSearchable={false}
                    placeholder="Normal"
                  />
                  <Line className="bg-black-900_19 h-5 sm:h-px rounded-[1px] sm:w-full w-px" />
                  <SelectBox
                    className="sm:flex-1 font-medium leading-[normal] text-black-900_99 text-left text-sm w-[4%] sm:w-full"
                    placeholderClassName="text-black-900_99"
                    indicator={
                      <Img
                        className="h-6 w-6"
                        src="/images/img_frame_2609304.svg"
                        alt="Frame 2609304"
                      />
                    }
                    isMulti={false}
                    name="frame2609306"
                    options={optionsList}
                    isSearchable={false}
                    placeholder="16"
                  />
                  <Line className="bg-black-900_19 h-5 sm:h-px rounded-[1px] sm:w-full w-px" />
                  <SelectBox
                    className="sm:flex-1 font-medium leading-[normal] text-black-900_99 text-left text-sm w-[6%] sm:w-full"
                    placeholderClassName="text-black-900_99"
                    indicator={
                      <Img
                        className="h-6 w-6"
                        src="/images/img_frame_2609304.svg"
                        alt="Frame 2609304"
                      />
                    }
                    isMulti={false}
                    name="frame2609307"
                    options={arialOptionsList}
                    isSearchable={false}
                    placeholder="Arial"
                  />
                  <Line className="bg-black-900_19 h-5 sm:h-px rounded-[1px] sm:w-full w-px" />
                  <Img
                    className="h-6 w-24"
                    src="/images/img_mail_black_900.svg"
                    alt="mail"
                  />
                  <Line className="bg-black-900_19 h-5 sm:h-px rounded-[1px] sm:w-full w-px" />
                  <Img
                    className="h-6 w-[130px]"
                    src="/images/img_frame2609310.svg"
                    alt="frame2609310"
                  />
                  <Line className="bg-black-900_19 h-5 sm:h-px rounded-[1px] sm:w-full w-px" />
                </div>
              </div>
              <Text
                className="leading-[160.00%] ml-3 md:ml-[0] mt-[21px] text-base text-black-900"
                size="txtMontserratRomanSemiBold16"
              >
                <span className="text-black-900 font-montserrat text-left font-normal">
                  <>
                    Hello Team
                    <br />
                    This is sample of feedback please have a look and let me
                    know if any changes required
                    <br />
                    URL :{" "}
                  </>
                </span>
                <span className="text-black-900 font-montserrat text-left font-normal">
                  <>
                    https://stg.azmonk.com/feedback/preview/652966024aeeedf98c7211f1
                    <br />
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-montserrat text-left font-normal">
                  <>
                    Thanks,
                    <br />
                    AWS CRM Team
                  </>
                </span>
              </Text>
              <Line className="bg-black-900_1e h-px mt-6 w-full" />
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[1053px] mt-6 w-auto">
                <Button
                  className="cursor-pointer font-medium min-w-[94px] text-center text-sm"
                  shape="round"
                  color="black_900"
                  size="md"
                  variant="fill"
                >
                  Send Mail
                </Button>
              </div>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
