import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Radio, Switch, Text } from "components";
import ProjectTop from "components/ProjectTop";
import Sidebar1 from "components/Sidebar1";

const Commisions = () => {
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
          <div className="flex flex-col h-full items-start justify-start  px-5 w-full">
            <div className="flex flex-col w-full">
              <Text
                className="text-black-900 text-lg w-auto"
                size="txtMontserratRomanSemiBold18Black900"
              >
                Commissions
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start mt-4 outline outline-[0.5px] outline-indigo-50 rounded-lg w-full">
              <div className="flex flex-col items-start justify-start rounded-lg w-full">
                <div className="bg-gray-50 border-indigo-50 border-solid border-y flex md:flex-col flex-row gap-6 items-center justify-between max-w-[1147px] px-4 py-3 rounded-tl-lg rounded-tr-lg w-full">
                  <div className="flex flex-row gap-0.5 items-center justify-start w-[200px]">
                    <Text
                      className="text-black-900_7f text-sm w-auto"
                      size="txtMontserratRomanMedium14Black9007f"
                    >
                      REP
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="/images/img_arrowup.svg"
                      alt="arrowup"
                    />
                  </div>
                  <div className="flex flex-row gap-0.5 items-center justify-center w-[140px]">
                    <Text
                      className="text-black-900_7f text-sm w-auto"
                      size="txtMontserratRomanMedium14Black9007f"
                    >
                      ep
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="/images/img_arrowup.svg"
                      alt="arrowup_One"
                    />
                  </div>
                  <div className="flex flex-row gap-0.5 items-center justify-start w-[107px]">
                    <Text
                      className="text-black-900_7f text-sm w-auto"
                      size="txtMontserratRomanMedium14Black9007f"
                    >
                      Commission
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="/images/img_arrowup.svg"
                      alt="arrowup_Two"
                    />
                  </div>
                  <div className="flex flex-row gap-0.5 items-center justify-center w-[200px]">
                    <Text
                      className="text-black-900_7f text-sm w-auto"
                      size="txtMontserratRomanMedium14Black9007f"
                    >
                      Total
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="/images/img_arrowup.svg"
                      alt="arrowup_Three"
                    />
                  </div>
                  <div className="flex flex-row gap-0.5 items-start justify-start w-[140px]">
                    <Text
                      className="text-black-900_7f text-sm w-auto"
                      size="txtMontserratRomanMedium14Black9007f"
                    >
                      Paid/Unpaid
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="/images/img_arrowup.svg"
                      alt="arrowup_Four"
                    />
                  </div>
                  <div className="flex flex-row gap-0.5 items-center justify-start w-[60px]">
                    <Text
                      className="text-black-900_7f text-sm w-auto"
                      size="txtMontserratRomanMedium14Black9007f"
                    >
                      Notes
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="/images/img_arrowup.svg"
                      alt="arrowup_Five"
                    />
                  </div>
                  <div className="flex flex-row gap-0.5 items-center justify-start w-[60px]">
                    
                  </div>
                </div>
                <List
                  className="flex flex-col gap-px items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row gap-6 items-center justify-between max-w-[1147px] outline outline-indigo-50 px-4 py-3 w-full">
                    <div
                      className="common-pointer flex flex-col items-start justify-start w-[200px]"
                      onClick={() => navigate("/azmonk31five")}
                    >
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtMontserratRomanSemiBold14"
                      >
                        Jason Brown
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[140px]">
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtMontserratRegular14Black900"
                      >
                        ClientRep
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100px]">
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtMontserratRegular14Black900"
                      >
                        2% of margin
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[200px]">
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtMontserratRegular14Black900"
                      >
                        0
                      </Text>
                    </div>

                    <div className="flex flex-col items-start justify-start w-[140px]">
                      <div
                        className="bg-[#009e6014]  flex flex-col items-center justify-start outline outline-[0.5px] outline-[#009e6033] px-3 py-1.5 rounded-[13px] w-auto sm:w-full"
                      >
                        <Radio
                          value="Paid"
                          className="font-medium leading-[normal] text-black-900 text-left text-xs"
                          inputClassName="bg-teal-600 border border-teal-600 border-solid h-3 mr-[5px] rounded-md w-3"
                          checked={false}
                          name="closed"
                          label="Paid"
                          id="paid"
                        ></Radio>
                      </div>
                    </div>
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtMontserratRegular14Black900"
                    >
                      None
                    </Text>
                    <Img
                      className="h-9 w-[60px]"
                      src="/images/img_frame2609280.svg"
                      alt="frame2609280"
                    />
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row gap-6 items-center justify-between max-w-[1147px] outline outline-indigo-50 px-4 py-3 w-full">
                    <div
                      className="common-pointer flex flex-col items-start justify-start w-[200px]"
                      onClick={() => navigate("/azmonk31five")}
                    >
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtMontserratRomanSemiBold14"
                      >
                        Austin White
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[140px]">
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtMontserratRegular14Black900"
                      >
                        OrderRep
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100px]">
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtMontserratRegular14Black900"
                      >
                        4% of margin
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[200px]">
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtMontserratRegular14Black900"
                      >
                        0
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[140px]">
                      <div className="bg-black-900_0a flex flex-col items-center justify-start outline outline-[0.5px] outline-black-900_14 px-3 py-1.5 rounded-[13px] w-auto sm:w-full">
                        <Radio
                          value="Unpaid"
                          className="font-medium leading-[normal] text-black-900 text-left text-xs"
                          inputClassName="bg-gray-400_01 border border-gray-400_33 border-solid h-3 mr-[5px] rounded-md w-3"
                          checked={false}
                          name="closed"
                          label="Unpaid"
                          id="Unpaid"
                        ></Radio>
                      </div>
                    </div>
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtMontserratRegular14Black900"
                    >
                      None
                    </Text>
                    <Img
                      className="h-9 w-[60px]"
                      src="/images/img_frame2609280.svg"
                      alt="frame2609477"
                    />
                  </div>
                </List>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[37px] items-center justify-between max-w-[1147px] mt-8 w-full">
              <div className="flex flex-row gap-3 items-center justify-start w-1/2">
                <Text
                  className="text-black-900 text-xs w-auto"
                  size="txtMontserratRegular12"
                >
                  Rows per page
                </Text>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[22px] items-center justify-end p-[3px] w-[18%]"
                  style={{
                    backgroundImage: "url('image/img_group2609273.svg')",
                  }}
                >
                  <div className="flex flex-row gap-[3px] items-center justify-start w-auto">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtMontserratRegular12"
                    >
                      10
                    </Text>
                    <Img
                      className="h-3 w-3"
                      src="/images/img_arrowdown_black_900_12x12.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <Text
                  className="text-black-900 text-xs w-auto"
                  size="txtMontserratRegular12"
                >
                  1 – 10 of 60 items
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-start justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="/images/img_arrowleft.svg"
                  alt="arrowleft"
                />
                <Text
                  className="bg-light_blue-A700 flex h-6 items-center justify-center rounded-md text-center text-sm text-white-A700 w-6"
                  size="txtMontserratRegular14WhiteA700"
                >
                  1
                </Text>
                <Text
                  className="bg-white-A700 flex h-6 items-center justify-center outline outline-[0.5px] outline-black-900_19 rounded-md text-black-900_99 text-center text-sm w-6"
                  size="txtMontserratRegular14Black90099"
                >
                  2
                </Text>
                <Text
                  className="bg-white-A700 flex h-6 items-center justify-center outline outline-[0.5px] outline-black-900_19 rounded-md text-black-900_99 text-center text-sm w-6"
                  size="txtMontserratRegular14Black90099"
                >
                  3
                </Text>
                <Text
                  className="bg-white-A700 flex h-6 items-center justify-center outline outline-[0.5px] outline-black-900_19 rounded-md text-black-900_99 text-center text-sm w-6"
                  size="txtMontserratRegular14Black90099"
                >
                  4
                </Text>
                <Text
                  className="bg-white-A700 flex h-6 items-center justify-center outline outline-[0.5px] outline-black-900_19 rounded-md text-black-900_99 text-center text-sm w-6"
                  size="txtMontserratRegular14Black90099"
                >
                  5
                </Text>
                <Text
                  className="bg-white-A700 flex h-6 items-center justify-center outline outline-[0.5px] outline-black-900_19 rounded-md text-black-900_99 text-center text-sm w-6"
                  size="txtMontserratRegular14Black90099"
                >
                  6
                </Text>
                <Img
                  className="h-6 w-6"
                  src="/images/img_arrowleft.svg"
                  alt="arrowleft_One"
                />
              </div>
            </div>
            <div className="bg-gray-50 flex flex-col gap-4 items-start justify-start mt-6 outline outline-[0.5px] outline-black-900_14 p-3 rounded-lg w-auto min-w-[30%]">
              <div className="flex flex-row  items-start justify-between w-full">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtMontserratRomanSemiBold16"
                >
                  Submit (all invoices):
                </Text>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtMontserratRegular16Black900"
                >
                  $4627.15
                </Text>
              </div>
              <div className="flex flex-row  items-start justify-between w-full">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtMontserratRomanSemiBold16"
                >
                  Billed Margin Amount:
                </Text>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtMontserratRegular16Black900"
                >
                  $4627.15
                </Text>
              </div>
              <div className="flex flex-row  items-start justify-between w-full">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtMontserratRomanSemiBold16"
                >
                  Billed Margin:
                </Text>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtMontserratRegular16Black900"
                >
                  0.00%
                </Text>
              </div>
              <div className="flex flex-row  items-start justify-between w-full">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtMontserratRomanSemiBold16"
                >
                  Booked Margin:
                </Text>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtMontserratRegular16Black900"
                >
                  39246.51%
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commisions;
