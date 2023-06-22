// import React, { useState, useEffect, useRef } from 'react';
// import { useAuthentication } from '../providers/AuthProvider';
// import { Chart } from 'chart.js';
// import 'chart.js/auto';

// export default function Statistics() {
//   const { authenticated, onBoardedUser } = useAuthentication();
//   const [calorieStats, setCalorieStats] = useState({
//     last7Days: 0,
//     last30Days: 0,
//   });

//   const chartRef = useRef(null);
//   const chartInstance = useRef(null);

//   useEffect(() => {
//     const fetchCalorieIntake = async () => {
//       try {
//         const response = await fetch(`http://localhost:8080/api/entries/food/last30days?userId=${onBoardedUser.id}`);
//         const { data } = await response.json();

//         const currentDate = new Date();
//         const last7DaysStats = calculateCalorieStats(onBoardedUser.calorieBudget, currentDate, 7, data);
//         const last30DaysStats = calculateCalorieStats(onBoardedUser.calorieBudget, currentDate, 30, data);

//         setCalorieStats({
//           last7Days: last7DaysStats,
//           last30Days: last30DaysStats,
//         });
//       } catch (error) {
//         console.error('Error retrieving calorie intake data:', error);
//       }
//     };

//     if (authenticated) {
//       fetchCalorieIntake();
//     }
//   }, [authenticated, onBoardedUser]);

//   useEffect(() => {
//     if (chartRef.current) {
//       if (chartInstance.current) {
//         chartInstance.current.destroy();
//       }

//       const chartData = {
//         labels: ['Last 7 Days', 'Last 30 Days'],
//         datasets: [
//           {
//             label: 'Days Exceeded Calorie Budget',
//             data: [calorieStats.last7Days, calorieStats.last30Days],
//             fill: false,
//             borderColor: 'rgb(75, 192, 192)',
//             tension: 0.1,
//           },
//         ],
//       };

//       const chartOptions = {
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       };

//       chartInstance.current = new Chart(chartRef.current, {
//         type: 'line',
//         data: chartData,
//         options: chartOptions,
//       });
//     }
//   }, [calorieStats]);

//   const calculateCalorieStats = (dailyCalorieBudget, currentDate, numDays, entries) => {
//     let daysExceededBudget = 0;
//     for (let i = numDays; i > 0; i--) {
//       const date = new Date(currentDate.getTime() - i * 24 * 60 * 60 * 1000);
//       const formattedDate = getFormattedDate(date);
//       const entry = entries.find((item) => item.consumedAt.includes(formattedDate));
//       if (entry && entry.calories > dailyCalorieBudget) {
//         daysExceededBudget++;
//       }
//     }
//     return daysExceededBudget;
//   };

//   const getFormattedDate = (date) => {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };

//   const getDaysExceededColor = (daysExceeded, maxDays) => {
//     const greenThreshold = Math.floor(maxDays * 0.20);
//     const orangeThreshold = Math.floor(maxDays * 0.5);

//     if (daysExceeded === 0) {
//       return 'green';
//     } else if (daysExceeded <= greenThreshold) {
//       return 'orange';
//     } else {
//       return 'red';
//     }
//   };

//   return (
//     <div className="statistics-container">
//       <h1 className="statistics-heading">Statistics</h1>
//       <canvas ref={chartRef} />
//       <div className="statistics">
//         <p className="statistics-item">
//           Last 7 days:{' '}
//           <span className={`days-exceeded ${getDaysExceededColor(calorieStats.last7Days, 7)}`}>
//             {calorieStats.last7Days}
//           </span>{' '}
//           days exceeded calorie budget
//         </p>
//         <p className="statistics-item">
//           Last 30 days:{' '}
//           <span className={`days-exceeded ${getDaysExceededColor(calorieStats.last30Days, 30)}`}>
//             {calorieStats.last30Days}
//           </span>{' '}
//           days exceeded calorie budget
//         </p>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect, useRef } from 'react';
import { useAuthentication } from '../providers/AuthProvider';
import { Chart } from 'chart.js';
import 'chart.js/auto';

export default function Statistics() {
  const { authenticated, onBoardedUser } = useAuthentication();
  const [overageStats, setOverageStats] = useState({
    last7Days: 0,
    last30Days: 0,
  });

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const fetchOverages = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/overages/last30days?userId=${onBoardedUser.id}`);
        const overages = await response.json();

        const currentDate = new Date();
        const last7DaysStats = calculateOverageStats(7, overages);
        const last30DaysStats = calculateOverageStats(30, overages);

        setOverageStats({
          last7Days: last7DaysStats,
          last30Days: last30DaysStats,
        });
      } catch (error) {
        console.error('Error retrieving overage data:', error);
      }
    };

    if (authenticated) {
      fetchOverages();
    }
  }, [authenticated, onBoardedUser]);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const chartData = {
        labels: ['Last 7 Days', 'Last 30 Days'],
        datasets: [
          {
            label: 'Days Exceeded Calorie Budget',
            data: [overageStats.last7Days, overageStats.last30Days],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      };

      const chartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      chartInstance.current = new Chart(chartRef.current, {
        type: 'line',
        data: chartData,
        options: chartOptions,
      });
    }
  }, [overageStats]);

  const calculateOverageStats = (numDays, overages) => {
    return overages.length;
  };
  
  
  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getDaysExceededColor = (daysExceeded, maxDays) => {
    const greenThreshold = Math.floor(maxDays * 0.20);
    const orangeThreshold = Math.floor(maxDays * 0.5);

    if (daysExceeded === 0) {
      return 'green';
    } else if (daysExceeded <= greenThreshold) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  return (
    <div className="statistics-container">
      <h1 className="statistics-heading">Statistics</h1>
      <canvas ref={chartRef} />
      <div className="statistics">
        <p className="statistics-item">
          Last 7 days:{' '}
          <span className={`days-exceeded ${getDaysExceededColor(overageStats.last7Days, 7)}`}>
            {overageStats.last7Days}
          </span>{' '}
          days exceeded calorie budget
        </p>
        <p className="statistics-item">
          Last 30 days:{' '}
          <span className={`days-exceeded ${getDaysExceededColor(overageStats.last30Days, 30)}`}>
            {overageStats.last30Days}
          </span>{' '}
          days exceeded calorie budget
        </p>
      </div>
    </div>
  );
}




