import React from "react";

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

const Azmonk31Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar11 className="!sticky !w-[245px] bg-black-900 flex h-screen md:hidden justify-start outline outline-indigo-50 overflow-auto md:px-5 top-[0]" />
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
            <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start pt-6 sm:px-5 px-6 w-full">
              <div className="bg-gray-50 flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1147px] p-4 rounded-lg w-full">
                <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
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
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-3 items-center justify-start w-auto sm:w-full">
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
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="overflow-x-auto w-[82%]">
                <div className="flex md:flex-col flex-row gap-[11px] items-start justify-start max-w-[1460px] px-4 py-5 w-full">
                  <div className="font-montserrat h-[74px] relative w-[86%] md:w-full">
                    <div className="absolute h-[74px] inset-[0] justify-center m-auto w-[98%] md:w-full">
                      <div className="bg-white-A700 flex flex-row flex-wrap gap-[11px] h-full items-center justify-end m-auto outline outline-indigo-50 px-4 py-5 w-full">
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
                          className="cursor-pointer flex items-center justify-center min-w-[105px] rounded-md"
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
                          className="cursor-pointer flex items-center justify-center min-w-[122px] outline outline-[0.5px] outline-light_blue-A700 rounded-md"
                          leftIcon={
                            <Img
                              className="h-[18px] mr-2"
                              src="/images/img_bag.svg"
                              alt="bag"
                            />
                          }
                          shape="round"
                          color="light_blue_A700_0a"
                        >
                          <div className="font-montserrat font-semibold leading-[normal] text-left text-xs">
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
                          color="black_900_41"
                          variant="outline"
                        >
                          <div className="font-medium font-montserrat leading-[normal] text-left text-xs">
                            Shipping Details
                          </div>
                        </Button>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[146px] rounded-md"
                          leftIcon={
                            <Img
                              className="h-[18px] mr-2"
                              src="/images/img_mail.svg"
                              alt="mail"
                            />
                          }
                          shape="round"
                          color="black_900_41"
                          variant="outline"
                        >
                          <div className="font-medium font-montserrat leading-[normal] text-left text-xs">
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
            <div className="flex md:flex-col flex-row font-montserrat md:gap-5 items-start justify-evenly w-full">
              <div className="flex md:flex-1 flex-col gap-7 h-[1362px] md:h-auto items-start justify-start p-6 sm:px-5 w-[597px] md:w-full">
                <div className="flex flex-col relative w-full">
                  <div className="bg-white-A700 flex flex-col gap-7 h-[765px] md:h-auto items-center justify-start mx-auto outline outline-indigo-50 p-6 sm:px-5 w-[597px] md:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-row gap-4 items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtMontserratRomanSemiBold18Black900"
                        >
                          Sales Order
                        </Text>
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Text
                            className="text-black-900_66 text-sm w-auto"
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
                                src="/images/img_arrowdown_black_900_12x12.svg"
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
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                          <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                            <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
                              <Text
                                className="text-black-900_99 text-sm w-auto"
                                size="txtMontserratRegular14Black90099"
                              >
                                Billing Address
                              </Text>
                              <Input
                                name="frame53369"
                                placeholder="John Smith"
                                className="font-medium leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                                wrapClassName="border border-black-900_28 border-solid flex w-full"
                                suffix={
                                  <Img
                                    className="mt-px mb-0.5 h-4 ml-[35px]"
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
                                Shipping Address
                              </Text>
                              <Input
                                name="frame53369_One"
                                placeholder="John Smith"
                                className="font-medium leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                                wrapClassName="border border-black-900_28 border-solid flex w-full"
                                suffix={
                                  <Img
                                    className="mt-px mb-0.5 h-4 ml-[35px]"
                                    src="/images/img_arrowdown_black_900_12x12.svg"
                                    alt="arrow_down"
                                  />
                                }
                                shape="round"
                                color="white_A700"
                                variant="fill"
                              ></Input>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtMontserratRomanMedium16"
                          >
                            <>
                              54869
                              <br />
                              Jtm,Baltimore,
                              <br />
                              Rajasthan, India
                            </>
                          </Text>
                          <Text
                            className="text-base text-black-900"
                            size="txtMontserratRomanMedium16"
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
                        <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
                            <Text
                              className="text-black-900_99 text-sm w-auto"
                              size="txtMontserratRegular14Black90099"
                            >
                              Client Contact
                            </Text>
                            <Input
                              name="frame53369_Two"
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
                              Client Contact
                            </Text>
                            <Input
                              name="frame53369_Three"
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
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtMontserratRomanSemiBold18Black900"
                      >
                        Additional Details
                      </Text>
                      <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-black-900_99 text-sm w-auto"
                            size="txtMontserratRegular14Black90099"
                          >
                            Project Type
                          </Text>
                          <RadioGroup
                            selectedValue="Firm"
                            className="flex gap-6 items-start justify-start w-auto"
                            name="radiogrouptext3"
                          >
                            <Radio
                              value="Firm"
                              className="font-medium leading-[normal] text-black-900 text-left text-lg"
                              inputClassName="border border-light_blue-A700 border-solid h-4 mr-[5px] rounded-lg w-4"
                              checked={true}
                              name="radiogrouptext3"
                              label="Firm"
                              id="Firm"
                            ></Radio>
                            <Radio
                              value="Sample"
                              className="font-medium leading-[normal] text-black-900 text-left text-lg"
                              inputClassName="border border-black-900_66 border-solid h-4 mr-[5px] w-4"
                              checked={false}
                              name="radiogrouptext3"
                              label="Sample"
                              id="Sample"
                            ></Radio>
                          </RadioGroup>
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
                              Tax Rate
                            </Text>
                            <Input
                              name="frame53369_Four"
                              placeholder="GST 8%"
                              className="font-medium leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                              wrapClassName="border border-black-900_28 border-solid flex w-full"
                              suffix={
                                <Img
                                  className="mt-px mb-0.5 h-4 ml-[35px]"
                                  src="/images/img_arrowdown_black_900_12x12.svg"
                                  alt="arrow_down"
                                />
                              }
                              shape="round"
                              color="white_A700"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                        <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
                            <Text
                              className="text-black-900_99 text-sm w-auto"
                              size="txtMontserratRegular14Black90099"
                            >
                              Default Margin
                            </Text>
                            <Input
                              name="frame53369_Five"
                              placeholder="Enter Margin"
                              className="!placeholder:text-black-900_66 !text-black-900_66 font-medium leading-[normal] p-0 text-base text-left w-full"
                              wrapClassName="border border-black-900_28 border-solid w-full"
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
                              Expiry Date
                            </Text>
                            <Input
                              name="frame53369_Six"
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
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
                            <Text
                              className="text-black-900_99 text-sm w-auto"
                              size="txtMontserratRegular14Black90099"
                            >
                              Client PO
                            </Text>
                            <Input
                              name="frame53369_Seven"
                              placeholder="Enter Client PO"
                              className="!placeholder:text-black-900_66 !text-black-900_66 font-medium leading-[normal] p-0 text-base text-left w-full"
                              wrapClassName="border border-black-900_28 border-solid w-full"
                              shape="round"
                              color="white_A700"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-start mt-[-58px] mx-auto w-auto z-[1]">
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
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
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
              <div className="md:h-[1160px] h-[1220px] sm:h-[1971px] relative w-1/2 md:w-full">
                <div className="absolute bg-gray-50 flex flex-row sm:gap-10 inset-x-[0] items-start justify-between mx-auto p-[23px] sm:px-5 top-[0] w-full">
                  <Text
                    className="mt-[3px] text-black-900 text-lg"
                    size="txtMontserratRomanSemiBold18Black900"
                  >
                    Preview
                  </Text>
                  <div className="flex flex-row gap-1 items-center justify-start mb-[866px] py-1 w-auto">
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
                <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto outline outline-[0.5px] outline-indigo-50 rounded-lg w-[92%]">
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
                            SO-4117653
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
                    <div className="bg-gray-50 flex sm:flex-col flex-row gap-[22.1px] items-start justify-start p-[14.74px] rounded-[3px] w-[511px] sm:w-full">
                      <Img
                        className="md:h-auto h-px object-cover w-[147px] sm:w-full"
                        src="/images/img_image42_1x147.png"
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
                            className="text-[11.05px] text-black-900_b2 w-auto"
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
                            <List
                              className="sm:flex-col flex-row gap-[7px] grid grid-cols-3 w-[79%]"
                              orientation="horizontal"
                            >
                              <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] w-auto">
                                <div className="bg-red-400 h-px rounded-[3px] w-[22%]"></div>
                                <Text
                                  className="text-[11.05px] text-black-900 w-auto"
                                  size="txtMontserratRegular1105Black900"
                                >
                                  Red
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] w-auto">
                                <div className="bg-indigo-A200 h-px rounded-[3px] w-1/5"></div>
                                <Text
                                  className="text-[11.05px] text-black-900 w-auto"
                                  size="txtMontserratRegular1105Black900"
                                >
                                  Blue
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] w-auto">
                                <div className="bg-black-900 h-px rounded-[3px] w-[17%]"></div>
                                <Text
                                  className="text-[11.05px] text-black-900 w-auto"
                                  size="txtMontserratRegular1105Black900"
                                >
                                  Black
                                </Text>
                              </div>
                            </List>
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
                        <div className="flex flex-col gap-[37px] items-start justify-start w-[198px]">
                          <div className="flex flex-row items-start justify-start w-[198px]">
                            <Text
                              className="bg-gray-400 flex-1 justify-center outline outline-[0.5px] outline-indigo-50 pt-[11px] sm:px-5 px-[21px] text-[12.89px] text-white-A700 w-full"
                              size="txtMontserratRomanSemiBold1289WhiteA700"
                            >
                              Qty
                            </Text>
                            <Text
                              className="bg-white-A700 justify-center outline outline-[0.5px] outline-indigo-50 pt-[11px] px-5 text-[12.89px] text-black-900_b2 w-[66px]"
                              size="txtMontserratRegular1289Black900b2"
                            >
                              500
                            </Text>
                            <Text
                              className="bg-white-A700 justify-center outline outline-[0.5px] outline-indigo-50 pt-[11px] sm:px-5 px-[22px] text-[12.89px] text-black-900_b2 w-[66px]"
                              size="txtMontserratRegular1289Black900b2"
                            >
                              100
                            </Text>
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
                          <div className="flex flex-row items-start justify-start w-auto">
                            <Text
                              className="bg-black-900 justify-center outline outline-[0.5px] outline-indigo-50 pt-[11px] px-[5px] text-[12.89px] text-white-A700 w-[66px]"
                              size="txtMontserratRomanSemiBold1289WhiteA700"
                            >
                              Amount
                            </Text>
                            <Text
                              className="bg-white-A700 justify-center outline outline-[0.5px] outline-indigo-50 pt-[11px] px-5 text-[12.89px] text-black-900 w-[66px]"
                              size="txtMontserratRegular1289Black900"
                            >
                              1150
                            </Text>
                            <Text
                              className="bg-white-A700 justify-center outline outline-[0.5px] outline-indigo-50 pt-[11px] sm:px-5 px-[21px] text-[12.89px] text-black-900 w-[66px]"
                              size="txtMontserratRegular1289Black900"
                            >
                              220
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start w-auto">
                            <div className="h-px outline outline-[0.5px] outline-indigo-50 w-[34%]"></div>
                            <Text
                              className="bg-white-A700 justify-center outline outline-[0.5px] outline-indigo-50 pt-[11px] px-4 text-[12.89px] text-black-900 w-[66px]"
                              size="txtMontserratRomanSemiBold1289"
                            >
                              Total
                            </Text>
                            <Text
                              className="bg-white-A700 justify-center outline outline-[0.5px] outline-indigo-50 pt-[11px] px-[18px] text-[12.89px] text-black-900 w-[66px]"
                              size="txtMontserratRomanSemiBold1289"
                            >
                              1370
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
    </>
  );
};

export default Azmonk31Page;
