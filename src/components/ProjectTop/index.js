import { Button, Img, Input, Switch, Text } from "components";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProjectTop = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start pt-6 sm:px-5 px-6 w-full">
        <div className="bg-gray-50 flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1147px] p-4 rounded-lg w-full">
          <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-20 items-start justify-start w-auto md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
              size="txtMontserratRomanSemiBold24"
            >
              Gifts for Trainees
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[60px] items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Text
                  className="text-base text-black-900_b2 w-auto"
                  size="txtMontserratRegular16"
                >
                  Client Name
                </Text>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtMontserratRomanMedium16"
                >
                  Tiffany Promos
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Text
                  className="text-base text-black-900_b2 w-auto"
                  size="txtMontserratRegular16"
                >
                  Project Id
                </Text>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtMontserratRomanMedium16"
                >
                  #1011100
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Text
                  className="text-base text-black-900_b2 w-auto"
                  size="txtMontserratRegular16"
                >
                  Project Status
                </Text>
                <Input
                  name="frame2609106"
                  placeholder="Created"
                  className="font-medium leading-[normal] p-0 placeholder:text-black-900 text-left text-xs w-full"
                  wrapClassName="flex outline outline-[0.5px] outline-black-900_14 rounded-[13px] w-auto"
                  suffix={
                    <Img
                      className="h-3 ml-[7px] my-px"
                      src="/images/img_arrowdown_black_900_12x12.svg"
                      alt="arrow_down"
                    />
                  }
                  color="black_900_0a"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Text
                className="text-black-900 text-sm w-auto"
                size="txtMontserratRomanMedium14"
              >
                Active
              </Text>
              <div className="flex flex-col h-6 md:h-auto items-start justify-between w-[60px]">
                <Switch
                  onColor="#007fff"
                  offColor="#007fff"
                  onHandleColor="#ffffff"
                  offHandleColor="#ffffff"
                  value={true}
                  className="gap-2.5 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full">
        <div className="w-full overflow-x-scroll">
          <div className="flex md:flex-col flex-row gap-[11px] items-start justify-start px-4 py-5 w-full">
            <div className="font-montserrat h-[80px] relative w-[100%] md:w-full">
              <div className="absolute h-[80px] inset-[0] justify-center m-auto w-[98%] md:w-full">
                <div className="flex flex-row gap-[11px] h-full items-center justify-start m-auto max-w-[1195px] overflow-x-scroll outline outline-indigo-50 pl-4 py-5 pr-12  w-full">
                  <Button
                    onClick={() => navigate("/overview")}
                    className="cursor-pointer flex items-center justify-center min-w-[127px] rounded-md"
                    leftIcon={
                      <Img
                        className="h-[18px] mr-2"
                        src="/images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    shape="round"
                    color="black_900_4c"
                    variant="outline"
                  >
                    <div className="font-medium font-montserrat leading-[normal] text-left text-xs">
                      Monk’s View
                    </div>
                  </Button>
                  <Button
                    onClick={() => navigate("/checklist")}
                    className="cursor-pointer flex items-center justify-center min-w-[108px] outline outline-[0.5px] outline-light_blue-A700 rounded-md"
                    leftIcon={
                      <Img
                        className="h-[18px] mr-2"
                        src="/images/img_frame.svg"
                        alt="Frame"
                      />
                    }
                    shape="round"
                    color="light_blue_A700_0a"
                  >
                    <div className="font-montserrat font-semibold leading-[normal] text-left text-xs">
                      Checklist
                    </div>
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[129px] rounded-md"
                    onClick={() => navigate("/presentation")}
                    leftIcon={
                      <Img
                        className="h-[18px] mr-2"
                        src="/images/img_play.svg"
                        alt="play"
                      />
                    }
                    shape="round"
                    color="black_900_41"
                    variant="outline"
                  >
                    <div className="font-medium font-montserrat leading-[normal] text-left text-xs">
                      Presentation
                    </div>
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[105px] rounded-md"
                    onClick={() => navigate("/estimate")}
                    leftIcon={
                      <Img
                        className="h-[18px] mr-2"
                        src="/images/img_plus.svg"
                        alt="plus"
                      />
                    }
                    shape="round"
                    color="black_900_41"
                    variant="outline"
                  >
                    <div className="font-medium font-montserrat leading-[normal] text-left text-xs">
                      Estimate
                    </div>
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[120px] rounded-md"
                    onClick={() => navigate("/sales-order")}
                    leftIcon={
                      <Img
                        className="h-[18px] mr-2"
                        src="/images/img_checkmark_black_900.svg"
                        alt="checkmark"
                      />
                    }
                    shape="round"
                    color="black_900_41"
                    variant="outline"
                  >
                    <div className="font-medium font-montserrat leading-[normal] text-left text-xs">
                      Sales Order
                    </div>
                  </Button>
                  {/* <Button
                    className="cursor-pointer flex items-center justify-center min-w-[151px] rounded-md"
                    leftIcon={
                      <Img
                        className="h-[18px] mr-2"
                        src="/images/img_music.svg"
                        alt="music"
                      />
                    }
                    shape="round"
                    color="black_900_41"
                    variant="outline"
                  >
                    <div className="font-medium font-montserrat leading-[normal] text-left text-xs">
                      Shipping Details
                    </div>
                  </Button> */}
                  <Button
                    onClick={() => navigate("/purchase-order")}
                    className="cursor-pointer flex items-center justify-center min-w-[146px] rounded-md"
                    leftIcon={
                      <Img
                        className="h-[18px] mr-2"
                        src="/images/img_mail.svg"
                        alt="mail"
                      />
                    }
                    shape="round"
                    color="black_900_41"
                    variant="outline"
                  >
                    <div className="font-medium font-montserrat leading-[normal] text-left text-xs">
                      Purchase Order
                    </div>
                  </Button>
                  <Button
                    onClick={() => navigate("/invoices")}
                    className="cursor-pointer flex h-max inset-y-[0] items-center justify-center min-w-[100px] my-auto right-[0] rounded-md"
                    leftIcon={
                      <Img
                        className="h-[18px] mr-2 right-[1%] absolute"
                        src="/images/img_frame_black_900_18x18.svg"
                        alt="Frame"
                      />
                    }
                    shape="round"
                    color="black_900_41"
                    variant="outline"
                  >
                    <div className="font-medium leading-[normal] text-left text-xs">
                      Invoices
                    </div>
                  </Button>
                  <Button
                    onClick={() => navigate("/bills")}
                    className="cursor-pointer flex items-center justify-center min-w-[130px] rounded-md"
                    leftIcon={
                      <Img
                        className="h-[18px] mr-2"
                        src="/images/img_hugeicon_finance_and_payment_outline_bill.svg"
                        alt="Huge-icon/finance and payment/outline/bill"
                      />
                    }
                    shape="round"
                    color="black_900_41"
                    variant="outline"
                  >
                    <div className="font-medium font-montserrat leading-[normal] text-left text-xs">
                      Supplier Bills
                    </div>
                  </Button>
                  <Button
                    onClick={() => navigate("/commisions")}
                    className="cursor-pointer flex items-center justify-center min-w-[127px] rounded-md"
                    leftIcon={
                      <Img
                        className="h-[18px] mr-2"
                        src="/images/img_hugeicon_finance_and_payment_outline_moneydollar.svg"
                        alt="Huge-icon/finance and payment/outline/money-dollar"
                      />
                    }
                    shape="round"
                    color="black_900_41"
                    variant="outline"
                  >
                    <div className="font-inter font-medium leading-[normal] text-left text-xs">
                      Commissions
                    </div>
                  </Button>
                
                  <Button
                    onClick={() => navigate("/feedback")}
                    className="cursor-pointer flex items-center justify-center min-w-[106px] rounded-md"
                    leftIcon={
                      <Img
                        className="h-[18px] mr-2"
                        src="/images/img_hugeicon_interface_outline_smilerectangle.svg"
                        alt="Huge-icon/interface/outline/smile-rectangle"
                      />
                    }
                    shape="round"
                    color="black_900_41"
                    variant="outline"
                  >
                    <div className="font-inter font-medium leading-[normal] text-left text-xs">
                      Feedback
                    </div>
                  </Button>
                </div>
                <Button
                  className="absolute border border-indigo-50 border-solid flex h-10 inset-y-[0] items-center justify-center my-auto right-[2%] shadow-bs w-10"
                  shape="circle"
                  size="md"
                >
                  <Img
                    className="h-4"
                    src="/images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectTop;
