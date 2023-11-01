import React from "react";

import { Button, Img, Radio, SelectBox, Switch, Text } from "../../components";

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

const POComp = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-3 items-center justify-between w-full">
          <div className="flex flex-row gap-1 items-center justify-start w-auto">
            <Button
              className="flex h-5 items-center justify-center rounded-[50%] w-5"
              shape="circle"
              color="black_900"
              size="sm"
              variant="fill"
            >
              <Img
                className="h-3"
                src="images/img_frame_white_a700_20x20.svg"
                alt="frame"
              />
            </Button>
            <Text className="font-medium font-montserrat text-black-900_66 text-xs w-auto">
              {props?.addtoselection}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Text className="font-medium font-montserrat text-black-900_66 text-xs w-auto">
                {props?.show}
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
        </div>
        <div className="flex md:flex-col flex-row gap-3 items-start justify-start w-full">
          <div className="bg-white-A700 flex flex-col h-[100px] items-center justify-start outline outline-[0.5px] outline-indigo-50 rounded-[3px] w-[100px]">
            <Img
              className="h-[99px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-[100px] sm:w-full"
              src="/images/img_image77.png"
              alt="imageSeventySeven"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
            <div className="flex flex-col gap-2 items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-3 items-center justify-between w-full">
                <div className="flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start w-full">
                  <Text className="border border-solid border-teal-600 font-medium font-montserrat px-1 py-[3px] rounded text-teal-600 text-xs w-auto">
                    {props?.frame2609487}
                  </Text>
                  <Text className="flex-1 font-montserrat font-semibold text-base text-black-900 w-auto">
                    {props?.vansportomegasoOne}
                  </Text>
                </div>
                <Text className="font-medium font-montserrat text-black-900_7f text-xs w-auto">
                  {props?.p933144188}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text className="font-medium font-montserrat text-black-900_cc text-xs w-full">
                  {props?.vendorprimelineOne}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <div className="flex md:flex-col flex-row gap-3 items-end justify-between w-full">
                <div className="flex flex-1 md:flex-col flex-row gap-7 items-start justify-start w-full">
                  <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text className="font-medium font-montserrat text-black-900_7f text-sm w-auto">
                          {props?.item}
                        </Text>
                        <Text className="font-medium font-montserrat text-black-900 text-sm w-auto">
                          {props?.jk1768}
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text className="font-medium font-montserrat text-black-900_7f text-sm w-auto">
                          {props?.clientcontact}
                        </Text>
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Text className="bg-purple-100 flex font-montserrat font-semibold h-5 items-center justify-center rounded-[50%] text-[9.21px] text-blue_gray-400 text-center w-5">
                            {props?.group2609260}
                          </Text>
                          <Text className="font-medium font-montserrat text-black-900 text-sm w-auto">
                            {props?.ronaldrichards}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text className="font-medium font-montserrat text-black-900_7f text-sm w-auto">
                          {props?.stage}
                        </Text>
                        <SelectBox
                          className="font-medium font-montserrat text-black-900 text-left text-sm min-w-[7rem] w-[36%] sm:w-full"
                          placeholderClassName="text-black-900"
                          indicator={
                            <Img
                              className="h-4 w-4"
                              src="images/img_arrowdown.svg"
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
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text className="font-medium font-montserrat text-black-900_7f text-sm w-auto">
                          {props?.proofstatus}
                        </Text>
                        <SelectBox
                          className="font-medium font-montserrat text-black-900 text-left text-sm  min-w-[9rem] w-[46%] sm:w-full"
                          placeholderClassName="text-black-900"
                          indicator={
                            <Img
                              className="h-4 w-4"
                              src="images/img_arrowdown.svg"
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
                        <Text className="font-medium font-montserrat text-black-900_7f text-sm w-auto">
                          {props?.description}
                        </Text>
                        <div className="flex flex-col items-center justify-start w-auto">
                          {props?.descriptionOne}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-end justify-start w-auto">
                  <div className="flex flex-row gap-2 items-start justify-center w-auto">
                    {!!props?.edit ? (
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[61px]"
                        leftIcon={
                          <Img
                            className="h-4 mr-1"
                            src="images/img_edit_black_900.svg"
                            alt="edit"
                          />
                        }
                        shape="round"
                        color="black_900_1e"
                        size="md"
                        variant="outline"
                      >
                        <div className="font-medium font-montserrat text-left text-xs">
                          {props?.edit}
                        </div>
                      </Button>
                    ) : null}
                    {!!props?.duplicate ? (
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[96px]"
                        leftIcon={
                          <Img
                            className="h-4 mb-px mr-1"
                            src="images/img_frame_2609490.svg"
                            alt="Frame 2609490"
                          />
                        }
                        shape="round"
                        color="black_900_1e"
                        size="md"
                        variant="outline"
                      >
                        <div className="font-medium font-montserrat text-left text-xs">
                          {props?.duplicate}
                        </div>
                      </Button>
                    ) : null}
                    {!!props?.viewMore ? (
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[106px]"
                        rightIcon={
                          <Img
                            className="h-5 ml-1"
                            src="images/img_arrowright_black_900_20x20.svg"
                            alt="arrow_right"
                          />
                        }
                        shape="round"
                        color="black_900_1e"
                        size="md"
                        variant="outline"
                      >
                        <div className="font-medium font-montserrat text-left text-xs">
                          {props?.viewMore}
                        </div>
                      </Button>
                    ) : null}
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Text className="font-medium font-montserrat text-black-900_7f text-xs underline w-auto">
                      {props?.notesactivity}
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[106px]"
                      rightIcon={
                        <Img
                          className="h-4 ml-1 my-px"
                          src="images/img_frame_16x16.svg"
                          alt="Frame"
                        />
                      }
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      <div className="font-medium font-montserrat text-left text-sm">
                        {props?.sendPo}
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row  items-center justify-start w-full">
                <Button
                  style={{
                    rotate: "270deg",
                  }}
                  className="text-light_blue-A700_cc cursor-pointer font-medium font-montserrat  rounded text-center text-xs "
                  color="light_blue_900"
                  size="sm"
                  variant="outline"
                >
                  {props?.voucheBills}
                </Button>
                <div className="flex flex-1 flex-col items-start justify-start outline outline-[1px] outline-indigo-50 rounded-lg w-full">
                  <div className="bg-gray-50 border-b border-indigo-50 border-solid flex md:flex-col flex-row gap-6 items-center justify-between px-4 py-3 rounded-tl-lg rounded-tr-lg w-full">
                    <div className="flex flex-col items-center justify-start w-[100px]">
                      <Text className="font-medium font-montserrat text-black-900_7f text-sm w-auto">
                        {props?.vendor}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100px]">
                      <Text className="font-medium font-montserrat text-black-900_7f text-sm w-auto">
                        {props?.pototal}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[140px]">
                      <Text className="font-medium font-montserrat text-black-900_7f text-sm w-auto">
                        {props?.postage}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[60px]">
                      <Text className="font-medium font-montserrat text-black-900_7f text-sm w-auto">
                        {props?.total}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[200px]">
                      <Text className="font-medium font-montserrat text-black-900_7f text-sm w-auto">
                        {props?.vendorbill}
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between px-4 py-3 w-full">
                    <div className="flex flex-col items-center justify-start w-[100px]">
                      <Text className="font-montserrat text-black-900 text-sm w-auto">
                        {props?.primeline}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100px]">
                      <Text className="font-montserrat text-black-900 text-sm w-auto">
                        {props?.p110000}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[140px]">
                      <div className="bg-black-900_0a flex flex-row gap-1.5 items-center justify-start outline outline-[0.5px] outline-black-900_14 px-3 py-1.5 rounded-[13px] w-auto">
                        <Radio
                          value="Created"
                          className="font-medium font-montserrat leading-[normal] text-black-900 text-left text-xs"
                          inputClassName="border border-black-900_33 border-solid h-3 mr-[5px] rounded-md w-3"
                          checked={false}
                          name="created"
                          label="Created"
                          id="Created"
                        ></Radio>
                        <Img
                          className="h-3 w-3"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown"
                        />
                      </div>
                    </div>
                    <Text className="font-montserrat text-black-900 text-sm w-auto">
                      {props?.zero}
                    </Text>
                    <div className="flex flex-col items-center justify-start w-[200px]">
                      <Text className="font-montserrat font-semibold text-light_blue-A700 text-sm underline w-auto">
                        {props?.addbill}
                      </Text>
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

POComp.defaultProps = {
  addtoselection: "Add to selection",
  show: "Show",
  frame2609487: "SKU : 2600",
  vansportomegasoOne: "Vansport Omega Solid Mesh Tech Polo Shirt",
  p933144188: "#933144188",
  vendorprimelineOne: "Vendor : Prime Line",
  item: "Item #:",
  jk1768: "JK-1768",
  clientcontact: "Client Contact:",
  group2609260: "RR",
  ronaldrichards: "Ronald Richards",
  stage: "Stage:",
  proofstatus: "Proof Status:",
  description: "Description:",
  descriptionOne: (
    <Text className="font-medium font-montserrat leading-[160.00%] max-w-[268px] md:max-w-full text-black-900 text-sm">
      <span className="text-black-900 text-left">
        <>
          Eco Hardcover Journal & Pen
          <br />
        </>
      </span>
      <span className="text-black-900 text-left">Jornik Manufacturing </span>
      <span className="text-black-900 text-left">
        <>&gt; </>
      </span>
      <span className="text-black-900 text-left">What Promos</span>
    </Text>
  ),
  notesactivity: "Notes & Activity",
  sendPo: "Send PO",
  voucheBills: "Vouche bills",
  vendor: "Vendor",
  pototal: "PO Total",
  postage: "PO Stage",
  total: "Total",
  vendorbill: "Vendor Bill",
  primeline: "Prime Line",
  p110000: "1100.00",
  zero: "0.00",
  addbill: "+ Add Bill",
};

export default POComp;
