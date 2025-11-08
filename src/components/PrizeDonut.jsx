import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const total = 50000;
const data = [
  { name: "1st", value: 0.5 },
  { name: "2nd", value: 0.3 },
  { name: "3rd", value: 0.2 },
];

const defaultGradients = [
  { id: "grad1", start: "#f5c144", end: "#ffd95a" },
  { id: "grad2", start: "#ffd95a", end: "#ffffff" },
  { id: "grad3", start: "#fff5b0", end: "#ffe680" },
];

const labels = {
  "1st": "🥇 1st Place",
  "2nd": "🥈 2nd Place",
  "3rd": "🥉 3rd Place",
};

export default function PrizeDonut({
  totalValue = total,
  dataSet = data,
  gradients = defaultGradients,
  width = 300,
  height = 300,
  innerRadius = 80,
  outerRadius = 120,
  rectWidth = 140,
  rectHeight = 60,
  rectRadius = 10,
}) {
  const [activeName, setActiveName] = useState(null);
  const isTouch =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  // scale data values to actual total
  const chartData = dataSet.map((d) => ({ ...d, value: d.value * totalValue }));

  return (
    <PieChart width={width} height={height}>
      {/* Define gradients */}
      <defs>
        {gradients.map((g) => (
          <linearGradient
            key={g.id}
            id={g.id}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={g.start} />
            <stop offset="100%" stopColor={g.end} />
          </linearGradient>
        ))}
      </defs>

      <Pie
        data={chartData}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        paddingAngle={2}
        onMouseEnter={
          isTouch
            ? undefined
            : (_, index) => setActiveName(chartData[index].name)
        }
        onMouseLeave={isTouch ? undefined : () => setActiveName(null)}
        onClick={
          isTouch
            ? (_, index) => setActiveName(chartData[index].name)
            : undefined
        }
      >
        {chartData.map((_, i) => (
          <Cell key={i} fill={`url(#${gradients[i % gradients.length].id})`} />
        ))}
      </Pie>

      <Tooltip
        formatter={(value, name) => [
          `Rs. ${value.toLocaleString()}`,
          labels[name],
        ]}
        contentStyle={{
          backgroundColor: "#000",
          border: "none",
          color: "#fff",
          borderRadius: "8px",
          padding: "10px",
        }}
        itemStyle={{ color: "#fff" }}
      />

      {/* Center text with background */}
      <g>
        <rect
          x="50%"
          y="50%"
          width={rectWidth}
          height={rectHeight}
          fill="var(--secondary)"
          rx={rectRadius}
          ry={rectRadius}
          transform={`translate(${-rectWidth / 2}, ${-rectHeight / 2})`}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontFamily: '"Cubano", sans-serif',
            fontSize: 16,
            fontWeight: "bold",
            fill: "currentColor",
          }}
        >
          {activeName ? (
            <>
              <tspan x="50%" dy="-0.6em">
                {labels[activeName]}
              </tspan>
              <tspan x="50%" dy="1.2em" fill="var(--accent-alt)">
                Rs.{" "}
                {chartData
                  .find((d) => d.name === activeName)
                  .value.toLocaleString()}
                !
              </tspan>
            </>
          ) : (
            <>
              <tspan x="50%" dy="-0.6em">
                Prize Pool of
              </tspan>
              <tspan x="50%" dy="1.2em" fill="var(--accent-alt)">
                Rs. {totalValue.toLocaleString()}!
              </tspan>
            </>
          )}
        </text>
      </g>
    </PieChart>
  );
}
