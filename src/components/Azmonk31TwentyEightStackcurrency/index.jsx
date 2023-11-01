import React from "react";

import { Button, Img, Input, Line, Radio, RadioGroup, SelectBox, Text } from "components";

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

const Azmonk31TwentyEightStackcurrency = (props) => {
  return (
    <>
      <div className={props.className}>

      <Button
          className="bg-transparent cursor-pointer flex  items-center justify-between mx-auto p-0 w-full"
          rightIcon={
            <Img className="h-6 ml-[35px]" src="images/img_arrowup_black_900.svg" alt="arrow_up" />
          }
        >
          <div className="font-montserrat font-semibold leading-[normal] text-black-900 text-left text-lg">
            {props?.additionalDetails}
          </div>
        </Button>
        <div className="flex md:flex-col flex-row gap-6  items-start justify-between mx-auto mt-2 w-full">
          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
            <Text className="font-montserrat text-black-900_99 text-sm w-auto">{props?.jobtype}</Text>
            <RadioGroup
              selectedValue="Firm"
              className="flex gap-6 items-start justify-start w-auto"
              name="radiogrouptext"
            >
              <Radio
                value="Firm"
                className="font-medium font-montserrat leading-[normal] text-black-900 text-left text-lg"
                inputClassName="border border-light_blue-A700 border-solid h-4 mr-[5px] rounded-lg w-4"
                checked={true}
                name="radiogrouptext"
                label="Firm"
                id="Firm"
              ></Radio>
              <Radio
                value="Sample"
                className="font-medium font-montserrat leading-[normal] text-black-900 text-left text-lg"
                inputClassName="border border-black-900_66 border-solid h-4 mr-[5px] w-4"
                checked={false}
                name="radiogrouptext"
                label="Sample"
                id="Sample"
              ></Radio>
            </RadioGroup>
          </div>
          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
            <Text className="font-montserrat text-black-900_99 text-sm w-auto">{props?.netterms}</Text>
            <Input
              name="netCounter"
              placeholder="Net 30"
              className="font-medium font-montserrat leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
              wrapClassName="border border-black-900_28 border-solid flex rounded-lg w-full"
              suffix={
                <Img
                  className="mt-px mb-0.5 h-4 ml-[35px]"
                  src="images/img_arrowdown_black_900_12x12.svg"
                  alt="arrow_down"
                />
              }
              color="white_A700"
              size="md"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
            <Text className="font-montserrat text-black-900_99 text-sm w-auto">{props?.tax}</Text>
            <Input
              name="frame53369_Two"
              placeholder="GST 8%"
              className="font-medium font-montserrat leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
              wrapClassName="border border-black-900_28 border-solid flex rounded-lg w-full"
              suffix={
                <Img
                  className="mt-px mb-0.5 h-4 ml-[35px]"
                  src="images/img_arrowdown_black_900_12x12.svg"
                  alt="arrow_down"
                />
              }
              color="white_A700"
              size="md"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
            <Text className="font-montserrat text-black-900_99 text-sm w-auto">{props?.margin}</Text>
            <Input
              name="frame53369_Three"
              placeholder="Enter Margin"
              className="!placeholder:text-black-900_66 !text-black-900_66 font-medium font-montserrat leading-[normal] p-0 text-base text-left w-full"
              wrapClassName="border border-black-900_28 border-solid rounded-lg w-full"
              color="white_A700"
              size="md"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col items-start justify-start w-auto">
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="flex flex-col gap-2 items-start justify-start w-[264px]">
                <Text className="font-montserrat text-black-900_99 text-sm w-auto">{props?.internalinternaOne}</Text>
                <Input
                  name="frame53369_Four"
                  placeholder="Enter Internal Client PO"
                  className="!placeholder:text-black-900_66 !text-black-900_66 font-medium font-montserrat leading-[normal] p-0 text-base text-left w-full"
                  wrapClassName="border border-black-900_28 border-solid rounded-lg w-full"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col gap-4 items-center justify-start  m-auto mt-2  w-full">
          <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              <Text className="font-montserrat text-black-900_99 text-sm w-auto">{props?.currency}</Text>
              <Input
                name="price"
                placeholder="USD"
                className="!placeholder:text-black-900_66 !text-black-900_66 font-medium font-montserrat leading-[normal] p-0 text-base text-left w-full"
                wrapClassName="border border-black-900_28 border-solid rounded-lg w-full"
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              {!!props?.invoicedate ? (
                <Text className="font-montserrat text-black-900_99 text-sm w-auto">{props?.invoicedate}</Text>
              ) : null}
              {!!props?.frame53369one ? (
                <Input
                  name="frame53369_One"
                  placeholder="DD/MM/YYYY"
                  value={props?.frame53369one}
                  className="font-medium font-montserrat leading-[normal] p-0 placeholder:text-black-900_cc text-base text-left w-full"
                  wrapClassName="border border-black-900_28 border-solid flex rounded-lg w-full"
                  suffix={<Img className="mt-auto mb-px h-5 ml-[35px]" src="images/img_frame_20x20.svg" alt="Frame" />}
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text className="font-montserrat text-black-900_99 text-sm w-auto">{props?.noting}</Text>
              <div className="flex flex-col items-start justify-start outline outline-[1px] outline-black-900_28 rounded w-full">
                <div className="bg-gray-50 border-b border-black-900_28 border-solid flex flex-col items-center justify-start p-3 rounded-tl rounded-tr w-full">
                  <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
                    <SelectBox
                      className="md:flex-1 font-medium font-montserrat leading-[normal] text-black-900_99 text-left text-sm w-[7%] md:w-full"
                      placeholderClassName="text-black-900_99"
                      indicator={<Img className="h-6 w-6" src="images/img_frame_2609304.svg" alt="Frame 2609304" />}
                      isMulti={false}
                      name="frame2609305"
                      options={normalOptionsList}
                      isSearchable={false}
                      placeholder="Normal"
                    />
                    <Line className="bg-black-900_19 h-5 md:h-px rounded-[1px] md:w-full w-px" />
                    <SelectBox
                      className="md:flex-1 font-medium font-montserrat leading-[normal] text-black-900_99 text-left text-sm w-[4%] md:w-full"
                      placeholderClassName="text-black-900_99"
                      indicator={<Img className="h-6 w-6" src="images/img_frame_2609304.svg" alt="Frame 2609304" />}
                      isMulti={false}
                      name="frame2609306"
                      options={optionsList}
                      isSearchable={false}
                      placeholder="16"
                    />
                    <Line className="bg-black-900_19 h-5 md:h-px rounded-[1px] md:w-full w-px" />
                    <SelectBox
                      className="md:flex-1 font-medium font-montserrat leading-[normal] text-black-900_99 text-left text-sm w-[5%] md:w-full"
                      placeholderClassName="text-black-900_99"
                      indicator={<Img className="h-6 w-6" src="images/img_frame_2609304.svg" alt="Frame 2609304" />}
                      isMulti={false}
                      name="frame2609307"
                      options={arialOptionsList}
                      isSearchable={false}
                      placeholder="Arial"
                    />
                    <Line className="bg-black-900_19 h-5 md:h-px rounded-[1px] md:w-full w-px" />
                    <Img className="h-6 w-24" src="images/img_mail_black_900.svg" alt="mail" />
                    <Line className="bg-black-900_19 h-5 md:h-px rounded-[1px] md:w-full w-px" />
                    <Img className="h-6 w-[130px]" src="images/img_frame2609310.svg" alt="frame2609310" />
                    <Line className="bg-black-900_19 h-5 md:h-px rounded-[1px] md:w-full w-px" />
                    <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                      <Img className="h-6 w-6" src="images/img_frame2609306.svg" alt="frame2609306_One" />
                      <Img className="h-6 w-6" src="images/img_frame2609307.svg" alt="frame2609307_One" />
                      <Button
                        className="border border-black-900_19 border-solid flex h-6 items-center justify-center rounded w-6"
                        color="black_900_14"
                        size="sm"
                        variant="fill"
                      >
                        <Img className="h-4" src="images/img_hugeiconinter.svg" alt="hugeiconinter" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 h-20 rounded-bl rounded-br w-full"></div>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </>
  );
};

Azmonk31TwentyEightStackcurrency.defaultProps = {
  currency: "Currency",
  noting: "Noting",
  additionalDetails: "Additional Details",
  jobtype: "Job Type",
  netterms: "Net Terms",
  tax: "Tax",
  margin: "Margin",
  internalinternaOne: "Internal Internal Client PO",
};

export default Azmonk31TwentyEightStackcurrency;
