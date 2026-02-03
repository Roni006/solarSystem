import { menuItems } from "../../Constant/MenuItems";
const NavMenu = () => {
  return (
    <>
      <menu>
        <ul className="hidden lg:flex gap-11.25 justify-end">
          {menuItems.map((item, i) => (
            <li
              className=" font-medium text-[18px] text-white uppercase hover:text-[#EE0000] duration-300 "
              key={i}
            >
              <a href="">{item.label}</a>
            </li>
          ))}
        </ul>
      </menu>
    </>
  );
};

export default NavMenu;
