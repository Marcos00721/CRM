import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, ReactTable, Switch, Text } from "components";
// import Azmonk31ThirtyFourTopmenu from "../../components/Azmonk31ThirtyFourTopmenu";
import Sidebar1 from "components/Sidebar1";
import { CloseSVG } from "assets/images";
import TopMenu from "components/TopMenu";


const Clients = () => {
  const table1Data = React.useRef([
    {
      rowclientname: "Airtel Pvt. Ltd.",
      rowindustry: "Telecom",
      rowsalestarget: "1000",
      rowaddresscount: "12",
      rowcontactscount: "50",
      rowactive: "true",
      actions: "images/img_frame2609280.svg",
    },
    {
      rowclientname: "Airtel Pvt. Ltd.",
      rowindustry: "Telecom",
      rowsalestarget: "1000",
      rowaddresscount: "12",
      rowcontactscount: "50",
      rowactive: "true",
      actions: "images/img_frame2609280.svg",
    },
    {
      rowclientname: "Airtel Pvt. Ltd.",
      rowindustry: "Telecom",
      rowsalestarget: "1000",
      rowaddresscount: "12",
      rowcontactscount: "50",
      rowactive: "true",
      actions: "images/img_frame2609280.svg",
    },
    {
      rowclientname: "Airtel Pvt. Ltd.",
      rowindustry: "Telecom",
      rowsalestarget: "1000",
      rowaddresscount: "12",
      rowcontactscount: "50",
      rowactive: "true",
      actions: "images/img_frame2609280.svg",
    },
    {
      rowclientname: "Airtel Pvt. Ltd.",
      rowindustry: "Telecom",
      rowsalestarget: "1000",
      rowaddresscount: "12",
      rowcontactscount: "50",
      rowactive: "true",
      actions: "images/img_frame2609280.svg",
    },
    {
      rowclientname: "Airtel Pvt. Ltd.",
      rowindustry: "Telecom",
      rowsalestarget: "1000",
      rowaddresscount: "12",
      rowcontactscount: "50",
      rowactive: "true",
      actions: "images/img_frame2609280.svg",
    },
    {
      rowclientname: "Airtel Pvt. Ltd.",
      rowindustry: "Telecom",
      rowsalestarget: "1000",
      rowaddresscount: "12",
      rowcontactscount: "50",
      rowactive: "true",
      actions: "images/img_frame2609280.svg",
    },
    {
      rowclientname: "Airtel Pvt. Ltd.",
      rowindustry: "Telecom",
      rowsalestarget: "1000",
      rowaddresscount: "12",
      rowcontactscount: "50",
      rowactive: "true",
      actions: "images/img_frame2609280.svg",
    },
  ]);
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("rowclientname", {
        cell: (info) => (
          <Text className="font-semibold pb-3.5 pl-[15px] pt-[21px] text-black-900 text-sm">{info?.getValue()}</Text>
        ),
        header: (info) => (
          <div
            className="common-pointer flex flex-row items-center justify-start min-w-[221px] p-[11px]"
            onClick={info.header.column.getToggleSortingHandler()}
          >
            <Text className="font-medium text-black-900_7f text-sm w-auto">Client Name</Text>
            <Img className="h-4 w-4" src="images/img_arrowup.svg" alt="arrowup_One" />
          </div>
        ),
      }),
      table1ColumnHelper.accessor("rowindustry", {
        cell: (info) => <Text className="pb-3.5 pt-[21px] text-black-900 text-sm">{info?.getValue()}</Text>,
        header: (info) => (
          <div
            className="common-pointer flex flex-row items-center justify-start min-w-[185px] pr-2.5 py-2.5"
            onClick={info.header.column.getToggleSortingHandler()}
          >
            <Text className="font-medium mt-0.5 text-black-900_7f text-sm w-auto">Industry</Text>
            <Img className="h-4 w-4" src="images/img_arrowup.svg" alt="arrowup_Two" />
          </div>
        ),
      }),
      table1ColumnHelper.accessor("rowsalestarget", {
        cell: (info) => <Text className="pb-3.5 pt-[21px] text-black-900 text-sm">{info?.getValue()}</Text>,
        header: (info) => (
          <div
            className="common-pointer flex flex-row items-center justify-start min-w-[175px] pr-2.5 py-2.5"
            onClick={info.header.column.getToggleSortingHandler()}
          >
            <Text className="font-medium mt-0.5 text-black-900_7f text-sm w-auto">Sales Target</Text>
            <Img className="h-4 w-4" src="images/img_arrowup.svg" alt="arrowup_Three" />
          </div>
        ),
      }),
      table1ColumnHelper.accessor("rowaddresscount", {
        cell: (info) => <Text className="pb-3.5 pt-[21px] text-black-900 text-sm">{info?.getValue()}</Text>,
        header: (info) => (
          <div
            className="common-pointer flex flex-row items-center justify-start min-w-[175px] pr-[11px] py-[11px]"
            onClick={info.header.column.getToggleSortingHandler()}
          >
            <Text className="font-medium text-black-900_7f text-sm w-auto">Address Count</Text>
            <Img className="h-4 w-4" src="images/img_arrowup.svg" alt="arrowup_Four" />
          </div>
        ),
      }),
      table1ColumnHelper.accessor("rowcontactscount", {
        cell: (info) => <Text className="pb-3.5 pt-[21px] text-black-900 text-sm">{info?.getValue()}</Text>,
        header: (info) => (
          <div
            className="common-pointer flex flex-row items-center justify-start min-w-[175px] pr-[11px] py-[11px]"
            onClick={info.header.column.getToggleSortingHandler()}
          >
            <Text className="font-medium text-black-900_7f text-sm w-auto">Contacts Count</Text>
            <Img className="h-4 w-4" src="images/img_arrowup.svg" alt="arrowup_Five" />
          </div>
        ),
      }),
      table1ColumnHelper.accessor("rowactive", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-3 py-3">
            <Switch
              onColor="#008000"
              offColor="#008000"
              onHandleColor="#ffffff"
              offHandleColor="#ffffff"
              value={info?.getValue()}
              className="gap-2.5 mt-1.5 w-auto"
            />
          </div>
        ),
        header: (info) => (
          <div
            className="common-pointer flex flex-row items-center justify-center min-w-[105px] pr-[11px] py-[11px]"
            onClick={info.header.column.getToggleSortingHandler()}
          >
            <Text className="font-medium text-black-900_7f text-sm w-auto">Active</Text>
            <Img className="h-4 w-4" src="images/img_arrowup.svg" alt="arrowup_Six" />
          </div>
        ),
      }),
      table1ColumnHelper.accessor("actions", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-1.5 py-1.5">
            <Img className="h-9 mt-1.5 w-[60px]" alt="frame2609280" src={info?.getValue()} />
          </div>
        ),
        header: (info) => (
          <Text className="font-medium min-w-[108px] py-[11px] text-black-900_7f text-center text-sm">Actions</Text>
        ),
      }),
    ];
  }, []);

  const [frame53369value, setFrame53369value] = React.useState("");
  const [frame53369onevalue, setFrame53369onevalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[245px] bg-black-900 flex h-screen md:hidden justify-start outline outline-gray-100 overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col gap-5 items-center justify-start md:px-5 w-full">
            <TopMenu
              className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1194px] outline outline-gray-100 sm:px-5 px-6 py-5 w-full"
              searchtext={
                <Text className="text-gray-900_b2 text-sm w-auto">
                  <span className="text-black-900_7f font-montserrat text-left font-normal">Home / </span>
                  <span className="text-black-900 font-montserrat text-left font-semibold">Clients</span>
                </Text>
              }
              userimage="images/img_ellipse1262.png"
            />
            <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1147px] w-full">
                <Text className="font-semibold text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto">Clients</Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[122px]"
                  leftIcon={<Img className="h-4 mr-1 my-px" src="images/img_frame_white_a700_16x16.svg" alt="Frame" />}
                  shape="round"
                  color="black_900"
                  size="md"
                  variant="fill"
                >
                  <div className="font-medium text-left text-sm">New Client</div>
                </Button>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start mt-6 outline outline-[0.5px] outline-gray-100 rounded-lg w-auto md:w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1147px] px-4 py-3 w-full">
                  <Input
                    name="frame53369_One"
                    placeholder="Search Clients"
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
                <div className="overflow-auto w-auto">
                  <ReactTable
                    enableSorting
                    columns={table1Columns}
                    data={table1Data.current}
                    rowClass={""}
                    headerClass="bg-gray-50 border border-gray-100"
                  />
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[37px] items-center justify-between max-w-[1147px] mt-10 w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-auto">
                  <Text className="text-black-900 text-xs w-auto">Rows per page</Text>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[22px] items-center justify-end p-[3px] w-[18%]"
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

export default Clients;
