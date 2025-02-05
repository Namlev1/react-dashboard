import WidgetTitleBar from '../../atoms/WidgetTitleBar/WidgetTitleBar.jsx'
import './SaleChart.css'
import { Bar } from 'react-chartjs-2'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from 'chart.js'
import React, { useEffect, useState } from 'react'
import ChartSettings from './ChartSettings.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setChosenRankingSort } from '../../../../store/accountSlice.js'

// Rejestracja modułów Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const SaleChart = () => {
  const chosenOrdersSort = useSelector(
    (store) => store.accountSlice.chosenRankingSort
  )
  const dispatch = useDispatch()
  const handleOptionSelect = (option) => {
    dispatch(setChosenRankingSort(option))
  }

  const [tickColor, setTickColor] = useState('#333')

  useEffect(() => {
    const checkDarkMode = () => {
      setTickColor(
        document.documentElement.classList.contains('dark-mode')
          ? '#fff'
          : '#333'
      )
    }
    checkDarkMode()
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    return () => observer.disconnect()
  }, [])

  // Dane dla wykresu
  const data = {
    labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    datasets: [
      {
        label: 'Products sold',
        data: [90, 50, 80, 40, 60, 20, 100],
        backgroundColor: 'green',
        borderRadius: 4
      }
    ]
  }

  // Opcje konfiguracji wykresu
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Products sold',
        color: tickColor
      }
    },
    scales: {
      y: {
        grid: {
          color: '#e0e0e0'
        },
        ticks: {
          color: tickColor
        },
        title: {
          display: true,
          text: 'Products sold',
          color: tickColor
        },
        beginAtZero: true
      },
      x: {
        grid: {
          color: '#e0e0e0'
        },
        ticks: {
          color: tickColor
        },
        title: {
          display: true,
          text: 'Day',
          color: tickColor
        }
      }
    }
  }

  return (
    <div className={'widget saleChart-widget'}>
      <WidgetTitleBar text={'Sale Chart'} />
      <div className={'widget-content'}>
        <div className={'widget-frame'}>
          <ChartSettings
            title={'Sort by' || 'Select an option'}
            options={['Best to worst', 'Worst to best']}
            onOptionSelect={handleOptionSelect}
            storeVariable={chosenOrdersSort}
          />
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  )
}

export default SaleChart
