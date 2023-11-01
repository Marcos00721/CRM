import React from "react";

import { Button, Img, Input, Line, ReactTable, Switch, Text } from "components";
// import Azmonk31ThirtyFourTopmenu from "../../components/Azmonk31ThirtyFourTopmenu";
import Sidebar1 from "components/Sidebar1";
import { CloseSVG } from "assets/images";
import TopMenu from "components/TopMenu";

const EstProductEdit = () => {
  const [frame53369value, setFrame53369value] = React.useState("");
  const [frame53369onevalue, setFrame53369onevalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 
          className="!sticky !w-[200px] bg-black-900 flex h-screen md:hidden justify-start outline outline-gray-100 overflow-auto md:px-5 top-[0]" 
          />
          <div className="flex flex-1 flex-col gap-5 items-center justify-start md:px-5 w-full">
            <TopMenu
              className="bg-white-A700 flex flex-row items-center justify-between  outline outline-gray-100 sm:px-5 px-6 py-5 w-full"
              usertext={
                <Text className="text-gray-900_b2 text-sm w-auto">
                  <span className="text-black-900_7f font-montserrat text-left font-normal">
                    Home / Projects /{" "}
                  </span>
                  <span className="text-black-900 font-montserrat text-left font-semibold">
                    Gift for Trainees
                  </span>
                </Text>
              }
            />
            <div className="flex flex-col gap-6 items-center justify-start w-[97%] md:w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between  w-full">
                <Text className="font-semibold text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto">
                  Edit Product
                </Text>
                <div className="flex flex-col items-center justify-start w-auto">
                  <div className="flex flex-row gap-4 items-start justify-start w-auto">
                    <Button
                      className="!text-black-900 border border-black-900_1e border-solid cursor-pointer font-medium min-w-[73px] text-center text-sm"
                      shape="round"
                      color="white_A700"
                      variant="fill"
                    >
                      Cancel
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[119px] text-center text-sm"
                      shape="round"
                      color="black_900"
                      variant="fill"
                    >
                      Save Product
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1336px] w-full">
                <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  <div className="bg-white-A700 flex flex-col h-[400px] sm:h-auto items-center justify-start outline outline-[0.5px] outline-gray-100 rounded-[13px] w-[400px] sm:w-full">
                    <Img
                      className="h-[399px] sm:h-auto object-cover rounded-tl-[13px] rounded-tr-[13px] w-[400px] md:w-full"
                      src="/images/img_image77.png"
                      alt="imageSeventySeven"
                    />
                  </div>
                  <div className="bg-gray-50 flex flex-col gap-2 items-center justify-start outline-[0.5px] outline-black-900_66 outline-dashed p-4 rounded-lg w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_group.svg"
                      alt="group"
                    />
                    <Text className="font-medium leading-[140.00%] text-black-900_66 text-center text-sm">
                      <span className="text-black-900_66 font-montserrat font-normal">
                        <>
                          Select from existing images, or select
                          <br />
                        </>
                      </span>
                      <span className="text-light_blue-A700 font-montserrat">
                        click to browse
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <div className="flex flex-row gap-3 items-center justify-between w-full">
                        <Text className="border border-green-900 border-solid font-medium px-1 py-[3px] rounded text-base text-green-900 w-auto">
                          ITEM# : 2600
                        </Text>
                        <Text className="font-medium text-base text-black-900_7f w-auto">
                          #933144188
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col gap-5 items-start justify-start w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text className="text-black-900_cc text-sm w-auto">
                              Product Name
                            </Text>
                            <Input
                              name="frame53369_One"
                              placeholder="Vansport Omega Solid Mesh Tech Polo Shirt"
                              className="!placeholder:text-black-900 !text-black-900 font-medium leading-[normal] p-0 text-base text-left w-full"
                              wrapClassName="border border-black-900_28 border-solid w-full"
                              shape="round"
                              color="white_A700"
                              size="lg"
                              variant="fill"
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text className="text-black-900_cc text-sm w-auto">
                              Description
                            </Text>
                            <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-col items-center justify-between p-3 rounded-lg w-full">
                              <Text className="font-medium leading-[150.00%] max-w-[888px] md:max-w-full text-base text-black-900">
                                Our best-selling, moisture-wicking golf shirt
                                keeps you cool &amp; comfortable during active
                                wear. Vansport fabric is specially engineered to
                                resist snags &amp; pulls, with a lighter and
                                smoother hand than other polos at comparable
                                prices. It has a micro-mesh knit body, UV
                                protection, solid rib-knit collar, Vansport
                                tagless neck label, three-button placket,
                                dyed-to-match buttons, hemmed sleeves. Not all
                                sizes available in all colors. Complies with
                                CPSIA, WRAP.
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text className="text-black-900_99 text-sm w-auto">
                              Vendor
                            </Text>
                            <Input
                              name="frame53369_Two"
                              placeholder="Prime Line"
                              className="font-medium leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                              wrapClassName="border border-black-900_28 border-solid flex w-full"
                              suffix={
                                <Img
                                  className="h-4 ml-[35px] my-0.5"
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
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <div className="flex flex-row gap-2 items-start justify-between w-full">
                              <Text className="text-black-900_99 text-sm w-auto">
                                Colors
                              </Text>
                              <a
                                href="javascript:"
                                className="font-medium text-light_blue-A700 text-sm underline w-auto"
                              >
                                <Text>Clear all</Text>
                              </a>
                            </div>
                            <div className="bg-white-A700 border border-black-900_28 border-solid flex sm:flex-col flex-row gap-2 items-center justify-start p-3 rounded-lg w-full">
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[140px] rounded-[3px]"
                                rightIcon={
                                  <Img
                                    className="h-3 mt-px mb-0.5 ml-1"
                                    src="images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                color="gray_100"
                                size="sm"
                                variant="outline"
                              >
                                <div className="leading-[normal] text-left text-xs">
                                  Deep Maroon Red
                                </div>
                              </Button>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[91px] rounded-[3px]"
                                rightIcon={
                                  <Img
                                    className="h-3 mt-px mb-0.5 ml-[5px]"
                                    src="images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                color="gray_100"
                                size="sm"
                                variant="outline"
                              >
                                <div className="leading-[normal] text-left text-xs">
                                  Sport Red
                                </div>
                              </Button>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[84px] rounded-[3px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-1 my-px"
                                    src="images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                color="gray_100"
                                size="sm"
                                variant="outline"
                              >
                                <div className="leading-[normal] text-left text-xs">
                                  Real Red
                                </div>
                              </Button>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[127px] rounded-[3px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[3px] my-px"
                                    src="images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                color="gray_100"
                                size="sm"
                                variant="outline"
                              >
                                <div className="leading-[normal] text-left text-xs">
                                  Sunburst Yellow
                                </div>
                              </Button>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[100px] rounded-[3px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[3px] my-px"
                                    src="images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                color="gray_100"
                                size="sm"
                                variant="outline"
                              >
                                <div className="leading-[normal] text-left text-xs">
                                  Lime Green
                                </div>
                              </Button>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[91px] rounded-[3px]"
                                rightIcon={
                                  <Img
                                    className="h-3 mt-px mb-0.5 ml-[3px]"
                                    src="images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                color="gray_100"
                                size="sm"
                                variant="outline"
                              >
                                <div className="leading-[normal] text-left text-xs">
                                  Navy Blue
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <div className="flex flex-row gap-2 items-start justify-between w-full">
                              <Text className="text-black-900_99 text-sm w-auto">
                                Sizes
                              </Text>
                              <a
                                href="javascript:"
                                className="font-medium text-light_blue-A700 text-sm underline w-auto"
                              >
                                <Text>Clear all</Text>
                              </a>
                            </div>
                            <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-row gap-2 items-center justify-start p-3 rounded-lg w-full">
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[46px] rounded-[3px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[3px] my-px"
                                    src="images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                color="gray_100"
                                size="sm"
                                variant="outline"
                              >
                                <div className="leading-[normal] text-left text-xs">
                                  XS
                                </div>
                              </Button>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[38px] rounded-[3px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[3px] my-px"
                                    src="images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                color="gray_100"
                                size="sm"
                                variant="outline"
                              >
                                <div className="leading-[normal] text-left text-xs">
                                  S
                                </div>
                              </Button>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[42px] rounded-[3px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-1 my-px"
                                    src="images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                color="gray_100"
                                size="sm"
                                variant="outline"
                              >
                                <div className="leading-[normal] text-left text-xs">
                                  M
                                </div>
                              </Button>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[38px] rounded-[3px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[3px] my-px"
                                    src="images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                color="gray_100"
                                size="sm"
                                variant="outline"
                              >
                                <div className="leading-[normal] text-left text-xs">
                                  L
                                </div>
                              </Button>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[45px] rounded-[3px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[3px] my-px"
                                    src="images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                color="gray_100"
                                size="sm"
                                variant="outline"
                              >
                                <div className="leading-[normal] text-left text-xs">
                                  XL
                                </div>
                              </Button>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[45px] rounded-[3px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[3px] my-px"
                                    src="images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                color="gray_100"
                                size="sm"
                                variant="outline"
                              >
                                <div className="leading-[normal] text-left text-xs">
                                  2X
                                </div>
                              </Button>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[45px] rounded-[3px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[3px] my-px"
                                    src="images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                color="gray_100"
                                size="sm"
                                variant="outline"
                              >
                                <div className="leading-[normal] text-left text-xs">
                                  3X
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <div className="flex flex-row gap-2 items-start justify-between w-full">
                              <Text className="text-black-900_cc text-sm w-auto">
                                Product Notes
                              </Text>
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
                            </div>
                            <Input
                              name="offer"
                              placeholder="We are offering 40% discount in upcoming weeks!"
                              className="!placeholder:text-black-900 !text-black-900 font-medium leading-[normal] p-0 text-base text-left w-full"
                              wrapClassName="border border-black-900_28 border-solid w-full"
                              shape="round"
                              color="white_A700"
                              size="lg"
                              variant="fill"
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start max-w-[912px] w-full">
                            <div className="flex flex-row gap-2 items-start justify-between w-full">
                              <Text className="text-black-900_cc text-sm w-auto">
                                Misc Charges
                              </Text>
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
                            </div>
                            <Input
                              name="price"
                              placeholder="Setup Charge: $62.5 - (V)"
                              className="!placeholder:text-black-900 !text-black-900 font-medium leading-[normal] p-0 text-base text-left w-full"
                              wrapClassName="border border-black-900_28 border-solid w-full"
                              shape="round"
                              color="white_A700"
                              size="lg"
                              variant="fill"
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-4 items-start justify-start w-full">
                            <div className="flex flex-row gap-2 items-start justify-between w-full">
                              <Text className="text-black-900_cc text-sm w-auto">
                                Prices
                              </Text>
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
                            </div>
                            <div className="flex flex-col gap-5 items-start justify-start w-full">
                              <div className="flex flex-col gap-2 items-start justify-start w-full">
                                <div className="flex md:flex-col flex-row gap-3 items-start justify-start w-full">
                                  <div className="border border-light_blue-A700 border-solid flex flex-col h-[171px] w-8 md:h-auto items-center justify-center px-1 py-2 rounded">
                                    <Text className="font-medium rotate-[270deg] text-center text-light_blue-A700 text-xs w-auto">
                                      Product
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 flex-col items-start justify-start outline outline-[1px] outline-gray-100 rounded-lg w-full">
                                    <div className="bg-gray-50 border-b border-gray-100 border-solid flex md:flex-col flex-row gap-6 items-center justify-between px-4 py-3 rounded-tl-lg rounded-tr-lg w-full">
                                      <div className="flex flex-col items-center justify-start w-[230px]">
                                        <Text className="font-medium text-black-900_7f text-sm w-auto">
                                          Item
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-center justify-start w-20">
                                        <Text className="font-medium text-black-900_7f text-sm w-auto">
                                          Qty
                                        </Text>
                                      </div>
                                      <div className="flex relative w-1/5 md:w-full">
                                        <div className="flex flex-col items-center justify-start my-auto w-[122px]">
                                          <Text className="font-medium text-black-900_7f text-sm w-auto">
                                            Unit Selling Price
                                          </Text>
                                        </div>
                                        <div className="flex flex-col items-center justify-start ml-[-36px] my-auto w-20 z-[1]">
                                          <Text className="font-medium text-black-900_7f text-sm w-auto">
                                            Margin
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="flex relative w-[31%] md:w-full">
                                        <div className="flex my-auto w-[85%]">
                                          <div className="flex flex-col items-center justify-start my-auto w-[88px]">
                                            <Text className="font-medium text-black-900_7f text-sm w-auto">
                                              Selling Price
                                            </Text>
                                          </div>
                                          <div className="flex flex-col items-center justify-start ml-[-2px] my-auto w-[134px] z-[1]">
                                            <Text className="font-medium text-black-900_7f text-sm w-auto">
                                              Client Selling Price
                                            </Text>
                                          </div>
                                        </div>
                                        <div className="flex flex-col items-center justify-start ml-[-38.01px] my-auto w-20 z-[1]">
                                          <Text className="font-medium text-black-900_7f text-sm w-auto">
                                            Amount
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex md:flex-col flex-row gap-6 items-center justify-between px-4 py-3 w-full">
                                      <Input
                                        name="frame2609227"
                                        placeholder="Deep Maroon Red / Small"
                                        className="leading-[normal] p-0 placeholder:text-black-900 text-left text-sm w-full"
                                        wrapClassName="md:flex-1 rounded md:w-full"
                                        color="black_900_28"
                                        size="lg"
                                        variant="outline"
                                      ></Input>
                                      <Text className="border border-black-900_28 border-solid pl-3 sm:pr-5 pr-[35px] py-[11px] rounded text-black-900 text-sm w-20">
                                        50
                                      </Text>
                                      <Button
                                        className="cursor-pointer leading-[normal] rounded text-center text-sm w-20"
                                        color="black_900_28"
                                        size="lg"
                                        variant="outline"
                                      >
                                        $ 14.99
                                      </Button>
                                      <Button
                                        className="cursor-pointer leading-[normal] rounded text-center text-sm w-20"
                                        color="black_900_28"
                                        size="lg"
                                        variant="outline"
                                      >
                                        79.86 %
                                      </Button>
                                      <Button
                                        className="cursor-pointer leading-[normal] rounded text-center text-sm w-20"
                                        color="black_900_28"
                                        size="lg"
                                        variant="outline"
                                      >
                                        $ 74.42
                                      </Button>
                                      <Text className=" border border-black-900_28 border-solid px-4 py-2 rounded text-black-900 text-sm ">
                                        $74.42
                                      </Text>
                                      <Button
                                        className="cursor-pointer leading-[normal] rounded text-center text-sm w-20"
                                        color="black_900_28"
                                        size="lg"
                                        variant="outline"
                                      >
                                        $ 3721.20
                                      </Button>
                                      <div className="flex flex-col items-start justify-end w-20">
                                        <Button
                                          className="flex h-10 items-center justify-center rotate-[90deg] w-10"
                                          shape="round"
                                          color="white_A700"
                                          size="lg"
                                          variant="fill"
                                        >
                                          <Img
                                            className="h-5"
                                            src="images/img_hugeiconinter_red_a700.svg"
                                            alt="hugeiconinter"
                                          />
                                        </Button>
                                      </div>
                                    </div>
                                    <div className="flex md:flex-col flex-row gap-6 items-center justify-between px-4 py-3 w-full">
                                      <Input
                                        name="frame2609227_One"
                                        placeholder="Yellow / X Large"
                                        className="leading-[normal] p-0 placeholder:text-black-900 text-left text-sm w-full"
                                        wrapClassName="md:flex-1 rounded md:w-full"
                                        color="black_900_28"
                                        size="lg"
                                        variant="outline"
                                      ></Input>
                                      <Text className="border border-black-900_28 border-solid pl-3 sm:pr-5 pr-[35px] py-[11px] rounded text-black-900 text-sm w-20">
                                        50
                                      </Text>
                                      <Button
                                        className="cursor-pointer leading-[normal] rounded text-center text-sm w-20"
                                        color="black_900_28"
                                        size="lg"
                                        variant="outline"
                                      >
                                        $ 14.99
                                      </Button>
                                      <Button
                                        className="cursor-pointer leading-[normal] rounded text-center text-sm w-20"
                                        color="black_900_28"
                                        size="lg"
                                        variant="outline"
                                      >
                                        79.86 %
                                      </Button>
                                      <Button
                                        className="cursor-pointer leading-[normal] rounded text-center text-sm w-20"
                                        color="black_900_28"
                                        size="lg"
                                        variant="outline"
                                      >
                                        $ 74.42
                                      </Button>
                                      <Text className="border border-black-900_28 border-solid px-4 py-2 rounded text-black-900 text-sm ">
                                        $74.42
                                      </Text>
                                      <Button
                                        className="cursor-pointer leading-[normal] rounded text-center text-sm w-20"
                                        color="black_900_28"
                                        size="lg"
                                        variant="outline"
                                      >
                                        $ 3721.20
                                      </Button>
                                      <div className="flex flex-col items-start justify-end w-20">
                                        <Button
                                          className="flex h-10 items-center justify-center rotate-[90deg] w-10"
                                          shape="round"
                                          color="white_A700"
                                          size="lg"
                                          variant="fill"
                                        >
                                          <Img
                                            className="h-5"
                                            src="images/img_hugeiconinter_red_a700.svg"
                                            alt="hugeiconinter_One"
                                          />
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center justify-end w-full">
                                      <Text className="font-medium text-light_blue-A700 text-sm underline w-auto">
                                        + Add Item
                                      </Text>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 items-start justify-start w-full">
                                <div className="flex md:flex-col flex-row gap-3 items-start justify-start w-full">
                                  <div className="border border-light_blue-A700 border-solid flex flex-col h-[129px] md:h-auto w-8 items-center justify-center px-1 py-2 rounded">
                                    <Text className="font-medium rotate-[270deg] text-center text-light_blue-A700 text-xs">
                                      Decoration
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 flex-col items-start justify-start outline outline-[1px] outline-gray-100 rounded-lg w-full">
                                    <div className="flex sm:flex-col flex-row gap-8 items-center justify-between px-4 py-3 w-full">
                                      <div className="flex sm:flex-1 sm:flex-col flex-row gap-8 items-center justify-start w-auto sm:w-full">
                                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                                          <div className="flex flex-col items-center justify-start w-auto">
                                            <Text className="font-medium text-black-900_7f text-sm w-auto">
                                              Artwork Details:
                                            </Text>
                                          </div>
                                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                            <div className="flex flex-col items-center justify-start w-auto">
                                              <Text className="font-semibold text-black-900 text-sm underline w-auto">
                                                View logo
                                              </Text>
                                            </div>
                                            <Img
                                              className="h-4 w-4"
                                              src="images/img_share.svg"
                                              alt="share"
                                            />
                                          </div>
                                        </div>
                                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                                          <div className="flex flex-col items-center justify-start w-auto">
                                            <Text className="font-medium text-black-900_7f text-sm w-auto">
                                              Decoration Location:
                                            </Text>
                                          </div>
                                          <div className="flex flex-col items-center justify-start w-auto">
                                            <div className="flex flex-col items-center justify-start w-auto">
                                              <Text className="font-medium text-black-900 text-sm w-auto">
                                                Right Chest
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-row items-start justify-start w-auto">
                                        <Button
                                          className="flex h-10 items-center justify-center rotate-[90deg] w-10"
                                          shape="round"
                                          color="white_A700"
                                          size="lg"
                                          variant="fill"
                                        >
                                          <Img
                                            className="h-5"
                                            src="images/img_edit_black_900_40x40.svg"
                                            alt="edit"
                                          />
                                        </Button>
                                        <Button
                                          className="flex h-10 items-center justify-center rotate-[90deg] w-10"
                                          shape="round"
                                          color="white_A700"
                                          size="lg"
                                          variant="fill"
                                        >
                                          <Img
                                            className="h-5"
                                            src="images/img_hugeiconinter_red_a700.svg"
                                            alt="hugeiconinter_Two"
                                          />
                                        </Button>
                                      </div>
                                    </div>
                                    <div className="flex md:flex-col flex-row gap-6 items-center justify-between px-4 py-3 w-full">
                                      <Input
                                        name="frame2609227_Two"
                                        placeholder="Setup Charge"
                                        className="leading-[normal] p-0 placeholder:text-black-900 text-left text-sm w-full"
                                        wrapClassName="md:flex-1 rounded md:w-full"
                                        color="black_900_28"
                                        size="lg"
                                        variant="outline"
                                      ></Input>
                                      <Text className="border border-black-900_28 border-solid pl-3 sm:pr-5 pr-[35px] py-[11px] rounded text-black-900 text-sm w-20">
                                        1
                                      </Text>
                                      <Text className="border border-black-900_28 border-solid pl-3 sm:pr-5 pr-[29px] py-[11px] rounded text-black-900 text-sm w-20">
                                        $200
                                      </Text>
                                      <Text className="border border-black-900_28 border-solid pl-3 sm:pr-5 pr-[35px] py-[11px] rounded text-black-900 text-sm w-20">
                                        10%
                                      </Text>
                                      <Button
                                        className="cursor-pointer leading-[normal] rounded text-center text-sm w-20"
                                        color="black_900_28"
                                        size="lg"
                                        variant="outline"
                                      >
                                        $ 222.22
                                      </Button>
                                      <Button
                                        className="cursor-pointer leading-[normal] rounded text-center text-sm w-20"
                                        color="black_900_28"
                                        size="lg"
                                        variant="outline"
                                      >
                                        $ 222.22
                                      </Button>
                                      <Button
                                        className="cursor-pointer leading-[normal] rounded text-center text-sm w-20"
                                        color="black_900_28"
                                        size="lg"
                                        variant="outline"
                                      >
                                        $ 222.22
                                      </Button>
                                      <div className="flex flex-col items-start justify-end w-20">
                                        <Button
                                          className="flex h-10 items-center justify-center rotate-[90deg] w-10"
                                          shape="round"
                                          color="white_A700"
                                          size="lg"
                                          variant="fill"
                                        >
                                          <Img
                                            className="h-5"
                                            src="images/img_hugeiconinter_red_a700.svg"
                                            alt="hugeiconinter_Three"
                                          />
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center justify-end w-full">
                                  <Text className="font-medium text-light_blue-A700 text-sm underline w-auto">
                                    + Add Decoration
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 items-start justify-start w-full">
                                <div className="flex md:flex-col flex-row gap-3 items-start justify-start w-full">
                                  <div className="border border-light_blue-A700 border-solid flex flex-col h-[100px] w-8 md:h-auto items-center justify-center px-1 py-2 rounded">
                                    <Text className="font-medium rotate-[270deg] text-center text-light_blue-A700  text-xs  w-auto">
                                      Others
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 flex-col items-start justify-start outline outline-[1px] outline-gray-100 rounded-lg w-full">
                                    <div className="flex md:flex-col flex-row gap-6 items-center justify-between px-4 py-3 rounded-lg w-full">
                                      <Input
                                        name="frame2609227_Three"
                                        placeholder="Misc Charges"
                                        className="leading-[normal] p-0 placeholder:text-black-900 text-left text-sm w-full"
                                        wrapClassName="md:flex-1 rounded md:w-full"
                                        color="black_900_28"
                                        size="lg"
                                        variant="outline"
                                      ></Input>
                                      <Text className="border border-black-900_28 border-solid pl-3 sm:pr-5 pr-[35px] py-[11px] rounded text-black-900 text-sm w-20">
                                        1
                                      </Text>
                                      <Text className="border border-black-900_28 border-solid pl-3 sm:pr-5 pr-[29px] py-[11px] rounded text-black-900 text-sm w-20">
                                        $200
                                      </Text>
                                      <Text className="border border-black-900_28 border-solid pl-3 sm:pr-5 pr-[35px] py-[11px] rounded text-black-900 text-sm w-20">
                                        10%
                                      </Text>
                                      <Button
                                        className="cursor-pointer leading-[normal] rounded text-center text-sm w-20"
                                        color="black_900_28"
                                        size="lg"
                                        variant="outline"
                                      >
                                        $ 222.22
                                      </Button>
                                      <Button
                                        className="cursor-pointer leading-[normal] rounded text-center text-sm w-20"
                                        color="black_900_28"
                                        size="lg"
                                        variant="outline"
                                      >
                                        $ 222.22
                                      </Button>
                                      <Button
                                        className="cursor-pointer leading-[normal] rounded text-center text-sm w-20"
                                        color="black_900_28"
                                        size="lg"
                                        variant="outline"
                                      >
                                        $ 222.22
                                      </Button>
                                      <div className="flex flex-col items-start justify-end w-20">
                                        <Button
                                          className="flex h-10 items-center justify-center rotate-[90deg] w-10"
                                          shape="round"
                                          color="white_A700"
                                          size="lg"
                                          variant="fill"
                                        >
                                          <Img
                                            className="h-5"
                                            src="images/img_hugeiconinter_red_a700.svg"
                                            alt="hugeiconinter_Four"
                                          />
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex  items-center justify-end w-full">
                                  <Text className="font-medium text-light_blue-A700 text-sm underline w-auto">
                                    + Add Charge
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-start justify-between py-6 w-full">
                            <div className="flex flex-col items-start justify-start w-auto">
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

export default EstProductEdit;
