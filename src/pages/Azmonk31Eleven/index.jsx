import React from "react";

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
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const Azmonk31ElevenPage = () => {

  const tableData = React.useRef([
    {
      rowprojectdetail: "100124",
      rowclient: "Airtel Pvt. Ltd.",
      rowtype: "Telecom",
      rowclientowner: "Jenny Wilson",
      rowstatus: "/images/img_arrowdown_black_900_12x12.svg",
      rowactive: "/images/img_hugeiconinter_black_900.svg",
    },
    {
      rowprojectdetail: "100124",
      rowclient: "Airtel Pvt. Ltd.",
      rowtype: "Telecom",
      rowclientowner: "Jenny Wilson",
      rowstatus: "/images/img_arrowdown_black_900_12x12.svg",
      rowactive: "/images/img_hugeiconinter_black_900.svg",
    },
    {
      rowprojectdetail: "100124",
      rowclient: "Airtel Pvt. Ltd.",
      rowtype: "Telecom",
      rowclientowner: "Jenny Wilson",
      rowstatus: "/images/img_arrowdown_black_900_12x12.svg",
      rowactive: "/images/img_hugeiconinter_black_900.svg",
    },
    {
      rowprojectdetail: "100124",
      rowclient: "Airtel Pvt. Ltd.",
      rowtype: "Telecom",
      rowclientowner: "Jenny Wilson",
      rowstatus: "/images/img_arrowdown_black_900_12x12.svg",
      rowactive: "/images/img_hugeiconinter_black_900.svg",
    },
    {
      rowprojectdetail: "100124",
      rowclient: "Airtel Pvt. Ltd.",
      rowtype: "Telecom",
      rowclientowner: "Jenny Wilson",
      rowstatus: "/images/img_arrowdown_black_900_12x12.svg",
      rowactive: "/images/img_hugeiconinter_black_900.svg",
    },
    {
      rowprojectdetail: "100124",
      rowclient: "Airtel Pvt. Ltd.",
      rowtype: "Telecom",
      rowclientowner: "Jenny Wilson",
      rowstatus: "/images/img_arrowdown_black_900_12x12.svg",
      rowactive: "/images/img_hugeiconinter_black_900.svg",
    },
    {
      rowprojectdetail: "100124",
      rowclient: "Airtel Pvt. Ltd.",
      rowtype: "Telecom",
      rowclientowner: "Jenny Wilson",
      rowstatus: "/images/img_arrowdown_black_900_12x12.svg",
      rowactive: "/images/img_hugeiconinter_black_900.svg",
    },
    {
      rowprojectdetail: "100124",
      rowclient: "Airtel Pvt. Ltd.",
      rowtype: "Telecom",
      rowclientowner: "Jenny Wilson",
      rowstatus: "/images/img_arrowdown_black_900_12x12.svg",
      rowactive: "/images/img_hugeiconinter_black_900.svg",
    },
  ]);

  const navigate = useNavigate();
  
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowprojectdetail", {
        cell: (info) => (
          <div
            className="common-pointer flex flex-col gap-1 items-start justify-start p-1"
            onClick={() => navigate("/overview")}
          >
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtMontserratRomanSemiBold14Black900"
            >
              Gift for trainees
            </Text>
            <Text
              className="text-black-900_b2 text-sm w-auto"
              size="txtMontserratRegular14Black900b2"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div
            className="common-pointer flex flex-row items-center justify-start min-w-[251px] p-2.5"
            onClick={info.header.column.getToggleSortingHandler()}
          >
            <Text
              className="mt-0.5 text-black-900_7f text-sm w-auto"
              size="txtMontserratRomanMedium14Black9007f"
            >
              Project Detail
            </Text>
            <Img
              className="h-4 w-4"
              src="/images/img_arrowup.svg"
              alt="arrowup"
            />
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowclient", {
        cell: (info) => (
          <Text
            className="pb-4 pt-[22px] text-black-900 text-sm"
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
              Client
            </Text>
            <Img
              className="h-4 w-4"
              src="/images/img_arrowup.svg"
              alt="arrowup_One"
            />
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowtype", {
        cell: (info) => (
          <Text
            className="pb-4 pt-[22px] text-black-900 text-sm"
            size="txtMontserratRegular14Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div
            className="common-pointer flex flex-row items-center justify-start min-w-[135px] pr-2.5 py-2.5"
            onClick={info.header.column.getToggleSortingHandler()}
          >
            <Text
              className="mt-[3px] text-black-900_7f text-sm w-auto"
              size="txtMontserratRomanMedium14Black9007f"
            >
              Type
            </Text>
            <Img
              className="h-4 w-4"
              src="/images/img_arrowup.svg"
              alt="arrowup_Two"
            />
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowclientowner", {
        cell: (info) => (
          <div className="flex flex-row gap-1.5 items-center justify-start">
            <Text
              className="bg-light_blue-A700_19 flex h-7 items-center justify-center rounded-[50%] text-[10px] text-center text-light_blue-A700 w-7"
              size="txtMontserratRomanSemiBold10"
            >
              JW
            </Text>
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtMontserratRegular14Black900"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div
            className="common-pointer flex flex-row items-center justify-start min-w-[235px] pr-[11px] py-[11px]"
            onClick={info.header.column.getToggleSortingHandler()}
          >
            <Text
              className="text-black-900_7f text-sm w-auto"
              size="txtMontserratRomanMedium14Black9007f"
            >
              Client Owner
            </Text>
            <Img
              className="h-4 w-4"
              src="/images/img_arrowup.svg"
              alt="arrowup_Three"
            />
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowstatus", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-3 py-3  w-full">
            <div className="bg-black-900_0a flex flex-row gap-1.5 items-center justify-start mr-14 mt-[5px] outline outline-[0.5px] outline-black-900_14 px-3 py-1.5 rounded-[13px]  w-auto">
              <Radio
                value="Created"
                className="font-medium leading-[normal] text-black-900 text-left text-xs flex"
                inputClassName="border border-black-900_33 border-solid h-3 mr-[5px] rounded-md w-3"
                checked={false}
                name="created"
                label="Created"
                id="Created"
              ></Radio>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>chevron-down</title>
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
              {/* <Img className="h-3 w-3" alt="arrowdown" src="info?.getValue()" /> */}
            </div>
          </div>
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
              Status
            </Text>

            <Img
              className="h-4 w-4"
              src="/images/img_arrowup.svg"
              alt="arrowup_Four"
            />
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowactive", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-between pr-[7px] py-[7px]">
            <Switch
              onColor="#009e60"
              offColor="#009e60"
              onHandleColor="#ffffff"
              offHandleColor="#ffffff"
              value={true}
              className="gap-2.5 w-auto"
            />
            <Button
              className="flex h-9 items-center justify-center mr-5 mt-[5px] rotate-[90deg] w-9"
              shape="round"
            >
              {/* <Img
                className="h-5"
                alt="hugeiconinter_One"
                src="info?.getValue()"
              /> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>dots-horizontal</title>
                <path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
              </svg>
            </Button>
          </div>
        ),
        header: (info) => (
          <div
            className="common-pointer flex flex-row items-center justify-start min-w-[171px] pr-[11px] py-[11px]"
            onClick={info.header.column.getToggleSortingHandler()}
          >
            <Text
              className="text-black-900_7f text-sm w-auto"
              size="txtMontserratRomanMedium14Black9007f"
            >
              Active
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
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[245px] bg-black-900 flex h-screen md:hidden justify-start outline outline-indigo-50 overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col gap-6 items-center justify-start md:px-5 w-full">
            <div className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1194px] outline outline-indigo-50 sm:px-5 px-6 py-5 w-full">
              <div className="flex sm:flex-1 flex-row gap-4 items-center justify-start w-[15%] sm:w-full">
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
                  className="text-black-900_7f text-sm"
                  size="txtMontserratRegular14"
                >
                  <span className="text-black-900_7f font-montserrat text-left font-normal">
                    Home /{" "}
                  </span>
                  <span className="text-black-900 font-montserrat text-left font-semibold">
                    Projects
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
            <div className="flex flex-col gap-8 items-center justify-start w-[97%] md:w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1147px] w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                  size="txtMontserratRomanSemiBold24"
                >
                  Projects
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[131px]"
                  leftIcon={
                    <Img
                      className="h-4 mb-0.5 mr-1"
                      src="/images/img_frame_white_a700_16x16.svg"
                      alt="Frame"
                    />
                  }
                  shape="round"
                  color="black_900"
                >
                  <div className="font-medium text-left text-sm">
                    New Project
                  </div>
                </Button>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start outline outline-[0.5px] outline-indigo-50 rounded-lg w-auto md:w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1147px] px-4 py-3 w-full">
                  <Input
                    name="frame53369"
                    placeholder="Search in projects..."
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
                    >
                      <div className="!text-black-900 font-medium text-left text-sm">
                        Filters
                      </div>
                    </Button>
                    <Button
                      className="border border-black-900_1e border-solid flex h-9 items-center justify-center w-9"
                      shape="round"
                    >
                      <Img
                        className="h-5"
                        src="/images/img_hugeiconinter.svg"
                        alt="hugeiconinter"
                      />
                    </Button>
                  </div>
                </div>
                <div className="overflow-auto w-auto">
                  <ReactTable
                    enableSorting
                    columns={tableColumns}
                    data={tableData.current}
                    rowClass={""}
                    headerClass="bg-gray-50 border border-indigo-50"
                  />
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[37px] items-center justify-between max-w-[1147px] w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-auto">
                  <Text
                    className="text-black-900 text-xs w-auto"
                    size="txtMontserratRegular12"
                  >
                    Rows per page
                  </Text>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[22px] items-center justify-end p-[3px] w-[18%]"
                    style={{
                      backgroundImage: "url('images/img_group2609273.svg')",
                    }}
                  >
                    <div className="flex flex-row gap-[3px] items-center justify-start w-auto">
                      <Text
                        className="text-black-900 text-xs"
                        size="txtMontserratRegular12"
                      >
                        10
                      </Text>
                      <Img
                        className="h-3 w-3"
                        src="/images/img_arrowdown_black_900.svg"
                        alt="arrowdown_Eight"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Azmonk31ElevenPage;
