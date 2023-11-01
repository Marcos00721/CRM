import { Button, Img, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import React from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
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
                  <Img
                    className="h-[17px]"
                    src="/images/img_frame_black_900_32x32.svg"
                    alt="frame_Four"
                  />
                </Button>
                <Text className="text-black-900_7f text-sm">
                  <span className="text-black-900_7f font-montserrat text-left font-normal">
                    Home / Projects /{" "}
                  </span>
                  <span className="text-black-900_7f font-montserrat text-left font-normal">
                    Gift for Trainees /
                  </span>
                  <span className="text-black-900 font-montserrat text-left font-semibold">
                    {" "}
                    Product Detail
                  </span>
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-center justify-start w-auto">
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
            <div className="flex flex-col gap-6 items-center justify-start w-[97%] md:w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1147px] w-full">
                <Text className="font-semibold text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto">
                  Product Detail
                </Text>
                <Button
                  className="border border-black-900_1e border-solid cursor-pointer flex items-center justify-center min-w-[138px]"
                  leftIcon={
                    <Img
                      className="h-5 mr-1"
                      src="/images/img_edit_black_900.svg"
                      alt="edit"
                    />
                  }
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  <div
                    onClick={() => {
                      navigate("/product-edit");
                    }}
                    className="!text-black-900 font-medium text-left text-sm"
                  >
                    Edit Product
                  </div>
                </Button>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
                <div className="bg-white-A700 flex flex-col h-[400px] sm:h-auto items-center justify-start outline outline-[0.5px] outline-indigo-50 rounded-[13px] w-[400px] sm:w-full">
                  <Img
                    className="h-[399px] sm:h-auto object-cover rounded-tl-[13px] rounded-tr-[13px] w-[400px] md:w-full"
                    src="/images/product_detail.svg"
                    alt="imageSeventySeven"
                  />
                </div>
                <div className="flex flex-col items-start justify-start max-w-[723px] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <div className="flex flex-row gap-3 items-center justify-between w-full">
                        <Text className="border border-solid border-teal-600 font-medium px-1 py-[3px] rounded text-base text-teal-600 w-auto">
                          SKU : 2600
                        </Text>
                        <Text className="font-medium text-base text-black-900_7f w-auto">
                          #933144188
                        </Text>
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text className="font-semibold max-w-[467px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900">
                            Vansport Omega Solid Mesh Tech Polo Shirt
                          </Text>
                          <Text className="leading-[150.00%] max-w-[723px] md:max-w-full text-base text-black-900_b2">
                            Our best-selling, moisture-wicking golf shirt keeps
                            you cool &amp; comfortable during active wear.
                            Vansport fabric is specially engineered to resist
                            snags &amp; pulls, with a lighter and smoother hand
                            than other polos at comparable prices. It has a
                            micro-mesh knit body, UV protection, solid rib-knit
                            collar, Vansport tagless neck label, three-button
                            placket, dyed-to-match buttons, hemmed sleeves. Not
                            all sizes available in all colors. Complies with
                            CPSIA, WRAP.
                          </Text>
                        </div>
                        <Line className="bg-black-900_14 h-px w-full" />
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <Text className="font-medium text-base text-black-900 w-full">
                            <span className="text-black-900 font-montserrat text-left font-semibold">
                              Supplier :
                            </span>
                            <span className="text-black-900 font-montserrat text-left">
                              {" "}
                            </span>
                            <span className="text-black-900_7f font-montserrat text-left">
                              Prime Line
                            </span>
                          </Text>
                          <Text className="font-medium leading-[140.00%] max-w-[723px] md:max-w-full text-base text-black-900">
                            <span className="text-black-900 font-montserrat text-left font-semibold">
                              Colors :
                            </span>
                            <span className="text-black-900 font-montserrat text-left">
                              {" "}
                            </span>
                            <span className="text-black-900_7f font-montserrat text-left">
                              Deep Maroon Red, Sport Red, Real Red, Orange,
                              Sunburst Yellow, Citron Green, Lime Green, Lawn
                              Green, Dark Forest Green, Teal Green, Island Blue,
                              Carolina Blue, Royal Blue, Navy Blue, Purple,
                              Berry Pink, White, Gray, Dark Gray, Black, Brown
                            </span>
                          </Text>
                          <div className="flex flex-col h-[68px] md:h-auto items-start justify-start w-[410px] sm:w-full">
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <Text className="font-semibold text-base text-black-900 w-auto">
                                Sizes :
                              </Text>
                              <div className="flex flex-row gap-3 items-start justify-start w-auto">
                                <Button
                                  className="border border-black-900_19 border-solid cursor-pointer font-medium h-10 leading-[normal] rounded text-base text-center w-10"
                                  color="white_A700"
                                  size="lg"
                                  variant="fill"
                                >
                                  XS
                                </Button>
                                <Button
                                  className="border border-black-900_19 border-solid cursor-pointer font-medium h-10 leading-[normal] rounded text-base text-center w-10"
                                  color="white_A700"
                                  size="lg"
                                  variant="fill"
                                >
                                  S
                                </Button>
                                <Button
                                  className="border border-black-900_19 border-solid cursor-pointer font-medium h-10 leading-[normal] rounded text-base text-center w-10"
                                  color="white_A700"
                                  size="lg"
                                  variant="fill"
                                >
                                  M
                                </Button>
                                <Button
                                  className="border border-black-900_19 border-solid cursor-pointer font-medium h-10 leading-[normal] rounded text-base text-center w-10"
                                  color="white_A700"
                                  size="lg"
                                  variant="fill"
                                >
                                  L
                                </Button>
                                <Button
                                  className="border border-black-900_19 border-solid cursor-pointer font-medium h-10 leading-[normal] rounded text-base text-center w-10"
                                  color="white_A700"
                                  size="lg"
                                  variant="fill"
                                >
                                  XL
                                </Button>
                                <Button
                                  className="border border-black-900_19 border-solid cursor-pointer font-medium h-10 leading-[normal] rounded text-base text-center w-10"
                                  color="white_A700"
                                  size="lg"
                                  variant="fill"
                                >
                                  2X
                                </Button>
                                <Button
                                  className="border border-black-900_19 border-solid cursor-pointer font-medium h-10 leading-[normal] rounded text-base text-center w-10"
                                  color="white_A700"
                                  size="lg"
                                  variant="fill"
                                >
                                  3X
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-auto">
                            <Text className="font-semibold text-base text-black-900 w-auto">
                              Prices :
                            </Text>
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
                                      Qty
                                    </Button>
                                    <div className="bg-white-A700 flex flex-col items-center justify-center outline outline-[0.5px] outline-black-900_0f p-[11.05px] w-auto">

                                    <Text
                                        className="pl-2 sm:pr-5 pr-7 py-[7px] rounded text-black-900_b2 text-sm w-[60px]"
                                        size="txtMontserratRegular14Black900b2"
                                      >
                                        500
                                      </Text>
                                    </div>
                                    <div className="bg-white-A700 flex flex-col items-center justify-center outline outline-[0.5px] outline-black-900_0f p-[11.05px] w-auto">
                                      <Text
                                        className="pl-2 sm:pr-5 pr-7 py-[7px] rounded text-black-900_b2 text-sm w-[60px]"
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
                                      Cost
                                    </Button>
                                    <div className="bg-white-A700 flex flex-col items-center justify-center outline outline-[0.5px] outline-black-900_0f p-[11.05px] w-auto">

                                    <Text
                                        className="pl-2 sm:pr-5 pr-7 py-[7px] rounded text-black-900_b2 text-sm w-[60px]"
                                        size="txtMontserratRegular14Black900b2"
                                      >
                                        500
                                      </Text>
                                    </div>
                                    <div className="bg-white-A700 flex flex-col items-center justify-center outline outline-[0.5px] outline-black-900_0f p-[11.05px] w-auto">
                                      <Text
                                        className="pl-2 sm:pr-5 pr-7 py-[7px] rounded text-black-900_b2 text-sm w-[60px]"
                                        size="txtMontserratRegular14Black900b2"
                                      >
                                        100
                                      </Text>
                                    </div>
                                  </div>
                                </List>
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

export default Product;
