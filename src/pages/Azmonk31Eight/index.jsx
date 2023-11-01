import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Radio, SelectBox, Switch, Text } from "components";
import Sidebar2 from "components/Sidebar2";

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

const Azmonk31EightPage = () => {
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
            <div className="font-montserrat sm:h-[154px] h-[185px] md:h-[245px] relative w-full">
              <div className="absolute bottom-[0] inset-x-[0] mx-auto overflow-x-auto w-full">
                <div className="flex flex-col items-start justify-start overflow-auto w-auto">
                  <div className="bg-white-A700 h-20 w-full"></div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-[11px] items-start justify-start max-w-[1459px] px-4 py-5 w-full">
                      <div className="font-montserrat h-[74px] relative w-[86%] md:w-full">
                        <div className="absolute h-[74px] inset-[0] justify-center m-auto w-[98%] md:w-full">
                          <div className="bg-white-A700 flex flex-row flex-wrap gap-[11px] h-full items-center justify-end m-auto max-w-[1195px] outline outline-indigo-50 px-4 py-5 w-full">
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[127px] rounded-md"
                              leftIcon={
                                <Img
                                  className="h-[18px] mr-2"
                                  src="/images/img_arrowdown.svg"
                                  alt="arrow_down"
                                />
                              }
                              shape="round"
                              color="black_900_4c"
                              variant="outline"
                            >
                              <div className="font-medium font-montserrat leading-[normal] text-left text-xs">
                                Monk’s View
                              </div>
                            </Button>
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[107px] rounded-md"
                              leftIcon={
                                <Img
                                  className="h-[18px] mr-2"
                                  src="/images/img_sort.svg"
                                  alt="sort"
                                />
                              }
                              shape="round"
                              color="black_900_4c"
                              variant="outline"
                            >
                              <div className="font-medium font-montserrat leading-[normal] text-left text-xs">
                                Checklist
                              </div>
                            </Button>
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[129px] rounded-md"
                              leftIcon={
                                <Img
                                  className="h-[18px] mr-2"
                                  src="/images/img_play.svg"
                                  alt="play"
                                />
                              }
                              shape="round"
                              color="black_900_4c"
                              variant="outline"
                            >
                              <div className="font-medium font-montserrat leading-[normal] text-left text-xs">
                                Presentation
                              </div>
                            </Button>
                            <Button
                              className="common-pointer cursor-pointer flex items-center justify-center min-w-[105px] rounded-md"
                              onClick={() => navigate("/azmonk31seven")}
                              leftIcon={
                                <Img
                                  className="h-[18px] mr-2"
                                  src="/images/img_plus.svg"
                                  alt="plus"
                                />
                              }
                              shape="round"
                              color="black_900_4c"
                              variant="outline"
                            >
                              <div className="font-medium font-montserrat leading-[normal] text-left text-xs">
                                Estimate
                              </div>
                            </Button>
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[120px] rounded-md"
                              leftIcon={
                                <Img
                                  className="h-[18px] mr-2"
                                  src="/images/img_checkmark_black_900.svg"
                                  alt="checkmark"
                                />
                              }
                              shape="round"
                              color="black_900_4c"
                              variant="outline"
                            >
                              <div className="font-medium font-montserrat leading-[normal] text-left text-xs">
                                Sales Order
                              </div>
                            </Button>
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[151px] rounded-md"
                              leftIcon={
                                <Img
                                  className="h-[18px] mr-2"
                                  src="/images/img_music.svg"
                                  alt="music"
                                />
                              }
                              shape="round"
                              color="black_900_4c"
                              variant="outline"
                            >
                              <div className="font-medium font-montserrat leading-[normal] text-left text-xs">
                                Shipping Details
                              </div>
                            </Button>
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[147px] outline outline-[0.5px] outline-light_blue-A700 rounded-md"
                              leftIcon={
                                <Img
                                  className="h-[18px] mr-2"
                                  src="/images/img_mail_light_blue_a700.svg"
                                  alt="mail"
                                />
                              }
                              shape="round"
                              color="light_blue_A700_0a"
                            >
                              <div className="font-montserrat font-semibold leading-[normal] text-left text-xs">
                                Purchase Order
                              </div>
                            </Button>
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[130px] rounded-md"
                              leftIcon={
                                <Img
                                  className="h-[18px] mr-2"
                                  src="/images/img_hugeicon_finance_and_payment_outline_bill.svg"
                                  alt="Huge-icon/finance and payment/outline/bill"
                                />
                              }
                              shape="round"
                              color="black_900_41"
                              variant="outline"
                            >
                              <div className="font-medium font-montserrat leading-[normal] text-left text-xs">
                                Supplier Bills
                              </div>
                            </Button>
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[127px] rounded-md"
                              leftIcon={
                                <Img
                                  className="h-[18px] mr-2"
                                  src="/images/img_hugeicon_finance_and_payment_outline_moneydollar.svg"
                                  alt="Huge-icon/finance and payment/outline/money-dollar"
                                />
                              }
                              shape="round"
                              color="black_900_41"
                              variant="outline"
                            >
                              <div className="font-inter font-medium leading-[normal] text-left text-xs">
                                Commissions
                              </div>
                            </Button>
                          </div>
                          <Button
                            className="absolute border border-indigo-50 border-solid flex h-10 inset-y-[0] items-center justify-center my-auto right-[2%] shadow-bs w-10"
                            shape="circle"
                            size="md"
                          >
                            <Img
                              className="h-4"
                              src="/images/img_arrowright.svg"
                              alt="arrowright"
                            />
                          </Button>
                        </div>
                        <Button
                          className="cursor-pointer flex h-max inset-y-[0] items-center justify-center min-w-[100px] my-auto right-[0] rounded-md"
                          leftIcon={
                            <Img
                              className="h-[18px] mr-2 right-[1%] absolute"
                              src="/images/img_frame_black_900_18x18.svg"
                              alt="Frame"
                            />
                          }
                          shape="round"
                          color="black_900_41"
                          variant="outline"
                        >
                          <div className="font-medium leading-[normal] text-left text-xs">
                            Invoices
                          </div>
                        </Button>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[106px] rounded-md"
                        leftIcon={
                          <Img
                            className="h-[18px] mr-2"
                            src="/images/img_hugeicon_interface_outline_smilerectangle.svg"
                            alt="Huge-icon/interface/outline/smile-rectangle"
                          />
                        }
                        shape="round"
                        color="black_900_41"
                        variant="outline"
                      >
                        <div className="font-inter font-medium leading-[normal] text-left text-xs">
                          Feedback
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-start mx-auto pt-6 sm:px-5 px-6 top-[0] w-auto">
                <div className="bg-gray-50 flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1147px] p-4 rounded-lg w-full">
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-20 items-start justify-start w-auto md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                      size="txtMontserratRomanSemiBold24"
                    >
                      Gifts for Trainees
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-10 gap-[60px] items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900_b2 w-auto"
                          size="txtMontserratRegular16"
                        >
                          Client Name
                        </Text>
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtMontserratRomanMedium16"
                        >
                          Tiffany Promos
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900_b2 w-auto"
                          size="txtMontserratRegular16"
                        >
                          Project Id
                        </Text>
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtMontserratRomanMedium16"
                        >
                          #1011100
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900_b2 w-auto"
                          size="txtMontserratRegular16"
                        >
                          Project Status
                        </Text>
                        <Input
                          name="frame2609106"
                          placeholder="Created"
                          className="font-medium leading-[normal] p-0 placeholder:text-black-900 text-left text-xs w-full"
                          wrapClassName="flex outline outline-[0.5px] outline-black-900_14 rounded-[13px] w-auto"
                          suffix={
                            <Img
                              className="h-3 ml-[7px] my-px"
                              src="/images/img_arrowdown_black_900_12x12.svg"
                              alt="arrow_down"
                            />
                          }
                          color="black_900_0a"
                          size="md"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-auto">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtMontserratRomanMedium14"
                      >
                        Active
                      </Text>
                      <div className="flex flex-col h-6 md:h-auto items-start justify-between w-[60px]">
                        <Switch
                          onColor="#007fff"
                          offColor="#007fff"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={true}
                          className="gap-2.5 w-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-montserrat items-center justify-between max-w-[1147px] mt-4 w-full">
              <Text
                className="text-black-900 text-lg w-auto"
                size="txtMontserratRomanSemiBold18Black900"
              >
                Purchase Order
              </Text>
            </div>
            <div className="font-montserrat md:gap-5 gap-[25px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-4 w-[95%]">
              <div className="flex flex-col gap-4 items-start justify-start outline outline-[0.5px] outline-black-900_1e p-4 rounded-lg w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <div className="flex flex-row gap-2 items-start justify-between w-full">
                    <div className="flex flex-row gap-4 items-start justify-start w-auto">
                      <Img
                        className="h-12 md:h-auto object-cover rounded w-12"
                        src="/images/img_image42_48x48.png"
                        alt="imageFortyTwo"
                      />
                      <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtMontserratRomanSemiBold16"
                        >
                          Bel Promo
                        </Text>
                        <Text
                          className="text-base text-black-900_7f w-auto"
                          size="txtMontserratRomanMedium16Black9007f"
                        >
                          #PO1005A
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <div className="bg-black-900_0a flex flex-row gap-1.5 items-center justify-start px-3 py-1.5 rounded-[14px] w-auto">
                        <Radio
                          value="Created"
                          className="font-medium leading-[normal] text-black-900 text-left text-sm"
                          inputClassName="border border-black-900_33 border-solid h-3 mr-[5px] rounded-md w-3"
                          checked={false}
                          name="created1"
                          label="Created"
                          id="Created"
                        ></Radio>
                        <Img
                          className="h-4 w-4"
                          src="/images/img_arrowdown_black_900_12x12.svg"
                          alt="arrowdown"
                        />
                      </div>
                      <div className="border border-black-900_66 border-solid h-6 rounded-[50%] w-6"></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Item #:
                        </Text>
                        <Text
                          className="text-black-900 text-sm w-auto"
                          size="txtMontserratRomanMedium14"
                        >
                          JK-1768
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Client Contact:
                        </Text>
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Text
                            className="bg-purple-100 flex h-5 items-center justify-center rounded-[50%] text-[9.21px] text-blue_gray-400 text-center w-5"
                            size="txtMontserratRomanSemiBold921Bluegray400"
                          >
                            RR
                          </Text>
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtMontserratRomanMedium14"
                          >
                            Ronald Richards
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Stage:
                        </Text>
                        <SelectBox
                          className="font-medium text-black-900 text-left text-sm w-[36%] sm:w-full"
                          placeholderClassName="text-black-900"
                          indicator={
                            <Img
                              className="h-4 w-4"
                              src="/images/img_arrowdown_black_900_12x12.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="frame2609454"
                          options={shippedOptionsList}
                          isSearchable={false}
                          placeholder="Shipped"
                          size="xs"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Proof Status:
                        </Text>
                        <SelectBox
                          className="font-medium text-black-900 text-left text-sm w-[46%] sm:w-full"
                          placeholderClassName="text-black-900"
                          indicator={
                            <Img
                              className="h-4 w-4"
                              src="/images/img_arrowdown_black_900_12x12.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="frame2609454_One"
                          options={awaitingProofOptionsList}
                          isSearchable={false}
                          placeholder="Awaiting Proof"
                          size="xs"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Description:
                        </Text>
                        <Text
                          className="leading-[160.00%] text-black-900 text-sm"
                          size="txtMontserratRomanMedium14"
                        >
                          <span className="text-black-900 font-montserrat text-left font-medium">
                            <>
                              Eco Hardcover Journal & Pen
                              <br />
                            </>
                          </span>
                          <span className="text-black-900 font-montserrat text-left font-medium">
                            Jornik Manufacturing{" "}
                          </span>
                          <span className="text-black-900 font-montserrat text-left font-medium">
                            <>&gt; </>
                          </span>
                          <span className="text-black-900 font-montserrat text-left font-medium">
                            What Promos
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-5 items-center justify-end w-full">
                    <Text
                      className="text-black-900_7f text-sm underline w-auto"
                      size="txtMontserratRomanMedium14Black9007f"
                    >
                      Notes & Activity
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[106px]"
                      rightIcon={
                        <Img
                          className="h-4 ml-1 my-px"
                          src="/images/img_frame_16x16.svg"
                          alt="Frame"
                        />
                      }
                      shape="round"
                      color="black_900"
                    >
                      <div className="font-medium text-left text-sm">
                        Send PO
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start outline outline-[0.5px] outline-black-900_1e p-4 rounded-lg w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <div className="flex flex-row gap-2 items-start justify-between w-full">
                    <div className="flex flex-row gap-4 items-start justify-start w-auto">
                      <Img
                        className="h-12 md:h-auto object-cover rounded w-12"
                        src="/images/img_image42_48x48.png"
                        alt="imageFortyTwo"
                      />
                      <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtMontserratRomanSemiBold16"
                        >
                          Bel Promo
                        </Text>
                        <Text
                          className="text-base text-black-900_7f w-auto"
                          size="txtMontserratRomanMedium16Black9007f"
                        >
                          #PO1005A
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <div className="bg-black-900_0a flex flex-row gap-1.5 items-center justify-start px-3 py-1.5 rounded-[14px] w-auto">
                        <Radio
                          value="Created"
                          className="font-medium leading-[normal] text-black-900 text-left text-sm"
                          inputClassName="border border-black-900_33 border-solid h-3 mr-[5px] rounded-md w-3"
                          checked={false}
                          name="created2"
                          label="Created"
                          id="Created2"
                        ></Radio>
                        <Img
                          className="h-4 w-4"
                          src="/images/img_arrowdown_black_900_12x12.svg"
                          alt="arrowdown"
                        />
                      </div>
                      <div className="border border-black-900_66 border-solid h-6 rounded-[50%] w-6"></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Item #:
                        </Text>
                        <Text
                          className="text-black-900 text-sm w-auto"
                          size="txtMontserratRomanMedium14"
                        >
                          JK-1768
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Client Contact:
                        </Text>
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Text
                            className="bg-purple-100 flex h-5 items-center justify-center rounded-[50%] text-[9.21px] text-blue_gray-400 text-center w-5"
                            size="txtMontserratRomanSemiBold921Bluegray400"
                          >
                            RR
                          </Text>
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtMontserratRomanMedium14"
                          >
                            Ronald Richards
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Stage:
                        </Text>
                        <SelectBox
                          className="font-medium text-black-900 text-left text-sm w-[36%] sm:w-full"
                          placeholderClassName="text-black-900"
                          indicator={
                            <Img
                              className="h-4 w-4"
                              src="/images/img_arrowdown_black_900_12x12.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="frame2609454"
                          options={shippedOptionsList1}
                          isSearchable={false}
                          placeholder="Shipped"
                          size="xs"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Proof Status:
                        </Text>
                        <SelectBox
                          className="font-medium text-black-900 text-left text-sm w-[46%] sm:w-full"
                          placeholderClassName="text-black-900"
                          indicator={
                            <Img
                              className="h-4 w-4"
                              src="/images/img_arrowdown_black_900_12x12.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="frame2609454_One"
                          options={awaitingProofOptionsList1}
                          isSearchable={false}
                          placeholder="Awaiting Proof"
                          size="xs"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Description:
                        </Text>
                        <Text
                          className="leading-[160.00%] text-black-900 text-sm"
                          size="txtMontserratRomanMedium14"
                        >
                          <span className="text-black-900 font-montserrat text-left font-medium">
                            <>
                              Eco Hardcover Journal & Pen
                              <br />
                            </>
                          </span>
                          <span className="text-black-900 font-montserrat text-left font-medium">
                            Jornik Manufacturing{" "}
                          </span>
                          <span className="text-black-900 font-montserrat text-left font-medium">
                            <>&gt; </>
                          </span>
                          <span className="text-black-900 font-montserrat text-left font-medium">
                            What Promos
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-5 items-center justify-end w-full">
                    <Text
                      className="text-black-900_7f text-sm underline w-auto"
                      size="txtMontserratRomanMedium14Black9007f"
                    >
                      Notes & Activity
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[106px]"
                      rightIcon={
                        <Img
                          className="h-4 ml-1 my-px"
                          src="/images/img_frame_16x16.svg"
                          alt="Frame"
                        />
                      }
                      shape="round"
                      color="black_900"
                    >
                      <div className="font-medium text-left text-sm">
                        Send PO
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start outline outline-[0.5px] outline-black-900_1e p-4 rounded-lg w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <div className="flex flex-row gap-2 items-start justify-between w-full">
                    <div className="flex flex-row gap-4 items-start justify-start w-auto">
                      <Img
                        className="h-12 md:h-auto object-cover rounded w-12"
                        src="/images/img_image42_48x48.png"
                        alt="imageFortyTwo"
                      />
                      <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtMontserratRomanSemiBold16"
                        >
                          Bel Promo
                        </Text>
                        <Text
                          className="text-base text-black-900_7f w-auto"
                          size="txtMontserratRomanMedium16Black9007f"
                        >
                          #PO1005A
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <div className="bg-black-900_0a flex flex-row gap-1.5 items-center justify-start px-3 py-1.5 rounded-[14px] w-auto">
                        <Radio
                          value="Created"
                          className="font-medium leading-[normal] text-black-900 text-left text-sm"
                          inputClassName="border border-black-900_33 border-solid h-3 mr-[5px] rounded-md w-3"
                          checked={false}
                          name="created3"
                          label="Created"
                          id="Created3"
                        ></Radio>
                        <Img
                          className="h-4 w-4"
                          src="/images/img_arrowdown_black_900_12x12.svg"
                          alt="arrowdown"
                        />
                      </div>
                      <div className="border border-black-900_66 border-solid h-6 rounded-[50%] w-6"></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Item #:
                        </Text>
                        <Text
                          className="text-black-900 text-sm w-auto"
                          size="txtMontserratRomanMedium14"
                        >
                          JK-1768
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Client Contact:
                        </Text>
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Text
                            className="bg-purple-100 flex h-5 items-center justify-center rounded-[50%] text-[9.21px] text-blue_gray-400 text-center w-5"
                            size="txtMontserratRomanSemiBold921Bluegray400"
                          >
                            RR
                          </Text>
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtMontserratRomanMedium14"
                          >
                            Ronald Richards
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Stage:
                        </Text>
                        <SelectBox
                          className="font-medium text-black-900 text-left text-sm w-[36%] sm:w-full"
                          placeholderClassName="text-black-900"
                          indicator={
                            <Img
                              className="h-4 w-4"
                              src="/images/img_arrowdown_black_900_12x12.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="frame2609454"
                          options={shippedOptionsList2}
                          isSearchable={false}
                          placeholder="Shipped"
                          size="xs"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Proof Status:
                        </Text>
                        <SelectBox
                          className="font-medium text-black-900 text-left text-sm w-[46%] sm:w-full"
                          placeholderClassName="text-black-900"
                          indicator={
                            <Img
                              className="h-4 w-4"
                              src="/images/img_arrowdown_black_900_12x12.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="frame2609454_One"
                          options={awaitingProofOptionsList2}
                          isSearchable={false}
                          placeholder="Awaiting Proof"
                          size="xs"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Description:
                        </Text>
                        <Text
                          className="leading-[160.00%] text-black-900 text-sm"
                          size="txtMontserratRomanMedium14"
                        >
                          <span className="text-black-900 font-montserrat text-left font-medium">
                            <>
                              Eco Hardcover Journal & Pen
                              <br />
                            </>
                          </span>
                          <span className="text-black-900 font-montserrat text-left font-medium">
                            Jornik Manufacturing{" "}
                          </span>
                          <span className="text-black-900 font-montserrat text-left font-medium">
                            <>&gt; </>
                          </span>
                          <span className="text-black-900 font-montserrat text-left font-medium">
                            What Promos
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-5 items-center justify-end w-full">
                    <Text
                      className="text-black-900_7f text-sm underline w-auto"
                      size="txtMontserratRomanMedium14Black9007f"
                    >
                      Notes & Activity
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[106px]"
                      rightIcon={
                        <Img
                          className="h-4 ml-1 my-px"
                          src="/images/img_frame_16x16.svg"
                          alt="Frame"
                        />
                      }
                      shape="round"
                      color="black_900"
                    >
                      <div className="font-medium text-left text-sm">
                        Send PO
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start outline outline-[0.5px] outline-black-900_1e p-4 rounded-lg w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <div className="flex flex-row gap-2 items-start justify-between w-full">
                    <div className="flex flex-row gap-4 items-start justify-start w-auto">
                      <Img
                        className="h-12 md:h-auto object-cover rounded w-12"
                        src="/images/img_image42_48x48.png"
                        alt="imageFortyTwo"
                      />
                      <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtMontserratRomanSemiBold16"
                        >
                          Bel Promo
                        </Text>
                        <Text
                          className="text-base text-black-900_7f w-auto"
                          size="txtMontserratRomanMedium16Black9007f"
                        >
                          #PO1005A
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <div className="bg-black-900_0a flex flex-row gap-1.5 items-center justify-start px-3 py-1.5 rounded-[14px] w-auto">
                        <Radio
                          value="Created"
                          className="font-medium leading-[normal] text-black-900 text-left text-sm"
                          inputClassName="border border-black-900_33 border-solid h-3 mr-[5px] rounded-md w-3"
                          checked={false}
                          name="created4"
                          label="Created"
                          id="Created4"
                        ></Radio>
                        <Img
                          className="h-4 w-4"
                          src="/images/img_arrowdown_black_900_12x12.svg"
                          alt="arrowdown"
                        />
                      </div>
                      <div className="border border-black-900_66 border-solid h-6 rounded-[50%] w-6"></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Item #:
                        </Text>
                        <Text
                          className="text-black-900 text-sm w-auto"
                          size="txtMontserratRomanMedium14"
                        >
                          JK-1768
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Client Contact:
                        </Text>
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Text
                            className="bg-purple-100 flex h-5 items-center justify-center rounded-[50%] text-[9.21px] text-blue_gray-400 text-center w-5"
                            size="txtMontserratRomanSemiBold921Bluegray400"
                          >
                            RR
                          </Text>
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtMontserratRomanMedium14"
                          >
                            Ronald Richards
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Stage:
                        </Text>
                        <SelectBox
                          className="font-medium text-black-900 text-left text-sm w-[36%] sm:w-full"
                          placeholderClassName="text-black-900"
                          indicator={
                            <Img
                              className="h-4 w-4"
                              src="/images/img_arrowdown_black_900_12x12.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="frame2609454"
                          options={shippedOptionsList3}
                          isSearchable={false}
                          placeholder="Shipped"
                          size="xs"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Proof Status:
                        </Text>
                        <SelectBox
                          className="font-medium text-black-900 text-left text-sm w-[46%] sm:w-full"
                          placeholderClassName="text-black-900"
                          indicator={
                            <Img
                              className="h-4 w-4"
                              src="/images/img_arrowdown_black_900_12x12.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="frame2609454_One"
                          options={awaitingProofOptionsList3}
                          isSearchable={false}
                          placeholder="Awaiting Proof"
                          size="xs"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-black-900_7f text-sm w-auto"
                          size="txtMontserratRomanMedium14Black9007f"
                        >
                          Description:
                        </Text>
                        <Text
                          className="leading-[160.00%] text-black-900 text-sm"
                          size="txtMontserratRomanMedium14"
                        >
                          <span className="text-black-900 font-montserrat text-left font-medium">
                            <>
                              Eco Hardcover Journal & Pen
                              <br />
                            </>
                          </span>
                          <span className="text-black-900 font-montserrat text-left font-medium">
                            Jornik Manufacturing{" "}
                          </span>
                          <span className="text-black-900 font-montserrat text-left font-medium">
                            <>&gt; </>
                          </span>
                          <span className="text-black-900 font-montserrat text-left font-medium">
                            What Promos
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-5 items-center justify-end w-full">
                    <Text
                      className="text-black-900_7f text-sm underline w-auto"
                      size="txtMontserratRomanMedium14Black9007f"
                    >
                      Notes & Activity
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[106px]"
                      rightIcon={
                        <Img
                          className="h-4 ml-1 my-px"
                          src="/images/img_frame_16x16.svg"
                          alt="Frame"
                        />
                      }
                      shape="round"
                      color="black_900"
                    >
                      <div className="font-medium text-left text-sm">
                        Send PO
                      </div>
                    </Button>
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

export default Azmonk31EightPage;
