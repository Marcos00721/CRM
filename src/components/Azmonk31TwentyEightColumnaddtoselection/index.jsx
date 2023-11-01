import { Button, Img, List, Radio, Switch, Text } from "components";
import React from "react";

const Azmonk31TwentyEightColumnaddtoselection = (props) => {
  return (
    <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start my-0 outline outline-[0.5px] outline-black-900_1e p-4 rounded-lg w-full">
      <div className="flex flex-row gap-3 items-center justify-between w-full">
        <Radio
          value="Addtoselection"
          className="font-medium font-montserrat leading-[normal] text-black-900_66 text-left text-xs"
          inputClassName="border border-black-900_4c border-solid h-5 mr-[5px] rounded-[10px] w-5"
          checked={true}
          name="addtoselection1"
          label="Add to selection"
          id="Addtoselection"
        ></Radio>
        <div className="flex flex-col items-center justify-start w-auto">
          <div className="flex flex-row gap-1 items-center justify-start w-auto">
            <Text className="font-medium font-montserrat text-black-900_66 text-xs w-auto">
              {props?.show1}
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
        <div className="bg-white-A700 flex flex-col h-[100px] items-center justify-start outline outline-[0.5px] outline-gray-100 rounded-[3px] w-[100px]">
          <Img
            className="h-[99px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-[100px] sm:w-full"
            src="images/img_image77.png"
            alt="imageSeventySeven"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
          <div className="flex flex-col gap-2 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-3 items-center justify-between w-full">
              <div className="flex flex-1 sm:flex-col flex-row gap-3 items-center justify-start w-full">
                <Text className="border border-green-900 border-solid font-medium font-montserrat p-1 rounded text-green-900 text-xs w-auto">
                  {props?.frame26094871}
                </Text>
                <Text className="flex-1 font-montserrat font-semibold text-base text-black-900 w-auto">
                  {props?.vansportomegasoone1}
                </Text>
              </div>
              <Text className="font-medium font-montserrat text-black-900_7f text-xs w-auto">
                {props?.p9331441881}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Text className="font-medium font-montserrat text-black-900_cc text-xs w-full">
                {props?.vendorprimelineone1}
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start justify-start w-full">
            <div className="flex md:flex-col flex-row gap-3 items-center justify-start w-full">
              <Text style={{rotate:"270deg"}} className="border border-light_blue-A700 border-solid font-medium font-montserrat px-1 py-2 rounded text-center text-light_blue-A700_cc text-xs w-[4.5rem] ">
                  {props?.product1}
                </Text>

              <div className="flex flex-1 flex-col items-start justify-start outline outline-[1px] outline-gray-100 rounded-lg w-full">
                <div className="bg-gray-50 border-b border-gray-100 border-solid flex md:flex-col flex-row gap-6 items-center justify-between px-4 py-3 rounded-tl-lg rounded-tr-lg w-full">
                  <div className="flex flex-col items-center justify-start w-[250px]">
                    <Text className="font-medium font-montserrat text-black-900_7f text-sm w-auto">
                      {props?.item1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-medium font-montserrat text-black-900_7f text-sm w-auto">
                      {props?.qty1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[122px]">
                    <Text className="font-medium font-montserrat text-black-900_7f text-sm w-auto">
                      {props?.unitsellingpricone1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-medium font-montserrat text-black-900_7f text-sm w-auto">
                      {props?.margin1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[88px]">
                    <Text className="font-medium font-montserrat text-black-900_7f text-sm w-auto">
                      {props?.sellingprice1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-medium font-montserrat text-black-900_7f text-sm w-auto">
                      {props?.amount1}
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between px-4 py-3 w-full">
                  <div className="flex flex-col items-center justify-start w-[250px]">
                    <Text className="font-medium font-montserrat text-black-900 text-sm w-auto">
                      {props?.deepmaroonred1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm">
                      {props?.fifty1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm w-auto">
                      {props?.price1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm w-auto">
                      {props?.p79861}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm w-auto">
                      {props?.priceone1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm w-auto">
                      {props?.pricetwo1}
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between px-4 py-3 w-full">
                  <div className="flex flex-col items-center justify-start w-[250px]">
                    <Text className="font-medium font-montserrat text-black-900 text-sm w-auto">
                      {props?.yellowxlarge1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm">
                      {props?.fiftyone1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm w-auto">
                      {props?.pricethree1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm w-auto">
                      {props?.p7986one1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm w-auto">
                      {props?.pricefour1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm w-auto">
                      {props?.pricefive1}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-3 items-center justify-start w-full">
              <Text style={{rotate:"270deg"}} className="border border-light_blue-A700 border-solid font-medium font-montserrat  py-2 rounded text-center text-light_blue-A700_cc text-xs  h-aito w-[4.5rem] ">
                {props?.frame26095720}
              </Text>
              <div className="flex flex-1 flex-col items-start justify-start outline outline-[1px] outline-gray-100 rounded-lg w-full">
                <div className="bg-gray-50 border-b border-gray-100 border-solid flex md:flex-col flex-row gap-6 items-center justify-start px-4 py-3 rounded-tl-lg rounded-tr-lg w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text className="font-medium font-montserrat text-black-900_7f text-sm w-auto">
                        {props?.artworkdetails1}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text className="font-montserrat font-semibold text-light_blue-A700 text-sm underline w-auto">
                          {props?.viewlogo1}
                        </Text>
                      </div>
                      <Img
                        className="h-4 w-4"
                        src="images/img_share_light_blue_a700.svg"
                        alt="share"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text className="font-medium font-montserrat text-black-900_7f text-sm w-auto">
                        {props?.decorationlocatone1}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text className="font-medium font-montserrat text-black-900 text-sm w-auto">
                          {props?.rightchest1}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between px-4 py-3 w-full">
                  <div className="flex flex-col items-center justify-start w-[250px]">
                    <Text className="font-medium font-montserrat text-black-900 text-sm w-auto">
                      {props?.setupcharge1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm w-auto">
                      {props?.one1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm w-auto">
                      {props?.pricesix1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm w-auto">
                      {props?.ten1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm w-auto">
                      {props?.priceseven1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm w-auto">
                      {props?.priceeight1}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-3 items-center justify-start w-full">
            <Text style={{rotate:"270deg"}} className="border border-light_blue-A700 border-solid font-medium font-montserrat px-1 py-2 rounded text-center text-light_blue-A700_cc text-xs  w-[4.5rem] ">
                {props?.frame26095721}
              </Text>
              <div className="flex flex-1 flex-col items-start justify-start outline outline-[1px] outline-gray-100 rounded-lg w-full">
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between px-4 py-3 rounded-lg w-full">
                  <div className="flex flex-col items-center justify-start w-[250px]">
                    <Text className="font-medium font-montserrat text-black-900 text-sm w-auto">
                      {props?.misccharges1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm w-auto">
                      {props?.oneone1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm w-auto">
                      {props?.pricenine1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm w-auto">
                      {props?.tenone1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm w-auto">
                      {props?.priceten1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-20">
                    <Text className="font-montserrat text-black-900 text-sm w-auto">
                      {props?.priceeleven1}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-black-900_1e border-solid border-t flex md:flex-col flex-row gap-3 items-center justify-between pb-2 pt-4 w-full">
            <div className="flex flex-1 flex-col items-end justify-start w-full">
              <Text className="font-montserrat font-semibold text-base text-black-900_cc w-auto">
                {props?.pricetwelve1}
              </Text>
            </div>
            <div className="flex sm:flex-1 flex-col items-end justify-start w-auto sm:w-full">
              <div className="flex sm:flex-col flex-row gap-2 items-start justify-center w-auto sm:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[61px]"
                  leftIcon={
                    <Img
                      className="h-4 mr-1 my-0.5"
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
                    {props?.edit1}
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[96px]"
                  leftIcon={
                    <Img
                      className="h-4 mr-1 my-0.5"
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
                    {props?.duplicate1}
                  </div>
                </Button>
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
                    {props?.viewmore1}
                  </div>
                </Button>
                {!!props?.viewshippingdetails1 ? (
                  <Button
                    className="border border-solid border-teal-600_4c cursor-pointer font-medium font-montserrat min-w-[147px] text-center text-green-900 text-xs"
                    shape="round"
                    color="teal_600_0a"
                    size="md"
                    variant="fill"
                  >
                    {props?.viewshippingdetails1}
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Azmonk31TwentyEightColumnaddtoselection.defaultProps = {
  show: "Show",
  frame2609487: "ITEM# : 2600",
  vansportomegasoOne: "Vansport Omega Solid Mesh Tech Polo Shirt",
  p933144188: "#933144188",
  vendorprimelineOne: "Vendor : Prime Line",
  product: "Product",
  item: "Item",
  qty: "Qty",
  unitsellingpricOne: "Unit Selling Price",
  margin: "Margin",
  sellingprice: "Selling Price",
  amount: "Amount",
  deepmaroonred: "Deep Maroon Red / Small",
  fifty: "50",
  price: "$ 14.99",
  p7986: "79.86 %",
  priceOne: "$ 74.42",
  priceTwo: "$ 3721.20",
  yellowxlarge: "Yellow / X Large",
  fiftyOne: "50",
  priceThree: "$ 14.99",
  p7986one: "79.86 %",
  priceFour: "$ 74.42",
  priceFive: "$ 3721.20",
  frame2609572: "Decoration",
  artworkdetails: "Artwork Details:",
  viewlogo: "View logo",
  decorationlocatOne: "Decoration Location:",
  rightchest: "Right Chest",
  setupcharge: "Setup Charge",
  one: "1",
  priceSix: "$ 200",
  ten: "10 %",
  priceSeven: "$ 222.22",
  priceEight: "$ 222.22",
  frame2609572one: "Others",
  misccharges: "Misc Charges",
  oneOne: "1",
  priceNine: "$ 200",
  tenOne: "10 %",
  priceTen: "$ 222.22",
  priceEleven: "$ 222.22",
  priceTwelve: "Subtotal : $1755.00",
  edit: "Edit",
  duplicate: "Duplicate",
  viewMore: "View more",
  show1: "Show",
  frame26094871: "ITEM# : 2600",
  vansportomegasoone1: "Vansport Omega Solid Mesh Tech Polo Shirt",
  p9331441881: "#933144188",
  vendorprimelineone1: "Vendor : Prime Line",
  product1: "Product",
  item1: "Item",
  qty1: "Qty",
  unitsellingpricone1: "Unit Selling Price",
  margin1: "Margin",
  sellingprice1: "Selling Price",
  amount1: "Amount",
  deepmaroonred1: "Deep Maroon Red / Small",
  fifty1: "50",
  price1: "$ 14.99",
  p79861: "79.86 %",
  priceone1: "$ 74.42",
  pricetwo1: "$ 3721.20",
  yellowxlarge1: "Yellow / X Large",
  fiftyone1: "50",
  pricethree1: "$ 14.99",
  p7986one1: "79.86 %",
  pricefour1: "$ 74.42",
  pricefive1: "$ 3721.20",
  frame26095720: "Decoration",
  frame26095721: "Others",
  artworkdetails1: "Artwork Details:",
  viewlogo1: "View logo",
  decorationlocatone1: "Decoration Location:",
  rightchest1: "Right Chest",
  setupcharge1: "Setup Charge",
  one1: "1",
  pricesix1: "$ 200",
  ten1: "10 %",
  priceseven1: "$ 222.22",
  priceeight1: "$ 222.22",
  frame2609572one1: "Others",
  misccharges1: "Misc Charges",
  oneone1: "1",
  pricenine1: "$ 200",
  tenone1: "10 %",
  priceten1: "$ 222.22",
  priceeleven1: "$ 222.22",
  pricetwelve1: "Subtotal : $1755.00",
  edit1: "Edit",
  duplicate1: "Duplicate",
  viewmore1: "View more",
};

export default Azmonk31TwentyEightColumnaddtoselection;
