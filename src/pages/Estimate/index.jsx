import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  SelectBox,
  Switch,
  Text,
} from "components";
import Sidebar11 from "components/Sidebar11";
import Sidebar1 from "components/Sidebar1";
import ProjectTop from "components/ProjectTop";
import EstimateComp from "components/EstimateComp";
import Azmonk31TwentyEightColumnaddtoselection from "components/Azmonk31TwentyEightColumnaddtoselection";
import Azmonk31TwentyEightStackcurrency from "components/Azmonk31TwentyEightStackcurrency";

const sharedToClientOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const airtelPvtLtdOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const airtelPvtLtdOptionsList1 = [
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

const Estimate = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto w-full">
      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
        <Sidebar1 className="!sticky !w-[245px] bg-black-900 flex h-screen md:hidden justify-start outline outline-indigo-50 overflow-auto md:px-5 top-[0]" />
        <div className="flex flex-1 flex-col font-inter items-start justify-start overflow-auto md:px-5 w-full">
          <div className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between  outline outline-indigo-50 sm:px-5 px-6 py-5 w-full">
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

          <div className="flex md:flex-col flex-row font-montserrat md:gap-5 items-start justify-evenly w-full">
            <div className="flex flex-col gap-7 items-start justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col relative w-full">
                <div className="bg-white-A700 flex flex-col gap-7 items-center justify-start mx-auto p-6 sm:px-5 w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                      <Text className="font-semibold text-black-900 text-lg w-auto">
                        Estimation
                      </Text>
                      <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-center justify-start w-auto">
                        <div className="flex flex-row gap-1 items-center justify-start min-w-[15rem] w-auto">
                          <Text className="font-medium text-black-900_66 text-sm w-auto">
                            Status :
                          </Text>
                          <SelectBox
                            className="font-medium leading-[normal] text-left text-sm w-[76%] sm:w-full"
                            placeholderClassName="text-black-900"
                            indicator={
                              <Img
                                className="h-4 w-4"
                                src="images/img_arrowdown_black_900_12x12.svg"
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
                        <Button
                          className="border border-black-900_1e border-solid cursor-pointer flex items-center justify-center min-w-[105px]"
                          leftIcon={
                            <Img
                              className="h-5 mr-1"
                              src="images/img_hugeicon_interface_solid_eye.svg"
                              alt="Huge-icon/interface/solid/eye"
                            />
                          }
                          shape="round"
                          color="white_A700"
                          size="md"
                          variant="fill"
                        >
                          <div className="!text-black-900 font-medium text-left text-sm">
                            Preview
                          </div>
                        </Button>
                        <Button
                          className="cursor-pointer font-medium min-w-[77px] text-center text-sm"
                          shape="round"
                          color="black_900"
                          size="md"
                          variant="fill"
                        >
                          Update
                        </Button>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-gray-50 flex flex-1 flex-col gap-5 items-start justify-start p-4 rounded-lg w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                              <div className="flex flex-row gap-2 items-center justify-between w-full">
                                <Text className="text-black-900_99 text-sm w-auto">
                                  Bill to Address
                                </Text>
                                <Text className="text-light_blue-A700 text-xs underline w-auto">
                                  +Add new
                                </Text>
                              </div>
                              <SelectBox
                                className="border border-black-900_28 border-solid font-medium leading-[normal] rounded-lg text-base text-left w-full"
                                placeholderClassName="text-black-900_cc"
                                indicator={
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_arrowdown_black_900_12x12.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="frame53369"
                                options={airtelPvtLtdOptionsList}
                                isSearchable={false}
                                placeholder="Airtel Pvt. Ltd."
                                color="white_A700"
                                size="md"
                                variant="fill"
                              />
                            </div>
                            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                              <div className="flex flex-row gap-2 items-center justify-between w-full">
                                <Text className="text-black-900_99 text-sm w-auto">
                                  Bill to Contact
                                </Text>
                                <Text className="text-light_blue-A700 text-xs underline w-auto">
                                  +Add new
                                </Text>
                              </div>
                              <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-row gap-2.5 items-center justify-between p-3 rounded-lg w-full">
                                <div className="flex flex-row gap-2 items-center justify-start w-[182px]">
                                  <Text className="bg-indigo-50 flex font-semibold h-[18px] items-center justify-center rounded-[50%] text-[9.21px] text-blue_gray-400_01 text-center w-[18px]">
                                    RS
                                  </Text>
                                  <Text className="font-medium text-base text-black-900_cc w-auto">
                                    Rahul Sharma
                                  </Text>
                                </div>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_arrowdown_black_900_12x12.svg"
                                  alt="arrowdown"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-full">
                          <Text className="flex-1 font-medium text-base text-black-900">
                            <>
                              54869
                              <br />
                              Jtm,Baltimore,
                              <br />
                              Rajasthan, India
                            </>
                          </Text>
                          <Text className="flex-1 font-medium text-base text-black-900">
                            <>
                              Rahul Sharma,
                              <br />
                              Rahul@gmail.com
                              <br />
                              +91-7788765343
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-50 flex flex-1 flex-col gap-5 items-start justify-start p-4 rounded-lg w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                              <div className="flex flex-row gap-2 items-center justify-between w-full">
                                <Text className="text-black-900_99 text-sm w-auto">
                                  Ship to Address
                                </Text>
                                <Text className="text-light_blue-A700 text-xs underline w-auto">
                                  +Add new
                                </Text>
                              </div>
                              <SelectBox
                                className="border border-black-900_28 border-solid font-medium leading-[normal] rounded-lg text-base text-left w-full"
                                placeholderClassName="text-black-900_cc"
                                indicator={
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_arrowdown_black_900_12x12.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="frame53369"
                                options={airtelPvtLtdOptionsList1}
                                isSearchable={false}
                                placeholder="Airtel Pvt. Ltd."
                                color="white_A700"
                                size="md"
                                variant="fill"
                              />
                            </div>
                            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                              <div className="flex flex-row gap-2 items-center justify-between w-full">
                                <Text className="text-black-900_99 text-sm w-auto">
                                  Ship to Contact
                                </Text>
                                <Text className="text-light_blue-A700 text-xs underline w-auto">
                                  +Add new
                                </Text>
                              </div>
                              <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-row gap-2.5 items-center justify-between p-3 rounded-lg w-full">
                                <div className="flex flex-row gap-2 items-center justify-start w-[182px]">
                                  <Text className="bg-indigo-50 flex font-semibold h-[18px] items-center justify-center rounded-[50%] text-[9.21px] text-blue_gray-400_01 text-center w-[18px]">
                                    RS
                                  </Text>
                                  <Text className="font-medium text-base text-black-900_cc w-auto">
                                    Rahul Sharma
                                  </Text>
                                </div>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_arrowdown_black_900_12x12.svg"
                                  alt="arrowdown"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-full">
                          <Text className="flex-1 font-medium text-base text-black-900">
                            <>
                              54869
                              <br />
                              Jtm,Baltimore,
                              <br />
                              Rajasthan, India
                            </>
                          </Text>
                          <Text className="flex-1 font-medium text-base text-black-900">
                            <>
                              Rahul Sharma,
                              <br />
                              Rahul@gmail.com
                              <br />
                              +91-7788765343
                            </>
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                  <Azmonk31TwentyEightStackcurrency className="w-full" />
                </div>
                <div className="flex flex-col gap-4 items-center justify-start  mx-auto w-full z-[1]">
                  <div className="flex flex-row gap-4 items-center justify-between w-full">
                    <Text className="font-semibold text-black-900 text-lg w-auto">
                      Products
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[135px]"
                      leftIcon={
                        <Img
                          className="h-4 mt-1.5 mr-[3px]"
                          src="images/img_frame_white_a700_16x16.svg"
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

                  <div className="flex flex-col gap-1 items-start justify-start w-full">
                    <Radio
                      value="SelectAll"
                      className="font-medium font-montserrat leading-[normal] text-black-900_66 text-left my-2 text-xs"
                      inputClassName="border border-black-900_4c border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={true}
                      name="selectall"
                      label="Select All"
                      id="SelectAll"
                    ></Radio>

                    <List
                      className="flex flex-col gap-4 items-start w-full"
                      orientation="vertical"
                    >
                      <Azmonk31TwentyEightColumnaddtoselection />
                      <Azmonk31TwentyEightColumnaddtoselection />
                    </List>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-7 items-center justify-start w-full">
                <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <div className="bg-white-A700 flex flex-col gap-3 items-start justify-start outline outline-[0.5px] outline-black-900_14 p-3 rounded-lg w-[336px]">
                      <div className="flex flex-row gap-3 items-start justify-start w-full">
                        <Text className="font-semibold text-base text-black-900 w-auto">
                          Salesperson :{" "}
                        </Text>
                        <div className="flex flex-row gap-2 items-center justify-start ">
                          <Text className="bg-indigo-50 flex font-semibold h-[18px] items-center justify-center rounded-[50%] text-[9.21px] text-blue_gray-400_01 text-center w-[18px]">
                            RS
                          </Text>
                          <Text className="font-medium text-base text-black-900_cc w-auto">
                            Rahul Sharma
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text className="text-black-900 text-sm w-auto">
                          Thanks for your business
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-50 flex flex-col gap-4 items-start justify-start outline outline-[0.5px] outline-black-900_14 p-3 rounded-lg w-auto">
                      <div className="flex flex-row gap-12 items-start justify-start w-auto">
                        <Text className="font-semibold text-base text-black-900 w-auto">
                          Profit Amount:
                        </Text>
                        <Text className="text-base text-black-900 w-auto">
                          $1717.00
                        </Text>
                      </div>
                      <div className="flex flex-row gap-12 items-start justify-start w-auto">
                        <Text className="font-semibold text-base text-black-900 w-auto">
                          Profit Margin:
                        </Text>
                        <Text className="text-base text-black-900 w-auto">
                          31.38 %
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 flex flex-col gap-4 items-start justify-start outline outline-[0.5px] outline-black-900_14 p-3 rounded-lg w-auto">
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <Text className="font-medium text-black-900_7f text-sm w-auto">
                        Show to client
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
                    <div className="flex flex-row gap-12 items-start justify-between w-full">
                      <Text className="font-semibold text-base text-black-900 w-auto">
                        Misc Charges:
                      </Text>
                      <Text className="text-base text-black-900 w-auto">
                        $0.00
                      </Text>
                    </div>
                    <div className="flex flex-row gap-12 items-start justify-between w-full">
                      <Text className="font-semibold text-base text-black-900 w-auto">
                        Decoration Charges:
                      </Text>
                      <Text className="text-base text-black-900 w-auto">
                        $1172.50
                      </Text>
                    </div>
                    <div className="flex flex-row gap-12 items-start justify-between w-full">
                      <Text className="font-semibold text-base text-black-900 w-auto">
                        Subtotal:
                      </Text>
                      <Text className="text-base text-black-900 w-auto">
                        $5472.50
                      </Text>
                    </div>
                    <div className="flex flex-row gap-12 items-start justify-between w-full">
                      <Text className="font-semibold text-base text-black-900 w-auto">
                        Discount:
                      </Text>
                      <Text className="text-base text-black-900 w-auto">
                        $0.00
                      </Text>
                    </div>
                    <div className="flex flex-row gap-12 items-start justify-between w-full">
                      <Text className="font-semibold text-base text-black-900 w-auto">
                        Tax:
                      </Text>
                      <Text className="text-base text-black-900 w-auto">
                        $0.00
                      </Text>
                    </div>
                    <Line className="bg-black-900_14 h-px w-full" />
                    <div className="flex flex-row gap-12 items-start justify-between w-full">
                      <Text className="font-semibold text-base text-black-900 w-auto">
                        Total:
                      </Text>
                      <Text className="text-base text-black-900 w-auto">
                        $5472.50
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 h-[313px] w-full"></div>
              </div>
            </div>
            {/* <div className="bg-gray-50 relative w-1/2 md:w-full pl-3">
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

                <div className=" bg-white-A700 flex flex-col  items-center justify-start mx-auto outline outline-[0.5px] outline-indigo-50 rounded-lg w-[92%]">
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
                          alt="frame_Six"
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
                  <div className="border-indigo-50 border-solid border-y flex sm:flex-col flex-row gap-[23.95px] items-start justify-between sm:px-5 px-[29.47px] py-[18.42px] w-[548px] sm:w-full">
                    <List
                      className="sm:flex-col flex-row gap-5 grid grid-cols-[repeat(1,_1fr_1px)_1fr] w-[74%] sm:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-[5.53px] items-start justify-start w-auto">
                        <Text
                          className="text-[11.05px] text-black-900_66 tracking-[0.50px] uppercase w-auto"
                          size="txtMontserratRomanMedium1105"
                        >
                          Billing address
                        </Text>
                        <div className="flex flex-col gap-3 items-start justify-start w-auto">
                          <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                            <Text
                              className="text-[14.74px] text-black-900 w-auto"
                              size="txtMontserratRomanSemiBold1474"
                            >
                              Airtel Pvt. Ltd.
                            </Text>
                            <div className="flex flex-col items-start justify-start w-auto">
                              <Text
                                className="text-[14.74px] text-black-900_99"
                                size="txtMontserratRomanMedium1474Black90099"
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
                            className="text-[14.74px] text-black-900"
                            size="txtMontserratRomanMedium1474"
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
                      <Line className="self-center h-[149px] bg-indigo-50 w-px" />
                      <div className="flex flex-col gap-[5.53px] items-start justify-start w-auto">
                        <Text
                          className="text-[11.05px] text-black-900_66 tracking-[0.50px] uppercase w-auto"
                          size="txtMontserratRomanMedium1105"
                        >
                          Shipping address
                        </Text>
                        <div className="flex flex-col gap-3 items-start justify-start w-auto">
                          <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                            <Text
                              className="text-[14.74px] text-black-900 w-auto"
                              size="txtMontserratRomanSemiBold1474"
                            >
                              Airtel Pvt. Ltd.
                            </Text>
                            <div className="flex flex-col items-start justify-start w-auto">
                              <Text
                                className="text-[14.74px] text-black-900_99"
                                size="txtMontserratRomanMedium1474Black90099"
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
                            className="text-[14.74px] text-black-900"
                            size="txtMontserratRomanMedium1474"
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
                    </List>
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
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
                      <div className="flex flex-col gap-[5.53px] items-start justify-start w-auto">
                        <Text
                          className="text-[11.05px] text-black-900_66 tracking-[0.50px] uppercase w-auto"
                          size="txtMontserratRomanMedium1105"
                        >
                          ESTIMATION #
                        </Text>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-[14.74px] text-black-900 w-auto"
                            size="txtMontserratRomanMedium1474"
                          >
                            ET-4117653
                          </Text>
                        </div>
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
                                Round Ball Shaped Polyurethane Stress Reliever
                                Yo-Yo Bungee. Complies with ASTM, CCPSA, CPSIA,
                                Prop 65. 2.75&quot; Diameter
                              </>
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-auto">
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
                            <div className="flex flex-col items-center justify-start w-auto">
                              <Text
                                className="text-[11.05px] text-black-900 w-auto"
                                size="txtMontserratRegular1105Black900"
                              >
                                <span className="text-black-900 font-montserrat text-left font-normal">
                                  Size :{" "}
                                </span>
                                <span className="text-black-900 font-montserrat text-left font-semibold">
                                  2” x 2”{" "}
                                </span>
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
                            <div className="flex flex-row items-start justify-start w-auto">
                              <div className="bg-black-900 flex flex-col items-center justify-center outline outline-[0.5px] outline-indigo-50 p-[11.05px] w-[66px]">
                                <Text
                                  className="text-[12.89px] text-white-A700 w-auto"
                                  size="txtMontserratRomanSemiBold1289WhiteA700"
                                >
                                  Amount
                                </Text>
                              </div>
                              <Button
                                className="!text-black-900 cursor-pointer leading-[normal] outline outline-[0.5px] outline-indigo-50 text-[12.89px] text-center w-[66px]"
                                shape="square"
                                size="md"
                              >
                                1150
                              </Button>
                              <Button
                                className="!text-black-900 cursor-pointer leading-[normal] outline outline-[0.5px] outline-indigo-50 text-[12.89px] text-center w-[66px]"
                                shape="square"
                                size="md"
                              >
                                220
                              </Button>
                            </div>
                            <div className="flex flex-row items-start justify-start w-auto">
                              <div className="h-[38px] outline outline-[0.5px] outline-indigo-50 w-[34%]"></div>
                              <Button
                                className="!text-black-900 cursor-pointer font-semibold leading-[normal] outline outline-[0.5px] outline-indigo-50 text-[12.89px] text-center w-[66px]"
                                shape="square"
                                size="md"
                              >
                                Total
                              </Button>
                              <Button
                                className="!text-black-900 cursor-pointer font-semibold leading-[normal] outline outline-[0.5px] outline-indigo-50 text-[12.89px] text-center w-[66px]"
                                shape="square"
                                size="md"
                              >
                                1370
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
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
                                Round Ball Shaped Polyurethane Stress Reliever
                                Yo-Yo Bungee. Complies with ASTM, CCPSA, CPSIA,
                                Prop 65. 2.75&quot; Diameter
                              </>
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-auto">
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
                            <div className="flex flex-col items-center justify-start w-auto">
                              <Text
                                className="text-[11.05px] text-black-900 w-auto"
                                size="txtMontserratRegular1105Black900"
                              >
                                <span className="text-black-900 font-montserrat text-left font-normal">
                                  Size :{" "}
                                </span>
                                <span className="text-black-900 font-montserrat text-left font-semibold">
                                  2” x 2”{" "}
                                </span>
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
                            <div className="flex flex-row items-start justify-start w-auto">
                              <div className="bg-black-900 flex flex-col items-center justify-center outline outline-[0.5px] outline-indigo-50 p-[11.05px] w-[66px]">
                                <Text
                                  className="text-[12.89px] text-white-A700 w-auto"
                                  size="txtMontserratRomanSemiBold1289WhiteA700"
                                >
                                  Amount
                                </Text>
                              </div>
                              <Button
                                className="!text-black-900 cursor-pointer leading-[normal] outline outline-[0.5px] outline-indigo-50 text-[12.89px] text-center w-[66px]"
                                shape="square"
                                size="md"
                              >
                                1150
                              </Button>
                              <Button
                                className="!text-black-900 cursor-pointer leading-[normal] outline outline-[0.5px] outline-indigo-50 text-[12.89px] text-center w-[66px]"
                                shape="square"
                                size="md"
                              >
                                220
                              </Button>
                            </div>
                            <div className="flex flex-row items-start justify-start w-auto">
                              <div className="h-[38px] outline outline-[0.5px] outline-indigo-50 w-[34%]"></div>
                              <Button
                                className="!text-black-900 cursor-pointer font-semibold leading-[normal] outline outline-[0.5px] outline-indigo-50 text-[12.89px] text-center w-[66px]"
                                shape="square"
                                size="md"
                              >
                                Total
                              </Button>
                              <Button
                                className="!text-black-900 cursor-pointer font-semibold leading-[normal] outline outline-[0.5px] outline-indigo-50 text-[12.89px] text-center w-[66px]"
                                shape="square"
                                size="md"
                              >
                                1370
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                
                    </List>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estimate;
