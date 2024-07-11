import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Images/cyan_pink-View 3 1.png";
import topdown from "../../public/Images/chevron-selector-vertical.png";
import home from "../../public/Images/Home Icon.png";
import inbox from "../../public/Images/Inbox Icon.png";
import trainingdata from "../../public/Images/Training data-Icon (1).png";
import helpcenter from "../../public/Images/Help-Center.png";
import manageInstructions from "../../public/Images/Manage Instructions.png";
import customers from "../../public/Images/Customers.png";
import integrations from "../../public/Images/Integrations.png";
import settings from "../../public/Images/Settings.png";
import analytics from "../../public/Images/Analytics.png";
import testyourbot from "../../public/Images/Test your bot.png";

const sidebarItems = [
  { src: home, alt: "home", text: "Home", href: "" },
  { src: inbox, alt: "inbox", text: "Inbox", href: "" },
  { src: trainingdata, alt: "trainingdata", text: "Training data", href: "" },
  { src: helpcenter, alt: "helpcenter", text: "Help Center", href: "" },
  {
    src: manageInstructions,
    alt: "manageInstructions",
    text: "Manage Instructions",
    href: "",
  },
  { src: customers, alt: "customers", text: "Customers", href: "" },
  { src: integrations, alt: "integrations", text: "Integrations", href: "" },
  { src: settings, alt: "settings", text: "Settings", href: "" },
  {
    src: analytics,
    alt: "analytics",
    text: "Analytics",
    href: "",
    className: "text-white bg-gray-700",
  },
  {
    src: testyourbot,
    alt: "testyourbot",
    text: "Test your bot",
    href: "",
    className: "p-2",
  },
];
const Sidebar = () => {
  return (
    <aside className="absolute left-0 top-0 z-9999 flex h-screen w-[240px] flex-col overflow-y-hidden bg-primary-dark duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 -translate-x-full">
      <div className="flex items-center justify-between gap-2 px-6 py-6">
        <Link href="/" className="flex gap-4 items-center">
          <Image src={logo} alt="logo" className="h-[32px]" />
          <div className="flex flex-col">
            <h2 className="text-white font-bold">Slowper AI</h2>
            <p className="text-sm text-gray-400">mynewslowperbot.ai</p>
          </div>
          <Image src={topdown} className="h-[16px]" alt="topdown" />
        </Link>
        <button aria-expanded="true" className="block lg:hidden"></button>
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className=" py-4 px-2 lg:px-6">
          <div>
            <ul>
              {sidebarItems.map((item, index) => (
                <li
                  key={index}
                  className={`p-2 rounded-lg items-center flex ${
                    item.className ? item.className : ""
                  }`}
                >
                  <a
                    href={item.href}
                    className={`flex gap-2 items-center w-full text-gray-400 ${
                      item.text === "Analytics" ? "text-white" : ""
                    }`}
                  >
                    <Image size={16} src={item.src} alt={item.alt} />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
