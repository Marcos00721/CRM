import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const PresentationPreviewExpandPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat gap-[25px] items-center justify-end mx-auto p-[15px] w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start mt-6 md:px-5 rounded-lg w-[43%] md:w-full">
          <div className="bg-light_blue-900_33 flex flex-col items-center justify-start w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[148px] items-center justify-start p-5 w-full"
              style={{ backgroundImage: "url('images/img_group42.svg')" }}
            >
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between my-1 w-full">
                <div className="bg-white-A700 flex flex-col items-start justify-start p-2 rounded-lg">
                  <Text
                    className="text-black-900 text-sm w-[71%] sm:w-full"
                    size="txtMontserratRomanSemiBold14Black900"
                  >
                    Pen Distributors
                  </Text>
                  <Text
                    className="leading-[14.00px] mb-[17px] mt-1 text-[10px] text-black-900 w-full"
                    size="txtMontserratRegular10"
                  >
                    11223344, Jaipur, Rajasthan, India - 302017
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] mb-[67px] min-w-[146px] outline outline-[0.5px] outline-white-A700 text-center text-sm uppercase"
                  shape="round"
                  color="light_blue_900"
                >
                  PRESENTATION
                </Button>
                <div className="bg-white-A700 flex flex-col items-center justify-start p-2.5 rounded-lg">
                  <Img
                    className="h-20 md:h-auto object-cover w-20"
                    src="/images/img_image40.png"
                    alt="imageForty"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row sm:gap-10 items-start justify-between px-5 py-4 w-[595px] md:w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="text-black-900 text-xl w-auto"
                size="txtMontserratRomanSemiBold20"
              >
                Gift for trainees
              </Text>
              <Input
                name="frame2609169"
                placeholder="Date Issued - 1 Aug, 2023"
                className="leading-[normal] p-0 placeholder:text-black-900_66 text-black-900_66 text-left text-sm w-full"
                wrapClassName="flex w-[98%]"
                prefix={
                  <Img
                    className="mt-auto mb-0.5 h-4 mr-1.5"
                    src="/images/img_frame_gray_500.svg"
                    alt="Frame"
                  />
                }
                size="xs"
              ></Input>
            </div>
            <Text
              className="text-base text-black-900_cc text-right w-auto"
              size="txtMontserratRegular16Black900cc"
            >
              ID - 4117653
            </Text>
          </div>
          <div className="bg-gray-50 border-indigo-50 border-solid border-y flex flex-row gap-[26px] items-center justify-between sm:px-5 px-8 py-5 w-[595px] md:w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
              <Text
                className="text-[10px] text-black-900_66 tracking-[0.45px] uppercase w-auto"
                size="txtMontserratRomanMedium10Black90066"
              >
                Project to
              </Text>
              <Text
                className="text-black-900 text-xs w-auto"
                size="txtMontserratRomanMedium12Black900"
              >
                Airtel Pvt. Ltd.
              </Text>
            </div>
            <Line className="bg-indigo-50 h-8 w-px" />
            <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
              <Text
                className="text-[10px] text-black-900_66 tracking-[0.45px] uppercase w-auto"
                size="txtMontserratRomanMedium10Black90066"
              >
                client contact
              </Text>
              <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                <Text
                  className="bg-deep_orange-100_01 flex h-5 items-center justify-center rounded-[50%] text-[10px] text-center text-gray-600_02 w-5"
                  size="txtMontserratRomanSemiBold10Gray60002"
                >
                  AS
                </Text>
                <Text
                  className="text-black-900 text-xs w-auto"
                  size="txtMontserratRomanMedium12Black900"
                >
                  Amitabh Singh
                </Text>
              </div>
            </div>
            <Line className="bg-indigo-50 h-8 w-px" />
            <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
              <Text
                className="text-[10px] text-black-900_66 tracking-[0.45px] uppercase w-auto"
                size="txtMontserratRomanMedium10Black90066"
              >
                EXPIRY DATE
              </Text>
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-black-900 text-xs w-auto"
                  size="txtMontserratRomanMedium12Black900"
                >
                  8 Aug, 2023
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start p-5 w-[595px] sm:w-full">
            <Text
              className="text-black-900 text-lg w-auto"
              size="txtMontserratRomanSemiBold18Black900"
            >
              Product Details
            </Text>
            <List
              className="flex flex-col gap-4 items-center w-full"
              orientation="vertical"
            >
              <div className="bg-gray-50 flex sm:flex-1 sm:flex-col flex-row gap-6 items-start justify-start p-4 rounded-lg w-[555px] sm:w-full">
                <Img
                  className="h-40 md:h-auto object-cover rounded w-40"
                  src="/images/img_image42_48x48.png"
                  alt="imageFortyTwo"
                />
                <div className="flex flex-col gap-5 items-start justify-start w-auto">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtMontserratRomanSemiBold16"
                    >
                      Stress Ball Yo-Yo Bungee
                    </Text>
                    <Text
                      className="max-w-[292px] md:max-w-full text-black-900_b2 text-xs"
                      size="txtMontserratRegular12Black900b2"
                    >
                      <>
                        Round Ball Shaped Polyurethane Stress Reliever Yo-Yo
                        Bungee. Complies with ASTM, CCPSA, CPSIA, Prop 65.
                        2.75&quot; Diameter
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-black-900 text-xs w-auto"
                      size="txtMontserratRegular12"
                    >
                      Colors :
                    </Text>
                    <div className="flex flex-row gap-1 items-center justify-start outline outline-[0.5px] outline-indigo-50 px-2 py-1 rounded w-auto">
                      <div className="bg-red-400 h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRegular12"
                      >
                        Red
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start outline outline-[0.5px] outline-indigo-50 px-2 py-1 rounded w-auto">
                      <div className="bg-indigo-A200 h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRegular12"
                      >
                        Blue
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start outline outline-[0.5px] outline-indigo-50 px-2 py-1 rounded w-auto">
                      <div className="bg-black-900 h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRegular12"
                      >
                        Black
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[216px]">
                    <div className="flex flex-row items-start justify-start w-[216px]">
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] outline outline-[0.5px] outline-indigo-50 text-center text-sm w-full"
                        shape="square"
                        color="black_900_33"
                        size="md"
                      >
                        Qty
                      </Button>
                      <Button
                        className="cursor-pointer leading-[normal] outline outline-[0.5px] outline-indigo-50 text-center text-sm w-[72px]"
                        shape="square"
                        size="md"
                      >
                        500
                      </Button>
                      <Button
                        className="cursor-pointer leading-[normal] outline outline-[0.5px] outline-indigo-50 text-center text-sm w-[72px]"
                        shape="square"
                        size="md"
                      >
                        100
                      </Button>
                    </div>
                    <div className="flex flex-row items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] outline outline-[0.5px] outline-indigo-50 text-center text-sm w-[72px]"
                        shape="square"
                        color="black_900_33"
                        size="md"
                      >
                        Price
                      </Button>
                      <Button
                        className="cursor-pointer leading-[normal] outline outline-[0.5px] outline-indigo-50 text-center text-sm w-[72px]"
                        shape="square"
                        size="md"
                      >
                        2.30
                      </Button>
                      <Button
                        className="cursor-pointer leading-[normal] outline outline-[0.5px] outline-indigo-50 text-center text-sm w-[72px]"
                        shape="square"
                        size="md"
                      >
                        2.20
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 flex sm:flex-1 sm:flex-col flex-row gap-6 items-start justify-start p-4 rounded-lg w-[555px] sm:w-full">
                <Img
                  className="h-40 md:h-auto object-cover rounded w-40"
                  src="/images/img_image42_48x48.png"
                  alt="imageFortyTwo"
                />
                <div className="flex flex-col gap-5 items-start justify-start w-auto">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtMontserratRomanSemiBold16"
                    >
                      Stress Ball Yo-Yo Bungee
                    </Text>
                    <Text
                      className="max-w-[292px] md:max-w-full text-black-900_b2 text-xs"
                      size="txtMontserratRegular12Black900b2"
                    >
                      <>
                        Round Ball Shaped Polyurethane Stress Reliever Yo-Yo
                        Bungee. Complies with ASTM, CCPSA, CPSIA, Prop 65.
                        2.75&quot; Diameter
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-black-900 text-xs w-auto"
                      size="txtMontserratRegular12"
                    >
                      Colors :
                    </Text>
                    <div className="flex flex-row gap-1 items-center justify-start outline outline-[0.5px] outline-indigo-50 px-2 py-1 rounded w-auto">
                      <div className="bg-red-400 h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRegular12"
                      >
                        Red
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start outline outline-[0.5px] outline-indigo-50 px-2 py-1 rounded w-auto">
                      <div className="bg-indigo-A200 h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRegular12"
                      >
                        Blue
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start outline outline-[0.5px] outline-indigo-50 px-2 py-1 rounded w-auto">
                      <div className="bg-black-900 h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRegular12"
                      >
                        Black
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[216px]">
                    <div className="flex flex-row items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] outline outline-[0.5px] outline-indigo-50 text-center text-sm w-[72px]"
                        shape="square"
                        color="black_900_33"
                        size="md"
                      >
                        Qty
                      </Button>
                      <Button
                        className="cursor-pointer leading-[normal] outline outline-[0.5px] outline-indigo-50 text-center text-sm w-[72px]"
                        shape="square"
                        size="md"
                      >
                        500
                      </Button>
                      <Button
                        className="cursor-pointer leading-[normal] outline outline-[0.5px] outline-indigo-50 text-center text-sm w-[72px]"
                        shape="square"
                        size="md"
                      >
                        100
                      </Button>
                    </div>
                    <div className="flex flex-row items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] outline outline-[0.5px] outline-indigo-50 text-center text-sm w-[72px]"
                        shape="square"
                        color="black_900_33"
                        size="md"
                      >
                        Price
                      </Button>
                      <Button
                        className="cursor-pointer leading-[normal] outline outline-[0.5px] outline-indigo-50 text-center text-sm w-[72px]"
                        shape="square"
                        size="md"
                      >
                        2.30
                      </Button>
                      <Button
                        className="cursor-pointer leading-[normal] outline outline-[0.5px] outline-indigo-50 text-center text-sm w-[72px]"
                        shape="square"
                        size="md"
                      >
                        2.20
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="bg-light_blue-900_33 flex flex-col items-center justify-between px-5 py-8 w-[595px] md:w-full">
            <div className="flex flex-col items-center justify-center w-auto">
              <Text
                className="leading-[140.00%] max-w-[197px] md:max-w-full text-base text-black-900 text-center"
                size="txtMontserratRomanSemiBold16"
              >
                Any queries regarding this presentation ?
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-1 items-center justify-start md:px-5 w-auto">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtMontserratRomanMedium16"
          >
            Powered by
          </Text>
          <Img
            className="h-[30px] w-[100px]"
            src="/images/img_brandlogo.svg"
            alt="brandlogo"
          />
        </div>
      </div>
    </>
  );
};

export default PresentationPreviewExpandPage;
