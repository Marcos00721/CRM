import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  Input,
  Radio,
  ReactTable,
  Switch,
  Text,
} from "components";

import ProjectTop from "components/ProjectTop";
import Sidebar1 from "components/Sidebar1";
import { CloseSVG } from "assets/images";

const Bills = () => {
  const table1Data = React.useRef([
    {
      rowarrowup: "PO1005A",
      rowvendor: "Gold Telecom",
      rowpototal: "1100.00",
      rowvendorbill: "+ Add Bill",
      rowpostage: "/images/img_arrowdown_black_900.svg",
      rowtotal: "/images/img_hugeiconinter_black_900.svg",
    },
    {
      rowarrowup: "PO1005A",
      rowvendor: "Gold Telecom",
      rowpototal: "1100.00",
      rowvendorbill: "+ Add Bill",
      rowpostage: "/images/img_arrowdown_black_900.svg",
      rowtotal: "/images/img_hugeiconinter_black_900.svg",
    },
    {
      rowarrowup: "PO1005A",
      rowvendor: "Gold Telecom",
      rowpototal: "1100.00",
      rowvendorbill: "+ Add Bill",
      rowpostage: "/images/img_arrowdown_black_900.svg",
      rowtotal: "/images/img_hugeiconinter_black_900.svg",
    },
    {
      rowarrowup: "PO1005A",
      rowvendor: "Gold Telecom",
      rowpototal: "1100.00",
      rowvendorbill: "+ Add Bill",
      rowpostage: "/images/img_arrowdown_black_900.svg",
      rowtotal: "/images/img_hugeiconinter_black_900.svg",
    },
  ]);
  const navigate = useNavigate();
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("rowarrowup", {
        cell: (info) => (
          <Text
            className="pb-3.5 pl-4 pt-[21px] text-black-900 text-sm"
            size="txtMontserratRomanSemiBold14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div
            className="common-pointer flex flex-row items-center justify-start min-w-[251px] p-[11px]"
            onClick={info.header.column.getToggleSortingHandler()}
          >
            <Text
              className="text-black-900_7f text-sm w-auto"
              size="txtMontserratRomanMedium14Black9007f"
            >
              P0 #
            </Text>
            <Img
              className="h-4 w-4"
              src="/images/img_arrowup.svg"
              alt="arrowup"
            />
          </div>
        ),
      }),
      table1ColumnHelper.accessor("rowvendor", {
        cell: (info) => (
          <Text
            className="pb-3.5 pt-[21px] text-black-900 text-sm"
            size="txtMontserratRegular14Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div
            className="common-pointer flex flex-row items-center justify-start min-w-[175px] pr-[11px] py-[11px]"
            onClick={info.header.column.getToggleSortingHandler()}
          >
            <Text
              className="text-black-900_7f text-sm w-auto"
              size="txtMontserratRomanMedium14Black9007f"
            >
              Vendor
            </Text>
            <Img
              className="h-4 w-4"
              src="/images/img_arrowup.svg"
              alt="arrowup_One"
            />
          </div>
        ),
      }),
      table1ColumnHelper.accessor("rowpototal", {
        cell: (info) => (
          <Text
            className="pb-3.5 pt-[21px] text-black-900 text-sm"
            size="txtMontserratRegular14Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div
            className="common-pointer flex flex-row items-center justify-start min-w-[135px] pr-[11px] py-[11px]"
            onClick={info.header.column.getToggleSortingHandler()}
          >
            <Text
              className="text-black-900_7f text-sm w-auto"
              size="txtMontserratRomanMedium14Black9007f"
            >
              PO Total
            </Text>
            <Img
              className="h-4 w-4"
              src="/images/img_arrowup.svg"
              alt="arrowup_Two"
            />
          </div>
        ),
      }),
      table1ColumnHelper.accessor("rowvendorbill", {
        cell: (info) => (
          <Text
            className="pb-3.5 pt-[22px] text-black-900 text-sm underline"
            size="txtMontserratRomanMedium14Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div
            className="common-pointer flex flex-row items-center justify-start min-w-[135px] pr-[11px] py-[11px]"
            onClick={info.header.column.getToggleSortingHandler()}
          >
            <Text
              className="text-black-900_7f text-sm w-auto"
              size="txtMontserratRomanMedium14Black9007f"
            >
              Vendor Bill
            </Text>
            <Img
              className="h-4 w-4"
              src="/images/img_arrowup.svg"
              alt="arrowup_Three"
            />
          </div>
        ),
      }),
      table1ColumnHelper.accessor("rowpostage", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-2.5 py-2.5">
            <div className="bg-black-900_0a flex flex-row gap-1.5 items-center justify-start mr-[58px] mt-1.5 outline outline-[0.5px] outline-black-900_14 px-3 py-1.5 rounded-[13px] w-auto">
              <Radio
                value="Created"
                className="font-medium leading-[normal] text-black-900 text-left text-xs"
                inputClassName="border border-black-900_33 border-solid h-3 mr-[5px] rounded-md w-3"
                checked={false}
                name="created5"
                label="Created"
                id="Created"
              ></Radio>
              <Img className="h-3 w-3" alt="arrowdown" src={info?.getValue()} />
            </div>
          </div>
        ),
        header: (info) => (
          <div
            className="common-pointer flex flex-row items-center justify-start min-w-[200px] pr-2.5 py-2.5"
            onClick={info.header.column.getToggleSortingHandler()}
          >
            <Text
              className="mt-[3px] text-black-900_7f text-sm w-auto"
              size="txtMontserratRomanMedium14Black9007f"
            >
              PO Stage
            </Text>
            <Img
              className="h-4 w-4"
              src="/images/img_arrowup.svg"
              alt="arrowup_Four"
            />
          </div>
        ),
      }),
      table1ColumnHelper.accessor("rowtotal", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-between pr-1.5 py-1.5">
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtMontserratRegular14Black900"
            >
              0.00
            </Text>
            <Button
              className="flex h-9 items-center justify-center mr-[22px] mt-1.5 rotate-[90deg] w-9"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            >
              <Img
                className="h-5"
                alt="hugeiconinter_One"
                src={info?.getValue()}
              />
            </Button>
          </div>
        ),
        header: (info) => (
          <div
            className="common-pointer flex flex-row items-center justify-between min-w-[171px] pr-[11px] py-[11px]"
            onClick={info.header.column.getToggleSortingHandler()}
          >
            <Text
              className="text-black-900_7f text-sm w-auto"
              size="txtMontserratRomanMedium14Black9007f"
            >
              Total
            </Text>
            <Img
              className="h-4 w-4"
              src="/images/img_arrowup.svg"
              alt="arrowup_Five"
            />
          </div>
        ),
      }),
    ];
  }, []);

  const [frame53369value, setFrame53369value] = React.useState("");

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

          <div className="bg-white-A700 flex font-montserrat mx-auto w-full">
            <div className="flex flex-col h-full items-start justify-start mb-[133px] ml-auto mr-6 mt-auto px-6 w-full ">
              <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1147px] w-full">
                <Text
                  className="text-black-900 text-lg w-auto"
                  size="txtMontserratRomanSemiBold18Black900"
                >
                  Supplier Bills
                </Text>
                <div className="flex flex-col items-center justify-start w-auto">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[100px]"
                    leftIcon={
                      <Img
                        className="h-4 mr-[3px] my-px"
                        src="/images/img_frame_white_a700_16x16.svg"
                        alt="Frame"
                      />
                    }
                    shape="round"
                    color="black_900"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-medium text-left text-sm">
                      Add Bill
                    </div>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start mt-8 outline outline-[0.5px] outline-indigo-50 rounded-lg w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1147px] px-4 py-3 w-full">
                  <Input
                    name="frame53369"
                    placeholder="Search in bills..."
                    value={frame53369value}
                    onChange={(e) => setFrame53369value(e)}
                    className="!placeholder:text-black-900_99 !text-black-900_99 font-medium leading-[normal] p-0 text-base text-left w-full"
                    wrapClassName="border border-black-900_1e border-solid flex sm:flex-1 rounded-lg w-[280px] sm:w-full"
                    suffix={
                      frame53369value?.length > 0 ? (
                        <CloseSVG
                          className="mt-auto mb-px cursor-pointer h-5 ml-[35px]"
                          onClick={() => setFrame53369value("")}
                          fillColor="#0b150f99"
                          height={20}
                          width={20}
                          viewBox="0 0 20 20"
                        />
                      ) : (
                        <Img
                          className="mt-auto mb-px cursor-pointer h-5 ml-[35px]"
                          src="/images/img_search.svg"
                          alt="search"
                        />
                      )
                    }
                    color="white_A700"
                    variant="fill"
                  ></Input>
                  <div className="flex flex-row gap-3 items-center justify-start w-auto">
                    <Button
                      className="border border-black-900_1e border-solid cursor-pointer flex items-center justify-center min-w-[92px]"
                      leftIcon={
                        <Img
                          className="h-5 mr-1"
                          src="/images/img_settings.svg"
                          alt="settings"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    >
                      <div className="!text-black-900 font-medium text-left text-sm">
                        Filters
                      </div>
                    </Button>
                    <Button
                      className="border border-black-900_1e border-solid flex h-9 items-center justify-center w-9"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-5"
                        src="/images/img_hugeiconinter.svg"
                        alt="hugeiconinter"
                      />
                    </Button>
                  </div>
                </div>
                <div className="overflow-auto w-full">
                  <ReactTable
                    enableSorting
                    columns={table1Columns}
                    data={table1Data.current}
                    rowClass={""}
                    headerClass="bg-gray-50 border border-indigo-50"
                  />
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[37px] items-center justify-between max-w-[1147px] mt-8 w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-1/2">
                  <Text
                    className="text-black-900 text-xs "
                    size="txtMontserratRegular12"
                  >
                    Rows per page
                  </Text>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[22px] items-center justify-end p-[3px] w-[18%]"
                    style={{
                      backgroundImage: "url('image/img_group2609273.svg')",
                    }}
                  >
                    <div className="flex flex-row gap-[3px] items-center justify-start ">
                      <Text
                        className="text-black-900 text-xs"
                        size="txtMontserratRegular12"
                      >
                        10
                      </Text>
                      <Img
                        className="h-3 w-3"
                        src="/images/img_arrowdown_black_900_12x12.svg"
                        alt="arrowdown_Three"
                      />
                    </div>
                  </div>
                  <Text
                    className="text-black-900 text-xs w-auto"
                    size="txtMontserratRegular12"
                  >
                    1 – 10 of 60 items
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="/images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                  <Text
                    className="bg-light_blue-A700 flex h-6 items-center justify-center rounded-md text-center text-sm text-white-A700 w-6"
                    size="txtMontserratRegular14WhiteA700"
                  >
                    1
                  </Text>
                  <Text
                    className="bg-white-A700 flex h-6 items-center justify-center outline outline-[0.5px] outline-black-900_19 rounded-md text-black-900_99 text-center text-sm w-6"
                    size="txtMontserratRegular14Black90099"
                  >
                    2
                  </Text>
                  <Text
                    className="bg-white-A700 flex h-6 items-center justify-center outline outline-[0.5px] outline-black-900_19 rounded-md text-black-900_99 text-center text-sm w-6"
                    size="txtMontserratRegular14Black90099"
                  >
                    3
                  </Text>
                  <Text
                    className="bg-white-A700 flex h-6 items-center justify-center outline outline-[0.5px] outline-black-900_19 rounded-md text-black-900_99 text-center text-sm w-6"
                    size="txtMontserratRegular14Black90099"
                  >
                    4
                  </Text>
                  <Text
                    className="bg-white-A700 flex h-6 items-center justify-center outline outline-[0.5px] outline-black-900_19 rounded-md text-black-900_99 text-center text-sm w-6"
                    size="txtMontserratRegular14Black90099"
                  >
                    5
                  </Text>
                  <Text
                    className="bg-white-A700 flex h-6 items-center justify-center outline outline-[0.5px] outline-black-900_19 rounded-md text-black-900_99 text-center text-sm w-6"
                    size="txtMontserratRegular14Black90099"
                  >
                    6
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="/images/img_arrowleft.svg"
                    alt="arrowleft_One"
                  />
                </div>
              </div>
              <div className="bg-gray-50 flex flex-col gap-4 items-start justify-start mt-6 outline outline-[0.5px] outline-black-900_14 p-3 rounded-lg w-auto min-w-[30%]">
                <div className="flex flex-row  items-start justify-between w-full">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtMontserratRomanSemiBold16"
                  >
                    Submit (all invoices):
                  </Text>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtMontserratRegular16Black900"
                  >
                    $4627.15
                  </Text>
                </div>
                <div className="flex flex-row  items-start justify-between w-full">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtMontserratRomanSemiBold16"
                  >
                    Billed Margin Amount:
                  </Text>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtMontserratRegular16Black900"
                  >
                    $4627.15
                  </Text>
                </div>
                <div className="flex flex-row  items-start justify-between w-full">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtMontserratRomanSemiBold16"
                  >
                    Billed Margin:
                  </Text>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtMontserratRegular16Black900"
                  >
                    0.00%
                  </Text>
                </div>
                <div className="flex flex-row  items-start justify-between w-full">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtMontserratRomanSemiBold16"
                  >
                    Booked Margin:
                  </Text>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtMontserratRegular16Black900"
                  >
                    39246.51%
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bills;
