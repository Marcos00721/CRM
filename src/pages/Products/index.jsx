import React from "react";
import { Button, Img, Input, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import TopMenu from "components/TopMenu";
import { CloseSVG } from "assets/images";

const Products = () => {
  const [frame53369value, setFrame53369value] = React.useState("");
  const [frame53369onevalue, setFrame53369onevalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
        <Sidebar1 className="!sticky !w-[245px] bg-black-900 flex h-screen md:hidden justify-start outline outline-indigo-50 overflow-auto md:px-5 top-[0]" />

          <div className="flex flex-1 flex-col gap-5 items-center justify-start md:px-5 w-full">
            <TopMenu
              className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1194px] outline outline-gray-100 sm:px-5 px-6 py-5 w-full"
              searchtext={
                <Text className="text-black-900_7f text-sm w-auto">
                  <span className="text-black-900_7f font-montserrat text-left font-normal">Home / </span>
                  <span className="text-black-900 font-montserrat text-left font-semibold">Products</span>
                </Text>
              }
              userimage="images/img_ellipse1262.png"
            />
            <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between  w-full">
                <Text className="font-semibold text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto">
                  All Products
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[138px]"
                  leftIcon={<Img className="h-4 mr-1 my-px" src="images/img_frame_white_a700_16x16.svg" alt="Frame" />}
                  shape="round"
                  color="black_900"
                  size="md"
                  variant="fill"
                >
                  <div className="font-medium text-left text-sm">New Product</div>
                </Button>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start mt-6 outline outline-[0.5px] outline-gray-100 rounded-lg w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between px-4 py-3 w-full">
                  <Input
                    name="frame53369_One"
                    placeholder="Search Products"
                    value={frame53369onevalue}
                    onChange={(e) => setFrame53369onevalue(e)}
                    className="!placeholder:text-black-900_99 !text-black-900_99 font-medium leading-[normal] p-0 text-base text-left w-full"
                    wrapClassName="border border-black-900_1e border-solid flex sm:flex-1 rounded-lg w-[280px] sm:w-full"
                    suffix={
                      frame53369onevalue?.length > 0 ? (
                        <CloseSVG
                          className="mt-auto mb-px cursor-pointer h-5 ml-[35px]"
                          onClick={() => setFrame53369onevalue("")}
                          fillColor="#0b150f99"
                          height={20}
                          width={20}
                          viewBox="0 0 20 20"
                        />
                      ) : (
                        <Img
                          className="mt-auto mb-px cursor-pointer h-5 ml-[35px]"
                          src="images/img_search.svg"
                          alt="search"
                        />
                      )
                    }
                    color="white_A700"
                    size="md"
                    variant="fill"
                  ></Input>
                  <div className="flex flex-row gap-3 items-center justify-start w-auto">
                    <Button
                      className="border border-black-900_1e border-solid cursor-pointer flex items-center justify-center min-w-[92px]"
                      leftIcon={<Img className="h-5 mr-1" src="images/img_settings.svg" alt="settings" />}
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    >
                      <div className="!text-black-900 font-medium text-left text-sm">Filters</div>
                    </Button>
                    <Button
                      className="border border-black-900_1e border-solid flex h-9 items-center justify-center w-9"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    >
                      <Img className="h-5" src="images/img_hugeiconinter.svg" alt="hugeiconinter" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="bg-gray-50 border-gray-100 border-solid border-y flex md:flex-col flex-row gap-10 items-center justify-start pl-4 md:pr-10 pr-12 sm:pr-5 py-3 w-full">
                    <div className="flex flex-row gap-0.5 items-center justify-start w-[140px]">
                      <Text className="font-medium text-black-900_7f text-sm w-auto">Product Image</Text>
                      <Img className="h-4 w-4" src="images/img_arrowup.svg" alt="arrowup_One" />
                    </div>
                    <div className="flex flex-row gap-0.5 items-center justify-start w-[300px]">
                      <Text className="font-medium text-black-900_7f text-sm w-auto">Product Name</Text>
                      <Img className="h-4 w-4" src="images/img_arrowup.svg" alt="arrowup_Two" />
                    </div>
                    <div className="flex flex-row gap-0.5 items-center justify-start w-[140px]">
                      <Text className="font-medium text-black-900_7f text-sm w-auto">Type</Text>
                      <Img className="h-4 w-4" src="images/img_arrowup.svg" alt="arrowup_Three" />
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100px]">
                      <Text className="font-medium text-black-900_7f text-sm w-auto">Actions</Text>
                    </div>
                  </div>
                  <List className="flex flex-col gap-px items-center w-full" orientation="vertical">
                    <div className="flex flex-1 md:flex-col flex-row gap-10 items-center justify-start max-w-[1147px] outline outline-gray-100 pl-4 md:pr-10 pr-12 sm:pr-5 py-3 w-full">
                       <div className="flex flex-col items-start justify-start w-[140px]">
                        <Img
                          className="h-[60px] md:h-auto object-cover rounded w-[60px]"
                          src="images/img_image97.png"
                          alt="imageNinetySeven"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[300px]">
                        <Text className="font-semibold text-black-900 text-sm w-auto">
                          Vansport Omega Solid Mesh Tech Polo Shirt
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[140px]">
                        <div className="flex flex-col items-start justify-start w-[140px]">
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[82px] outline outline-[0.5px] outline-black-900_14 rounded-[13px] text-center text-xs"
                            color="black_900_0a"
                            size="md"
                            variant="fill"
                          >
                            Imported
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-[100px]">
                        <Button
                          className="flex h-9 items-center justify-center  w-9"
                          shape="round"
                          color="black_900_1e"
                          size="md"
                          variant="outline"
                        >
                          <Img className="h-3.5" src="images/img_edit.svg" alt="edit" />
                        </Button>
                        <Button
                          className="flex h-9 items-center justify-center  w-9"
                          shape="round"
                          color="black_900_1e"
                          size="md"
                          variant="outline"
                        >
                          <Img className="h-5" src="images/img_hugeiconinter_red_a700.svg" alt="hugeiconinter" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-10 items-center justify-start max-w-[1147px] outline outline-gray-100 pl-4 md:pr-10 pr-12 sm:pr-5 py-3 w-full">
                       <div className="flex flex-col items-start justify-start w-[140px]">
                        <Img
                          className="h-[60px] md:h-auto object-cover rounded w-[60px]"
                          src="images/img_image97.png"
                          alt="imageNinetySeven"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[300px]">
                        <Text className="font-semibold text-black-900 text-sm w-auto">
                          Vansport Omega Solid Mesh Tech Polo Shirt
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[140px]">
                        <div className="flex flex-col items-start justify-start w-[140px]">
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[82px] outline outline-[0.5px] outline-black-900_14 rounded-[13px] text-center text-xs"
                            color="black_900_0a"
                            size="md"
                            variant="fill"
                          >
                            Imported
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-[100px]">
                        <Button
                          className="flex h-9 items-center justify-center  w-9"
                          shape="round"
                          color="black_900_1e"
                          size="md"
                          variant="outline"
                        >
                          <Img className="h-3.5" src="images/img_edit.svg" alt="edit" />
                        </Button>
                        <Button
                          className="flex h-9 items-center justify-center  w-9"
                          shape="round"
                          color="black_900_1e"
                          size="md"
                          variant="outline"
                        >
                          <Img className="h-5" src="images/img_hugeiconinter_red_a700.svg" alt="hugeiconinter" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-10 items-center justify-start max-w-[1147px] outline outline-gray-100 pl-4 md:pr-10 pr-12 sm:pr-5 py-3 w-full">
                       <div className="flex flex-col items-start justify-start w-[140px]">
                        <Img
                          className="h-[60px] md:h-auto object-cover rounded w-[60px]"
                          src="images/img_image97.png"
                          alt="imageNinetySeven"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[300px]">
                        <Text className="font-semibold text-black-900 text-sm w-auto">
                          Vansport Omega Solid Mesh Tech Polo Shirt
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[140px]">
                        <div className="flex flex-col items-start justify-start w-[140px]">
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[82px] outline outline-[0.5px] outline-black-900_14 rounded-[13px] text-center text-xs"
                            color="black_900_0a"
                            size="md"
                            variant="fill"
                          >
                            Imported
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-[100px]">
                        <Button
                          className="flex h-9 items-center justify-center  w-9"
                          shape="round"
                          color="black_900_1e"
                          size="md"
                          variant="outline"
                        >
                          <Img className="h-3.5" src="images/img_edit.svg" alt="edit" />
                        </Button>
                        <Button
                          className="flex h-9 items-center justify-center  w-9"
                          shape="round"
                          color="black_900_1e"
                          size="md"
                          variant="outline"
                        >
                          <Img className="h-5" src="images/img_hugeiconinter_red_a700.svg" alt="hugeiconinter" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-10 items-center justify-start max-w-[1147px] outline outline-gray-100 pl-4 md:pr-10 pr-12 sm:pr-5 py-3 w-full">
                       <div className="flex flex-col items-start justify-start w-[140px]">
                        <Img
                          className="h-[60px] md:h-auto object-cover rounded w-[60px]"
                          src="images/img_image97.png"
                          alt="imageNinetySeven"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[300px]">
                        <Text className="font-semibold text-black-900 text-sm w-auto">
                          Vansport Omega Solid Mesh Tech Polo Shirt
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[140px]">
                        <div className="flex flex-col items-start justify-start w-[140px]">
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[82px] outline outline-[0.5px] outline-black-900_14 rounded-[13px] text-center text-xs"
                            color="black_900_0a"
                            size="md"
                            variant="fill"
                          >
                            Imported
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-[100px]">
                        <Button
                          className="flex h-9 items-center justify-center  w-9"
                          shape="round"
                          color="black_900_1e"
                          size="md"
                          variant="outline"
                        >
                          <Img className="h-3.5" src="images/img_edit.svg" alt="edit" />
                        </Button>
                        <Button
                          className="flex h-9 items-center justify-center  w-9"
                          shape="round"
                          color="black_900_1e"
                          size="md"
                          variant="outline"
                        >
                          <Img className="h-5" src="images/img_hugeiconinter_red_a700.svg" alt="hugeiconinter" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-10 items-center justify-start max-w-[1147px] outline outline-gray-100 pl-4 md:pr-10 pr-12 sm:pr-5 py-3 w-full">
                       <div className="flex flex-col items-start justify-start w-[140px]">
                        <Img
                          className="h-[60px] md:h-auto object-cover rounded w-[60px]"
                          src="images/img_image97.png"
                          alt="imageNinetySeven"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[300px]">
                        <Text className="font-semibold text-black-900 text-sm w-auto">
                          Vansport Omega Solid Mesh Tech Polo Shirt
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[140px]">
                        <div className="flex flex-col items-start justify-start w-[140px]">
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[82px] outline outline-[0.5px] outline-black-900_14 rounded-[13px] text-center text-xs"
                            color="black_900_0a"
                            size="md"
                            variant="fill"
                          >
                            Imported
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-[100px]">
                        <Button
                          className="flex h-9 items-center justify-center  w-9"
                          shape="round"
                          color="black_900_1e"
                          size="md"
                          variant="outline"
                        >
                          <Img className="h-3.5" src="images/img_edit.svg" alt="edit" />
                        </Button>
                        <Button
                          className="flex h-9 items-center justify-center  w-9"
                          shape="round"
                          color="black_900_1e"
                          size="md"
                          variant="outline"
                        >
                          <Img className="h-5" src="images/img_hugeiconinter_red_a700.svg" alt="hugeiconinter" />
                        </Button>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[37px] items-center justify-between pb-10 mt-10 w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-1/2 md:w-full">
                  <Text className="text-black-900 text-xs w-auto">Rows per page</Text>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end p-[3px] w-[18%]"
                    style={{ backgroundImage: "url('images/img_group2609273.svg')" }}
                  >
                    <div className="flex flex-row gap-[3px] items-center justify-start w-auto">
                      <Text className="text-black-900 text-xs">10</Text>
                      <Img className="h-3 w-3" src="images/img_arrowdown.svg" alt="arrowdown_Three" />
                    </div>
                  </div>
                  <Text className="text-black-900 text-xs w-auto">1 – 10 of 60 items</Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start w-auto">
                  <Img className="h-6 w-6" src="images/img_arrowleft.svg" alt="arrowleft" />
                  <Text className="bg-light_blue-A700 flex h-6 items-center justify-center rounded-md text-center text-sm text-white-A700 w-6">
                    1
                  </Text>
                  <Text className="bg-white-A700 flex h-6 items-center justify-center outline outline-[0.5px] outline-black-900_19 rounded-md text-black-900_99 text-center text-sm w-6">
                    2
                  </Text>
                  <Text className="bg-white-A700 flex h-6 items-center justify-center outline outline-[0.5px] outline-black-900_19 rounded-md text-black-900_99 text-center text-sm w-6">
                    3
                  </Text>
                  <Text className="bg-white-A700 flex h-6 items-center justify-center outline outline-[0.5px] outline-black-900_19 rounded-md text-black-900_99 text-center text-sm w-6">
                    4
                  </Text>
                  <Text className="bg-white-A700 flex h-6 items-center justify-center outline outline-[0.5px] outline-black-900_19 rounded-md text-black-900_99 text-center text-sm w-6">
                    5
                  </Text>
                  <Text className="bg-white-A700 flex h-6 items-center justify-center outline outline-[0.5px] outline-black-900_19 rounded-md text-black-900_99 text-center text-sm w-6">
                    6
                  </Text>
                  <Img className="h-6 w-6" src="images/img_arrowleft.svg" alt="arrowleft_One" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
