import { Inter } from "next/font/google";
import Tab from "@/components/ui/Tab";
import data from "../data/analytics";
import { useRouter } from "next/router";
import VisitorsPage from "@/components/VisitorsPage";
import SupportRequestPage from "@/components/SupportRequestPage";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import Image from "next/image";
import profiledark from "../public/Images/profile-dark.png";
import profilegray from "../public/Images/profile-gray.png";
import supportdark from "../public/Images/support-dark.png";
import supportgray from "../public/Images/support-gray.png";
import calendar from "../public/Images/calendar.png";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { common } = data;
  const { tab = "visitors" } = router.query;
  const commonEntries = Object.entries(common);
  const firstTwoCommonEntries = commonEntries
    .slice(0, 2)
    .map(([key, value], index) => {
      return {
        key: index === 0 ? "Visitors" : "Support Requests",
        value,
        icon: index === 0 ? profiledark : supportgray,
      };
    });
  const [loading, setLoading] = useState(false);
  const tabs = [
    { name: "Visitors", component: <VisitorsPage /> },
    { name: "Support Requests", component: <SupportRequestPage /> },
  ];

  const selectedTab =
    tabs.find((t) => t.name.toLowerCase() === tab.toLowerCase()) || tabs[0];

  // useEffect(() => {
  //   setLoading(true);
  //   const timer = setTimeout(() => setLoading(false), 500); // Simulate a loading delay
  //   return () => clearTimeout(timer);
  // }, [tab]);

  return (
    <main className={`flex min-h-screen gap-4 flex-col`}>
      <div className="flex justify-between items-center">
        <h1 className="text-black text-2xl font-bold">
          {" "}
          Breakdown by Visitors
        </h1>
        <div className="border flex items-center rounded-md border-divider-black p-2 gap-2">
          <Image src={calendar} size={20} alt="calendar" />
          <p className="text-gray-900">Jun 7, 2024 - Jun 13, 2024</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {firstTwoCommonEntries.map(({ key, value, icon }) => (
          <Tab
            key={key}
            tabName={key}
            value={value.value}
            percentChange={value.percentChange}
            tabs={tabs}
            icon={icon}
          />
        ))}
      </div>
      <div className="w-full mt-8">
        {loading ? <LoadingSpinner /> : selectedTab.component}
      </div>
    </main>
  );
}
