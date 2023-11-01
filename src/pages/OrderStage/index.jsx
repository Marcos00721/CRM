import React, { useState } from "react";
import Sidebar1 from "components/Sidebar1";
import {
  Input,
  Text,
  Img,
  SelectBox,
  Radio,
  RadioGroup,
  Switch,
} from "components";
import ClientForm from "components/ClientForm/ClientForm";
import ClientsAddress from "components/ClientForm/ClientAddress";

function OrderStage() {
  const [activeTab, setActiveTab] = useState("address"); // Initial active tab

  // Define an array of tab objects
  const tabs = [
    { id: "cDetails", label: "Client Details" },
    { id: "contacts", label: "Contacts" },
    { id: "address", label: "Address" },
    { id: "files", label: "Files" },
    { id: "shipper", label: "Shipper-Information" },
    { id: "projects", label: "Projects" },
  ];

  // Function to handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const renderTabContent = () => {
    if (["cDetails", "contacts", "files", "shipper", "projects"].includes(activeTab)) {
      return (
        <div id="tabContentExample" className="w-full">
          <ClientForm />
        </div>
      );
    } else {
      return (
        <div id="tabContentExample" className="w-full">
          <ClientsAddress />
        </div>
      );
    }
  };

  return (
    <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
        <Sidebar1 className="!sticky !w-[245px] bg-black-900 flex h-screen md:hidden justify-start outline outline-indigo-50 overflow-auto md:px-5 top-[0]" />

        <div className="flex flex-1 flex-col gap-5 items-center justify-start md:px-5 w-full">
          <figure className="bg-slate-100 w-full p-8 dark:bg-slate-800">
            <div
              className="relative w-32 h-32 top-20 border-white-A700 border-8 rounded-full mx-auto bg-slate-100 flex items-center justify-center alt purple-01"
              alt=""
              width="140"
              height="140"
            >
              <span
                className="text-center text-5xl font-semibold"
                style={{
                  color: "var(--light_purple_01)",
                }}
              >
                NL
              </span>
            </div>
          </figure>

          <div className="text-center py-6">
            <h5
              className="text-center font-semibold text-xl"
              style={{
                color: "var(--dark_black_01)",
              }}
            >
              Nike Limited
            </h5>
            <p
              className="text-center text-ellipsis font-medium text-sm"
              style={{
                color: "var(--dark_gray_01)",
              }}
            >
              CL-03
            </p>
          </div>
          <div class="w-full navElement border-b border-gray-200 dark:border-gray-700">
            <ul
              class="flex justify-center -mb-px text-sm font-medium text-center"
              id="tabs-example"
              role="tablist"
            >
              {tabs.map((tab) => (
                <li key={tab.id} class="mr-2" role="presentation">
                  <button
                    class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300"
                    style={{
                      fontWeight: "700",
                      color:
                        activeTab === tab.id
                          ? "var(--red_01)"
                          : "var(--gray_500)",
                      borderColor:
                        activeTab === tab.id ? "var(--red_01)" : "transparent",
                    }}
                    id={tab.id}
                    type="button"
                    role="tab"
                    aria-controls={tab.id}
                    aria-selected={tab.id === activeTab ? "true" : "false"}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* <div id="tabContentExample" className="w-full">
            <ClientForm />
          </div> */}
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default OrderStage;
