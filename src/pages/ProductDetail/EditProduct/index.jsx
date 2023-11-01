import { Button, Img, Input, Line, List, Switch, Text } from 'components'
import Sidebar1 from 'components/Sidebar1'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const EditProduct = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
        <Sidebar1 className="!sticky !w-[245px] bg-black-900 flex h-screen md:hidden justify-start outline outline-indigo-50 overflow-auto md:px-5 top-[0]" />

          <div className="flex flex-1 flex-col gap-6 items-center justify-start md:px-5 w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1194px] outline outline-indigo-50 sm:px-5 px-6 py-5 w-full">
              <div className="flex md:flex-1 sm:flex-col flex-row gap-4 items-center justify-start w-[36%] md:w-full">
                <Button
                  className="flex h-8 items-center justify-center w-8"
                  shape="round"
                  color="indigo_50"
                  size="md"
                  variant="outline"
                >

                  <Img className="h-[17px]" src="/images/img_frame_black_900_32x32.svg" alt="frame_Four" />
                </Button>
                <Text className="text-black-900_7f text-sm">
                  <span className="text-black-900_7f font-montserrat text-left font-normal">Home / Projects / </span>
                  <span className="text-black-900_7f font-montserrat text-left font-normal">Gift for Trainees /</span>
                  <span className="text-black-900 font-montserrat text-left font-semibold"> Product Detail</span>
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-center justify-start w-auto">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[119px]"
                  leftIcon={<Img className="h-4 mr-1 my-px" src="/images/img_frame_white_a700_16x16.svg" alt="Frame" />}
                  shape="round"
                  color="light_blue_A700"
                  size="md"
                  variant="fill"
                >
                  <div className="font-medium text-left text-sm">Quick Add</div>
                </Button>
                <Button
                  className="flex h-10 items-center justify-center w-10"
                  shape="circle"
                  color="indigo_50"
                  size="md"
                  variant="outline"
                >
                  <Img className="h-5" src="/images/img_frame_gray_900.svg" alt="frame_Five" />
                </Button>
                <div className="flex flex-row gap-3 items-start justify-start w-auto">
                  <Img className="h-10 w-10" src="/images/img_checkmark.svg" alt="checkmark" />
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="/images/img_ellipse1262.png"
                    alt="ellipse1262"
                  />
                </div>
              </div>
            </div>

<div className="flex flex-col gap-6 items-center justify-start w-[97%] md:w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1147px] w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                  size="txtMontserratRomanSemiBold24"
                >
                  Edit Product
                </Text>
                <div className="flex flex-col items-center justify-start w-auto">
                  <div className="flex flex-row gap-4 items-start justify-start w-auto">
                    <Button
                    onClick={() => {
                        navigate("/product-detail");
                      }}
                      className="!text-black-900 border border-black-900_1e border-solid cursor-pointer font-medium min-w-[73px] rounded-lg text-center text-sm"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    >
                      Cancel
                    </Button>
                    <Button
                      className="common-pointer cursor-pointer font-medium min-w-[119px] rounded-lg text-center text-sm"
                      onClick={() => navigate("/product-detail")}
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      Save Product
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  <div className="bg-white-A700 flex flex-col h-[400px] sm:h-auto items-center justify-start outline outline-[0.5px] outline-indigo-50 rounded-[13px] w-[400px] sm:w-full">
                    <Img
                      className="h-[399px] sm:h-auto object-cover rounded-tl-[13px] rounded-tr-[13px] w-[400px] md:w-full"
                      src="/images/product_detail.svg"
                      alt="imageSeventySeven"
                    />
                  </div>
                  <div className="bg-gray-50 flex flex-col gap-2 items-center justify-start outline-[0.5px] outline-black-900_66 outline-dashed p-4 rounded-lg w-full">
                    <Img
                      className="h-6 w-6"
                      src="/images/img_group.svg"
                      alt="group"
                    />
                    <Text
                      className="leading-[140.00%] text-black-900_66 text-center text-sm"
                      size="txtMontserratRomanMedium14Black90066"
                    >
                      <span className="text-black-900_66 font-montserrat font-normal">
                        <>
                          Select from existing images, or select
                          <br />
                        </>
                      </span>
                      <span className="text-light_blue-A700 font-montserrat font-medium">
                        click to browse
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start max-w-[723px] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <div className="flex flex-row gap-3 items-center justify-between w-full">
                        <Text
                          className="border border-solid border-teal-600 px-1 py-[3px] rounded text-base text-teal-600 w-auto"
                          size="txtMontserratRomanMedium16Teal600"
                        >
                          SKU : 2600
                        </Text>
                        <Text
                          className="text-base text-black-900_7f w-auto"
                          size="txtMontserratRomanMedium16Black9007f"
                        >
                          #933144188
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col gap-5 items-start justify-start w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-black-900_cc text-sm w-auto"
                              size="txtMontserratRegular14Black900cc"
                            >
                              Product Name
                            </Text>
                            <Input
                              name="frame53369"
                              placeholder="Vansport Omega Solid Mesh Tech Polo Shirt"
                              className="!placeholder:text-black-900 !text-black-900 font-medium leading-[normal] p-0 text-base text-left w-full"
                              wrapClassName="border border-black-900_28 border-solid rounded-lg w-full"
                              color="white_A700"
                              size="md"
                              variant="fill"
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-black-900_cc text-sm w-auto"
                              size="txtMontserratRegular14Black900cc"
                            >
                              Description
                            </Text>
                            <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-col items-center justify-between p-3 rounded-lg w-full">
                              <Text
                                className="leading-[150.00%] max-w-[699px] md:max-w-full text-base text-black-900"
                                size="txtMontserratRomanMedium16"
                              >
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
                            <Text
                              className="text-black-900_99 text-sm w-auto"
                              size="txtMontserratRegular14Black90099"
                            >
                              Supplier
                            </Text>
                            <Input
                              name="frame53369_One"
                              placeholder="Prime Line"
                              className="font-medium leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                              wrapClassName="border border-black-900_28 border-solid flex rounded-lg w-full"
                              suffix={
                                <Img
                                  className="h-4 ml-[35px] my-0.5"
                                  src="/images/img_arrowdown_black_900_12x12.svg"
                                  alt="arrow_down"
                                />
                              }
                              color="white_A700"
                              size="md"
                              variant="fill"
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <div className="flex flex-row gap-2 items-start justify-between w-full">
                              <Text
                                className="text-black-900_99 text-sm w-auto"
                                size="txtMontserratRegular14Black90099"
                              >
                                Colors
                              </Text>
                              <a
                                href="javascript:"
                                className="text-light_blue-A700 text-sm underline w-auto"
                              >
                                <Text size="txtMontserratRegular14LightblueA700">
                                  Clear all
                                </Text>
                              </a>
                            </div>
                            <div className="bg-white-A700 border border-black-900_28 border-solid flex sm:flex-col flex-row gap-2 items-center justify-start p-3 rounded-lg w-full">
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[140px] rounded-[3px]"
                                rightIcon={
                                  <Img
                                    className="h-3 mt-px mb-0.5 ml-1"
                                    src="/images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                shape="round"
                                color="indigo_50"
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
                                    src="/images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                shape="round"
                                color="indigo_50"
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
                                    src="/images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                shape="round"
                                color="indigo_50"
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
                                    src="/images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                shape="round"
                                color="indigo_50"
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
                                    src="/images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                shape="round"
                                color="indigo_50"
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
                                    src="/images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                shape="round"
                                color="indigo_50"
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
                              <Text
                                className="text-black-900_99 text-sm w-auto"
                                size="txtMontserratRegular14Black90099"
                              >
                                Sizes
                              </Text>
                              <a
                                href="javascript:"
                                className="text-light_blue-A700 text-sm underline w-auto"
                              >
                                <Text size="txtMontserratRegular14LightblueA700">
                                  Clear all
                                </Text>
                              </a>
                            </div>
                            <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-row gap-2 items-center justify-start p-3 rounded-lg w-full">
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[46px] rounded-[3px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[3px] my-px"
                                    src="/images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                shape="round"
                                color="indigo_50"
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
                                    src="/images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                shape="round"
                                color="indigo_50"
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
                                    src="/images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                shape="round"
                                color="indigo_50"
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
                                    src="/images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                shape="round"
                                color="indigo_50"
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
                                    src="/images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                shape="round"
                                color="indigo_50"
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
                                    src="/images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                shape="round"
                                color="indigo_50"
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
                                    src="/images/img_close.svg"
                                    alt="close"
                                  />
                                }
                                shape="round"
                                color="indigo_50"
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
                              <Text
                                className="text-black-900_cc text-sm w-auto"
                                size="txtMontserratRegular14Black900cc"
                              >
                                Product Notes
                              </Text>
                              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                <Text
                                  className="text-black-900_7f text-sm w-auto"
                                  size="txtMontserratRomanMedium14"
                                >
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
                              wrapClassName="border border-black-900_28 border-solid rounded-lg w-full"
                              color="white_A700"
                              size="md"
                              variant="fill"
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <div className="flex flex-row gap-2 items-start justify-between w-full">
                              <Text
                                className="text-black-900_cc text-sm w-auto"
                                size="txtMontserratRegular14Black900cc"
                              >
                                Prices
                              </Text>
                              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                <Text
                                  className="text-black-900_7f text-sm w-auto"
                                  size="txtMontserratRomanMedium14"
                                >
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
                            <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-auto sm:w-full">
                              <div className="flex flex-col items-start justify-start w-auto">
                                <div className="flex flex-row items-start justify-start w-auto">
                                  <Button
                                    className="cursor-pointer font-semibold h-[55px] leading-[normal] outline outline-[0.5px] outline-black-900_0f text-center text-sm w-[120px]"
                                    shape="square"
                                    color="gray_50"
                                    size="3xl"
                                    variant="fill"
                                  >
                                    Qty
                                  </Button>
                                  <div className="bg-white-A700 flex flex-col items-center justify-center outline outline-[0.5px] outline-black-900_0f p-[11.05px] w-auto">
                                    <Text
                                      className="border border-black-900_28 border-solid pl-2 sm:pr-5 pr-[25px] py-[7px] rounded text-black-900_b2 text-sm w-[60px]"
                                      size="txtMontserratRegular14Black900b2"
                                    >
                                      500
                                    </Text>
                                  </div>
                                  <div className="bg-white-A700 flex flex-col items-center justify-center outline outline-[0.5px] outline-black-900_0f p-[11.05px] w-auto">
                                    <Text
                                      className="border border-black-900_28 border-solid pl-2 sm:pr-5 pr-7 py-[7px] rounded text-black-900_b2 text-sm w-[60px]"
                                      size="txtMontserratRegular14Black900b2"
                                    >
                                      100
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-row items-start justify-start w-full">
                                <Button
                                    className="cursor-pointer font-semibold h-[55px] leading-[normal] outline outline-[0.5px] outline-black-900_0f text-center text-sm w-[120px]"
                                    shape="square"
                                    color="gray_50"
                                    size="3xl"
                                    variant="fill"
                                  >
                                     Show to client
                                  </Button>
                                  {/* <Button
                                    className="cursor-pointer flex-1 font-semibold h-[42px] leading-[normal] outline outline-[0.5px] outline-black-900_0f text-center text-sm w-full"
                                    shape="square"
                                    color="gray_50"
                                    size="xl"
                                    variant="fill"
                                  >
                                    Show to client
                                  </Button> */}
                                  <div className="bg-white-A700 flex flex-1 flex-col h-full items-center justify-center outline outline-[0.5px] outline-black-900_0f p-[11.05px] w-full">
                                    <div className="border border-black-900_4c border-solid h-5 rounded-[50%] w-5"></div>
                                  </div>
                                  <div className="bg-white-A700 flex flex-1 flex-col h-full items-center justify-center outline outline-[0.5px] outline-black-900_0f p-[11.05px] w-full">
                                    <Button
                                      className="border border-black-900 border-solid flex h-5 items-center justify-center rounded-[50%] w-5"
                                      shape="circle"
                                      color="black_900"
                                      size="sm"
                                      variant="fill"
                                    >
                                      <Img
                                        className="h-3"
                                        src="/images/img_frame_white_a700_20x20.svg"
                                        alt="frame_Two"
                                      />
                                    </Button>
                                  </div>
                                </div>
                                <List
                                  className="flex flex-col gap-px items-center w-full"
                                  orientation="vertical"
                                >
                                  <div className="flex flex-row items-start justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-semibold h-[55px] leading-[normal] outline outline-[0.5px] outline-black-900_0f text-center text-sm w-[120px]"
                                      shape="square"
                                      color="gray_50"
                                      size="3xl"
                                      variant="fill"
                                    >
                                      Cost
                                    </Button>
                                    <div className="bg-white-A700 flex flex-col items-center justify-center outline outline-[0.5px] outline-black-900_0f p-[11.05px] w-auto">
                                      <Text
                                        className="border border-black-900_28 border-solid pl-2 sm:pr-5 pr-[25px] py-[7px] rounded text-black-900_b2 text-sm w-[60px]"
                                        size="txtMontserratRegular14Black900b2"
                                      >
                                        500
                                      </Text>
                                    </div>
                                    <div className="bg-white-A700 flex flex-col items-center justify-center outline outline-[0.5px] outline-black-900_0f p-[11.05px] w-auto">
                                      <Text
                                        className="border border-black-900_28 border-solid pl-2 sm:pr-5 pr-7 py-[7px] rounded text-black-900_b2 text-sm w-[60px]"
                                        size="txtMontserratRegular14Black900b2"
                                      >
                                        100
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-start justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-semibold h-[55px] leading-[normal] outline outline-[0.5px] outline-black-900_0f text-center text-sm w-[120px]"
                                      shape="square"
                                      color="gray_50"
                                      size="3xl"
                                      variant="fill"
                                    >
                                      Margin
                                    </Button>
                                    <div className="bg-white-A700 flex flex-col items-center justify-center outline outline-[0.5px] outline-black-900_0f p-[11.05px] w-auto">
                                      <Text
                                        className="border border-black-900_28 border-solid pl-2 sm:pr-5 pr-[25px] py-[7px] rounded text-black-900_b2 text-sm w-[60px]"
                                        size="txtMontserratRegular14Black900b2"
                                      >
                                        500
                                      </Text>
                                    </div>
                                    <div className="bg-white-A700 flex flex-col items-center justify-center outline outline-[0.5px] outline-black-900_0f p-[11.05px] w-auto">
                                      <Text
                                        className="border border-black-900_28 border-solid pl-2 sm:pr-5 pr-7 py-[7px] rounded text-black-900_b2 text-sm w-[60px]"
                                        size="txtMontserratRegular14Black900b2"
                                      >
                                        100
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-start justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-semibold h-[55px] leading-[normal] outline outline-[0.5px] outline-black-900_0f text-center text-sm w-[120px]"
                                      shape="square"
                                      color="gray_50"
                                      size="3xl"
                                      variant="fill"
                                    >
                                      Margin %
                                    </Button>
                                    <div className="bg-white-A700 flex flex-col items-center justify-center outline outline-[0.5px] outline-black-900_0f p-[11.05px] w-auto">
                                      <Text
                                        className="border border-black-900_28 border-solid pl-2 sm:pr-5 pr-[25px] py-[7px] rounded text-black-900_b2 text-sm w-[60px]"
                                        size="txtMontserratRegular14Black900b2"
                                      >
                                        500
                                      </Text>
                                    </div>
                                    <div className="bg-white-A700 flex flex-col items-center justify-center outline outline-[0.5px] outline-black-900_0f p-[11.05px] w-auto">
                                      <Text
                                        className="border border-black-900_28 border-solid pl-2 sm:pr-5 pr-7 py-[7px] rounded text-black-900_b2 text-sm w-[60px]"
                                        size="txtMontserratRegular14Black900b2"
                                      >
                                        100
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-start justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-semibold h-[55px] leading-[normal] outline outline-[0.5px] outline-black-900_0f text-center text-sm w-[120px]"
                                      shape="square"
                                      color="gray_50"
                                      size="3xl"
                                      variant="fill"
                                    >
                                      Price
                                    </Button>
                                    <div className="bg-white-A700 flex flex-col items-center justify-center outline outline-[0.5px] outline-black-900_0f p-[11.05px] w-auto">
                                      <Text
                                        className="border border-black-900_28 border-solid pl-2 sm:pr-5 pr-[25px] py-[7px] rounded text-black-900_b2 text-sm w-[60px]"
                                        size="txtMontserratRegular14Black900b2"
                                      >
                                        500
                                      </Text>
                                    </div>
                                    <div className="bg-white-A700 flex flex-col items-center justify-center outline outline-[0.5px] outline-black-900_0f p-[11.05px] w-auto">
                                      <Text
                                        className="border border-black-900_28 border-solid pl-2 sm:pr-5 pr-7 py-[7px] rounded text-black-900_b2 text-sm w-[60px]"
                                        size="txtMontserratRegular14Black900b2"
                                      >
                                        100
                                      </Text>
                                    </div>
                                  </div>
                                </List>
                              </div>
                              <div className="flex flex-col h-[317px] md:h-auto items-start justify-start w-20">
                                <div className="bg-gray-50 flex flex-col h-[317px] md:h-auto items-center justify-center p-[11.05px] w-full">
                                  <div className="flex flex-col gap-1.5 items-center justify-center w-full">
                                    <Img
                                      className="h-5 w-5"
                                      src="/images/img_frame_black_900_24x24.svg"
                                      alt="frame_Three"
                                    />
                                    <Text
                                      className="text-black-900_4c text-center text-sm"
                                      size="txtMontserratRomanMedium14Black9004c"
                                    >
                                      <>
                                        Add
                                        <br />
                                        Column
                                      </>
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
        </div>
      </div>
    
    
  
    
    </>
  )
}

export default EditProduct