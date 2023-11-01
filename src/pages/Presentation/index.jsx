import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  SelectBox,
  Switch,
  Text,
} from "components";
import Sidebar3 from "components/Sidebar3";
import ProjectTop from "components/ProjectTop";
import Sidebar1 from "components/Sidebar1";

const sharedToClientOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
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
const normalOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const optionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const arialOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Presentation = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[245px] bg-black-900 flex h-screen md:hidden justify-start outline outline-indigo-50 overflow-auto md:px-5 top-[0]" />
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
            <div className="font-montserrat sm:h-[1817px] h-[1848px] md:h-[2175px] relative w-full">
              <div className="h-[1817px] md:h-[2175px justify-center m-auto w-full">
                <div className="flex md:flex-col flex-row gap-px h-full   items-start justify-evenly m-auto w-auto">
                  <div className="flex flex-col gap-7 h-[1663px] md:h-auto items-start justify-start p-6 sm:px-5 w-[597px] md:w-full z-[1] ">
                    <div className="flex flex-col relative w-full">
                      <div className="bg-white-A700 flex flex-col gap-7 md:h-auto items-center justify-start mx-auto outline outline-indigo-50 p-6 sm:px-5 w-[597px] md:w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                            <Text className="font-semibold text-black-900 text-lg w-auto">
                              Presentation
                            </Text>
                            <div className="flex flex-row gap-1 items-center justify-start w-1/2 md:w-auto">
                              <Text className="font-medium text-black-900_66 text-sm w-auto">
                                Status :
                              </Text>
                              <SelectBox
                                className="font-medium leading-[normal] text-left text-sm w-[67%] sm:w-full"
                                placeholderClassName="text-black-900"
                                indicator={
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_arrowdown.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isSearchable={false}
                                placeholder="Shared to Client"
                                getOptionLabel={(e) => (
                                  <div className="flex items-center">
                                    <Img
                                      className="h-1.5 mr-1 pb-1.5 pl-1.5 border-deep_purple-400_3d border border-solid w-1.5 rounded-[50%]"
                                      src="images/img_reply.svg"
                                      alt="reply"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                )}
                                name="frame2609107"
                                isMulti={false}
                                options={sharedToClientOptionsList}
                                shape="round"
                                color="deep_purple_400_14"
                                size="sm"
                                variant="fill"
                              />
                            </div>
                          </div>
                          <div className="h-[103px] md:h-[202px] relative w-full">

                          <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                            <div className="flex flex-col items-start justify-start w-auto">
                              <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
                                <Text
                                  className="text-black-900_99 text-sm w-auto"
                                  size="txtMontserratRegular14Black90099"
                                >
                                  Layout
                                </Text>
                                <div className="flex flex-row gap-3 items-start justify-start w-full">
                                  <div className="flex flex-1 flex-col gap-0.5 items-center justify-start w-full">
                                    <Img
                                      className="h-10 w-full"
                                      src="images/img_group2609267.svg"
                                      alt="group2609267"
                                    />
                                    <Text
                                      className="text-[8px] text-black-900_66 text-center"
                                      size="txtMontserratRegular8"
                                    >
                                      <>
                                        One
                                        <br />
                                        Column
                                      </>
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 flex-col gap-0.5 items-center justify-start w-full">
                                    <Img
                                      className="h-10 w-full"
                                      src="images/img_group2609268.svg"
                                      alt="group2609268"
                                    />
                                    <Text
                                      className="text-[8px] text-black-900_66 text-center"
                                      size="txtMontserratRegular8"
                                    >
                                      <>
                                        Two
                                        <br />
                                        Column
                                      </>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
                              <Text
                                className="text-black-900_99 text-sm w-auto"
                                size="txtMontserratRegular14Black90099"
                              >
                                Brand Color
                              </Text>
                              <Img
                                className="h-8 w-48"
                                src="images/img_frame2609204.svg"
                                alt="frame2609204"
                              />
                            </div>
                          </div>

                            {/* <div className=" flex flex-1 md:flex-col flex-row md:gap-10 gap-[60px] h-full items-start justify-between m-auto w-full">
                              <div className="flex flex-1 flex-col items-start justify-start w-full">
                                <div className="flex flex-col gap-2 items-start justify-start w-full">
                                  <Text className="text-black-900_99 text-sm w-auto">
                                    Layout
                                  </Text>
                                  <div className="flex flex-row gap-4 items-start justify-start w-full">
                                    <div className="flex flex-1 md:flex-1 flex-col items-start justify-start outline outline-[1px] outline-light_blue-A700_33 rounded-lg w-auto md:w-full">
                                      <Radio
                                        value="OneColumn"
                                        className="font-medium leading-[normal] sm:pr-5 text-left text-light_blue-A700 text-xs"
                                        inputClassName="bg-light_blue-A700_0a border-b border-light_blue-A700_33 border-solid mr-[5px] rounded-tl-lg rounded-tr-lg"
                                        checked={true}
                                        name="onecolumn"
                                        label="One Column"
                                        id="OneColumn"
                                      ></Radio>
                                      <Img
                                        className="h-[46px] rounded-bl-lg rounded-br-lg w-[146px]"
                                        src="images/img_frame2609556.svg"
                                        alt="frame2609556"
                                      />
                                    </div>
                                    <div className="flex flex-1 md:flex-1 flex-col items-start justify-start outline outline-[1px] outline-black-900_0f rounded-lg w-auto md:w-full">
                                      <Radio
                                        value="TwoColumn"
                                        className="font-medium leading-[normal] sm:pr-5 text-black-900_66 text-left text-xs"
                                        inputClassName="bg-white-A700 border-b border-black-900_0f border-solid mr-[5px] rounded-tl-lg rounded-tr-lg"
                                        checked={false}
                                        name="twocolumn"
                                        label="Two Column"
                                        id="TwoColumn"
                                      ></Radio>
                                      <Img
                                        className="h-11 rounded-bl-lg rounded-br-lg w-[146px]"
                                        src="images/img_frame2609556_white_a700.svg"
                                        alt="frame2609556_One"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                                <Text className="text-black-900_99 text-sm w-auto">
                                  Brand Color
                                </Text>
                                <Img
                                  className="h-8 w-full"
                                  src="images/img_frame2609550.svg"
                                  alt="frame2609550"
                                />
                              </div>
                            </div> */}
                          </div>
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                          <Text
                            className="text-black-900 text-lg w-auto"
                            size="txtMontserratRomanSemiBold18Black900"
                          >
                            Project Info
                          </Text>
                          <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                            <div className="flex flex-col gap-2 items-start justify-start w-[549px] sm:w-full">
                              <Text
                                className="text-black-900_99 text-sm w-auto"
                                size="txtMontserratRegular14Black90099"
                              >
                                Project Name{" "}
                              </Text>
                              <Input
                                name="frame53369"
                                placeholder="Gift for trainees"
                                className="font-medium leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                                wrapClassName="border border-black-900_28 border-solid w-full"
                                shape="round"
                                color="white_A700"
                                variant="fill"
                              ></Input>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                              <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
                                <Text
                                  className="text-black-900_99 text-sm w-auto"
                                  size="txtMontserratRegular14Black90099"
                                >
                                  Date Issued
                                </Text>
                                <Input
                                  name="frame53369_One"
                                  placeholder="Today"
                                  className="font-medium leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                                  wrapClassName="border border-black-900_28 border-solid flex w-full"
                                  suffix={
                                    <Img
                                      className="mt-px mb-[3px] h-4 ml-[35px]"
                                      src="/images/img_arrowdown_black_900_12x12.svg"
                                      alt="arrow_down"
                                    />
                                  }
                                  shape="round"
                                  color="white_A700"
                                  variant="fill"
                                ></Input>
                              </div>
                              <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
                                <Text
                                  className="text-black-900_99 text-sm w-auto"
                                  size="txtMontserratRegular14Black90099"
                                >
                                  Project ID
                                </Text>
                                <Input
                                  name="frame53369_Two"
                                  placeholder="4117653"
                                  className="font-medium leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                                  wrapClassName="border border-black-900_28 border-solid w-full"
                                  type="number"
                                  shape="round"
                                  color="white_A700"
                                  variant="fill"
                                ></Input>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                          <Text
                            className="text-black-900 text-lg w-auto"
                            size="txtMontserratRomanSemiBold18Black900"
                          >
                            Client Details
                          </Text>
                          <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                            <div className="flex flex-col gap-2 items-start justify-start w-[549px] sm:w-full">
                              <Text
                                className="text-black-900_99 text-sm w-auto"
                                size="txtMontserratRegular14Black90099"
                              >
                                Client Name{" "}
                              </Text>
                              <Input
                                name="frame53369_Three"
                                placeholder="Airtel Pvt. Ltd."
                                className="font-medium leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                                wrapClassName="border border-black-900_28 border-solid w-full"
                                shape="round"
                                color="white_A700"
                                variant="fill"
                              ></Input>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                              <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
                                <Text
                                  className="text-black-900_99 text-sm w-auto"
                                  size="txtMontserratRegular14Black90099"
                                >
                                  Client Contact
                                </Text>
                                <Input
                                  name="frame53369_Four"
                                  placeholder=""
                                  className="p-0 w-full"
                                  wrapClassName="border border-black-900_28 border-solid flex w-full"
                                  suffix={
                                    <Img
                                      className="h-4 ml-[35px] my-auto"
                                      src="/images/img_arrowdown_black_900_12x12.svg"
                                      alt="arrow_down"
                                    />
                                  }
                                  shape="round"
                                  color="white_A700"
                                  size="xl"
                                  variant="fill"
                                ></Input>
                              </div>
                              <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
                                <Text
                                  className="text-black-900_99 text-sm w-auto"
                                  size="txtMontserratRegular14Black90099"
                                >
                                  Expiry Date
                                </Text>
                                <Input
                                  name="frame53369_Five"
                                  placeholder="DD/MM/YYYY"
                                  className="font-medium leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                                  wrapClassName="border border-black-900_28 border-solid flex w-full"
                                  suffix={
                                    <Img
                                      className="h-5 ml-[35px] my-auto"
                                      src="/images/img_frame_20x20.svg"
                                      alt="Frame"
                                    />
                                  }
                                  shape="round"
                                  color="white_A700"
                                  variant="fill"
                                ></Input>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start mx-auto w-auto z-[1]">
                          <Text
                            className="text-black-900 text-lg w-auto"
                            size="txtMontserratRomanSemiBold18Black900"
                          >
                            Additional Details
                          </Text>
                          <List
                            className="flex flex-col gap-4 items-center w-full"
                            orientation="vertical"
                          >
                            <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                              <div className="flex flex-col gap-2 items-start justify-start w-[549px] sm:w-full">
                                <Text
                                  className="text-black-900_99 text-sm w-auto"
                                  size="txtMontserratRegular14Black90099"
                                >
                                  Header Notes
                                </Text>
                                <div className="flex flex-col items-start justify-start outline outline-[1px] outline-black-900_28 rounded w-full">
                                  <div className="bg-gray-50 border-b border-black-900_28 border-solid flex flex-col items-center justify-between p-3 rounded-tl rounded-tr w-full">
                                    <div className="flex sm:flex-col flex-row gap-1.5 items-center justify-between w-full">
                                      <SelectBox
                                        className="sm:flex-1 font-medium leading-[normal] text-black-900_99 text-left text-sm w-[16%] sm:w-full"
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
                                        name="frame2609306"
                                        options={optionsList}
                                        isSearchable={false}
                                        placeholder="16"
                                      />
                                      <Line className="bg-black-900_19 h-5 sm:h-px rounded-[1px] sm:w-full w-px" />
                                      <SelectBox
                                        className="sm:flex-1 font-medium leading-[normal] text-black-900_99 text-left text-sm w-[12%] sm:w-full"
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
                                      <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                                        <Img
                                          className="h-6 w-6"
                                          src="/images/img_frame2609306.svg"
                                          alt="frame2609306_One"
                                        />
                                        <Img
                                          className="h-6 w-6"
                                          src="/images/img_frame2609307.svg"
                                          alt="frame2609307_One"
                                        />
                                        <Button
                                          className="border border-black-900_19 border-solid flex h-6 items-center justify-center rounded w-6"
                                          color="black_900_14"
                                          size="xs"
                                        >
                                          <Img
                                            className="h-4"
                                            src="/images/img_hugeiconinter.svg"
                                            alt="hugeiconinter"
                                          />
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-white-A700 h-36 rounded-bl rounded-br w-full"></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                              <div className="flex flex-col gap-2 items-start justify-start w-[549px] sm:w-full">
                                <Text
                                  className="text-black-900_99 text-sm w-auto"
                                  size="txtMontserratRegular14Black90099"
                                >
                                  Footer Notes
                                </Text>
                                <div className="flex flex-col items-start justify-start outline outline-[1px] outline-black-900_28 rounded w-full">
                                  <div className="bg-gray-50 border-b border-black-900_28 border-solid flex flex-col items-center justify-between p-3 rounded-tl rounded-tr w-full">
                                    <div className="flex sm:flex-col flex-row gap-1.5 items-center justify-between w-full">
                                      <SelectBox
                                        className="sm:flex-1 font-medium leading-[normal] text-black-900_99 text-left text-sm w-[16%] sm:w-full"
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
                                        options={normalOptionsList1}
                                        isSearchable={false}
                                        placeholder="Normal"
                                      />
                                      <Line className="bg-black-900_19 h-5 sm:h-px rounded-[1px] sm:w-full w-px" />
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
                                        name="frame2609306"
                                        options={optionsList1}
                                        isSearchable={false}
                                        placeholder="16"
                                      />
                                      <Line className="bg-black-900_19 h-5 sm:h-px rounded-[1px] sm:w-full w-px" />
                                      <SelectBox
                                        className="sm:flex-1 font-medium leading-[normal] text-black-900_99 text-left text-sm w-[12%] sm:w-full"
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
                                        options={arialOptionsList1}
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
                                      <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                                        <Img
                                          className="h-6 w-6"
                                          src="/images/img_frame2609306.svg"
                                          alt="frame2609306_One"
                                        />
                                        <Img
                                          className="h-6 w-6"
                                          src="/images/img_frame2609307.svg"
                                          alt="frame2609307_One"
                                        />
                                        <Button
                                          className="border border-black-900_19 border-solid flex h-6 items-center justify-center rounded w-6"
                                          color="black_900_0f"
                                          size="xs"
                                        >
                                          <Img
                                            className="h-4"
                                            src="/images/img_hugeiconinter.svg"
                                            alt="hugeiconinter"
                                          />
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-white-A700 h-36 rounded-bl rounded-br w-full"></div>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-[597px] md:w-full bg-white-A700">
                      <div className="flex flex-row gap-4 items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtMontserratRomanSemiBold18Black900"
                        >
                          Products
                        </Text>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[135px]"
                          leftIcon={
                            <Img
                              className="h-4 mr-1 my-[3px]"
                              src="/images/img_frame_white_a700_16x16.svg"
                              alt="Frame"
                            />
                          }
                          shape="round"
                          color="black_900"
                        >
                          <div className="font-medium text-left text-sm">
                            Add Product
                          </div>
                        </Button>
                      </div>

                      <List
                        className="flex flex-col gap-[15px] items-center w-full"
                        orientation="vertical"
                      >
                        <div className="bg-white-A700 flex flex-1 flex-col gap-4 items-start justify-start max-w-[738px] outline outline-[0.5px] outline-black-900_1e p-4 rounded-lg w-full">
                          <div className="flex flex-row gap-3 items-center justify-between w-full">
                            <div className="flex flex-row gap-1 items-center justify-start w-auto">
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
                                  alt="frame"
                                />
                              </Button>
                              <Text className="font-medium text-black-900_66 text-xs w-auto">
                                Add to selection
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-auto">
                              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                <Text className="font-medium text-black-900_66 text-xs w-auto">
                                  Show
                                </Text>
                                <Switch
                                  onColor="#007fff"
                                  offColor="#007fff"
                                  onHandleColor="#ffffff"
                                  offHandleColor="#ffffff"
                                  value={true}
                                  className="gap-[8.33px] w-auto"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex md:flex-col flex-row gap-3 items-start justify-start w-full">
                            <div className="bg-white-A700 flex flex-col h-[100px] items-center justify-start outline outline-[0.5px] outline-indigo-50 rounded-[3px] w-[100px]">
                              <Img
                                className="h-[99px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-[100px] sm:w-full"
                                src="/images/img_image77.png"
                                alt="imageSeventySeven"
                              />
                            </div>
                            <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                              <div className="flex flex-col gap-2 items-center justify-start w-full">
                                <div className="flex flex-row gap-3 items-center justify-between w-full">
                                  <Text className="border border-solid border-teal-600 font-medium p-1 rounded text-teal-600 text-xs w-auto">
                                    SKU : 2600
                                  </Text>
                                  <Text className="font-medium text-black-900_7f text-xs w-auto">
                                    #933144188
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-3 items-start justify-start w-full">
                                  <div className="flex flex-col gap-1 items-start justify-start w-full">
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <Text className="font-semibold text-base text-black-900 w-full">
                                        Vansport Omega Solid Mesh Tech Polo
                                        Shirt
                                      </Text>
                                    </div>
                                    <Text className="leading-[140.00%] max-w-[594px] md:max-w-full text-black-900_b2 text-xs">
                                      Our best-selling, moisture-wicking golf
                                      shirt keeps you cool; comfortable during
                                      active wear. Vansport fabric is specially
                                      engineered to resist snags &amp; pulls,
                                      with a lighter and smoother hand than
                                      other polos at comparable prices.
                                    </Text>
                                  </div>
                                  <Text className="font-medium text-black-900_cc text-xs w-full">
                                    Supplier : Prime Line
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-[198px]">
                                <div className="flex flex-row items-start justify-start w-[198px]">
                                  <Button
                                    className="cursor-pointer font-semibold leading-[normal] outline outline-[1px] outline-black-900_28 text-center text-sm w-[66px]"
                                    shape="square"
                                    color="gray_50"
                                  >
                                    Qty
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[1px] outline-black-900_28 text-center text-sm w-[66px]"
                                    shape="square"
                                    color="white_A700"
                                  >
                                    500
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[1px] outline-black-900_28 text-center text-sm w-[66px]"
                                    shape="square"
                                    color="white_A700"
                                  >
                                    100
                                  </Button>
                                </div>
                                <div className="flex flex-row items-start justify-start w-auto">
                                  <Button
                                    className="cursor-pointer font-semibold leading-[normal] outline outline-[1px] outline-black-900_28 text-center text-sm w-[66px]"
                                    shape="square"
                                    color="gray_50"
                                  >
                                    Price
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[1px] outline-black-900_28 text-center text-sm w-[66px]"
                                    shape="square"
                                    color="white_A700"
                                  >
                                    2.30
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[1px] outline-black-900_28 text-center text-sm w-[66px]"
                                    shape="square"
                                    color="white_A700"
                                  >
                                    2.20
                                  </Button>
                                </div>
                              </div>
                              <Line className="bg-black-900_14 h-px w-full" />
                              <div className="flex flex-row gap-3 items-start justify-between w-full">
                                <div className="flex flex-row gap-1 items-start justify-center w-auto">
                                  <Button
                                    className="cursor-pointer flex items-center justify-center min-w-[61px]"
                                    leftIcon={
                                      <Img
                                        className="h-4 mr-1 my-0.5"
                                        src="/images/img_edit_black_900.svg"
                                        alt="edit"
                                      />
                                    }
                                    shape="round"
                                    color="black_900_1e"
                                    size="md"
                                    variant="outline"
                                  >
                                    <div className="font-medium text-left text-xs">
                                      Edit
                                    </div>
                                  </Button>
                                  <Button
                                    className="cursor-pointer flex items-center justify-center min-w-[96px]"
                                    leftIcon={
                                      <Img
                                        className="h-4 mr-1 my-0.5"
                                        src="/images/img_frame_2609490.svg"
                                        alt="Frame 2609490"
                                      />
                                    }
                                    shape="round"
                                    color="black_900_1e"
                                    size="md"
                                    variant="outline"
                                  >
                                    <div className="font-medium text-left text-xs">
                                      Duplicate
                                    </div>
                                  </Button>
                                </div>
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[106px]"
                                  rightIcon={
                                    <Img
                                      className="h-5 ml-1"
                                      src="/images/img_arrowright_black_900_20x20.svg"
                                      alt="arrow_right"
                                    />
                                  }
                                  shape="round"
                                  color="black_900_1e"
                                  size="md"
                                  variant="outline"
                                >
                                  <div className="font-medium text-left text-xs">
                                    View more
                                  </div>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-1 flex-col gap-4 items-start justify-start max-w-[738px] outline outline-[0.5px] outline-black-900_1e p-4 rounded-lg w-full">
                          <div className="flex flex-row gap-3 items-center justify-between w-full">
                            <div className="flex flex-row gap-1 items-center justify-start w-auto">
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
                                  alt="frame"
                                />
                              </Button>
                              <Text className="font-medium text-black-900_66 text-xs w-auto">
                                Add to selection
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-auto">
                              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                <Text className="font-medium text-black-900_66 text-xs w-auto">
                                  Show
                                </Text>
                                <Switch
                                  onColor="#007fff"
                                  offColor="#007fff"
                                  onHandleColor="#ffffff"
                                  offHandleColor="#ffffff"
                                  value={true}
                                  className="gap-[8.33px] w-auto"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex md:flex-col flex-row gap-3 items-start justify-start w-full">
                            <div className="bg-white-A700 flex flex-col h-[100px] items-center justify-start outline outline-[0.5px] outline-indigo-50 rounded-[3px] w-[100px]">
                              <Img
                                className="h-[99px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-[100px] sm:w-full"
                                src="/images/img_image77.png"
                                alt="imageSeventySeven"
                              />
                            </div>
                            <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                              <div className="flex flex-col gap-2 items-center justify-start w-full">
                                <div className="flex flex-row gap-3 items-center justify-between w-full">
                                  <Text className="border border-solid border-teal-600 font-medium p-1 rounded text-teal-600 text-xs w-auto">
                                    SKU : 2600
                                  </Text>
                                  <Text className="font-medium text-black-900_7f text-xs w-auto">
                                    #933144188
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-3 items-start justify-start w-full">
                                  <div className="flex flex-col gap-1 items-start justify-start w-full">
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <Text className="font-semibold text-base text-black-900 w-full">
                                        Vansport Omega Solid Mesh Tech Polo
                                        Shirt
                                      </Text>
                                    </div>
                                    <Text className="leading-[140.00%] max-w-[594px] md:max-w-full text-black-900_b2 text-xs">
                                      Our best-selling, moisture-wicking golf
                                      shirt keeps you cool; comfortable during
                                      active wear. Vansport fabric is specially
                                      engineered to resist snags &amp; pulls,
                                      with a lighter and smoother hand than
                                      other polos at comparable prices.
                                    </Text>
                                  </div>
                                  <Text className="font-medium text-black-900_cc text-xs w-full">
                                    Supplier : Prime Line
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-[198px]">
                                <div className="flex flex-row items-start justify-start w-[198px]">
                                  <Button
                                    className="cursor-pointer font-semibold leading-[normal] outline outline-[1px] outline-black-900_28 text-center text-sm w-[66px]"
                                    shape="square"
                                    color="gray_50"
                                  >
                                    Qty
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[1px] outline-black-900_28 text-center text-sm w-[66px]"
                                    shape="square"
                                    color="white_A700"
                                  >
                                    500
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[1px] outline-black-900_28 text-center text-sm w-[66px]"
                                    shape="square"
                                    color="white_A700"
                                  >
                                    100
                                  </Button>
                                </div>
                                <div className="flex flex-row items-start justify-start w-auto">
                                  <Button
                                    className="cursor-pointer font-semibold leading-[normal] outline outline-[1px] outline-black-900_28 text-center text-sm w-[66px]"
                                    shape="square"
                                    color="gray_50"
                                  >
                                    Price
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[1px] outline-black-900_28 text-center text-sm w-[66px]"
                                    shape="square"
                                    color="white_A700"
                                  >
                                    2.30
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[1px] outline-black-900_28 text-center text-sm w-[66px]"
                                    shape="square"
                                    color="white_A700"
                                  >
                                    2.20
                                  </Button>
                                </div>
                              </div>
                              <Line className="bg-black-900_14 h-px w-full" />
                              <div className="flex flex-row gap-3 items-start justify-between w-full">
                                <div className="flex flex-row gap-1 items-start justify-center w-auto">
                                  <Button
                                    className="cursor-pointer flex items-center justify-center min-w-[61px]"
                                    leftIcon={
                                      <Img
                                        className="h-4 mt-0.5 mr-1"
                                        src="/images/img_edit_black_900.svg"
                                        alt="edit"
                                      />
                                    }
                                    shape="round"
                                    color="black_900_1e"
                                    size="sm"
                                    variant="outline"
                                  >
                                    <div className="font-medium text-left text-xs">
                                      Edit
                                    </div>
                                  </Button>
                                  <Button
                                    className="cursor-pointer flex items-center justify-center min-w-[96px]"
                                    leftIcon={
                                      <Img
                                        className="h-4 mt-0.5 mr-1"
                                        src="/images/img_frame_2609490.svg"
                                        alt="Frame 2609490"
                                      />
                                    }
                                    shape="round"
                                    color="black_900_1e"
                                    size="sm"
                                    variant="outline"
                                  >
                                    <div className="font-medium text-left text-xs">
                                      Duplicate
                                    </div>
                                  </Button>
                                </div>
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[106px]"
                                  rightIcon={
                                    <Img
                                      className="ml-1"
                                      src="/images/img_arrowright_black_900_20x20.svg"
                                      alt="arrow_right"
                                    />
                                  }
                                  shape="round"
                                  color="black_900_1e"
                                  size="sm"
                                  variant="outline"
                                >
                                  <div className="font-medium text-left text-xs">
                                    View more
                                  </div>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>

                  {/* Preview designd */}
                  <div className="bg-gray-50 flex flex-col items-center w-1/2 md:w-full pl-3 h-full mt-[1.4rem]">
                    <div className="  flex flex-row sm:gap-10  items-start justify-between mx-auto p-[23px] sm:px-5 top-[0] w-full">
                      <Text
                        className="mt-[3px] text-black-900 text-lg"
                        size="txtMontserratRomanSemiBold18Black900"
                      >
                        Preview
                      </Text>
                      <div className="flex flex-row gap-1 items-center justify-start py-1 w-auto">
                        <Img
                          className="h-5 w-5"
                          src="/images/img_clock.svg"
                          alt="clock"
                        />
                        <Text
                          className="text-base text-light_blue-A700 underline w-auto"
                          size="txtMontserratRomanMedium16LightblueA700"
                        >
                          Expand
                        </Text>
                      </div>
                    </div>
                    {/* <div className=" bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto outline outline-[0.5px] outline-indigo-50 rounded-lg w-[92%]">
                      <div className="bg-light_blue-900_33 flex flex-col items-center justify-start w-full">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[136px] items-center justify-start p-[18px] w-full"
                          style={{
                            backgroundImage: "url('images/img_group42.svg')",
                          }}
                        >
                          <div className="flex flex-row items-center justify-between my-[3px] w-full">
                            <div className="bg-white-A700 flex flex-col h-[92px] items-center justify-start outline outline-[0.5px] outline-light_blue-900 p-1 rounded-[3px] w-[92px]">
                              <Text
                                className="mt-0.5 text-[12.89px] text-black-900 w-[96%] sm:w-full"
                                size="txtMontserratRomanSemiBold1289"
                              >
                                Pen Distributors
                              </Text>
                              <Text
                                className="leading-[12.00px] my-1 text-[9.21px] text-black-900 w-[96%] sm:w-full"
                                size="txtMontserratRegular921"
                              >
                                11223344, Jaipur, Rajasthan, India - 302017
                              </Text>
                            </div>
                            <div className="bg-white-A700 flex flex-col h-[92px] items-center justify-start outline outline-[0.5px] outline-light_blue-900 p-[9px] rounded-[3px] w-[92px]">
                              <Img
                                className="h-[73px] md:h-auto object-cover w-[73px]"
                                src="/images/img_image40.png"
                                alt="imageForty"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row sm:gap-10 items-start justify-between p-[18.42px] w-[548px] sm:w-full">
                        <div className="flex flex-col gap-[7.37px] items-start justify-start w-auto">
                          <Text
                            className="sm:text-[18.1px] md:text-[20.1px] text-[22.1px] text-black-900 w-auto"
                            size="txtMontserratRomanSemiBold221"
                          >
                            Gift for trainees
                          </Text>
                          <div className="flex flex-row gap-[5.53px] items-center justify-start w-auto">
                            <Img
                              className="h-3.5 w-3.5"
                              src="/images/img_frame_gray_500.svg"
                              alt="frame_Seven"
                            />
                            <Text
                              className="text-[12.89px] text-black-900_66 w-auto"
                              size="txtMontserratRegular1289"
                            >
                              Date Issued - 1 Aug, 2023
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="text-[14.74px] text-black-900_cc text-right w-auto"
                          size="txtMontserratRegular1474"
                        >
                          ID - 4117653
                        </Text>
                      </div>
                      <div className="border-indigo-50 border-solid border-y flex flex-row gap-[23.95px] items-center justify-between sm:px-5 px-[29.47px] py-[18.42px] w-[548px] sm:w-full">
                        <div className="flex flex-col gap-[5.53px] items-start justify-start w-auto">
                          <Text
                            className="text-[11.05px] text-black-900_66 tracking-[0.50px] uppercase w-auto"
                            size="txtMontserratRomanMedium1105"
                          >
                            Project to
                          </Text>
                          <Text
                            className="text-[14.74px] text-black-900 w-auto"
                            size="txtMontserratRomanMedium1474"
                          >
                            Airtel Pvt. Ltd.
                          </Text>
                        </div>
                        <Line className="bg-indigo-50 h-[29px] w-px" />
                        <div className="flex flex-col gap-[5.53px] items-start justify-start w-auto">
                          <Text
                            className="text-[11.05px] text-black-900_66 tracking-[0.50px] uppercase w-auto"
                            size="txtMontserratRomanMedium1105"
                          >
                            client contact
                          </Text>
                          <div className="flex flex-row gap-[5.53px] items-start justify-start w-auto">
                            <Text
                              className="bg-deep_orange-100_01 flex h-[18px] items-center justify-center rounded-[50%] text-[9.21px] text-center text-gray-600_02 w-[18px]"
                              size="txtMontserratRomanSemiBold921"
                            >
                              AS
                            </Text>
                            <Text
                              className="text-[14.74px] text-black-900 w-auto"
                              size="txtMontserratRomanMedium1474"
                            >
                              Amitabh Singh
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-indigo-50 h-[29px] w-px" />
                        <div className="flex flex-col gap-[5.53px] items-start justify-start w-auto">
                          <Text
                            className="text-[11.05px] text-black-900_66 tracking-[0.50px] uppercase w-auto"
                            size="txtMontserratRomanMedium1105"
                          >
                            EXPIRY DATE
                          </Text>
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-[14.74px] text-black-900 w-auto"
                              size="txtMontserratRomanMedium1474"
                            >
                              8 Aug, 2023
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[14.74px] items-start justify-start p-[18.42px] w-auto sm:w-full">
                        <Text
                          className="text-[16.58px] text-black-900 w-auto"
                          size="txtMontserratRomanSemiBold1658"
                        >
                          Product Details
                        </Text>
                        <List
                          className="flex flex-col gap-3.5 items-center w-full"
                          orientation="vertical"
                        >
                          <div className="bg-gray-50 flex sm:flex-1 sm:flex-col flex-row gap-[22.1px] items-start justify-start p-[14.74px] rounded-[7px] w-[511px] sm:w-full">
                            <Img
                              className="h-[147px] md:h-auto object-cover rounded-[3px] w-[147px]"
                              src="/images/img_image42_147x147.png"
                              alt="imageFortyTwo"
                            />
                            <div className="flex flex-col gap-[18.42px] items-start justify-start w-auto">
                              <div className="flex flex-col gap-[7.37px] items-start justify-start w-auto">
                                <Text
                                  className="text-[14.74px] text-black-900 w-auto"
                                  size="txtMontserratRomanSemiBold1474"
                                >
                                  Stress Ball Yo-Yo Bungee
                                </Text>
                                <Text
                                  className="max-w-[268px] md:max-w-full text-[11.05px] text-black-900_b2"
                                  size="txtMontserratRegular1105"
                                >
                                  <>
                                    Round Ball Shaped Polyurethane Stress
                                    Reliever Yo-Yo Bungee. Complies with ASTM,
                                    CCPSA, CPSIA, Prop 65. 2.75&quot; Diameter
                                  </>
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[7.37px] items-center justify-start w-auto">
                                <Text
                                  className="text-[11.05px] text-black-900 w-auto"
                                  size="txtMontserratRegular1105Black900"
                                >
                                  Colors :
                                </Text>
                                <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] rounded-[3px] w-auto">
                                  <div className="bg-red-400 h-[7px] rounded-[3px] w-[7px]"></div>
                                  <Text
                                    className="text-[11.05px] text-black-900 w-auto"
                                    size="txtMontserratRegular1105Black900"
                                  >
                                    Red
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] rounded-[3px] w-auto">
                                  <div className="bg-indigo-A200 h-[7px] rounded-[3px] w-[7px]"></div>
                                  <Text
                                    className="text-[11.05px] text-black-900 w-auto"
                                    size="txtMontserratRegular1105Black900"
                                  >
                                    Blue
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] rounded-[3px] w-auto">
                                  <div className="bg-black-900 h-[7px] rounded-[3px] w-[7px]"></div>
                                  <Text
                                    className="text-[11.05px] text-black-900 w-auto"
                                    size="txtMontserratRegular1105Black900"
                                  >
                                    Black
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-[198px]">
                                <div className="flex flex-row items-start justify-start w-[198px]">
                                  <Button
                                    className="cursor-pointer font-semibold leading-[normal] outline outline-[0.5px] outline-indigo-50 text-[12.89px] text-center w-full"
                                    shape="square"
                                    color="gray_400"
                                    size="md"
                                  >
                                    Qty
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[0.5px] outline-indigo-50 text-[12.89px] text-center w-[66px]"
                                    shape="square"
                                    size="md"
                                  >
                                    500
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[0.5px] outline-indigo-50 text-[12.89px] text-center w-[66px]"
                                    shape="square"
                                    size="md"
                                  >
                                    100
                                  </Button>
                                </div>
                                <div className="flex flex-row items-start justify-start w-auto">
                                  <Button
                                    className="cursor-pointer font-semibold leading-[normal] outline outline-[0.5px] outline-indigo-50 text-[12.89px] text-center w-[66px]"
                                    shape="square"
                                    color="gray_400"
                                    size="md"
                                  >
                                    Price
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[0.5px] outline-indigo-50 text-[12.89px] text-center w-[66px]"
                                    shape="square"
                                    size="md"
                                  >
                                    2.30
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[0.5px] outline-indigo-50 text-[12.89px] text-center w-[66px]"
                                    shape="square"
                                    size="md"
                                  >
                                    2.20
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 flex sm:flex-1 sm:flex-col flex-row gap-[22.1px] items-start justify-start p-[14.74px] rounded-[7px] w-[511px] sm:w-full">
                            <Img
                              className="h-[137px] md:h-auto object-cover rounded-[3px] w-[147px] sm:w-full"
                              src="/images/img_image42_147x147.png"
                              alt="imageFortyTwo"
                            />
                            <div className="flex flex-col gap-[18.42px] items-start justify-start w-auto">
                              <div className="flex flex-col gap-[7.37px] items-start justify-start w-auto">
                                <Text
                                  className="text-[14.74px] text-black-900 w-auto"
                                  size="txtMontserratRomanSemiBold1474"
                                >
                                  Stress Ball Yo-Yo Bungee
                                </Text>
                                <Text
                                  className="max-w-[268px] md:max-w-full text-[11.05px] text-black-900_b2"
                                  size="txtMontserratRegular1105"
                                >
                                  <>
                                    Round Ball Shaped Polyurethane Stress
                                    Reliever Yo-Yo Bungee. Complies with ASTM,
                                    CCPSA, CPSIA, Prop 65. 2.75&quot; Diameter
                                  </>
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[7.37px] items-center justify-start w-auto">
                                <Text
                                  className="text-[11.05px] text-black-900 w-auto"
                                  size="txtMontserratRegular1105Black900"
                                >
                                  Colors :
                                </Text>
                                <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] rounded-[3px] w-auto">
                                  <div className="bg-red-400 h-[7px] rounded-[3px] w-[7px]"></div>
                                  <Text
                                    className="text-[11.05px] text-black-900 w-auto"
                                    size="txtMontserratRegular1105Black900"
                                  >
                                    Red
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] rounded-[3px] w-auto">
                                  <div className="bg-indigo-A200 h-[7px] rounded-[3px] w-[7px]"></div>
                                  <Text
                                    className="text-[11.05px] text-black-900 w-auto"
                                    size="txtMontserratRegular1105Black900"
                                  >
                                    Blue
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] rounded-[3px] w-auto">
                                  <div className="bg-black-900 h-[7px] rounded-[3px] w-[7px]"></div>
                                  <Text
                                    className="text-[11.05px] text-black-900 w-auto"
                                    size="txtMontserratRegular1105Black900"
                                  >
                                    Black
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[22px] items-start justify-start w-[198px]">
                                <div className="flex flex-row items-start justify-start w-auto">
                                  <div className="bg-gray-400 flex flex-col items-center justify-center outline outline-[0.5px] outline-indigo-50 p-[11.05px] w-[66px]">
                                    <Text
                                      className="text-[12.89px] text-white-A700 w-auto"
                                      size="txtMontserratRomanSemiBold1289WhiteA700"
                                    >
                                      Qty
                                    </Text>
                                  </div>
                                  <div className="bg-white-A700 flex flex-col items-center justify-center outline outline-[0.5px] outline-indigo-50 p-[11.05px] w-[66px]">
                                    <Text
                                      className="text-[12.89px] text-black-900_b2 w-auto"
                                      size="txtMontserratRegular1289Black900b2"
                                    >
                                      500
                                    </Text>
                                  </div>
                                  <div className="bg-white-A700 flex flex-col items-center justify-center outline outline-[0.5px] outline-indigo-50 p-[11.05px] w-[66px]">
                                    <Text
                                      className="text-[12.89px] text-black-900_b2 w-auto"
                                      size="txtMontserratRegular1289Black900b2"
                                    >
                                      100
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-row items-start justify-start w-auto">
                                  <Text
                                    className="bg-gray-400 justify-center outline outline-[0.5px] outline-indigo-50 pt-[11px] px-4 text-[12.89px] text-white-A700 w-[66px]"
                                    size="txtMontserratRomanSemiBold1289WhiteA700"
                                  >
                                    Price
                                  </Text>
                                  <Text
                                    className="bg-white-A700 justify-center outline outline-[0.5px] outline-indigo-50 pt-[11px] px-[19px] text-[12.89px] text-black-900_b2 w-[66px]"
                                    size="txtMontserratRegular1289Black900b2"
                                  >
                                    2.30
                                  </Text>
                                  <Text
                                    className="bg-white-A700 justify-center outline outline-[0.5px] outline-indigo-50 pt-[11px] px-[19px] text-[12.89px] text-black-900_b2 w-[66px]"
                                    size="txtMontserratRegular1289Black900b2"
                                  >
                                    2.20
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div> */}

                    <div className="flex flex-col font-poppins items-start justify-start outline outline-[0.5px] outline-indigo-50 rounded-lg w-[92%]  md:w-full">
                      <div className="bg-gray-100 flex flex-row sm:gap-10 items-start justify-between p-[21.99px] sm:px-5 rounded-tl-lg rounded-tr-lg w-full">
                        <div className="flex flex-row gap-[5px] items-center justify-center w-[24%]">
                          <Img
                            className="h-[27px] md:h-auto object-cover w-[14%]"
                            src="images/img_maskgroup.png"
                            alt="maskgroup"
                          />
                          <Text className="font-semibold text-[11px] text-black-900">
                            <>
                              SHOWMORE
                              <br />
                              MANUFACTURING
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-col font-montserrat gap-[1.83px] items-end justify-start w-auto">
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text className="font-semibold sm:text-[17.99px] md:text-[19.99px] text-[21.99px] text-green-A700 w-auto">
                              PRESENTATION
                            </Text>
                          </div>
                          <Text className="font-semibold text-[12.83px] text-black-900 w-auto">
                            PT - 1039
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex sm:flex-col flex-row font-montserrat gap-[14.66px] items-start justify-start sm:px-5 px-[21.99px] py-[14.66px] w-full">
                        <List
                          className="sm:flex-1 sm:flex-col flex-row gap-3.5 grid grid-cols-2 w-[66%] sm:w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col gap-[5.5px] items-start justify-start p-[14.66px] w-full">
                            <Text className="bg-gray-100 border-green-A700 border-l border-solid font-medium justify-center px-[7px] py-0.5 text-[11px] text-green-A700 w-auto">
                              Project Name
                            </Text>
                            <div className="flex flex-col gap-[11.94px] items-start justify-start w-auto">
                              <div className="flex flex-col gap-[1.99px] items-start justify-start w-auto">
                                <Text className="font-semibold text-[10.08px] text-black-900 w-auto">
                                  Gift for trainees
                                </Text>
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <Text className="font-medium text-[9.16px] text-black-900_99">
                                    <>
                                      Rahul Sharma,
                                      <br />
                                      Rahul@gmail.com
                                    </>
                                  </Text>
                                </div>
                              </div>
                              <Text className="font-medium text-[9.16px] text-black-900">
                                <>
                                  Plot no. 5<br />
                                  Shakti Nagar,
                                  <br />
                                  Rajasthan, India
                                </>
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[5.5px] items-start justify-start p-[14.66px] w-full">
                            <Text className="bg-gray-100 border-green-A700 border-l border-solid font-medium justify-center px-[7px] py-0.5 text-[11px] text-green-A700 w-auto">
                              Project To
                            </Text>
                            <div className="flex flex-col gap-[11.94px] items-start justify-start w-auto">
                              <div className="flex flex-col gap-[1.99px] items-start justify-start w-auto">
                                <Text className="font-semibold text-[10.08px] text-black-900 w-auto">
                                  Airtel Pvt. Ltd.
                                </Text>
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <Text className="font-medium text-[9.16px] text-black-900_99">
                                    <>
                                      Amitabh Singh,
                                      <br />
                                      Amitabh@gmail.com
                                    </>
                                  </Text>
                                </div>
                              </div>
                              <Text className="font-medium text-[9.16px] text-black-900">
                                <>
                                  54869
                                  <br />
                                  Jtm,Baltimore,
                                  <br />
                                  Rajasthan, India
                                </>
                              </Text>
                            </div>
                          </div>
                        </List>
                        <div className="flex flex-1 flex-col items-start justify-start p-[14.66px] w-full">
                          <div className="flex flex-col items-start justify-start w-auto">
                            <div className="flex flex-col items-start justify-start w-auto">
                              <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
                                <div className="flex flex-row gap-[5.5px] items-center justify-start w-auto">
                                  <Text className="font-medium text-[9.16px] text-black-900_7f w-auto">
                                    Project ID
                                  </Text>
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <Text className="font-semibold text-[9.16px] text-black-900 w-auto">
                                      PT - 1039
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-row gap-[5.5px] items-center justify-start w-auto">
                                  <Text className="font-medium text-[9.16px] text-black-900_7f w-auto">
                                    Order Date
                                  </Text>
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <Text className="font-semibold text-[9.16px] text-black-900 w-auto">
                                      Aug 8, 2023
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-row gap-[5.5px] items-center justify-start w-auto">
                                  <Text className="font-medium text-[9.16px] text-black-900_7f w-auto">
                                    Expiry Date
                                  </Text>
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <Text className="font-semibold text-[9.16px] text-black-900 w-auto">
                                      Aug 28, 2023
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <List
                        className="bg-white-A700 flex flex-col font-montserrat gap-[14.66px] items-start p-[18.33px] w-full"
                        orientation="vertical"
                      >
                        <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start my-0 outline outline-[0.5px] outline-black-900_0f p-[14.66px] rounded-[7px] w-full">
                          <div className="flex sm:flex-col flex-row gap-[11px] items-start justify-start w-full">
                            <div className="bg-white-A700 flex flex-col h-[91px] items-center justify-start outline outline-[0.5px] outline-indigo-50 pt-0.5 rounded-[3px] w-[91px]">
                              <Img
                                className="h-[89px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                                src="images/img_image77.png"
                                alt="imageSeventySeven"
                              />
                            </div>
                            <div className="flex flex-1 flex-col gap-[11px] items-start justify-start w-full">
                              <div className="flex flex-col gap-[7.33px] items-center justify-start w-full">
                                <div className="flex flex-row gap-[11px] items-center justify-between w-full">
                                  <Text className="border border-solid border-teal-600 font-medium px-[3px] py-0.5 rounded-[3px] text-[11px] text-teal-600 w-auto">
                                    SKU : 2600
                                  </Text>
                                  <Text className="font-medium text-[11px] text-black-900_7f w-auto">
                                    #933144188
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                                  <div className="flex flex-col gap-[3.67px] items-start justify-start w-full">
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <Text className="font-semibold text-[14.66px] text-black-900 w-full">
                                        Vansport Omega Solid Mesh Tech Polo
                                        Shirt
                                      </Text>
                                    </div>
                                    <Text className="leading-[140.00%] max-w-[376px] md:max-w-full text-[11px] text-black-900_b2">
                                      Our best-selling, moisture-wicking golf
                                      shirt keeps you cool; comfortable during
                                      active wear. Vansport fabric is specially
                                      engineered to resist snags &amp; pulls,
                                      with a lighter and smoother hand than
                                      other polos at comparable prices.
                                    </Text>
                                  </div>
                                  <Text className="font-medium text-[11px] text-black-900_cc w-full">
                                    Colors : Blue, Clear, Green, Pink, Purple,
                                    Red, Smoke, Yellow,
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-[182px]">
                                <div className="flex flex-row items-start justify-start w-[182px]">
                                  <Button
                                    className="cursor-pointer font-semibold leading-[normal] outline outline-[1px] outline-black-900_28 text-[12.83px] text-center w-[60px]"
                                    shape="square"
                                    color="gray_50"
                                  >
                                    Qty
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[1px] outline-black-900_28 text-[12.83px] text-center w-[60px]"
                                    shape="square"
                                    color="white_A700"
                                  >
                                    500
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[1px] outline-black-900_28 text-[12.83px] text-center w-[60px]"
                                    shape="square"
                                    color="white_A700"
                                  >
                                    100
                                  </Button>
                                </div>
                                <div className="flex flex-row items-start justify-start w-auto">
                                  <Button
                                    className="cursor-pointer font-semibold leading-[normal] outline outline-[1px] outline-black-900_28 text-[12.83px] text-center w-[60px]"
                                    shape="square"
                                    color="gray_50"
                                  >
                                    Price
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[1px] outline-black-900_28 text-[12.83px] text-center w-[60px]"
                                    shape="square"
                                    color="white_A700"
                                  >
                                    2.30
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[1px] outline-black-900_28 text-[12.83px] text-center w-[60px]"
                                    shape="square"
                                    color="white_A700"
                                  >
                                    2.20
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start my-0 outline outline-[0.5px] outline-black-900_0f p-[14.66px] rounded-[7px] w-full">
                          <div className="flex sm:flex-col flex-row gap-[11px] items-start justify-start w-full">
                            <div className="bg-white-A700 flex flex-col h-[91px] items-center justify-start outline outline-[0.5px] outline-indigo-50 pt-0.5 rounded-[3px] w-[91px]">
                              <Img
                                className="h-[89px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                                src="images/img_image77.png"
                                alt="imageSeventySeven"
                              />
                            </div>
                            <div className="flex flex-1 flex-col gap-[11px] items-start justify-start w-full">
                              <div className="flex flex-col gap-[7.33px] items-center justify-start w-full">
                                <div className="flex flex-row gap-[11px] items-center justify-between w-full">
                                  <Text className="border border-solid border-teal-600 font-medium px-[3px] py-0.5 rounded-[3px] text-[11px] text-teal-600 w-auto">
                                    SKU : 2600
                                  </Text>
                                  <Text className="font-medium text-[11px] text-black-900_7f w-auto">
                                    #933144188
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                                  <div className="flex flex-col gap-[3.67px] items-start justify-start w-full">
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <Text className="font-semibold text-[14.66px] text-black-900 w-full">
                                        Vansport Omega Solid Mesh Tech Polo
                                        Shirt
                                      </Text>
                                    </div>
                                    <Text className="leading-[140.00%] max-w-[376px] md:max-w-full text-[11px] text-black-900_b2">
                                      Our best-selling, moisture-wicking golf
                                      shirt keeps you cool; comfortable during
                                      active wear. Vansport fabric is specially
                                      engineered to resist snags &amp; pulls,
                                      with a lighter and smoother hand than
                                      other polos at comparable prices.
                                    </Text>
                                  </div>
                                  <Text className="font-medium text-[11px] text-black-900_cc w-full">
                                    Colors : Blue, Clear, Green, Pink, Purple,
                                    Red, Smoke, Yellow,
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-[182px]">
                                <div className="flex flex-row items-start justify-start w-[182px]">
                                  <Button
                                    className="cursor-pointer font-semibold leading-[normal] outline outline-[1px] outline-black-900_28 text-[12.83px] text-center w-[60px]"
                                    shape="square"
                                    color="gray_50"
                                  >
                                    Qty
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[1px] outline-black-900_28 text-[12.83px] text-center w-[60px]"
                                    shape="square"
                                    color="white_A700"
                                  >
                                    500
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[1px] outline-black-900_28 text-[12.83px] text-center w-[60px]"
                                    shape="square"
                                    color="white_A700"
                                  >
                                    100
                                  </Button>
                                </div>
                                <div className="flex flex-row items-start justify-start w-auto">
                                  <Button
                                    className="cursor-pointer font-semibold leading-[normal] outline outline-[1px] outline-black-900_28 text-[12.83px] text-center w-[60px]"
                                    shape="square"
                                    color="gray_50"
                                  >
                                    Price
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[1px] outline-black-900_28 text-[12.83px] text-center w-[60px]"
                                    shape="square"
                                    color="white_A700"
                                  >
                                    2.30
                                  </Button>
                                  <Button
                                    className="cursor-pointer leading-[normal] outline outline-[1px] outline-black-900_28 text-[12.83px] text-center w-[60px]"
                                    shape="square"
                                    color="white_A700"
                                  >
                                    2.20
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                      <div className="bg-gray-100 flex sm:flex-col flex-row font-montserrat gap-[34.82px] items-start justify-start sm:px-5 px-[21.99px] py-[43.99px] rounded-bl-lg rounded-br-lg w-full">
                        <div className="flex flex-1 md:flex-1 flex-col gap-[11px] items-start justify-start w-auto md:w-full">
                          <Text className="font-semibold text-[11px] text-black-900 w-auto">
                            Additional Notes
                          </Text>
                          <Text className="leading-[160.00%] max-w-[234px] md:max-w-full text-[9.16px] text-black-900">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer malesuada massa quis molestie dapibus.
                            Nam arcu dui, imperdiet nec quam vitae, hendrerit
                            luctus turpis.
                          </Text>
                        </div>
                        <div className="flex flex-1 md:flex-1 flex-col gap-[7.33px] items-start justify-start w-auto md:w-full">
                          <Text className="font-semibold text-[11px] text-black-900 w-auto">
                            Contact
                          </Text>
                          <Text className="leading-[160.00%] max-w-[234px] md:max-w-full text-[9.16px] text-black-900">
                            <span className="text-black-900 font-montserrat text-left font-normal">
                              For any enquiries, email us on{" "}
                            </span>
                            <span className="text-black-900 font-montserrat text-left font-semibold">
                              jason@andwesupport.com
                            </span>
                            <span className="text-black-900 font-montserrat text-left font-normal">
                              , or call us on{" "}
                            </span>
                            <span className="text-black-900 font-montserrat text-left font-semibold">
                              9602665445
                            </span>
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
      </div>
    </>
  );
};

export default Presentation;
