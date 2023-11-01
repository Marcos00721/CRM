import {
  Button,
  Img,
  Input
} from "components";

const ClientsAddress = () => {
  return (
    <div className="flex flex-col items-start justify-start p-[1.5rem] gap-[1.5rem] text-[0.88rem]">
      <div className="self-stretch flex flex-row items-center justify-between">
        <div className="text-[1.25rem] font-semibold">Addresses</div>
        <div className="rounded-lg bg-[--light_grey_shade_01] flex items-center justify-center box-border text-gray-200">
          <Input
            name="netCounter"
            placeholder="Search by address name"
            className="font-medium leading-[normal] placeholder:text-black-900_cc w-full"
            wrapClassName="flex rounded-lg w-full"
            suffix={
              <Img
                className="ml-[35px]"
                src="images/search_icon.svg"
                alt="arrow_down"
              />
            }
            //   color="white_A700"

            size="md"
            variant="fill"
          ></Input>
        </div>
        <Button
          className="cursor-pointer flex items-center decoration-white justify-center bg-slate-950"
          leftIcon={
            <Img
              className="h-4 mr-1 my-0.5"
              src="images/plus_icon.svg"
              alt="edit"
            />
          }
          shape="round"
          size="md"
          variant="outline"
        >
        <div className="text-white">
          Add Address
        </div>
        </Button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[1.5rem] text-[1rem]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem]">
          <div className="self-stretch font-semibold">
            Billing Addresses
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <div className="self-stretch bg-[--light_grey_shade_01] rounded-lg  flex flex-row items-end justify-between p-[1rem]">
              <div className="leading-[150%] inline-block w-[12.31rem] shrink-0">
                <p className="m-0 text-[1.13rem] font-semibold">
                  Nike US Limited
                </p>
                <p className="m-0 font-medium">&nbsp;</p>
                <p className="m-0 font-medium">
                  154B Crimson Tower,North West Link Rd. Phoenix,Arizona,
                  85123,United States
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.63rem] text-[0.75rem]">
                <button className="rounded-lg bg-white flex flex-row items-center justify-center py-[0.38rem] px-[0.5rem] gap-[0.25rem] border-[1px] border-solid border-promoxcrm-dark-10">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/images/edit_icon.svg"
                  />
                  <div className="leading-[170%] font-medium">
                    Edit
                  </div>
                </button>
                <button className="rounded-lg bg-white flex flex-row items-center justify-center py-[0.38rem] px-[0.5rem] gap-[0.25rem] border-[1px] border-solid border-promoxcrm-dark-10">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/images/delete_icon.svg"
                  />
                  <div className="leading-[170%] font-medium">
                    Delete
                  </div>
                </button>
              </div>
            </div>
            <div className="self-stretch bg-[--light_grey_shade_01] rounded-lg bg-current flex flex-row items-end justify-between p-[1rem]">
              <div className="leading-[150%] inline-block w-[12.31rem] shrink-0">
                <p className="m-0 text-[1.13rem] font-semibold">
                  Nike US Limited
                </p>
                <p className="m-0 font-medium">&nbsp;</p>
                <p className="m-0 font-medium">
                  154B Crimson Tower,North West Link Rd. Phoenix,Arizona,
                  85123,United States
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.63rem] text-[0.75rem]">
                <button className="rounded-lg bg-white flex flex-row items-center justify-center py-[0.38rem] px-[0.5rem] gap-[0.25rem] border-[1px] border-solid border-promoxcrm-dark-10">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/images/edit_icon.svg"
                  />
                  <div className="leading-[170%] font-medium">
                    Edit
                  </div>
                </button>
                <button className="rounded-lg bg-white flex flex-row items-center justify-center py-[0.38rem] px-[0.5rem] gap-[0.25rem] border-[1px] border-solid">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/images/delete_icon.svg"
                  />
                  <div className="leading-[170%] font-medium">
                    Delete
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-[--light_grey_shade_01] w-[0.09rem]" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem]">
          <div className="self-stretch font-semibold">
            Shipping Addresses
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] text-promoxcrm-dark-80">
            <div className="self-stretch bg-[--light_grey_shade_01] rounded-lg flex flex-row items-end justify-between p-[1rem]">
              <div className="leading-[150%] inline-block w-[12.31rem] shrink-0">
                <p className="m-0 text-[1.13rem] font-semibold">
                  Nike US Limited
                </p>
                <p className="m-0 font-medium">&nbsp;</p>
                <p className="m-0 font-medium">
                  154B Crimson Tower,North West Link Rd. Phoenix,Arizona,
                  85123,United States
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.63rem] text-[0.75rem]">
                <button className="rounded-lg bg-white flex flex-row items-center justify-center py-[0.38rem] px-[0.5rem] gap-[0.25rem] border-[1px] border-solid border-promoxcrm-dark-10">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/images/edit_icon.svg"
                  />
                  <div className="leading-[170%] font-medium">
                    Edit
                  </div>
                </button>
                <button className="rounded-lg bg-white flex flex-row items-center justify-center py-[0.38rem] px-[0.5rem] gap-[0.25rem] border-[1px] border-solid border-promoxcrm-dark-10">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/images/delete_icon.svg"
                  />
                  <div className="leading-[170%] font-medium">
                    Delete
                  </div>
                </button>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-[--light_grey_shade_01] flex flex-row items-end justify-between p-[1rem]">
              <div className="leading-[150%] inline-block w-[12.31rem] shrink-0">
                <p className="m-0 text-[1.13rem] font-semibold">
                  Nike US Limited
                </p>
                <p className="m-0 font-medium">&nbsp;</p>
                <p className="m-0 font-medium">
                  154B Crimson Tower,North West Link Rd. Phoenix,Arizona,
                  85123,United States
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.63rem] text-[0.75rem]">
                <button className="rounded-lg bg-white flex flex-row items-center justify-center py-[0.38rem] px-[0.5rem] gap-[0.25rem] border-[1px] border-solid border-promoxcrm-dark-10">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/images/edit_icon.svg"
                  />
                  <div className="leading-[170%] font-medium">
                    Edit
                  </div>
                </button>
                <button className="rounded-lg bg-white flex flex-row items-center justify-center py-[0.38rem] px-[0.5rem] gap-[0.25rem] border-[1px] border-solid border-promoxcrm-dark-10">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/images/delete_icon.svg"
                  />
                  <div className="leading-[170%] font-medium">
                    Delete
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsAddress;
