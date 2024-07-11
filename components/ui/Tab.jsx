import { useRouter } from "next/router";
import Tooltip from "./Tooltip";
import Image from "next/image";
import arrodropup from "../../public/Images/Polygon 1.png";
import arrowdropdown from "../../public/Images/Polygon 1 (1).png";
import profiledark from "../../public/Images/profile-dark.png";
import profilegray from "../../public/Images/profile-gray.png";
import supportdark from "../../public/Images/support-dark.png";
import supportgray from "../../public/Images/support-gray.png";

function Tab({ tabName, value, percentChange, tabs, icon }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/?tab=${tabName.toLowerCase()}`, undefined, { shallow: true });
  };
  const tooltipText =
    "Every conversation in inbox is marked as one support request. One visitor can have multiple support requests.";

  return tabName === "Visitors" ? (
    <div
      className="p-4 border gap-4 flex flex-col border-gray-200 rounded-lg w-full shadow-sm cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center gap-2">
        <Image
          sizes={16}
          alt="visitor"
          src={profiledark}
          width={24}
          height={24}
        />
        <div className="font-medium text-gray-600 text-lg">{tabName}</div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="text-3xl font-bold">{value}</div>
        <div className="text-500 flex items-center gap-2">
          <div className="ml-2 text-white p-1 rounded">
            <Image size={24} alt="arrowdropup" src={arrodropup} />
          </div>
          {percentChange}%
        </div>
      </div>
    </div>
  ) : (
    <Tooltip
      text={
        tabs.length > 1 && tabName === "Support Requests" ? tooltipText : ""
      }
    >
      <div
        className="p-4 border gap-4 flex flex-col border-gray-200 rounded-lg w-full shadow-sm cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex items-center gap-2">
          <Image
            sizes={16}
            alt="support"
            src={supportgray}
            width={24}
            height={24}
          />
          <div className="font-medium text-gray-600 text-lg">{tabName}</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-500 flex items-center gap-2">
            <div className="ml-2 text-white p-1 rounded">
              <Image size={24} alt="arrodropdown" src={arrowdropdown} />
            </div>
            {percentChange}%
          </div>
        </div>
      </div>
    </Tooltip>
  );
}

export default Tab;
