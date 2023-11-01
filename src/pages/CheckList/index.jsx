import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, SelectBox, Switch, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import ProjectTop from "components/ProjectTop";
import SideDrawer from "components/SideDrawer";
import { Collapse } from "@mui/material";

const checklistHistoryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CheckList = () => {
  const [open, setOpen] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[245px] bg-black-900 flex h-screen md:hidden justify-start outline outline-indigo-50 overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col items-start justify-start overflow-auto md:px-5 w-full">
            <div className="bg-white-A700 flex sm:flex-col flex-row font-inter md:gap-10 items-center justify-between max-w-[1194px] outline outline-indigo-50 sm:px-5 px-6 py-5 w-full">
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
            <Text
              className="ml-6 md:ml-[0] mt-[22px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtMontserratRomanSemiBold24"
            >
              Checklist
            </Text>
            <div className="flex flex-col font-montserrat items-start justify-start max-w-[1122px] ml-6 md:ml-[0] mt-6 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start outline outline-[0.5px] outline-black-900_1e p-4 rounded-lg w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-row gap-2 items-start justify-between w-full">
                        <Text
                          className="leading-[150.00%] max-w-[300px] md:max-w-full text-base text-black-900"
                          size="txtMontserratRomanSemiBold16"
                        >
                          Presentation - Self-audit checklist before creating a
                          presentation
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="/images/img_arrowright_black_900.svg"
                          alt="arrowright"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-1/5 md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-auto">
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Button
                                className="flex h-5 items-center justify-center rounded-[50%] w-5"
                                shape="circle"
                                color="black_900"
                                size="xs"
                              >
                                <Img
                                  onClick={() => setOpen(true)}
                                  className="h-3"
                                  src="/images/img_frame_white_a700_20x20.svg"
                                  alt="frame"
                                />
                              </Button>
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtMontserratRomanMedium14"
                              >
                                Item Color
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Button
                                className="flex h-5 items-center justify-center rounded-[50%] w-5"
                                shape="circle"
                                color="black_900"
                                size="xs"
                              >
                                <Img
                                  className="h-3"
                                  src="/images/img_frame_white_a700_20x20.svg"
                                  alt="frame_One"
                                />
                              </Button>
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtMontserratRomanMedium14"
                              >
                                Item Size
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Text
                        className="text-black-900_7f text-sm underline w-auto"
                        size="txtMontserratRomanMedium14Black9007f"
                        onClick={() => setOpen(true)}
                      >
                        View more
                      </Text>
                      <div className="flex flex-row gap-3 items-center justify-start w-auto">
                        <div className="h-2 overflow-hidden relative w-[56%]">
                          <div className="w-full h-full absolute bg-black_900_61 rounded-[4px]"></div>
                          <div
                            className="h-full absolute bg-light_blue_A700  rounded-[4px]"
                            style={{ width: "38%" }}
                          ></div>
                        </div>
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtMontserratRomanSemiBold14"
                        >
                          3/8 items
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start outline outline-[0.5px] outline-black-900_1e p-4 rounded-lg w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-row gap-2 items-start justify-between w-full">
                        <Text
                          className="leading-[150.00%] max-w-[300px] md:max-w-full text-base text-black-900"
                          size="txtMontserratRomanSemiBold16"
                        >
                          Presentation - Self-audit checklist before creating a
                          presentation
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="/images/img_arrowright_black_900.svg"
                          alt="arrowright"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-1/5 md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-auto">
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Button
                                className="flex h-5 items-center justify-center rounded-[50%] w-5"
                                shape="circle"
                                color="black_900"
                                size="xs"
                              >
                                <Img
                                  className="h-3"
                                  src="/images/img_frame_white_a700_20x20.svg"
                                  alt="frame"
                                />
                              </Button>
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtMontserratRomanMedium14"
                              >
                                Item Color
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Button
                                className="flex h-5 items-center justify-center rounded-[50%] w-5"
                                shape="circle"
                                color="black_900"
                                size="xs"
                              >
                                <Img
                                  className="h-3"
                                  src="/images/img_frame_white_a700_20x20.svg"
                                  alt="frame_One"
                                />
                              </Button>
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtMontserratRomanMedium14"
                              >
                                Item Size
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Text
                        className="text-black-900_7f text-sm underline w-auto"
                        size="txtMontserratRomanMedium14Black9007f"
                      >
                        View more
                      </Text>
                      <div className="flex flex-row gap-3 items-center justify-start w-auto">
                        <div className="h-2 overflow-hidden relative w-[56%]">
                          <div className="w-full h-full absolute bg-black_900_61 rounded-[4px]"></div>
                          <div
                            className="h-full absolute bg-light_blue_A700  rounded-[4px]"
                            style={{ width: "38%" }}
                          ></div>
                        </div>
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtMontserratRomanSemiBold14"
                        >
                          3/8 items
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start outline outline-[0.5px] outline-black-900_1e p-4 rounded-lg w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-row gap-2 items-start justify-between w-full">
                        <Text
                          className="leading-[150.00%] max-w-[300px] md:max-w-full text-base text-black-900"
                          size="txtMontserratRomanSemiBold16"
                        >
                          Presentation - Self-audit checklist before creating a
                          presentation
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="/images/img_arrowright_black_900.svg"
                          alt="arrowright"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-1/5 md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-auto">
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Button
                                className="flex h-5 items-center justify-center rounded-[50%] w-5"
                                shape="circle"
                                color="black_900"
                                size="xs"
                              >
                                <Img
                                  className="h-3"
                                  src="/images/img_frame_white_a700_20x20.svg"
                                  alt="frame"
                                />
                              </Button>
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtMontserratRomanMedium14"
                              >
                                Item Color
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Button
                                className="flex h-5 items-center justify-center rounded-[50%] w-5"
                                shape="circle"
                                color="black_900"
                                size="xs"
                              >
                                <Img
                                  className="h-3"
                                  src="/images/img_frame_white_a700_20x20.svg"
                                  alt="frame_One"
                                />
                              </Button>
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtMontserratRomanMedium14"
                              >
                                Item Size
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Text
                        className="text-black-900_7f text-sm underline w-auto"
                        size="txtMontserratRomanMedium14Black9007f"
                      >
                        View more
                      </Text>
                      <div className="flex flex-row gap-3 items-center justify-start w-auto">
                        <div className="h-2 overflow-hidden relative w-[56%]">
                          <div className="w-full h-full absolute bg-black_900_61 rounded-[4px]"></div>
                          <div
                            className="h-full absolute bg-light_blue_A700  rounded-[4px]"
                            style={{ width: "38%" }}
                          ></div>
                        </div>
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtMontserratRomanSemiBold14"
                        >
                          3/8 items
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start outline outline-[0.5px] outline-black-900_1e p-4 rounded-lg w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-row gap-2 items-start justify-between w-full">
                        <Text
                          className="leading-[150.00%] max-w-[300px] md:max-w-full text-base text-black-900"
                          size="txtMontserratRomanSemiBold16"
                        >
                          Presentation - Self-audit checklist before creating a
                          presentation
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="/images/img_arrowright_black_900.svg"
                          alt="arrowright"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-1/5 md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-auto">
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Button
                                className="flex h-5 items-center justify-center rounded-[50%] w-5"
                                shape="circle"
                                color="black_900"
                                size="xs"
                              >
                                <Img
                                  className="h-3"
                                  src="/images/img_frame_white_a700_20x20.svg"
                                  alt="frame"
                                />
                              </Button>
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtMontserratRomanMedium14"
                              >
                                Item Color
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Button
                                className="flex h-5 items-center justify-center rounded-[50%] w-5"
                                shape="circle"
                                color="black_900"
                                size="xs"
                              >
                                <Img
                                  className="h-3"
                                  src="/images/img_frame_white_a700_20x20.svg"
                                  alt="frame_One"
                                />
                              </Button>
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtMontserratRomanMedium14"
                              >
                                Item Size
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Text
                        className="text-black-900_7f text-sm underline w-auto"
                        size="txtMontserratRomanMedium14Black9007f"
                      >
                        View more
                      </Text>
                      <div className="flex flex-row gap-3 items-center justify-start w-auto">
                        <div className="h-2 overflow-hidden relative w-[56%]">
                          <div className="w-full h-full absolute bg-black_900_61 rounded-[4px]"></div>
                          <div
                            className="h-full absolute bg-light_blue_A700  rounded-[4px]"
                            style={{ width: "38%" }}
                          ></div>
                        </div>
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtMontserratRomanSemiBold14"
                        >
                          3/8 items
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start outline outline-[0.5px] outline-black-900_1e p-4 rounded-lg w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-row gap-2 items-start justify-between w-full">
                        <Text
                          className="leading-[150.00%] max-w-[300px] md:max-w-full text-base text-black-900"
                          size="txtMontserratRomanSemiBold16"
                        >
                          Presentation - Self-audit checklist before creating a
                          presentation
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="/images/img_arrowright_black_900.svg"
                          alt="arrowright"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-1/5 md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-auto">
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Button
                                className="flex h-5 items-center justify-center rounded-[50%] w-5"
                                shape="circle"
                                color="black_900"
                                size="xs"
                              >
                                <Img
                                  className="h-3"
                                  src="/images/img_frame_white_a700_20x20.svg"
                                  alt="frame"
                                />
                              </Button>
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtMontserratRomanMedium14"
                              >
                                Item Color
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Button
                                className="flex h-5 items-center justify-center rounded-[50%] w-5"
                                shape="circle"
                                color="black_900"
                                size="xs"
                              >
                                <Img
                                  className="h-3"
                                  src="/images/img_frame_white_a700_20x20.svg"
                                  alt="frame_One"
                                />
                              </Button>
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtMontserratRomanMedium14"
                              >
                                Item Size
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Text
                        className="text-black-900_7f text-sm underline w-auto"
                        size="txtMontserratRomanMedium14Black9007f"
                      >
                        View more
                      </Text>
                      <div className="flex flex-row gap-3 items-center justify-start w-auto">
                        <div className="h-2 overflow-hidden relative w-[56%]">
                          <div className="w-full h-full absolute bg-black_900_61 rounded-[4px]"></div>
                          <div
                            className="h-full absolute bg-light_blue_A700  rounded-[4px]"
                            style={{ width: "38%" }}
                          ></div>
                        </div>
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtMontserratRomanSemiBold14"
                        >
                          3/8 items
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start outline outline-[0.5px] outline-black-900_1e p-4 rounded-lg w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-row gap-2 items-start justify-between w-full">
                        <Text
                          className="leading-[150.00%] max-w-[300px] md:max-w-full text-base text-black-900"
                          size="txtMontserratRomanSemiBold16"
                        >
                          Presentation - Self-audit checklist before creating a
                          presentation
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="/images/img_arrowright_black_900.svg"
                          alt="arrowright"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-1/5 md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-auto">
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Button
                                className="flex h-5 items-center justify-center rounded-[50%] w-5"
                                shape="circle"
                                color="black_900"
                                size="xs"
                              >
                                <Img
                                  className="h-3"
                                  src="/images/img_frame_white_a700_20x20.svg"
                                  alt="frame"
                                />
                              </Button>
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtMontserratRomanMedium14"
                              >
                                Item Color
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Button
                                className="flex h-5 items-center justify-center rounded-[50%] w-5"
                                shape="circle"
                                color="black_900"
                                size="xs"
                              >
                                <Img
                                  className="h-3"
                                  src="/images/img_frame_white_a700_20x20.svg"
                                  alt="frame_One"
                                />
                              </Button>
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtMontserratRomanMedium14"
                              >
                                Item Size
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Text
                        className="text-black-900_7f text-sm underline w-auto"
                        size="txtMontserratRomanMedium14Black9007f"
                      >
                        View more
                      </Text>
                      <div className="flex flex-row gap-3 items-center justify-start w-auto">
                        <div className="h-2 overflow-hidden relative w-[56%]">
                          <div className="w-full h-full absolute bg-black_900_61 rounded-[4px]"></div>
                          <div
                            className="h-full absolute bg-light_blue_A700  rounded-[4px]"
                            style={{ width: "38%" }}
                          ></div>
                        </div>
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtMontserratRomanSemiBold14"
                        >
                          3/8 items
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start outline outline-[0.5px] outline-black-900_1e p-4 rounded-lg w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-row gap-2 items-start justify-between w-full">
                        <Text
                          className="leading-[150.00%] max-w-[300px] md:max-w-full text-base text-black-900"
                          size="txtMontserratRomanSemiBold16"
                        >
                          Presentation - Self-audit checklist before creating a
                          presentation
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="/images/img_arrowright_black_900.svg"
                          alt="arrowright"
                        />
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <Button
                            className="flex h-5 items-center justify-center rounded-[50%] w-5"
                            shape="circle"
                            color="black_900"
                            size="xs"
                          >
                            <Img
                              className="h-3"
                              src="/images/img_frame_white_a700_20x20.svg"
                              alt="frame"
                            />
                          </Button>
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtMontserratRomanMedium14"
                          >
                            Item Color
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <Button
                            className="flex h-5 items-center justify-center rounded-[50%] w-5"
                            shape="circle"
                            color="black_900"
                            size="xs"
                          >
                            <Img
                              className="h-3"
                              src="/images/img_frame_white_a700_20x20.svg"
                              alt="frame_One"
                            />
                          </Button>
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtMontserratRomanMedium14"
                          >
                            Item Size
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Text
                        className="text-black-900_7f text-sm underline w-auto"
                        size="txtMontserratRomanMedium14Black9007f"
                      >
                        View more
                      </Text>
                      <div className="flex flex-row gap-3 items-center justify-start w-auto">
                        <div className="h-2 overflow-hidden relative w-[56%]">
                          <div className="w-full h-full absolute bg-black_900_61 rounded-[4px]"></div>
                          <div
                            className="h-full absolute bg-light_blue_A700  rounded-[4px]"
                            style={{ width: "38%" }}
                          ></div>
                        </div>
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtMontserratRomanSemiBold14"
                        >
                          3/8 items
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start outline outline-[0.5px] outline-black-900_1e p-4 rounded-lg w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-row gap-2 items-start justify-between w-full">
                        <Text
                          className="leading-[150.00%] max-w-[300px] md:max-w-full text-base text-black-900"
                          size="txtMontserratRomanSemiBold16"
                        >
                          Presentation - Self-audit checklist before creating a
                          presentation
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="/images/img_arrowright_black_900.svg"
                          alt="arrowright"
                        />
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <Button
                            className="flex h-5 items-center justify-center rounded-[50%] w-5"
                            shape="circle"
                            color="black_900"
                            size="xs"
                          >
                            <Img
                              className="h-3"
                              src="/images/img_frame_white_a700_20x20.svg"
                              alt="frame"
                            />
                          </Button>
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtMontserratRomanMedium14"
                          >
                            Item Color
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <Button
                            className="flex h-5 items-center justify-center rounded-[50%] w-5"
                            shape="circle"
                            color="black_900"
                            size="xs"
                          >
                            <Img
                              className="h-3"
                              src="/images/img_frame_white_a700_20x20.svg"
                              alt="frame_One"
                            />
                          </Button>
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtMontserratRomanMedium14"
                          >
                            Item Size
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Text
                        className="text-black-900_7f text-sm underline w-auto"
                        size="txtMontserratRomanMedium14Black9007f"
                      >
                        View more
                      </Text>
                      <div className="flex flex-row gap-3 items-center justify-start w-auto">
                        <div className="h-2 overflow-hidden relative w-[56%]">
                          <div className="w-full h-full absolute bg-black_900_61 rounded-[4px]"></div>
                          <div
                            className="h-full absolute bg-light_blue_A700  rounded-[4px]"
                            style={{ width: "38%" }}
                          ></div>
                        </div>
                        <Text
                          className="text-black-900_99 text-sm w-auto"
                          size="txtMontserratRomanSemiBold14"
                        >
                          3/8 items
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* side pop */}
      <SideDrawer open={open} setOpen={setOpen}>
        <div className="bg-black-900_7f_01  flex flex-col font-montserrat items-end justify-end mx-auto  w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-6 px-5 w-full">
            <div className="flex flex-col items-start justify-start mb-[690px] w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <Text
                  className="text-black-900 text-lg"
                  size="txtMontserratRomanSemiBold18Black900"
                >
                  Presentation - Self-audit checklist before creating a
                  presentation
                </Text>
                <Img
                  onClick={() => setOpen(false)}
                  className="h-8 w-8"
                  src="/images/img_arrowright_blue_gray_900.svg"
                  alt="arrowright_One"
                />
              </div>
              <div className="flex flex-col gap-3 items-start justify-start mt-[26px] w-auto">
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Button
                    className="flex h-5 items-center justify-center rounded-[50%] w-5"
                    shape="circle"
                    color="black_900"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-3"
                      src="/images/img_frame_white_a700_20x20.svg"
                      alt="frame_Seven"
                    />
                  </Button>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtMontserratRomanMedium14Black900"
                  >
                    Item Color
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Button
                    className="flex h-5 items-center justify-center rounded-[50%] w-5"
                    shape="circle"
                    color="black_900"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-3"
                      src="/images/img_frame_white_a700_20x20.svg"
                      alt="frame_Eight"
                    />
                  </Button>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtMontserratRomanMedium14Black900"
                  >
                    Item Size
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Button
                    className="flex h-5 items-center justify-center rounded-[50%] w-5"
                    shape="circle"
                    color="black_900"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-3"
                      src="/images/img_frame_white_a700_20x20.svg"
                      alt="frame_Nine"
                    />
                  </Button>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtMontserratRomanMedium14Black900"
                  >
                    Quantity
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <div className="border border-black-900_4c border-solid h-5 rounded-[50%] w-5"></div>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtMontserratRomanMedium14Black900"
                  >
                    Imprint Color
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <div className="border border-black-900_4c border-solid h-5 rounded-[50%] w-5"></div>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtMontserratRomanMedium14Black900"
                  >
                    Preferred Supplier
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <div className="border border-black-900_4c border-solid h-5 rounded-[50%] w-5"></div>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtMontserratRomanMedium14Black900"
                  >
                    In-hands Date
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <div className="border border-black-900_4c border-solid h-5 rounded-[50%] w-5"></div>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtMontserratRomanMedium14Black900"
                  >
                    Budget
                  </Text>
                </div>
              </div>

              <div className="bg-white-A700 border border-gray-900_1e border-solid flex flex-col h-auto items-start justify-between mt-6 p-3 rounded-lg w-full">
                <div className="flex flex-col  items-center justify-start w-full">
                  <div 
                      onClick={() => setOpenHistory(!openHistory)}
                  
                  className="flex flex-row items-center justify-between w-[96%] md:w-full">
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtMontserratRomanMedium14Black900"
                    >
                      Checklist History
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src={
                        openHistory
                          ? "/images/img_frame_black_900.svg"
                          : "/images/img_arrowdown_black_900.svg"
                      }
                      alt="arrowup"
                    />
                  </div>

                  <Collapse in={openHistory} sx={{width:"100%",}} >
                    <List
                      className="bg-gray-50_01 flex flex-col gap-6 items-start p-4 w-full mt-2"
                      orientation="vertical"
                    >
                      <div className="flex justify-between  my-0 w-full">
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
                              Prakul Pareek marked{" "}
                            </span>
                            <span className="text-black-900_b2 font-montserrat text-left font-semibold">
                              Checked - Item Color
                            </span>
                          </Text>
                        </div>
                        <Text
                          className=" text-black-900_66 text-right text-sm"
                          size="txtMontserratRegular14Black90066"
                        >
                          5 minutes ago
                        </Text>
                      </div>

                    </List>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SideDrawer>
    </>
  );
};

export default CheckList;
