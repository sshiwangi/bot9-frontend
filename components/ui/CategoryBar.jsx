function CategoryBar({ items }) {
  const totalPercent = items.reduce(
    (sum, item) => sum + parseFloat(item.percent),
    0
  );

  return (
    <div className="relative w-full h-[20px] bg-gray-200 rounded">
      {items.map((item, index) => (
        <div
          key={index}
          className="absolute top-0 h-full"
          style={{
            width: `${item.percent}%`,
            left: `${
              totalPercent > 100
                ? index === 0
                  ? 0
                  : items
                      .slice(0, index)
                      .reduce((sum, item) => sum + parseFloat(item.percent), 0)
                : index === 0
                ? 0
                : items
                    .slice(0, index)
                    .reduce((sum, item) => sum + parseFloat(item.percent), 0)
            }%`,
            backgroundColor: index % 2 === 0 ? "blue-500" : "lightblue",
          }}
        />
      ))}
    </div>
  );
}

export default CategoryBar;
