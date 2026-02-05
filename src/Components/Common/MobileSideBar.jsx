import React from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { menuItems } from "../../Constant/MenuItems";

const MobileSideBar = ({ toggle, setToggle }) => {
  return (
    <>
      <aside
        className={`fixed top-0 ${toggle ? "left-0 " : "-left-full"} duration-300 bg-[#111111] h-full w-10/12 py-10 px-8 z-30`}
      >
        <div className="flex flex-col relative">
          <div>
            <button
              onClick={() => setToggle(false)}
              className="cursor-pointer absolute right-0 top-0"
            >
              <X className="text-[#EE0000] " />
            </button>
            <Logo />
          </div>
          <ul className="flex flex-col gap-4 mt-15">
            {menuItems.map((item, i) => (
              <li
                className=" font-medium text-[18px] text-white uppercase hover:text-[#EE0000] duration-300 ease-in-out "
                key={i}
              >
                <a href="">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default MobileSideBar;
