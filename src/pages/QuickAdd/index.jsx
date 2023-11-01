import { Button, Img, Input, List, Text } from "components";
import React, { useState } from "react";

const QuickAdd = () => {
  const [type, setType] = useState("product");

  return (
    <div className=" bg-black-900_7f_01 flex flex-col font-montserrat h-full  items-center justify-center m-auto p-[89px] md:px-10 sm:px-5 w-full">
      <div className="bg-white-A700 flex flex-col items-start justify-start mb-3.5 md:px-5 max-w-[892px] w-full">
        <div className="bg-white-A700 flex sm:flex-col flex-row gap-2.5 items-start justify-between  outline outline-indigo-50 px-4 py-2 w-full">
          <div className="w-full flex justify-center">
            <List
              className="bg-white-A700 sm:flex-1 sm:flex-col flex-row gap-4 grid sm:grid-cols-1 grid-cols-3 justify-center p-4 rounded-lg w-auto sm:w-full"
              orientation="horizontal"
            >
              <div
                onClick={() => {
                  setType("account");
                }}
                className={`
                ${
                  type === "account"
                    ? "bg-light_blue-A700_1e border  border-light_blue-A700 "
                    : "bg-white-A700 border border-indigo-50 "
                } border-solid flex flex-col gap-2 items-center justify-start p-3 rounded-lg w-[140px] cursor-pointer"`}
              >
                <Img
                  className="h-8 w-8"
                  src="/images/img_hugeiconusersoliduseradd.svg"
                  alt="hugeiconusersol"
                />
                <Text className="font-medium text-base text-black-900 w-auto">
                  New Account
                </Text>
              </div>
              <div
                onClick={() => {
                  setType("project");
                }}
                className={`
                ${
                  type === "project"
                    ? "bg-light_blue-A700_1e border  border-light_blue-A700 "
                    : "bg-white-A700 border border-indigo-50 "
                } border-solid flex flex-col gap-2 items-center justify-start p-3 rounded-lg w-[140px] cursor-pointer"`}
              >
                <Img
                  className="h-8 w-8"
                  src="/images/img_hugeiconfiles_black_900.svg"
                  alt="hugeiconfiles"
                />
                <Text className="font-medium text-base text-black-900 w-auto">
                  New Project
                </Text>
              </div>
              <div
                onClick={() => {
                  setType("product");
                }}
                className={`
                  ${
                    type === "product"
                      ? "bg-light_blue-A700_1e border  border-light_blue-A700 "
                      : "bg-white-A700 border border-indigo-50 "
                  } border-solid flex flex-col gap-2 items-center justify-start p-3 rounded-lg w-[140px] cursor-pointer"`}
              >
                <Img
                  className="h-8 w-8"
                  src="/images/img_hugeiconshipping_light_blue_a700.svg"
                  alt="hugeiconshippin"
                />
                <Text className="font-semibold text-base text-black-900 w-auto">
                  New Product
                </Text>
              </div>
            </List>
          </div>

          <Img
            className="h-10 w-10"
            src="/images/img_arrowright_black_900_40x40.svg"
            alt="arrowright"
          />
        </div>

        {type === "account" ? (
          <div className="flex flex-col gap-5 h-[484px] md:h-auto items-start justify-start max-w-[892px] p-6 sm:px-5 w-full">
            <Text className="font-semibold text-black-900 text-lg w-auto">
              New Project
            </Text>
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text className="text-black-900_99 text-sm w-auto">
                  Account Type
                </Text>
                <div className="flex flex-row gap-6 items-start justify-start w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="border border-light_blue-A700 border-solid flex flex-col h-4 items-center justify-start p-1 rounded-[50%] w-4">
                      <div className="bg-light_blue-A700 h-2 rounded-[50%] w-2"></div>
                    </div>
                    <Text className="font-medium text-black-900 text-lg w-auto">
                      Client
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="border border-black-900_66 border-solid h-4 rounded-[50%] w-4"></div>
                    <Text className="font-medium text-black-900 text-lg w-auto">
                      Supplier
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text className="text-black-900_99 text-sm w-auto">
                    Client Company
                  </Text>
                  <Input
                    name="frame53369_Four"
                    placeholder="Enter Client Company"
                    className="!placeholder:text-black-900_4c !text-black-900_4c font-medium leading-[normal] p-0 text-base text-left w-full"
                    wrapClassName="border border-black-900_28 border-solid w-full"
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text className="text-black-900_99 text-sm w-auto">
                    Client Rep
                  </Text>
                  <Input
                    name="frame53369_Five"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-black-900_28 border-solid flex w-full"
                    suffix={
                      <Img
                        className="h-4 ml-[35px] my-auto"
                        src="images/img_arrowdown_black_900_12x12.svg"
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
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text className="text-black-900_99 text-sm w-auto">
                    Client Contact
                  </Text>
                  <Input
                    name="frame53369_Six"
                    placeholder="Enter Client Contact"
                    className="!placeholder:text-black-900_4c !text-black-900_4c font-medium leading-[normal] p-0 text-base text-left w-full"
                    wrapClassName="border border-black-900_28 border-solid w-full"
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text className="text-black-900_99 text-sm w-auto">
                    Client Contact Email
                  </Text>
                  <Input
                    name="frame53369_Seven"
                    placeholder="Enter Email"
                    className="!placeholder:text-black-900_4c !text-black-900_4c font-medium leading-[normal] p-0 text-base text-left w-full"
                    wrapClassName="border border-black-900_28 border-solid w-full"
                    type="email"
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text className="text-black-900_99 text-sm w-auto">
                    Industry
                  </Text>
                  <Input
                    name="frame53369_Eight"
                    placeholder="Select Industry"
                    className="font-medium leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                    wrapClassName="border border-black-900_28 border-solid flex w-full"
                    suffix={
                      <Img
                        className="mt-px mb-0.5 h-4 ml-[35px]"
                        src="images/img_arrowdown_black_900_12x12.svg"
                        alt="arrow_down"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text className="text-black-900_99 text-sm w-auto">Tax</Text>
                  <Input
                    name="frame53369_Nine"
                    placeholder="Select Tax"
                    className="font-medium leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                    wrapClassName="border border-black-900_28 border-solid flex w-full"
                    suffix={
                      <Img
                        className="mt-px mb-0.5 h-4 ml-[35px]"
                        src="images/img_arrowdown_black_900_12x12.svg"
                        alt="arrow_down"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {type === "project" ? (
          <div className="flex flex-col gap-5 h-[484px] md:h-auto items-start justify-start max-w-[892px] p-6 sm:px-5 w-full">
            <Text className="font-semibold text-black-900 text-lg w-auto">
              New Project
            </Text>
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text className="text-black-900_99 text-sm w-auto">
                  Account Type
                </Text>
                <div className="flex flex-row gap-6 items-start justify-start w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="border border-light_blue-A700 border-solid flex flex-col h-4 items-center justify-start p-1 rounded-[50%] w-4">
                      <div className="bg-light_blue-A700 h-2 rounded-[50%] w-2"></div>
                    </div>
                    <Text className="font-medium text-black-900 text-lg w-auto">
                      Client
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="border border-black-900_66 border-solid h-4 rounded-[50%] w-4"></div>
                    <Text className="font-medium text-black-900 text-lg w-auto">
                      Supplier
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text className="text-black-900_99 text-sm w-auto">
                    Client Company
                  </Text>
                  <Input
                    name="frame53369_Four"
                    placeholder="Enter Client Company"
                    className="!placeholder:text-black-900_4c !text-black-900_4c font-medium leading-[normal] p-0 text-base text-left w-full"
                    wrapClassName="border border-black-900_28 border-solid w-full"
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text className="text-black-900_99 text-sm w-auto">
                    Client Rep
                  </Text>
                  <Input
                    name="frame53369_Five"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-black-900_28 border-solid flex w-full"
                    suffix={
                      <Img
                        className="h-4 ml-[35px] my-auto"
                        src="images/img_arrowdown_black_900_12x12.svg"
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
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text className="text-black-900_99 text-sm w-auto">
                    Client Contact
                  </Text>
                  <Input
                    name="frame53369_Six"
                    placeholder="Enter Client Contact"
                    className="!placeholder:text-black-900_4c !text-black-900_4c font-medium leading-[normal] p-0 text-base text-left w-full"
                    wrapClassName="border border-black-900_28 border-solid w-full"
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text className="text-black-900_99 text-sm w-auto">
                    Client Contact Email
                  </Text>
                  <Input
                    name="frame53369_Seven"
                    placeholder="Enter Email"
                    className="!placeholder:text-black-900_4c !text-black-900_4c font-medium leading-[normal] p-0 text-base text-left w-full"
                    wrapClassName="border border-black-900_28 border-solid w-full"
                    type="email"
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text className="text-black-900_99 text-sm w-auto">
                    Industry
                  </Text>
                  <Input
                    name="frame53369_Eight"
                    placeholder="Select Industry"
                    className="font-medium leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                    wrapClassName="border border-black-900_28 border-solid flex w-full"
                    suffix={
                      <Img
                        className="mt-px mb-0.5 h-4 ml-[35px]"
                        src="images/img_arrowdown_black_900_12x12.svg"
                        alt="arrow_down"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text className="text-black-900_99 text-sm w-auto">Tax</Text>
                  <Input
                    name="frame53369_Nine"
                    placeholder="Select Tax"
                    className="font-medium leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                    wrapClassName="border border-black-900_28 border-solid flex w-full"
                    suffix={
                      <Img
                        className="mt-px mb-0.5 h-4 ml-[35px]"
                        src="images/img_arrowdown_black_900_12x12.svg"
                        alt="arrow_down"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {type === "product" ? (
          <div className="bg-white-A700 flex flex-col gap-5 h-[484px] md:h-auto items-start justify-start max-w-[892px] p-6 sm:px-5 rounded-tl-lg rounded-tr-lg w-full">
            <Text className="font-semibold text-black-900 text-lg w-auto">
              New Product
            </Text>
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text className="text-black-900_cc text-sm w-auto">
                    Product Name
                  </Text>
                  <Input
                    name="frame53369_Three"
                    placeholder="Product Name"
                    className="!placeholder:text-black-900_4c !text-black-900_4c leading-[normal] p-0 text-base text-left w-full"
                    wrapClassName="border border-black-900_28 border-solid w-full"
                    type="text"
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text className="text-black-900_cc text-sm w-auto">
                    Product Images
                  </Text>
                  <List
                    className="sm:flex-col flex-row gap-[17px] grid sm:grid-cols-1 grid-cols-4 justify-start w-auto sm:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 border border-black-900_66 border-dashed flex flex-col gap-2 h-[88px] items-center justify-center p-[7px] rounded-lg w-full">
                      <Img
                        className="h-4 mt-2 w-4"
                        src="/images/img_group.svg"
                        alt="group"
                      />
                      <Text className="font-medium leading-[140.00%] mb-[9px] text-[8px] text-black-900_66 text-center w-full">
                        <span className="text-black-900_66 font-montserrat font-normal">
                          Drop your images here, or select{" "}
                        </span>
                        <span className="text-light_blue-A700 font-montserrat font-normal">
                          click to browse
                        </span>
                      </Text>
                    </div>
                    <div className="bg-white-A700 border border-black-900_66 border-dashed flex flex-col gap-2 h-[88px] items-center justify-center p-[7px] rounded-lg w-full">
                      <Img
                        className="h-4 mt-2 w-4"
                        src="/images/img_group.svg"
                        alt="group"
                      />
                      <Text className="font-medium leading-[140.00%] mb-[9px] text-[8px] text-black-900_66 text-center w-full">
                        <span className="text-black-900_66 font-montserrat font-normal">
                          Drop your images here, or select{" "}
                        </span>
                        <span className="text-light_blue-A700 font-montserrat font-normal">
                          click to browse
                        </span>
                      </Text>
                    </div>
                    <div className="bg-white-A700 border border-black-900_66 border-dashed flex flex-col gap-2 h-[88px] items-center justify-center p-[7px] rounded-lg w-full">
                      <Img
                        className="h-4 mt-2 w-4"
                        src="/images/img_group.svg"
                        alt="group"
                      />
                      <Text className="font-medium leading-[140.00%] mb-[9px] text-[8px] text-black-900_66 text-center w-full">
                        <span className="text-black-900_66 font-montserrat font-normal">
                          Drop your images here, or select{" "}
                        </span>
                        <span className="text-light_blue-A700 font-montserrat font-normal">
                          click to browse
                        </span>
                      </Text>
                    </div>
                    <div className="bg-white-A700 border border-black-900_66 border-dashed flex flex-col gap-2 h-[88px] items-center justify-center p-[7px] rounded-lg w-full">
                      <Img
                        className="h-4 mt-2 w-4"
                        src="/images/img_group.svg"
                        alt="group"
                      />
                      <Text className="font-medium leading-[140.00%] mb-[9px] text-[8px] text-black-900_66 text-center w-full">
                        <span className="text-black-900_66 font-montserrat font-normal">
                          Drop your images here, or select{" "}
                        </span>
                        <span className="text-light_blue-A700 font-montserrat font-normal">
                          click to browse
                        </span>
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text className="text-black-900_99 text-sm w-auto">
                    Supplier
                  </Text>
                  <Input
                    name="frame53369_Four"
                    placeholder="Select Supplier"
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
                    size="lg"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-4 items-start justify-start w-full">
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <Text className="text-black-900_99 text-sm w-auto">
                      Length (in inches)
                    </Text>
                    <Input
                      name="frame53369_Five"
                      placeholder="0"
                      className="!placeholder:text-black-900_4c !text-black-900_4c font-medium leading-[normal] p-0 text-base text-left w-full"
                      wrapClassName="border border-black-900_28 border-solid flex w-full"
                      suffix={
                        <Img
                          className="mt-auto mb-px ml-[35px]"
                          src="/images/img_airplane.svg"
                          alt="airplane"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <Text className="text-black-900_99 text-sm w-auto">
                      Width (in inches)
                    </Text>
                    <Input
                      name="frame53369_Six"
                      placeholder="0"
                      className="!placeholder:text-black-900_4c !text-black-900_4c font-medium leading-[normal] p-0 text-base text-left w-full"
                      wrapClassName="border border-black-900_28 border-solid flex w-full"
                      suffix={
                        <Img
                          className="mt-auto mb-px ml-[35px]"
                          src="/images/img_airplane.svg"
                          alt="airplane"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text className="text-black-900_99 text-sm w-auto">
                    Supplier
                  </Text>
                  <Input
                    name="frame53369_Seven"
                    placeholder="Select Category"
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
                    size="lg"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-4 items-start justify-start w-full">
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <Text className="text-black-900_99 text-sm w-auto">
                      Height (in inches)
                    </Text>
                    <Input
                      name="frame53369_Eight"
                      placeholder="0"
                      className="!placeholder:text-black-900_4c !text-black-900_4c font-medium leading-[normal] p-0 text-base text-left w-full"
                      wrapClassName="border border-black-900_28 border-solid flex w-full"
                      suffix={
                        <Img
                          className="mt-auto mb-px ml-[35px]"
                          src="/images/img_airplane.svg"
                          alt="airplane"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <Text className="text-black-900_99 text-sm w-auto">
                      Weight (in LBS)
                    </Text>
                    <Input
                      name="frame53369_Nine"
                      placeholder="0"
                      className="!placeholder:text-black-900_4c !text-black-900_4c font-medium leading-[normal] p-0 text-base text-left w-full"
                      wrapClassName="border border-black-900_28 border-solid flex w-full"
                      suffix={
                        <Img
                          className="mt-auto mb-px ml-[35px]"
                          src="/images/img_airplane.svg"
                          alt="airplane"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text className="text-black-900_99 text-sm w-auto">
                    Colors
                  </Text>
                  <List
                    className="bg-white-A700 border border-black-900_28 border-solid sm:flex-col flex-row gap-2 grid sm:grid-cols-1 grid-cols-3 justify-start p-3 rounded-lg w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] rounded-[3px] w-auto">
                      <div className="bg-red-400 h-[7px] rounded-[3px] w-[7px]"></div>
                      <Text className="text-[10px] text-black-900 w-auto">
                        Red
                      </Text>
                      <Img
                        className="h-3 w-3"
                        src="/images/img_close.svg"
                        alt="close"
                      />
                    </div>
                    <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] rounded-[3px] w-auto">
                      <div className="bg-indigo-A200 h-[7px] rounded-[3px] w-[7px]"></div>
                      <Text className="text-[10px] text-black-900 w-auto">
                        Blue
                      </Text>
                      <Img
                        className="h-3 w-3"
                        src="/images/img_close.svg"
                        alt="close"
                      />
                    </div>
                    <div className="flex flex-row gap-[3.68px] items-center justify-start outline outline-[0.5px] outline-indigo-50 px-[7.37px] py-[3.68px] rounded-[3px] w-auto">
                      <div className="bg-black-900 h-[7px] rounded-[3px] w-[7px]"></div>
                      <Text className="text-[10px] text-black-900 w-auto">
                        Black
                      </Text>
                      <Img
                        className="h-3 w-3"
                        src="/images/img_close.svg"
                        alt="close"
                      />
                    </div>
                  </List>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text className="text-black-900_99 text-sm w-auto">
                      Sizes
                    </Text>
                    <div className="flex flex-row gap-3 items-start justify-start w-auto">
                      <Button
                        className="!text-black-900_66 border border-black-900_19 border-solid cursor-pointer font-medium h-10 leading-[normal] rounded text-base text-center w-10"
                        color="white_A700"
                        size="lg"
                        variant="fill"
                      >
                        XS
                      </Button>
                      <Button
                        className="border border-light_blue-A700 border-solid cursor-pointer font-medium h-10 leading-[normal] rounded text-base text-center w-10"
                        color="light_blue_A700_0a"
                        size="lg"
                        variant="fill"
                      >
                        S
                      </Button>
                      <Button
                        className="border border-light_blue-A700 border-solid cursor-pointer font-medium h-10 leading-[normal] rounded text-base text-center w-10"
                        color="light_blue_A700_0a"
                        size="lg"
                        variant="fill"
                      >
                        M
                      </Button>
                      <Button
                        className="border border-light_blue-A700 border-solid cursor-pointer font-medium h-10 leading-[normal] rounded text-base text-center w-10"
                        color="light_blue_A700_0a"
                        size="lg"
                        variant="fill"
                      >
                        L
                      </Button>
                      <Button
                        className="!text-black-900_66 border border-black-900_19 border-solid cursor-pointer font-medium h-10 leading-[normal] rounded text-base text-center w-10"
                        color="white_A700"
                        size="lg"
                        variant="fill"
                      >
                        XL
                      </Button>
                      <Button
                        className="!text-black-900_66 border border-black-900_19 border-solid cursor-pointer font-medium h-10 leading-[normal] rounded text-base text-center w-10"
                        color="white_A700"
                        size="lg"
                        variant="fill"
                      >
                        2X
                      </Button>
                      <Button
                        className="!text-black-900_66 border border-black-900_19 border-solid cursor-pointer font-medium h-10 leading-[normal] rounded text-base text-center w-10"
                        color="white_A700"
                        size="lg"
                        variant="fill"
                      >
                        3X
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="h-px w-full"
                src="/images/img_frame2609196.svg"
                alt="frame2609196"
              />
            </div>
          </div>
        ) : null}

        <div className="bg-gray-50 flex flex-col items-end justify-center max-w-[892px] outline outline-indigo-50 p-6 sm:px-5 w-full">
          <div className="flex flex-row gap-4 items-start justify-start w-auto">
            <Button
              className="!text-black-900 border border-black-900_1e border-solid cursor-pointer font-medium min-w-[73px] text-center text-sm"
              shape="round"
              color="white_A700"
            >
              Cancel
            </Button>
            <Button
              className="cursor-pointer font-medium min-w-[115px] text-center text-sm"
              shape="round"
              color="black_900"
            >
              Add Product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAdd;
