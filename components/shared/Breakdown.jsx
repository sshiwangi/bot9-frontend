// components/RequestBreakdown.js
import React from "react";
import CategoryBar from "../ui/CategoryBar";

function Breakdown({ data }) {
  const totalPercent = data.items.reduce(
    (sum, item) => sum + parseFloat(item.percent),
    0
  );

  return (
    <div className="mb-8 p-4 border border-gray-200 rounded-lg">
      <h2 className="font-medium text-lg mb-4 text-gray-900">{data.title}</h2>
      {totalPercent <= 100 && (
        <>
          <CategoryBar items={data.items} />
          <div className="h-[8px] my-2 border-t border-l border-r border-gray-200"></div>
          <div className="flex text-gray-500 mb-4 font-medium w-full justify-between items-center">
            <p>0%</p>
            <p>100%</p>
          </div>
        </>
      )}
      {data.items.map((item) => (
        <div
          key={item.name}
          className="flex justify-between py-4 border-b border-gray-200"
        >
          <div>
            <span className="text-gray-900">{item.name}</span>
          </div>
          <div className="flex gap-8 items-center">
            <span className="font-medium">{item.percent}%</span>
            {item.count ? (
              <span>{item.count}</span>
            ) : (
              <div className="w-4 h-[2px] bg-gray-400"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Breakdown;
