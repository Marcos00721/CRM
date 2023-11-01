import React from "react";
import {
    Input,
    Text,
    Img,
    SelectBox,
    Radio,
    RadioGroup,
    Switch,
  } from "components";

function ClientForm() {

    const shippedOptionsList = [
        { label: "Option1", value: "option1" },
        { label: "Option2", value: "option2" },
        { label: "Option3", value: "option3" },
      ];
  return (
    <div>
      <div className="p-5">
        <form className="grid grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="sm:col-span-2 sm:col-start-1">
            <div className="mb-4">
              <Text className="font-bold text-black-900_66 text-sm">
                Client Company Name
              </Text>
              <Input
                name="netCounter"
                placeholder="Nike Limited"
                className="font-medium font-montserrat leading-[normal] p-0 placeholder:text-black-500_cc text-base text-left w-full"
                wrapClassName="border border-black-900_28 border-solid flex rounded-lg w-full"
                color="white_A700"
                // size="md"
                variant="fill"
              ></Input>
            </div>
          </div>

          {/* Column 2 */}
          <div className="sm:col-span-2 sm:col-start-1">
            <div className="mb-4">
              <Text className="font-bold text-black-900_66 text-sm">
                Client Consultant
              </Text>
              <SelectBox
                className="font-medium text-black-900 text-left text-sm w-full border border-black-900_28 border-solid rounded-lg"
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
                size="md"
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="sm:col-span-2 sm:col-start-1">
            <div className="mb-4">
              <Text className="font-bold text-black-900_66 text-sm">
                Unique ID (Auto generated)
              </Text>
              <Input
                name="netCounter"
                placeholder="CL - 03"
                className="font-medium font-montserrat leading-[normal] p-0 placeholder:text-black-500_cc text-base text-left w-full"
                wrapClassName="border border-black-900_28 border-solid flex rounded-lg w-full"
                color="white_A700"
                // size="md"
                variant="fill"
              ></Input>
            </div>
          </div>

          {/* Column 4 */}
          <div className="sm:col-span-2 sm:col-start-1">
            <div className="mb-4">
              <Text className="font-bold text-black-900_66 text-sm">
                Description
              </Text>
              <Input
                name="netCounter"
                placeholder="Enter Description"
                className="font-medium font-montserrat leading-[normal] p-0 placeholder:text-black-500_cc text-base text-left w-full"
                wrapClassName="border border-black-900_28 border-solid flex rounded-lg w-full"
                color="white_A700"
                // size="md"
                variant="fill"
              ></Input>
            </div>
          </div>

          {/* Column 5 */}
          <div className="sm:col-span-2 sm:col-start-1">
            <div className="mb-4">
              <Text className="font-bold text-black-900_66 text-sm">
                Website
              </Text>
              <Input
                name="netCounter"
                placeholder="http:/"
                className="font-medium font-montserrat leading-[normal] p-0 placeholder:text-black-500_cc text-base text-left w-full"
                wrapClassName="border border-black-900_28 border-solid flex rounded-lg w-full"
                color="white_A700"
                // size="md"
                variant="fill"
              ></Input>
            </div>
          </div>

          {/* Column 6 */}
          <div className="sm:col-span-2 sm:col-start-1">
            <div className="mb-4">
              <Text className="font-bold text-black-900_66 text-sm">
                Sales Target
              </Text>
              <Input
                name="netCounter"
                placeholder="Enter Sales Target"
                className="font-medium font-montserrat leading-[normal] p-0 placeholder:text-black-500_cc text-base text-left w-full"
                wrapClassName="border border-black-900_28 border-solid flex rounded-lg w-full"
                color="white_A700"
                // size="md"
                variant="fill"
              ></Input>
            </div>
          </div>

          {/* Column 7 */}
          <div className="sm:col-span-2 sm:col-start-1">
            <div className="mb-4">
              <Text className="font-bold text-black-900_66 text-sm">
                Facebook
              </Text>
              <Input
                name="netCounter"
                placeholder="http:/"
                className="font-medium font-montserrat leading-[normal] p-0 placeholder:text-black-500_cc text-base text-left w-full"
                wrapClassName="border border-black-900_28 border-solid flex rounded-lg w-full"
                color="white_A700"
                // size="md"
                variant="fill"
              ></Input>
            </div>
          </div>

          {/* Column 8 */}
          <div className="sm:col-span-2 sm:col-start-1">
            <div className="mb-4">
              <Text className="font-bold text-black-900_66 text-sm">
                Twitter
              </Text>
              <Input
                name="netCounter"
                placeholder="http:/"
                className="font-medium font-montserrat leading-[normal] p-0 placeholder:text-black-500_cc text-base text-left w-full"
                wrapClassName="border border-black-900_28 border-solid flex rounded-lg w-full"
                color="white_A700"
                // size="md"
                variant="fill"
              ></Input>
            </div>
          </div>

          {/* Column 9 */}
          <div className="sm:col-span-2 sm:col-start-1">
            <div className="mb-4">
              <Text className="font-bold text-black-900_66 text-sm">
                Margin Minimum %
              </Text>
              <Input
                name="netCounter"
                placeholder="Enter %"
                className="font-medium font-montserrat leading-[normal] p-0 placeholder:text-black-500_cc text-base text-left w-full"
                wrapClassName="border border-black-900_28 border-solid flex rounded-lg w-full"
                color="white_A700"
                // size="md"
                variant="fill"
              ></Input>
            </div>
          </div>

          {/* Column 10 */}
          <div className="sm:col-span-2 sm:col-start-1">
            <div className="mb-4">
              <Text className="font-bold text-black-900_66 text-sm">
                Industry
              </Text>
              <SelectBox
                className="font-medium text-black-900 text-left text-sm w-full border border-black-900_28 border-solid rounded-lg"
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
                placeholder="Retail"
                size="md"
              />
            </div>
          </div>

          {/* Column 11 */}
          <div className="sm:col-span-2 sm:col-start-1">
            <div className="mb-4">
              <Text className="font-bold text-black-900_66 text-sm">Taxes</Text>
              <SelectBox
                className="font-medium text-black-900 text-left text-sm w-full border border-black-900_28 border-solid rounded-lg"
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
                placeholder="8%"
                size="md"
              />
            </div>
          </div>

          {/* Column 12 */}
          <div className="sm:col-span-2 sm:col-start-1">
            <div className="mb-4">
              <Text className="font-bold text-black-900_66 text-sm">Terms</Text>
              <SelectBox
                className="font-medium text-black-900 text-left text-sm w-full border border-black-900_28 border-solid rounded-lg"
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
                placeholder="Net Pay"
                size="md"
              />
            </div>
          </div>

          {/* Column 13 */}
          <div className="sm:col-span-2 sm:col-start-1 radiocheck">
            <div className="mb-4">
              <Text className="font-bold text-black-900_66 text-sm">
                Contact Type
              </Text>
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
                  label="Home"
                  id="Home"
                ></Radio>
                <Radio
                  value="Sample"
                  className="font-medium font-montserrat leading-[normal] text-black-900 text-left text-lg"
                  inputClassName="border border-black-900_66 border-solid h-4 mr-[5px] w-4"
                  checked={false}
                  name="radiogrouptext"
                  label="Work"
                  id="Work"
                ></Radio>
                <Radio
                  value="Sample"
                  className="font-medium font-montserrat leading-[normal] text-black-900 text-left text-lg"
                  inputClassName="border border-black-900_66 border-solid h-4 mr-[5px] w-4"
                  checked={false}
                  name="radiogrouptext"
                  label="Office"
                  id="Office"
                ></Radio>
              </RadioGroup>
            </div>
          </div>

          {/* Column 14 */}
          <div className="sm:col-span-2 sm:col-start-1">
            <div className="mb-4">
              <Text className="font-bold text-black-900_66 text-sm">Terms</Text>
              <SelectBox
                className="border border-black-900_28 border-solid font-medium leading-[normal] rounded-lg text-base text-left w-full"
                placeholderClassName="text-black-900_cc"
                indicator={
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowdown_black_900_12x12.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="frame53369"
                options={shippedOptionsList}
                isSearchable={false}
                placeholder="Airtel Pvt. Ltd."
                color="white_A700"
                size="md"
                variant="fill"
              />
            </div>
          </div>

          {/* Column 14 */}
          <div className="sm:col-span-2 sm:col-start-1">
            <div className="mb-4">
              <Text className="font-bold text-black-900_66 text-sm">
                Status
              </Text>
              <div className="flex flex-row items-center justify-start gap-1.5 p-2.5">
                <Switch
                  onColor="var(--green_01)"
                  offColor="var(--dark_gray_01)"
                  onHandleColor="#ffffff"
                  offHandleColor="#ffffff"
                  value={true}
                  className="gap-2.5 w-auto"
                />
                <Text className="font-bold text-black-900_66 text-base" color>
                  Active
                </Text>
              </div>
            </div>
          </div>
        </form>

        <form className="grid grid-cols-2 gap-6">
          {/* Column 15 */}
          <div className="sm:col-span-2 sm:col-start-1">
            <div className="mb-4">
              <Text className="font-bold text-black-900_66 text-sm">
                Country
              </Text>
              <SelectBox
                className="border border-black-900_28 border-solid font-medium leading-[normal] rounded-lg text-base text-left w-full"
                placeholderClassName="text-black-900_cc"
                indicator={
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowdown_black_900_12x12.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="frame53369"
                options={shippedOptionsList}
                isSearchable={false}
                placeholder="Select Country"
                color="white_A700"
                size="md"
                variant="fill"
              />
            </div>
          </div>

          {/* Column 16 */}
          <div className="sm:col-span-2 sm:col-start-1">
            <div className="mb-4">
              <Text className="font-bold text-black-900_66 text-sm">
                Zip Code
              </Text>
              <Input
                name="netCounter"
                placeholder="Enter Zip Code"
                className="font-medium font-montserrat leading-[normal] p-0 placeholder:text-black-500_cc text-base text-left w-full"
                wrapClassName="border border-black-900_28 border-solid flex rounded-lg w-full"
                color="white_A700"
                // size="md"
                variant="fill"
              ></Input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ClientForm;
