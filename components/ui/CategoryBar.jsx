import React from "react";

function CategoryBar({ items, colors }) {
  const totalPercent = items.reduce(
    (sum, item) => sum + parseFloat(item.percent),
    0
  );

  return (
    <div className="relative w-full h-[20px] bg-gray-200 rounded">
      {items.map((item, index) => {
        const widthPercent = (parseFloat(item.percent) / totalPercent) * 100;

        return (
          <div
            key={index}
            className="absolute top-0 h-full"
            style={{
              width: `${widthPercent}%`,
              left: `${
                index === 0
                  ? 0
                  : items
                      .slice(0, index)
                      .reduce(
                        (sum, item) =>
                          sum + (parseFloat(item.percent) / totalPercent) * 100,
                        0
                      )
              }%`,
              backgroundColor: colors[index % colors.length],
            }}
          />
        );
      })}
    </div>
  );
}

export default CategoryBar;
