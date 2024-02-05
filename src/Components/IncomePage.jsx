import Chart from 'chart.js/auto';
import { useEffect } from 'react';

const IncomePage = () => {
  useEffect(() => {
    const ctx = document.getElementById('incomeChart').getContext('2d');

    // Get current month and year
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // 0-indexed
    const currentYear = currentDate.getFullYear();

    // Generate month labels for the past 5 months
    const months = [];
    for (let i = 4; i >= 0; i--) {
      const date = new Date(currentYear, currentMonth - i, 1);
      const monthName = date.toLocaleString('default', { month: 'long' });
      months.push(monthName);
    }

    // Income data for the past 5 months (sample data)
    const incomeData = [3, 4, 2, 5, 1];

    // Define colors for current and past months
    const backgroundColors = incomeData.map((_, index) => {
      return index === 4 ? 'rgba(255, 140, 0, 0.8)' : 'rgba(255, 140, 0, 0.5)';
    });

    // Initialize the chart
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: months,
        datasets: [{
          label: 'Income',
          data: incomeData,
          backgroundColor: backgroundColors,
          borderColor: 'rgba(255, 140, 0, 1)', // Border color
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: 5 // Y-axis range from 0 to 5
          }
        }
      }
    });

    // Clean up the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <main className="p-3 lg:p-10">
      <p className="text-3xl font-bold">Income</p>
      <p className="mt-3 text-gray-500">Last <u>30 days</u></p>
      <div className="mt-5">
        <canvas id="incomeChart" style={{ width: '100%', height: "200px" }}></canvas>
      </div>
    </main>
  );
};

export default IncomePage;
