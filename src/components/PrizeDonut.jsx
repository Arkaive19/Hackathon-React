import { useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const defaultData = [
  { name: "1st", value: 0.5 },
  { name: "2nd", value: 0.3 },
  { name: "3rd", value: 0.2 },
];

const defaultGradients = [
  { id: "grad1", start: "#f5c144", end: "#ffd95a" },
  { id: "grad2", start: "#ffd95a", end: "#fff5b0" },
  { id: "grad3", start: "#fff5b0", end: "#ffe680" },
];

const defaultLabels = {
  "1st": "🥇 1st Place",
  "2nd": "🥈 2nd Place",
  "3rd": "🥉 3rd Place",
};

export default function PrizeDonut({
  total = 50000,
  data = defaultData,
  gradients = defaultGradients,
  labels = defaultLabels,
}) {
  const [activeName, setActiveName] = useState(null);

  const isTouch =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  const chartData = data.map((d) => ({ ...d, value: d.value * total }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        {/* Gradients */}
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
          innerRadius="40%"
          outerRadius="70%"
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
            <Cell
              key={i}
              fill={`url(#${gradients[i % gradients.length].id})`}
            />
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

        {/* Center rectangle */}
        <rect
          x={0} // placeholder, we will compute below
          y={0}
          width={0}
          height={0}
          fill="var(--secondary)"
        />

        {/* Center text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontFamily: '"Cubano", sans-serif',
            fontSize: "1em",
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
                Rs. {total.toLocaleString()}!
              </tspan>
            </>
          )}
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
}
