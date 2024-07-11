import Link from "next/link";
import Avatar from "../ui/Avatar";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";

function Header({ title }) {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white h-[80px] border-b border-gray-200 drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex w-full h-full items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <IoIosMenu size={16} />
        </div>
        <div className="">
          <p className="text-black font-medium text-lg">{title}</p>
        </div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <div className="relative">
            <Link href="" className="flex gap-2 items-center">
              <Avatar NameInitials="UD" />
              <p className="text-lg font-normal">Uditsmith Thakuria</p>
              <RiArrowDropDownLine size={24} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
