import { Modal } from "@mui/material";
import { Button, Img, Text } from "components";
import ProjectTop from "components/ProjectTop";
import Sidebar1 from "components/Sidebar1";
import React from "react";

const style = {
  position: "absolute",
  top: "8%",
  left: "25%",
};

const SearchPopup = () => {
  return (
    <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto w-full">
      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
        <Sidebar1 className="!sticky !w-[245px] bg-black-900 flex h-screen md:hidden justify-start outline outline-indigo-50 overflow-auto md:px-5 top-[0]" />
        <div className="flex flex-1 flex-col font-inter items-start justify-start overflow-auto md:px-5 w-full">
          <div className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1194px] outline outline-indigo-50 sm:px-5 px-6 py-5 w-full">
            <div className="flex sm:flex-1 flex-row gap-4 items-center justify-start w-[26%] sm:w-full">
              <Button
                className="flex h-8 items-center justify-center w-8"
                shape="round"
                color="indigo_50"
                variant="outline"
              >
                <Img
                  className="h-[17px]"
                  src="/images/img_frame_black_900_32x32.svg"
                  alt="frame_Four"
                />
              </Button>
              <Text
                className="text-gray-900_b2 text-sm"
                size="txtInterRegular14"
              >
                <span className="text-black-900_7f font-montserrat text-left font-normal">
                  Home / Projects /{" "}
                </span>
                <span className="text-black-900 font-montserrat text-left font-semibold">
                  Gift for Trainees
                </span>
              </Text>
            </div>
            <div className="flex flex-row font-montserrat gap-5 items-center justify-start w-auto">
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
              >
                <div className="font-medium text-left text-sm">Quick Add</div>
              </Button>
              <Button
                className="flex h-10 items-center justify-center w-10"
                shape="circle"
                color="indigo_50"
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
          <ProjectTop />
          <Modal
            open={true}
            onClose={() => console.log("")}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
              <div style={style} className="w-[892px] h-[693px] p-6 bg-white rounded-lg  flex-col justify-start items-start gap-5 inline-flex bg-white-A700 outline-none ">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-950 text-lg font-semibold font-['Montserrat']">
                    Add Product
                  </div>
                  <div className="justify-start items-center gap-2 flex">
                    <div className="px-3 py-2 bg-white rounded-lg justify-center items-center gap-1 flex">
                      <div className="text-sky-500 text-sm font-medium font-['Montserrat'] underline leading-snug">
                        Add Custom Product
                      </div>
                    </div>
                    <div className="px-3 py-2 bg-white rounded-lg border border-neutral-950 border-opacity-10 justify-center items-center gap-1 flex">
                      <div className="w-4 h-4 relative" />
                      <div className="text-neutral-950 text-sm font-medium font-['Montserrat'] leading-snug">
                        New Product
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[236px] p-4 bg-stone-50 rounded-lg flex-col justify-center items-start gap-4 flex">
                  <div className="self-stretch px-3 py-3.5 bg-white rounded-lg border border-neutral-950 border-opacity-10 justify-between items-center inline-flex">
                    <div className="text-neutral-950 text-opacity-40 text-base font-medium font-['Montserrat']">
                      Search by product name, item number or something...
                    </div>
                    <div className="w-5 h-5 relative opacity-70" />
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-neutral-950 text-opacity-60 text-sm font-normal font-['Montserrat']">
                        Search via
                      </div>
                      <div className="justify-start items-start gap-6 inline-flex">
                        <div className="justify-start items-center gap-2 flex">
                          <div className="w-4 h-4 relative">
                            <div className="w-4 h-4 left-0 top-0 absolute rounded-full border border-sky-500" />
                            <div className="w-2 h-2 left-[4px] top-[4px] absolute bg-sky-500 rounded-full" />
                          </div>
                          <div className="text-neutral-950 text-lg font-medium font-['Montserrat']">
                            SAGE
                          </div>
                        </div>
                        <div className="justify-start items-center gap-2 flex">
                          <div className="w-4 h-4 relative">
                            <div className="w-4 h-4 left-0 top-0 absolute rounded-full border border-neutral-950 border-opacity-40" />
                            <div className="w-2 h-2 left-[4px] top-[4px] absolute bg-neutral-950 bg-opacity-0 rounded-full" />
                          </div>
                          <div className="text-neutral-950 text-lg font-medium font-['Montserrat']">
                            ESP
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-neutral-950 text-opacity-60 text-sm font-normal font-['Montserrat']">
                        Result must be
                      </div>
                      <div className="justify-start items-center gap-2 inline-flex">
                        <div className="w-5 h-5 relative">
                          <div className="w-5 h-5 left-0 top-0 absolute bg-neutral-950 rounded-full" />
                          <div className="w-3 h-3 left-[4px] top-[4px] absolute" />
                        </div>
                        <div className="text-neutral-950 text-lg font-medium font-['Montserrat']">
                          Exact Match
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-4 inline-flex">
                    <div className="grow shrink basis-0 self-stretch p-3 bg-white rounded-lg border border-neutral-950 border-opacity-20 justify-between items-center flex">
                      <div className="justify-start items-center gap-2 flex">
                        <div className="text-neutral-950 text-opacity-50 text-sm font-medium font-['Montserrat']">
                          Enter Item No.
                        </div>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 self-stretch p-3 bg-white rounded-lg border border-neutral-950 border-opacity-20 justify-between items-center flex">
                      <div className="justify-start items-center gap-2 flex">
                        <div className="text-neutral-950 text-opacity-50 text-sm font-medium font-['Montserrat']">
                          Select Supplier
                        </div>
                      </div>
                      <div className="w-4 h-4 relative" />
                    </div>
                    <div className="grow shrink basis-0 self-stretch p-3 bg-white rounded-lg border border-neutral-950 border-opacity-20 justify-between items-center flex">
                      <div className="justify-start items-center gap-2 flex">
                        <div className="text-neutral-950 text-opacity-50 text-sm font-medium font-['Montserrat']">
                          Select Page Length
                        </div>
                      </div>
                      <div className="w-4 h-4 relative" />
                    </div>
                    <div className="grow shrink basis-0 self-stretch px-3 py-2 bg-sky-500 rounded-lg justify-center items-center gap-1 flex">
                      <div className="w-4 h-4 relative" />
                      <div className="text-white text-sm font-medium font-['Montserrat'] leading-snug">
                        Show Results
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-center items-center gap-2 inline-flex">
                    <div className="w-4 h-4 relative" />
                    <div className="text-sky-500 text-opacity-80 text-base font-medium font-['Montserrat']">
                      Show more filters
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[331px] p-12 flex-col justify-start items-center gap-3 flex">
                  <div className="w-[225.20px] h-[119px] relative">
                    <div className="w-[40.95px] h-[40.95px] left-[-0px] top-[40.95px] absolute opacity-5">
                      <img
                        alt=""
                        className="w-[30.71px] h-[34.05px] left-[5.12px] top-[3.41px] absolute"
                        src="https://via.placeholder.com/31x34"
                      />
                    </div>
                    <div className="w-[40.95px] h-[40.95px] left-[23.03px] top-0 absolute opacity-5">
                      <img
                        alt=""
                        className="w-[30.71px] h-[34.05px] left-[5.12px] top-[3.41px] absolute"
                        src="https://via.placeholder.com/31x34"
                      />
                    </div>
                    <div className="w-[40.95px] h-[40.95px] left-[23.03px] top-[78.05px] absolute opacity-5">
                      <img
                        alt=""
                        className="w-[30.71px] h-[34.05px] left-[5.12px] top-[3.41px] absolute"
                        src="https://via.placeholder.com/31x34"
                      />
                    </div>
                    <div className="w-[40.95px] h-[40.95px] left-[46.06px] top-[40.95px] absolute opacity-5">
                      <img
                        alt=""
                        className="w-[30.71px] h-[34.05px] left-[5.12px] top-[3.41px] absolute"
                        src="https://via.placeholder.com/31x34"
                      />
                    </div>
                    <div className="w-[40.95px] h-[40.95px] left-[69.10px] top-0 absolute opacity-5">
                      <img
                        alt=""
                        className="w-[30.71px] h-[34.05px] left-[5.12px] top-[3.41px] absolute"
                        src="https://via.placeholder.com/31x34"
                      />
                    </div>
                    <div className="w-[40.95px] h-[40.95px] left-[69.10px] top-[78.05px] absolute opacity-5">
                      <img
                        alt=""
                        className="w-[30.71px] h-[34.05px] left-[5.12px] top-[3.41px] absolute"
                        src="https://via.placeholder.com/31x34"
                      />
                    </div>
                    <div className="w-[40.95px] h-[40.95px] left-[92.13px] top-[40.95px] absolute opacity-90">
                      <img
                        alt=""
                        className="w-[30.71px] h-[34.05px] left-[5.12px] top-[3.41px] absolute"
                        src="https://via.placeholder.com/31x34"
                      />
                    </div>
                    <div className="w-[40.95px] h-[40.95px] left-[115.16px] top-0 absolute opacity-5">
                      <img
                        alt=""
                        className="w-[30.71px] h-[34.05px] left-[5.12px] top-[3.41px] absolute"
                        src="https://via.placeholder.com/31x34"
                      />
                    </div>
                    <div className="w-[40.95px] h-[40.95px] left-[115.16px] top-[78.05px] absolute opacity-5">
                      <img
                        alt=""
                        className="w-[30.71px] h-[34.05px] left-[5.12px] top-[3.41px] absolute"
                        src="https://via.placeholder.com/31x34"
                      />
                    </div>
                    <div className="w-[40.95px] h-[40.95px] left-[138.19px] top-[40.95px] absolute opacity-5">
                      <img
                        alt=""
                        className="w-[30.71px] h-[34.05px] left-[5.12px] top-[3.41px] absolute"
                        src="https://via.placeholder.com/31x34"
                      />
                    </div>
                    <div className="w-[40.95px] h-[40.95px] left-[184.26px] top-[40.95px] absolute opacity-5">
                      <img
                        alt=""
                        className="w-[30.71px] h-[34.05px] left-[5.12px] top-[3.41px] absolute"
                        src="https://via.placeholder.com/31x34"
                      />
                    </div>
                    <div className="w-[40.95px] h-[40.95px] left-[161.23px] top-0 absolute opacity-5">
                      <img
                        alt=""
                        className="w-[30.71px] h-[34.05px] left-[5.12px] top-[3.41px] absolute"
                        src="https://via.placeholder.com/31x34"
                      />
                    </div>
                    <div className="w-[40.95px] h-[40.95px] left-[161.23px] top-[78.05px] absolute opacity-5">
                      <img
                        alt=""
                        className="w-[30.71px] h-[34.05px] left-[5.12px] top-[3.41px] absolute"
                        src="https://via.placeholder.com/31x34"
                      />
                    </div>
                    <div className="w-[83.17px] h-[83.17px] left-[76.77px] top-[23.03px] absolute">
                      <img
                        alt=""
                        className="w-[30.71px] h-[34.05px] left-[5.12px] top-[3.41px] absolute"
                        src="/images/empty_frame.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-col justify-start items-center gap-1 flex">
                    <div className="text-center text-neutral-950 text-opacity-70 text-xl font-semibold font-['Montserrat'] leading-relaxed">
                      What are
                      <br />
                      you searching for?
                    </div>
                    <div className="w-[304px] text-center text-neutral-950 text-opacity-40 text-base font-normal font-['Montserrat'] leading-normal">
                      Search for products by their name, item number or the way
                      you want.
                    </div>
                  </div>
                </div>
              </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
