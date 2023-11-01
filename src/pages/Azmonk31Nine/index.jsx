import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Switch, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import ProjectTop from "components/ProjectTop";

const Azmonk31NinePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[245px] bg-black-900 flex h-screen md:hidden justify-start outline outline-indigo-50 overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col font-inter items-start justify-start overflow-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
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
                    <div className="font-medium text-left text-sm">
                      Quick Add
                    </div>
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
            </div>
            <div className="flex md:flex-col flex-row font-montserrat gap-6 items-start justify-start ml-6 md:ml-[0] w-[96%] md:w-full">
              <div className="flex flex-col items-start justify-start md:mt-0 mt-6 w-50 ">
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="mt-[3px] text-gray-900 text-lg"
                    size="txtMontserratRomanSemiBold18"
                  >
                    Project Details
                  </Text>
                  <div className="flex flex-row gap-1 items-center justify-start py-1 w-auto">
                    <Img
                      className="h-3.5 w-3.5"
                      src="/images/img_edit.svg"
                      alt="edit"
                    />
                    <Text
                      className="text-base text-light_blue-A700 underline w-auto"
                      size="txtMontserratRomanMedium16LightblueA700"
                    >
                      Edit
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row font-inter items-center justify-between mt-9 w-[88%] md:w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <Text
                      className="text-base text-gray-900_b2 w-auto"
                      size="txtInterRegular16"
                    >
                      Job Name
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtInterMedium16"
                    >
                      Gifts for Trainees
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <Text
                      className="text-base text-gray-900_b2 w-auto"
                      size="txtInterRegular16"
                    >
                      Created Date
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtInterMedium16"
                    >
                      07 June 2023
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row font-inter items-center justify-between mt-[34px] w-[88%] md:w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <Text
                      className="text-base text-gray-900_b2 w-auto"
                      size="txtInterRegular16"
                    >
                      In Hands Date
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtInterMedium16"
                    >
                      07 July 2023
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <Text
                      className="text-base text-gray-900_b2 w-auto"
                      size="txtInterRegular16"
                    >
                      Client Contact
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtInterMedium16"
                    >
                      Tiffiany White
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row font-inter items-center justify-between mt-[34px] w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <Text
                      className="text-base text-gray-900_b2 w-auto"
                      size="txtInterRegular16"
                    >
                      Client Representative
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtInterMedium16"
                    >
                      Jason Brown
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <Text
                      className="text-base text-gray-900_b2 w-auto"
                      size="txtInterRegular16"
                    >
                      Order Representative
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtInterMedium16"
                    >
                      Jason Brown
                    </Text>
                  </div>
                </div>
                <Button
                  className="!text-black-900 border border-gray-900_1e border-solid cursor-pointer font-medium mt-10 text-center text-sm w-[436px]"
                  shape="round"
                  size="md"
                >
                  See all
                </Button>
              </div>
              <Line className="bg-indigo-50 h-[678px] md:h-px md:w-full w-px" />
              <div className="flex flex-col gap-[23px] items-start justify-start md:mt-0 mt-6 w-full ">
                <Text
                  className="text-gray-900 text-lg"
                  size="txtMontserratRomanSemiBold18"
                >
                  Recent activity
                </Text>
                <div className="sm:h-[592px] h-[608px] md:h-[749px] relative w-full">
                  <Line className="absolute bg-indigo-50 h-[592px] inset-y-[0] left-[10px] my-auto w-0.5" />
                  <List
                    className="absolute bottom-[16%] flex flex-col gap-7 inset-x-[0] items-center mx-auto w-[99%]"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row gap-[29px] items-start justify-between w-full">
                      <div className="bg-indigo-50 h-[15px] mb-[65px] rounded-[7px] w-[15px]"></div>
                      <div className="flex md:flex-1 flex-row sm:gap-10 items-start justify-between w-[600px] md:w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-auto">
                          <div className="flex flex-col gap-2 items-start justify-start w-auto">
                            <div className="flex flex-row font-inter gap-2 items-center justify-start w-auto">
                              <div className="flex flex-col h-5 items-center justify-start w-5">
                                <Text
                                  className="bg-pink-200 flex h-5 items-center justify-center rounded-[50%] text-[10px] text-center text-gray-600_01 w-5"
                                  size="txtInterSemiBold10"
                                >
                                  PP
                                </Text>
                              </div>
                              <Text
                                className="text-black-900_b2 text-sm w-auto"
                                size="txtInterRegular14Black900b2"
                              >
                                <span className="text-black-900_b2 font-montserrat text-left font-normal">
                                  Prakul Pareek added{" "}
                                </span>
                                <span className="text-black-900_b2 font-montserrat text-left font-semibold">
                                  comment
                                </span>
                              </Text>
                            </div>
                            <Text
                              className="italic text-black-900_66 text-sm w-auto"
                              size="txtMontserratItalicRegular14"
                            >
                              I have completed 100 sales order.
                            </Text>
                          </div>
                          <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                            <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
                              <Img
                                className="h-4 w-4"
                                src="/images/img_arrowdown_light_blue_a700.svg"
                                alt="arrowdown"
                              />
                              <Text
                                className="text-light_blue-A700 text-xs w-auto"
                                size="txtMontserratRomanMedium12"
                              >
                                5 comments
                              </Text>
                            </div>
                            <div className="bg-black-900_1e h-1 rounded-[50%] w-1"></div>
                            <Text
                              className="text-black-900 text-xs w-auto"
                              size="txtMontserratRomanMedium12Black900"
                            >
                              Add Comment
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="text-black-900_66 text-right text-sm w-auto"
                          size="txtMontserratRegular14Black90066"
                        >
                          5 minutes ago
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-7 items-start justify-between w-full">
                      <div className="bg-indigo-50 h-[15px] mb-[100px] rounded-[7px] w-[15px]"></div>
                      <div className="flex md:flex-1 flex-row sm:gap-10 items-start justify-between w-[600px] md:w-full">
                        <div className="flex flex-col font-inter gap-4 items-start justify-start w-auto">
                          <div className="flex flex-col gap-3 items-start justify-start w-auto">
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <div className="flex flex-col h-5 items-center justify-start w-5">
                                <Text
                                  className="bg-green-A100 flex h-5 items-center justify-center rounded-[50%] text-[10px] text-center text-gray-700 w-5"
                                  size="txtInterSemiBold10Gray700"
                                >
                                  JR
                                </Text>
                              </div>
                              <Text
                                className="text-black-900_b2 text-sm w-auto"
                                size="txtInterRegular14Black900b2"
                              >
                                <span className="text-black-900_b2 font-montserrat text-left font-normal">
                                  Jason Roy added{" "}
                                </span>
                                <span className="text-black-900_b2 font-montserrat text-left font-semibold">
                                  file
                                </span>
                              </Text>
                            </div>
                            <div className="flex flex-row font-montserrat gap-2 items-center justify-start outline outline-[1px] outline-indigo-50 rounded-lg w-[164px]">
                              <Img
                                className="h-12 md:h-auto object-cover rounded-bl-lg rounded-tl-lg w-12"
                                src="/images/img_rectangle187511.png"
                                alt="rectangle187511"
                              />
                              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                                <Text
                                  className="text-black-900_b2 text-sm w-auto"
                                  size="txtMontserratRegular14Black900b2"
                                >
                                  Invoice.png
                                </Text>
                                <Text
                                  className="text-black-900_7f text-sm w-auto"
                                  size="txtMontserratRegular14"
                                >
                                  550 kB
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col font-montserrat items-center justify-start w-auto">
                            <Text
                              className="text-black-900 text-xs w-auto"
                              size="txtMontserratRomanMedium12Black900"
                            >
                              Add Comment
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="text-black-900_66 text-right text-sm w-auto"
                          size="txtMontserratRegular14Black90066"
                        >
                          10 minutes ago
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-7 items-start justify-between w-full">
                      <div className="bg-indigo-50 h-[15px] mb-[94px] rounded-[7px] w-[15px]"></div>
                      <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between w-[600px] md:w-full">
                        <div className="flex flex-col font-inter gap-4 items-start justify-start w-[460px] sm:w-full">
                          <div className="flex flex-col gap-3 items-start justify-start w-auto">
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <div className="flex flex-col h-5 items-center justify-start w-5">
                                <Text
                                  className="bg-deep_orange-100_01 flex h-5 items-center justify-center rounded-[50%] text-[10px] text-center text-gray-600_02 w-5"
                                  size="txtInterSemiBold10Gray60002"
                                >
                                  RS
                                </Text>
                              </div>
                              <Text
                                className="text-black-900_b2 text-sm w-auto"
                                size="txtInterRegular14Black900b2"
                              >
                                <span className="text-black-900_b2 font-montserrat text-left font-normal">
                                  Rory Shukla added{" "}
                                </span>
                                <span className="text-black-900_b2 font-montserrat text-left font-semibold">
                                  task
                                </span>
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start w-auto">
                              <Text
                                className="text-black-900_66 text-sm w-auto"
                                size="txtInterRegular14Black90066"
                              >
                                <span className="text-black-900_66 font-montserrat text-left font-normal italic">
                                  Assigned User :{" "}
                                </span>
                                <a
                                  href="javascript:"
                                  className="text-black-900_66 font-montserrat text-left font-normal underline italic"
                                >
                                  Jason Roy
                                </a>
                              </Text>
                              <Text
                                className="italic text-black-900_66 text-sm w-auto"
                                size="txtMontserratItalicRegular14"
                              >
                                Due Date : 15 Aug 2023
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row font-montserrat gap-1.5 items-center justify-start w-auto">
                            <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
                              <Img
                                className="h-4 w-4"
                                src="/images/img_arrowdown_light_blue_a700.svg"
                                alt="arrowdown"
                              />
                              <Text
                                className="text-light_blue-A700 text-xs w-auto"
                                size="txtMontserratRomanMedium12"
                              >
                                5 comments
                              </Text>
                            </div>
                            <div className="bg-black-900_1e h-1 rounded-[50%] w-1"></div>
                            <Text
                              className="text-black-900 text-xs w-auto"
                              size="txtMontserratRomanMedium12Black900"
                            >
                              Add Comment
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="text-black-900_66 text-right text-sm w-auto"
                          size="txtMontserratRegular14Black90066"
                        >
                          Yesterday
                        </Text>
                      </div>
                    </div>
                  </List>
                  <Img
                    className="absolute h-10 left-[-10px] rounded-[50%] top-[0] w-10"
                    src="/images/img_ellipse1262.png"
                    alt="ellipse1262_One"
                  />
                  <div className="absolute bg-gray-50 flex flex-col items-center justify-end outline outline-[0.5px] outline-indigo-50 py-4 right-[0] rounded-lg top-[0] w-[92%]">
                    <div className="flex flex-col gap-[13px] justify-start w-full">
                      <Text
                        className="ml-4 md:ml-[0] text-black-900 text-sm"
                        size="txtMontserratRomanMedium14"
                      >
                        Let’s Plan the marketing budget for June 23’
                      </Text>
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <Line className="bg-indigo-50 h-px w-full" />
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[97%] md:w-full">
                          <div className="flex flex-row gap-1 items-center justify-center px-3 py-2 w-auto">
                            <Img
                              className="h-5 w-5"
                              src="/images/img_frame_black_900_20x20.svg"
                              alt="frame_Six"
                            />
                            <Text
                              className="text-black-900 text-sm w-auto"
                              size="txtMontserratRomanMedium14"
                            >
                              Attach File
                            </Text>
                          </div>
                          <Button
                            className="border border-gray-900_1e border-solid cursor-pointer flex items-center justify-center min-w-[113px] sm:ml-[0] ml-[269px]"
                            leftIcon={
                              <Img
                                className="h-5 mr-[3px]"
                                src="/images/img_checkmark_black_900_20x20.svg"
                                alt="checkmark"
                              />
                            }
                            shape="round"
                          >
                            <div className="!text-black-900 font-medium text-left text-sm">
                              Add Task
                            </div>
                          </Button>
                          <Button
                            className="cursor-pointer font-medium min-w-[64px] ml-2.5 sm:ml-[0] text-center text-sm"
                            shape="round"
                            color="black_900"
                          >
                            Post
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Azmonk31NinePage;
