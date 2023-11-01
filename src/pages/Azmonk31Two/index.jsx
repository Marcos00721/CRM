import React from "react";

import { Button, Img, Input, List, Switch, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const Azmonk31TwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-montserrat h-[943px] mx-auto relative w-full">
        <div className="absolute bottom-[0] flex flex-col items-center justify-end md:px-5 right-[0] w-[83%]">
          <div className="flex flex-col items-start justify-start overflow-auto w-full">
            <div className="bg-gray-50 flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1147px] ml-6 md:ml-[0] p-4 rounded-lg w-full">
              <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                  size="txtMontserratRomanSemiBold24"
                >
                  Gifts for Trainees
                </Text>
                <div className="flex flex-row gap-[60px] items-start justify-start w-auto sm:w-full">
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
                      Status
                    </Text>
                    <Input
                      name="frame2609106"
                      placeholder="Created"
                      className="font-medium p-0 placeholder:text-teal-600 text-left text-xs w-full"
                      wrapClassName="flex rounded-[11px] w-auto"
                      suffix={
                        <Img
                          className="h-3 ml-[5px] my-px"
                          src="/images/img_arrowdown_teal_600.svg"
                          alt="arrow_down"
                        />
                      }
                      color="teal_600_1e"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-3 items-center justify-start w-auto sm:w-full">
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtMontserratRomanMedium14"
                  >
                    Active
                  </Text>
                  <Switch
                    onColor="#007fff1e"
                    offColor="#007fff1e"
                    onHandleColor="#007fff"
                    offHandleColor="#007fff"
                    value={true}
                    className="outline outline-[1px] outline-indigo-50 w-[48%]"
                  />
                </div>
                <Button
                  className="border border-black-900_1e border-solid cursor-pointer flex items-center justify-center min-w-[105px]"
                  leftIcon={
                    <Img
                      className="h-5 mr-1"
                      src="/images/img_hugeicon_interface_solid_eye.svg"
                      alt="Huge-icon/interface/solid/eye"
                    />
                  }
                  shape="round"
                >
                  <div className="!text-black-900 font-medium text-left text-sm">
                    Preview
                  </div>
                </Button>
                <Button
                  className="border border-black-900_1e border-solid cursor-pointer flex items-center justify-center min-w-[172px]"
                  leftIcon={
                    <Img
                      className="h-4 mr-1 my-px"
                      src="/images/img_frame_black_900_16x16.svg"
                      alt="Frame"
                    />
                  }
                  shape="round"
                >
                  <div className="!text-black-900 font-medium text-left text-sm">
                    New Presentation
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="overflow-x-auto w-[82%]">
                <div className="flex md:flex-col flex-row gap-[11px] items-start justify-start max-w-[1459px] px-4 py-5 w-full">
                  <div className="font-montserrat md:h-[434px] h-[74px] relative w-[86%] md:w-full">
                    <div className="absolute md:h-[434px] h-[74px] inset-[0] justify-center m-auto w-[98%] md:w-full">
                      <div className="flex md:flex-col flex-row gap-[11px] h-full items-center justify-end m-auto max-w-[1195px] outline outline-indigo-50 px-4 py-5 w-full">
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
                          className="cursor-pointer flex items-center justify-center min-w-[108px] outline outline-[0.5px] outline-light_blue-A700 rounded-md"
                          leftIcon={
                            <Img
                              className="h-[18px] mr-2"
                              src="/images/img_frame.svg"
                              alt="Frame"
                            />
                          }
                          shape="round"
                          color="light_blue_A700_0a"
                        >
                          <div className="font-montserrat font-semibold leading-[normal] text-left text-xs">
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
                          color="black_900_41"
                          variant="outline"
                        >
                          <div className="font-medium font-montserrat leading-[normal] text-left text-xs">
                            Presentation
                          </div>
                        </Button>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[105px] rounded-md"
                          leftIcon={
                            <Img
                              className="h-[18px] mr-2"
                              src="/images/img_plus.svg"
                              alt="plus"
                            />
                          }
                          shape="round"
                          color="black_900_41"
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
                          color="black_900_41"
                          variant="outline"
                        >
                          <div className="font-medium font-montserrat leading-[normal] text-left text-xs">
                            Sales Order
                          </div>
                        </Button>
                        <div className="border border-black-900_41 border-solid flex flex-row font-montserrat gap-2 items-center justify-start px-3 py-2 rounded-md w-auto">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="/images/img_music.svg"
                            alt="music"
                          />
                          <Text
                            className="text-black-900_90 text-xs w-auto"
                            size="txtMontserratRomanMedium12Black90090"
                          >
                            Shipping Details
                          </Text>
                        </div>
                        <div className="border border-black-900_41 border-solid flex flex-row font-montserrat gap-2 items-center justify-start px-3 py-2 rounded-md w-auto">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="/images/img_mail.svg"
                            alt="mail"
                          />
                          <Text
                            className="text-black-900_90 text-xs w-auto"
                            size="txtMontserratRomanMedium12Black90090"
                          >
                            Purchase Order
                          </Text>
                        </div>
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
            <div className="flex flex-col gap-6 items-start justify-start ml-6 md:ml-[0] mt-[22px] w-[94%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtMontserratRomanSemiBold24"
              >
                Checklist
              </Text>
              <div className="flex flex-col items-start justify-start max-w-[1122px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="flex flex-1 flex-col gap-4 items-start justify-start outline outline-[0.5px] outline-black-900_1e p-4 rounded-lg w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-row gap-2 items-start justify-between w-full">
                          <Text
                            className="leading-[150.00%] max-w-[300px] md:max-w-full text-base text-black-900"
                            size="txtMontserratRomanSemiBold16"
                          >
                            Presentation - Self-audit checklist before creating
                            a presentation
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
                            Presentation - Self-audit checklist before creating
                            a presentation
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
                            Presentation - Self-audit checklist before creating
                            a presentation
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
                            Presentation - Self-audit checklist before creating
                            a presentation
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
                            Presentation - Self-audit checklist before creating
                            a presentation
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
                            Presentation - Self-audit checklist before creating
                            a presentation
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
                            Presentation - Self-audit checklist before creating
                            a presentation
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
                            Presentation - Self-audit checklist before creating
                            a presentation
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
        <div className="absolute bg-white-A700 flex sm:flex-col flex-row font-inter md:gap-10 items-center justify-between max-w-[1194px] outline outline-indigo-50 md:px-5 px-6 py-5 right-[0] top-[0] w-full">
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
                alt="frame"
              />
            </Button>
            <Text className="text-gray-900_b2 text-sm" size="txtInterRegular14">
              <span className="text-black-900_7f font-montserrat text-left font-normal">
                Home / Projects /{" "}
              </span>
              <span className="text-black-900 font-montserrat text-left font-semibold">
                Gift for Trainees
              </span>
            </Text>
          </div>
          <div className="flex flex-row font-montserrat gap-5 items-center justify-start w-auto">
            <div className="bg-light_blue-A700 flex flex-row gap-1 items-center justify-center px-3 py-2 rounded-lg w-auto">
              <Img
                className="h-4 w-4"
                src="/images/img_frame_white_a700_16x16.svg"
                alt="frame_One"
              />
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtMontserratRomanMedium14WhiteA700"
              >
                Quick Add
              </Text>
            </div>
            <Button
              className="flex h-10 items-center justify-center w-10"
              shape="circle"
              color="indigo_50"
              variant="outline"
            >
              <Img
                className="h-5"
                src="/images/img_frame_gray_900.svg"
                alt="frame_Two"
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
        <Sidebar1 className="!sticky !w-[245px] bg-black-900 flex font-montserrat h-screen md:hidden justify-start my-auto outline outline-indigo-50 overflow-auto md:px-5 top-[0]" />
        <div className="absolute bg-black-900_7f_01 bottom-[0] flex flex-col font-montserrat inset-x-[0] items-end justify-end mx-auto md:pl-10 sm:pl-5 pl-[949px] w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-6 md:px-5 w-full">
            <div className="flex flex-col items-start justify-start mb-[325px] w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <Text
                  className="text-black-900 text-lg"
                  size="txtMontserratRomanSemiBold18Black900"
                >
                  Presentation - Self-audit checklist before creating a
                  presentation
                </Text>
                <Img
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
                    size="xs"
                  >
                    <Img
                      className="h-3"
                      src="/images/img_frame_white_a700_20x20.svg"
                      alt="frame_Seven"
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
                      alt="frame_Eight"
                    />
                  </Button>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtMontserratRomanMedium14"
                  >
                    Item Size
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
                      alt="frame_Nine"
                    />
                  </Button>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtMontserratRomanMedium14"
                  >
                    Quantity
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <div className="border border-black-900_4c border-solid h-5 rounded-[50%] w-5"></div>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtMontserratRomanMedium14"
                  >
                    Imprint Color
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <div className="border border-black-900_4c border-solid h-5 rounded-[50%] w-5"></div>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtMontserratRomanMedium14"
                  >
                    Preferred Supplier
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <div className="border border-black-900_4c border-solid h-5 rounded-[50%] w-5"></div>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtMontserratRomanMedium14"
                  >
                    In-hands Date
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <div className="border border-black-900_4c border-solid h-5 rounded-[50%] w-5"></div>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtMontserratRomanMedium14"
                  >
                    Budget
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-900_1e border-solid flex flex-col h-[413px] md:h-auto items-start justify-between mt-6 p-3 rounded-lg w-[443px] sm:w-full">
                <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtMontserratRomanMedium14"
                    >
                      Checklist History
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="/images/img_frame_black_900.svg"
                      alt="frame_Ten"
                    />
                  </div>
                  <List
                    className="bg-gray-50_01 flex flex-col gap-6 items-start p-4 w-[441px] md:w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-col gap-[7px] justify-start my-0 w-[84%] md:w-full">
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
                        className="ml-7 md:ml-[0] text-black-900_66 text-right text-sm"
                        size="txtMontserratRegular14Black90066"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] justify-start my-0 w-[84%] md:w-full">
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
                        className="ml-7 md:ml-[0] text-black-900_66 text-right text-sm"
                        size="txtMontserratRegular14Black90066"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] justify-start my-0 w-[84%] md:w-full">
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
                        className="ml-7 md:ml-[0] text-black-900_66 text-right text-sm"
                        size="txtMontserratRegular14Black90066"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] justify-start my-0 w-[84%] md:w-full">
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
                        className="ml-7 md:ml-[0] text-black-900_66 text-right text-sm"
                        size="txtMontserratRegular14Black90066"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] justify-start my-0 w-[84%] md:w-full">
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
                        className="ml-7 md:ml-[0] text-black-900_66 text-right text-sm"
                        size="txtMontserratRegular14Black90066"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Azmonk31TwoPage;
