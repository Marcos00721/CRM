import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Switch,
  Text,
} from "components";
import ProjectTop from "components/ProjectTop";
import Sidebar1 from "components/Sidebar1";

const sharedToClientOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const bestPromosOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const bestPromosOptionsList1 = [
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

const Azmonk31TwoPage = () => {
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

          <div className="bg-white-A700 font-montserrat h-[1069px] mx-auto w-full">
            <div className=" mx-auto px-5 w-full">
              <div className="flex w-full ">
                <div className="flex flex-col w-1/2 md:w-full">
                  <div className="flex flex-col w-full">
                    <div className="bg-white-A700 flex flex-col gap-7 items-start justify-start mx-auto outline outline-indigo-50 p-4 w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row gap-4 items-center justify-between w-full">
                          <Text
                            className="text-black-900 text-lg w-auto"
                            size="txtMontserratRomanSemiBold18Black900"
                          >
                            Invoices
                          </Text>
                          <div className="flex flex-row gap-1 items-center justify-start w-1/2">
                            <Text
                              className="text-black-900_66 text-sm "
                              size="txtMontserratRomanMedium14Black90066"
                            >
                              Status :
                            </Text>
                            <SelectBox
                              className="font-medium leading-[normal] text-left text-sm w-[76%] sm:w-full"
                              placeholderClassName="text-black-900"
                              indicator={
                                <Img
                                  className="h-4 w-4"
                                  src="/images/img_arrowdown_black_900.svg"
                                  alt="arrow_down"
                                />
                              }
                              isSearchable={false}
                              placeholder="Shared to Client"
                              getOptionLabel={(e) => (
                                <div className="flex items-center">
                                  <Img
                                    className="h-1.5 mr-1 pb-1.5 pl-1.5 border-deep_purple-400_3d border border-solid w-1.5 rounded-[50%]"
                                    src="/images/img_reply.svg"
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
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
                            <Text
                              className="text-black-900_99 text-sm w-auto"
                              size="txtMontserratRegular14Black90099"
                            >
                              Invoice Date
                            </Text>
                            <Input
                              name="frame53369"
                              placeholder="DD/MM/YYYY"
                              className="font-medium leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                              wrapClassName="border border-black-900_28 border-solid flex w-full"
                              suffix={
                                <Img
                                  className="mt-auto mb-px h-5 ml-[35px]"
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
                      <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtMontserratRomanSemiBold18Black900"
                        >
                          Invoice Details
                        </Text>
                        <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                          <List
                            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 grid-cols-2 justify-start w-auto sm:w-full"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
                              <div className="flex flex-row gap-2 items-center justify-between w-full">
                                <Text
                                  className="text-black-900_99 text-sm w-auto"
                                  size="txtMontserratRegular14Black90099"
                                >
                                  Billing Address
                                </Text>
                                <Text
                                  className="text-light_blue-A700 text-xs underline w-auto"
                                  size="txtMontserratRegular12LightblueA700"
                                >
                                  +Add new
                                </Text>
                              </div>
                              <SelectBox
                                className="border border-black-900_28 border-solid font-medium leading-[normal] rounded text-base text-left w-full"
                                placeholderClassName="text-black-900_cc"
                                indicator={
                                  <Img
                                    className="h-4 w-4"
                                    src="/images/img_arrowdown_black_900.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="frame53369"
                                options={bestPromosOptionsList}
                                isSearchable={false}
                                placeholder="Best Promos"
                                color="white_A700"
                                size="md"
                                variant="fill"
                              />
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
                              <div className="flex flex-row gap-2 items-center justify-between w-full">
                                <Text
                                  className="text-black-900_99 text-sm w-auto"
                                  size="txtMontserratRegular14Black90099"
                                >
                                  Shipping Address
                                </Text>
                                <Text
                                  className="text-light_blue-A700 text-xs underline w-auto"
                                  size="txtMontserratRegular12LightblueA700"
                                >
                                  +Add new
                                </Text>
                              </div>
                              <SelectBox
                                className="border border-black-900_28 border-solid font-medium leading-[normal] rounded text-base text-left w-full"
                                placeholderClassName="text-black-900_cc"
                                indicator={
                                  <Img
                                    className="h-4 w-4"
                                    src="/images/img_arrowdown_black_900.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="frame53369"
                                options={bestPromosOptionsList1}
                                isSearchable={false}
                                placeholder="Best Promos"
                                color="white_A700"
                                size="md"
                                variant="fill"
                              />
                            </div>
                          </List>
                          <List
                            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 grid-cols-2 justify-start w-auto sm:w-full"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
                              <div className="flex flex-row gap-2 items-center justify-between w-full">
                                <Text
                                  className="text-black-900_99 text-sm w-auto"
                                  size="txtMontserratRegular14Black90099"
                                >
                                  Client Contact
                                </Text>
                                <Text
                                  className="text-light_blue-A700 text-xs underline w-auto"
                                  size="txtMontserratRegular12LightblueA700"
                                >
                                  +Add new
                                </Text>
                              </div>
                              <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-row gap-2.5 items-center justify-between p-3 rounded w-full">
                                <div className="flex flex-col items-center justify-start w-[182px]">
                                  <div className="flex flex-row gap-2 items-center justify-start w-[182px]">
                                    <Text
                                      className="bg-deep_orange-100_01 flex h-[18px] items-center justify-center rounded-[50%] text-[9.21px] text-center text-gray-600_02 w-[18px]"
                                      size="txtMontserratRomanSemiBold921"
                                    >
                                      RS
                                    </Text>
                                    <Text
                                      className="text-base text-black-900_cc w-auto"
                                      size="txtMontserratRomanMedium16Black900cc"
                                    >
                                      Rahul Sharma
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  className="h-4 w-4"
                                  src="/images/img_arrowdown_black_900.svg"
                                  alt="arrowdown"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
                              <div className="flex flex-row gap-2 items-center justify-between w-full">
                                <Text
                                  className="text-black-900_99 text-sm w-auto"
                                  size="txtMontserratRegular14Black90099"
                                >
                                  Client Contact
                                </Text>
                                <Text
                                  className="text-light_blue-A700 text-xs underline w-auto"
                                  size="txtMontserratRegular12LightblueA700"
                                >
                                  +Add new
                                </Text>
                              </div>
                              <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-row gap-2.5 items-center justify-between p-3 rounded w-full">
                                <div className="flex flex-col items-center justify-start w-[182px]">
                                  <div className="flex flex-row gap-2 items-center justify-start w-[182px]">
                                    <Text
                                      className="bg-deep_orange-100_01 flex h-[18px] items-center justify-center rounded-[50%] text-[9.21px] text-center text-gray-600_02 w-[18px]"
                                      size="txtMontserratRomanSemiBold921"
                                    >
                                      AS
                                    </Text>
                                    <Text
                                      className="text-base text-black-900_cc w-auto"
                                      size="txtMontserratRomanMedium16Black900cc"
                                    >
                                      Amitabh Singh
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  className="h-4 w-4"
                                  src="/images/img_arrowdown_black_900.svg"
                                  alt="arrowdown"
                                />
                              </div>
                            </div>
                          </List>
                          <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                            <Text
                              className="text-base text-black-900"
                              size="txtMontserratRegular16Black900"
                            >
                              <>
                                Plot no. 5<br />
                                Shakti Nagar,
                                <br />
                                Rajasthan, India
                                <br />
                                <br />
                                Rahul Sharma,
                                <br />
                                Rahul@gmail.com
                              </>
                            </Text>
                            <Text
                              className="text-base text-black-900"
                              size="txtMontserratRegular16Black900"
                            >
                              <>
                                54869
                                <br />
                                Jtm,Baltimore,
                                <br />
                                Rajasthan, India
                                <br />
                                <br />
                                Amitabh Singh,
                                <br />
                                Amitabh@gmail.com
                              </>
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                            <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
                              <Text
                                className="text-black-900_99 text-sm w-auto"
                                size="txtMontserratRegular14Black90099"
                              >
                                Payment Terms
                              </Text>
                              <Input
                                name="netCounter"
                                placeholder="Net 30"
                                className="font-medium leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                                wrapClassName="border border-black-900_28 border-solid flex w-full"
                                suffix={
                                  <Img
                                    className="mt-px mb-0.5 h-4 ml-[35px]"
                                    src="/images/img_arrowdown_black_900.svg"
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
                                In Hands Date
                              </Text>
                              <Input
                                name="frame53369_One"
                                placeholder="DD/MM/YYYY"
                                className="font-medium leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                                wrapClassName="border border-black-900_28 border-solid flex w-full"
                                suffix={
                                  <Img
                                    className="mt-auto mb-px h-5 ml-[35px]"
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
                          <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                            <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
                              <Text
                                className="text-black-900_99 text-sm w-auto"
                                size="txtMontserratRegular14Black90099"
                              >
                                Currency
                              </Text>
                              <Input
                                name="price"
                                placeholder="USD"
                                className="font-medium leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                                wrapClassName="border border-black-900_28 border-solid flex w-full"
                                suffix={
                                  <Img
                                    className="mt-px mb-0.5 h-4 ml-[35px]"
                                    src="/images/img_arrowdown_black_900.svg"
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
                                Default Margin
                              </Text>
                              <Input
                                name="frame53369_Two"
                                placeholder="Enter here..."
                                className="!placeholder:text-black-900_4c !text-black-900_4c font-medium leading-[normal] p-0 text-base text-left w-full"
                                wrapClassName="border border-black-900_28 border-solid w-full"
                                shape="round"
                                color="white_A700"
                                variant="fill"
                              ></Input>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                            <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
                              <Text
                                className="text-black-900_99 text-sm w-auto"
                                size="txtMontserratRegular14Black90099"
                              >
                                Tax Rate
                              </Text>
                              <Input
                                name="frame53369_Three"
                                placeholder="Tax 8%"
                                className="font-medium leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                                wrapClassName="border border-black-900_28 border-solid flex w-full"
                                suffix={
                                  <Img
                                    className="mt-px mb-0.5 h-4 ml-[35px]"
                                    src="/images/img_arrowdown_black_900.svg"
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
                                Client PO
                              </Text>
                              <Input
                                name="frame53369_Four"
                                placeholder="Enter here..."
                                className="!placeholder:text-black-900_4c !text-black-900_4c font-medium leading-[normal] p-0 text-base text-left w-full"
                                wrapClassName="border border-black-900_28 border-solid w-full"
                                shape="round"
                                color="white_A700"
                                variant="fill"
                              ></Input>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start mt-[-9px] mx-auto w-auto z-[1]">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtMontserratRomanSemiBold18Black900"
                        >
                          Additional Details
                        </Text>
                        <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-[549px] sm:w-full">
                            <Text
                              className="text-black-900_99 text-sm w-auto"
                              size="txtMontserratRegular14Black90099"
                            >
                              Notes
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
                                      size="sm"
                                      variant="fill"
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
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start mt-2 w-full">
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
                        size="md"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-sm">
                          Add Product
                        </div>
                      </Button>
                    </div>
                    <List
                      className="bg-white-A700 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-3 justify-start w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-gray-50 flex flex-1 flex-col gap-3 items-start justify-start p-3 rounded-[7px] w-full">
                        <Img
                          className="h-[143px] md:h-auto object-cover rounded-[3px] w-[143px]"
                          src="/images/img_image42.png"
                          alt="imageFortyTwo"
                        />
                        <div className="flex flex-col gap-[18.42px] items-start justify-start w-auto">
                          <div className="flex flex-col gap-[7.37px] items-start justify-start w-auto">
                            <Text
                              className="max-w-[143px] md:max-w-full text-base text-black-900"
                              size="txtMontserratRomanSemiBold16"
                            >
                              Stress Ball Yo-Yo Bungee
                            </Text>
                            <Text
                              className="max-w-[143px] md:max-w-full text-black-900_b2 text-xs"
                              size="txtMontserratRegular12Black900b2"
                            >
                              <>
                                Round Ball Shaped Polyurethane Stress Reliever
                                Yo-Yo Bungee. Complies with ASTM, CCPSA, CPSIA,
                                Prop 65. 2.75&quot; Diameter
                              </>
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-auto">
                            <div className="flex flex-col gap-[7px] items-start justify-start w-[77%]">
                              <div className="flex flex-row gap-[7px] items-center justify-start w-[83%] md:w-full">
                                <Text
                                  className="text-[10px] text-black-900 w-auto"
                                  size="txtMontserratRegular10"
                                >
                                  Colors :
                                </Text>
                                <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] rounded-[3px] w-auto">
                                  <div className="bg-red-400 h-[7px] rounded-[3px] w-[7px]"></div>
                                  <Text
                                    className="text-[10px] text-black-900 w-auto"
                                    size="txtMontserratRegular10"
                                  >
                                    Red
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row gap-2 items-center justify-between w-full">
                                <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] rounded-[3px] w-auto">
                                  <div className="bg-indigo-A200 h-px rounded-[3px] w-[22%]"></div>
                                  <Text
                                    className="text-[10px] text-black-900 w-auto"
                                    size="txtMontserratRegular10"
                                  >
                                    Blue
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] rounded-[3px] w-auto">
                                  <div className="bg-black-900 h-px rounded-[3px] w-[19%]"></div>
                                  <Text
                                    className="text-[10px] text-black-900 w-auto"
                                    size="txtMontserratRegular10"
                                  >
                                    Black
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 flex flex-1 flex-col gap-3 items-start justify-start p-3 rounded-[7px] w-full">
                        <Img
                          className="h-[143px] md:h-auto object-cover rounded-[3px] w-[143px]"
                          src="/images/img_image42.png"
                          alt="imageFortyTwo"
                        />
                        <div className="flex flex-col gap-[18.42px] items-start justify-start w-auto">
                          <div className="flex flex-col gap-[7.37px] items-start justify-start w-auto">
                            <Text
                              className="max-w-[143px] md:max-w-full text-base text-black-900"
                              size="txtMontserratRomanSemiBold16"
                            >
                              Stress Ball Yo-Yo Bungee
                            </Text>
                            <Text
                              className="max-w-[143px] md:max-w-full text-black-900_b2 text-xs"
                              size="txtMontserratRegular12Black900b2"
                            >
                              <>
                                Round Ball Shaped Polyurethane Stress Reliever
                                Yo-Yo Bungee. Complies with ASTM, CCPSA, CPSIA,
                                Prop 65. 2.75&quot; Diameter
                              </>
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-auto">
                            <div className="flex flex-col gap-[7px] items-start justify-start w-[77%]">
                              <div className="flex flex-row gap-[7px] items-center justify-start w-[83%] md:w-full">
                                <Text
                                  className="text-[10px] text-black-900 w-auto"
                                  size="txtMontserratRegular10"
                                >
                                  Colors :
                                </Text>
                                <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] rounded-[3px] w-auto">
                                  <div className="bg-red-400 h-[7px] rounded-[3px] w-[7px]"></div>
                                  <Text
                                    className="text-[10px] text-black-900 w-auto"
                                    size="txtMontserratRegular10"
                                  >
                                    Red
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row gap-2 items-center justify-between w-full">
                                <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] rounded-[3px] w-auto">
                                  <div className="bg-indigo-A200 h-px rounded-[3px] w-[22%]"></div>
                                  <Text
                                    className="text-[10px] text-black-900 w-auto"
                                    size="txtMontserratRegular10"
                                  >
                                    Blue
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] rounded-[3px] w-auto">
                                  <div className="bg-black-900 h-px rounded-[3px] w-[19%]"></div>
                                  <Text
                                    className="text-[10px] text-black-900 w-auto"
                                    size="txtMontserratRegular10"
                                  >
                                    Black
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 flex flex-1 flex-col gap-3 items-start justify-start p-3 rounded-[7px] w-full">
                        <Img
                          className="h-[143px] md:h-auto object-cover rounded-[3px] w-[143px]"
                          src="/images/img_image42.png"
                          alt="imageFortyTwo"
                        />
                        <div className="flex flex-col gap-[18.42px] items-start justify-start w-auto">
                          <div className="flex flex-col gap-[7.37px] items-start justify-start w-auto">
                            <Text
                              className="max-w-[143px] md:max-w-full text-base text-black-900"
                              size="txtMontserratRomanSemiBold16"
                            >
                              Stress Ball Yo-Yo Bungee
                            </Text>
                            <Text
                              className="max-w-[143px] md:max-w-full text-black-900_b2 text-xs"
                              size="txtMontserratRegular12Black900b2"
                            >
                              <>
                                Round Ball Shaped Polyurethane Stress Reliever
                                Yo-Yo Bungee. Complies with ASTM, CCPSA, CPSIA,
                                Prop 65. 2.75&quot; Diameter
                              </>
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-auto">
                            <div className="flex flex-col gap-[7px] items-start justify-start w-[77%]">
                              <div className="flex flex-row gap-[7px] items-center justify-start w-[83%] md:w-full">
                                <Text
                                  className="text-[10px] text-black-900 w-auto"
                                  size="txtMontserratRegular10"
                                >
                                  Colors :
                                </Text>
                                <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] rounded-[3px] w-auto">
                                  <div className="bg-red-400 h-[7px] rounded-[3px] w-[7px]"></div>
                                  <Text
                                    className="text-[10px] text-black-900 w-auto"
                                    size="txtMontserratRegular10"
                                  >
                                    Red
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row gap-2 items-center justify-between w-full">
                                <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] rounded-[3px] w-auto">
                                  <div className="bg-indigo-A200 h-px rounded-[3px] w-[22%]"></div>
                                  <Text
                                    className="text-[10px] text-black-900 w-auto"
                                    size="txtMontserratRegular10"
                                  >
                                    Blue
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] rounded-[3px] w-auto">
                                  <div className="bg-black-900 h-px rounded-[3px] w-[19%]"></div>
                                  <Text
                                    className="text-[10px] text-black-900 w-auto"
                                    size="txtMontserratRegular10"
                                  >
                                    Black
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="bg-gray-50 relative w-1/2 md:w-full pl-3">
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
                  <div className="bg-white-A700  flex flex-col font-poppins  items-start justify-start mx-auto outline outline-[0.5px] outline-indigo-50 rounded-lg  w-[92%]">
                <div className="bg-gray-100 flex flex-row sm:gap-10 items-start justify-between p-[22.1px] sm:px-5 w-full">
                  <div className="flex flex-row gap-[5px] items-center justify-center w-[24%]">
                    <Img
                      className="h-[27px] md:h-auto object-cover w-[14%]"
                      src="/images/img_maskgroup.png"
                      alt="maskgroup"
                    />
                    <Text
                      className="text-[11.05px] text-black-900"
                      size="txtPoppinsSemiBold1105"
                    >
                      <>
                        SHOWMORE
                        <br />
                        MANUFACTURING
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col font-montserrat gap-[1.84px] items-end justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="sm:text-[18.1px] md:text-[20.1px] text-[22.1px] text-green-A700 w-auto"
                        size="txtMontserratRomanSemiBold221GreenA700"
                      >
                        INVOICE
                      </Text>
                    </div>
                    <Text
                      className="text-[12.89px] text-black-900 w-auto"
                      size="txtMontserratRomanSemiBold1289"
                    >
                      INV-5417654
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row font-montserrat gap-[14.74px] items-start justify-start mt-2.5 sm:px-5 px-[22.1px] py-[14.74px] w-full">
                  <List
                    className="sm:flex-col flex-row gap-3.5 grid grid-cols-3 w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-[5.53px] items-start justify-start p-[14.74px] w-full">
                      <Text
                        className="bg-gray-100 border-green-A700 border-l border-solid justify-center px-[7px] py-0.5 text-[11.05px] text-green-A700 w-auto"
                        size="txtMontserratRomanMedium1105GreenA700"
                      >
                        Bill To
                      </Text>
                      <div className="flex flex-col gap-3 items-start justify-start w-auto">
                        <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                          <Text
                            className="text-[10.13px] text-black-900 w-auto"
                            size="txtMontserratRomanSemiBold1013"
                          >
                            Showmore Manufacturing
                          </Text>
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-[9.21px] text-black-900_99"
                              size="txtMontserratRomanMedium921"
                            >
                              <>
                                Rahul Sharma,
                                <br />
                                Rahul@gmail.com
                              </>
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="text-[9.21px] text-black-900"
                          size="txtMontserratRomanMedium921Black900"
                        >
                          <>
                            Plot no. 5<br />
                            Shakti Nagar,
                            <br />
                            Rajasthan, India
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5.53px] items-start justify-start p-[14.74px] w-full">
                      <Text
                        className="bg-gray-100 border-green-A700 border-l border-solid justify-center px-[7px] py-0.5 text-[11.05px] text-green-A700 w-auto"
                        size="txtMontserratRomanMedium1105GreenA700"
                      >
                        Ship To
                      </Text>
                      <div className="flex flex-col gap-3 items-start justify-start w-auto">
                        <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                          <Text
                            className="text-[10.13px] text-black-900 w-auto"
                            size="txtMontserratRomanSemiBold1013"
                          >
                            Airtel Pvt. Ltd.
                          </Text>
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-[9.21px] text-black-900_99"
                              size="txtMontserratRomanMedium921"
                            >
                              <>
                                Amitabh Singh,
                                <br />
                                Amitabh@gmail.com
                              </>
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="text-[9.21px] text-black-900"
                          size="txtMontserratRomanMedium921Black900"
                        >
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
                  <div className="flex flex-col items-start justify-start p-[14.74px] gap-[11.05px] w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-[9.21px] text-black-900_7f w-auto"
                              size="txtMontserratRomanMedium921Black9007f"
                            >
                              Invoice Date
                            </Text>
                            <div className="flex flex-col items-start justify-start w-auto">
                              <Text
                                className="text-[9.21px] text-black-900 w-auto"
                                size="txtMontserratRomanSemiBold921Black900"
                              >
                                Aug 1, 2023
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row  items-center justify-between w-full">
                            <Text
                              className="text-[9.21px] text-black-900_7f w-auto"
                              size="txtMontserratRomanMedium921Black9007f"
                            >
                              Due Date
                            </Text>
                            <div className="flex flex-col items-start justify-start w-auto">
                              <Text
                                className="text-[9.21px] text-black-900 w-auto"
                                size="txtMontserratRomanSemiBold921Black900"
                              >
                                Aug 8, 2023
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row  items-center justify-between w-full">
                            <Text
                              className="text-[9.21px] text-black-900_7f w-auto"
                              size="txtMontserratRomanMedium921Black9007f"
                            >
                              Paid Amount
                            </Text>
                            <div className="flex flex-col items-start justify-start w-3">
                              <Text
                                className="text-[9.21px] text-black-900"
                                size="txtMontserratRomanSemiBold921Black900"
                              >
                                $0
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row  items-center justify-between w-full">
                            <Text
                              className="text-[9.21px] text-black-900_7f w-auto"
                              size="txtMontserratRomanMedium921Black9007f"
                            >
                              Due Amount
                            </Text>
                            <div className="flex flex-col items-start justify-start w-auto">
                              <Text
                                className="text-[12.89px] text-green-A700 w-auto"
                                size="txtMontserratRomanSemiBold1289GreenA700"
                              >
                                $1400.20
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-[9.21px] text-black-900_7f w-auto"
                              size="txtMontserratRomanMedium921Black9007f"
                            >
                              Terms
                            </Text>
                          </div>
                          <div className="flex flex-row  items-center justify-between w-full">
                            <Text
                              className="text-[9.21px] text-black-900_7f w-auto"
                              size="txtMontserratRomanMedium921Black9007f"
                            >
                              Customer PO
                            </Text>
                            <div className="bg-gray-100_a2 border border-black-900_4f border-solid h-[19px] w-[45%]"></div>
                          </div>
                  </div>
                  </List>
                </div>
                <div className="flex flex-col font-montserrat items-start justify-start mt-0.5 p-[18.42px] w-full">
                  <div className="md:h-[194px] h-[223px] sm:h-[511px] relative w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto outline outline-[1px] outline-green-A700 rounded-[3px] w-auto">
                      <div className="bg-green-A700 border-b border-indigo-50 border-solid flex sm:flex-col flex-row gap-[22.1px] items-center justify-between px-[14.74px] py-[11.05px] rounded-tl-[3px] rounded-tr-[3px] w-full">
                        <div className="flex flex-col items-center justify-start w-[239px]">
                          <Text
                            className="text-[9.21px] text-white-A700 w-auto"
                            size="txtMontserratRomanSemiBold921WhiteA700"
                          >
                            Item
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[73px]">
                          <Text
                            className="text-[9.21px] text-white-A700 w-auto"
                            size="txtMontserratRomanSemiBold921WhiteA700"
                          >
                            QTY
                          </Text>
                        </div>
                        <List
                          className="sm:flex-col flex-row gap-[7px] grid grid-cols-2 w-[32%] sm:w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col items-center justify-start w-[73px]">
                            <Text
                              className="text-[9.21px] text-white-A700 w-auto"
                              size="txtMontserratRomanSemiBold921WhiteA700"
                            >
                              Price
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[73px]">
                            <Text
                              className="text-[9.21px] text-white-A700 w-auto"
                              size="txtMontserratRomanSemiBold921WhiteA700"
                            >
                              Amount
                            </Text>
                          </div>
                        </List>
                      </div>
                    <div className="flex flex-col items-center justify-start mx-auto w-full">
                      <List
                        className="flex flex-col gap-[11.05px] items-start  px-[14.74px] py-[11.05px] w-full"
                        orientation="vertical"
                      >
                        <div className="flex sm:flex-col flex-row gap-[7.37px] items-end justify-between my-0 w-[481px] sm:w-full">
                          <div className="flex flex-col gap-[11.05px] items-start justify-start w-[239px]">
                            <Text
                              className="text-[11.05px] text-black-900 w-auto"
                              size="txtMontserratRomanSemiBold1105"
                            >
                              Eco hardcover journal & Pen
                            </Text>
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              Color : Green
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[73px]">
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              150
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[73px]">
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              $ 2.5
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[73px]">
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              $ 375.00
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[7.37px] items-end justify-between my-0 w-[481px] sm:w-full">
                          <div className="flex flex-col items-start justify-start w-[239px]">
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              Color : Blue
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[73px]">
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              150
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[73px]">
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              $ 2.5
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[73px]">
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              $ 375.00
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[7.37px] items-end justify-between my-0 w-[481px] sm:w-full">
                          <div className="flex flex-col items-start justify-start w-[239px]">
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              Color : Black
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[73px]">
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              150
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[73px]">
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              $ 2.5
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[73px]">
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              $ 375.00
                            </Text>
                          </div>
                        </div>
                      </List>
                      <List
                        className="flex flex-col gap-[11.05px] items-start  outline outline-indigo-50  px-[14.74px] py-[8.7px] rounded-bl-[3px] rounded-br-[3px] w-full"
                        orientation="vertical"
                      >
                        <div className="flex sm:flex-col flex-row gap-[7.37px] items-end justify-between my-0 w-[481px] sm:w-full">
                          <div className="flex flex-col gap-[11.05px] items-start justify-start w-[239px]">
                            <Text
                              className="text-[11.05px] text-black-900 w-auto"
                              size="txtMontserratRomanSemiBold1105"
                            >
                              Stress Ball Yo-Yo Bungee
                            </Text>
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              Size : Large
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[73px]">
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              150
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[73px]">
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              $ 2.5
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[73px]">
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              $ 375.00
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[7.37px] items-end justify-between my-0 w-[481px] sm:w-full">
                          <div className="flex flex-col items-start justify-start w-[239px]">
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              Size : Extra Large
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[73px]">
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              150
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[73px]">
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              $ 2.5
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[73px]">
                            <Text
                              className="text-[11.05px] text-black-900_cc w-auto"
                              size="txtMontserratRegular1105Black900cc"
                            >
                              $ 375.00
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="flex  font-montserrat gap-[11.05px] items-end justify-end mt-[13px] px-4 w-full">
                  <List
                    className="flex flex-col gap-[5px] items-center w-[219.89px]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row gap-[5.53px] items-center justify-between w-full">
                      <Text
                        className="text-[12.89px] text-black-900_7f w-auto"
                        size="txtMontserratRomanMedium1289"
                      >
                        Subtotal
                      </Text>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-[12.89px] text-black-900 w-auto"
                          size="txtMontserratRomanSemiBold1289"
                        >
                          $1400.20
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row gap-[5.53px] items-center justify-between w-full">
                      <Text
                        className="text-[12.89px] text-black-900_7f w-auto"
                        size="txtMontserratRomanMedium1289"
                      >
                        Taxable Amount
                      </Text>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-[12.89px] text-black-900 w-auto"
                          size="txtMontserratRomanSemiBold1289"
                        >
                          $0.00
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-black-900_14 w-full rounded-[1px]" />
                  <div className="flex flex-row gap-[5.53px] items-center justify-between w-full">
                    <Text
                      className="text-[12.89px] text-black-900_7f w-auto"
                      size="txtMontserratRomanMedium1289"
                    >
                      Total
                    </Text>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-[14.74px] text-green-A700 w-auto"
                        size="txtMontserratRomanSemiBold1474GreenA700"
                      >
                        $1400.20
                      </Text>
                    </div>
                  </div>
                  </List>
                </div>
                  <div className="bg-gray-100 h-[166px] flex flex-col justify-center mx-auto  p-[22.1px] sm:px-5 mt-[27px] w-full">

                  <div className="flex sm:flex-col flex-row gap-[35px] items-start justify-between mx-auto w-auto">
                    <div className="flex flex-col gap-[11.05px] items-start justify-start w-auto">
                      <Text
                        className="text-[11.05px] text-black-900 w-auto"
                        size="txtMontserratRomanSemiBold1105"
                      >
                        Additional Notes
                      </Text>
                      <Text
                        className="leading-[160.00%] max-w-[235px] md:max-w-full text-[9.21px] text-black-900"
                        size="txtMontserratRegular921"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer malesuada massa quis molestie dapibus. Nam arcu
                        dui, imperdiet nec quam vitae, hendrerit luctus turpis.
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7.37px] items-start justify-start w-auto">
                      <Text
                        className="text-[11.05px] text-black-900 w-auto"
                        size="txtMontserratRomanSemiBold1105"
                      >
                        Contact
                      </Text>
                      <Text
                        className="leading-[160.00%] max-w-[235px] md:max-w-full text-[9.21px] text-black-900"
                        size="txtMontserratRegular921"
                      >
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
    </div>
  );
};

export default Azmonk31TwoPage;
