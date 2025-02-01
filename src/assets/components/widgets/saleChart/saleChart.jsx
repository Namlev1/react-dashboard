import WidgetTitleBar from '../../atoms/WidgetTitleBar/WidgetTitleBar.jsx'
import GearIcon from '../../atoms/Icons/GearIcon.svg';
import './SaleChart.css'
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import LanguageIcon from "../../atoms/Icons/LanguageIcon.svg";
import React from "react";

// Rejestracja modułów Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SaleChart = () => {
  // Dane dla wykresu
  const data = {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: "Products sold",
        data: [90, 50, 80, 40, 60, 20, 100], // Mockowane dane sprzedaży
        backgroundColor: "green", // Kolor słupków
        borderRadius: 4, // Zaokrąglenie
      },
    ],
  };

  // Opcje konfiguracji wykresu
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Ukrycie legendy
      },
      title: {
        display: true,
        text: "Products sold", // Tytuł wykresu
      },
    },
    scales: {
      y: {
        grid: {
          color: "#e0e0e0", // Kolor linii siatki (pionowej)
        },
        ticks: {
          color: "#333", // Kolor tekstu osi Y
        },
        title: {
          display: true,
          text: "Products sold",
          color: "#333", // Kolor tytułu osi Y
        },
        beginAtZero: true,
      },
      x: {
        grid: {
          color: "#e0e0e0", // Kolor linii siatki (poziomej)
        },
        ticks: {
          color: "#333", // Kolor tekstu osi X
        },
        title: {
          display: true,
          text: "Day",
          color: "#333", // Kolor tytułu osi X
        },
      },
    },
  };
  return (
      <div className={"widget saleChart-widget"}>
        <WidgetTitleBar text={'Sale Chart'} />
        <div className={"widget-content"}>
          <div className={"widget-frame"}>
            <img src={GearIcon} alt="Gear Icon" className="gear-icon"/>
            <Bar data={data} options={options} />


          </div>
        </div>
      </div>
  );
};

export default SaleChart;
