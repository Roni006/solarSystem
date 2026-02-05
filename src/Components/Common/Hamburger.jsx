import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { SquareMenu } from "lucide-react";
import MobileSideBar from "./MobileSideBar";

const Hamburger = () => {
  const [toggle, setToggle] = useState(false);

  const menuRerf = useRef();
  useEffect(() => {
    document.addEventListener("click", (e) => {
      menuRerf.current.contains(e.target) ? setToggle(true) : setToggle(false);
    });
  }, []);
  return (
    <div className="w-full lg:w-auto px-2 flex text-[20px] items-center justify-between">
      <Logo />
      <button ref={menuRerf} onClick={() => setToggle(true)}>
        <SquareMenu className="text-[#EE0000]  lg:hidden" />
      </button>
      <MobileSideBar toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default Hamburger;
