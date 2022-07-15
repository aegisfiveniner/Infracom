import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export let data = {
  labels: [
    "User1",
    "User2",
    "User3",
    "User4",
    "User5",
    "User6",
    "User7",
    "User8",
    "User9",
    "User10",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart({ items }) {
  // console.log(items);
  let temp = {};

  useEffect(() => {
    {
      items.map((item) => {
        // console.log(item.userId);
        if (!temp[item.userId]) {
          temp[item.userId] = 1;
        } else {
          temp[item.userId]++;
        }
      });
      // console.log(temp);

      data.datasets[0].data = Object.values(temp);
    }
  }, []);

  return <Pie data={data} />;
}
