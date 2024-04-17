// import React, { useState, useEffect } from 'react';
// import './styles.css'; // Import the CSS file
// import LineChart from './LineChart';
// import SummaryTable from './SummaryTable';
// import moment from 'moment';

// const App = () => {
//   const [chartData, setChartData] = useState({}); // State for chart data
//   const [summaryData, setSummaryData] = useState({}); // State for summary data

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/api/sample-data/summary'); // Adjust the API endpoint as needed
//         const data = await response.json();
//         setChartData(formatChartData(data.data)); // Format chart data
//         setSummaryData(data.summary); // Set summary data
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Function to format chart data (timestamps and status colors)
//   function formatChartData(data) {
//     const labels = data.map(item => moment(item.ts).format('HH:mm'));
//     const datasets = [{
//       label: 'Machine Status',
//       data: data.map(item => item.machine_status === 1 ? 'green' : (item.machine_status === 0 ? 'yellow' : 'red')),
//       backgroundColor: (context) => {
//         const value = context.dataset.data[context.dataIndex];
//         const color = value === 'green' ? 'rgba(54, 162, 235, 0.2)' : (value === 'yellow' ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255, 99, 132, 0.2)');
//         return color;
//       },
//       borderColor: (context) => {
//         const value = context.dataset.data[context.dataIndex];
//         const color = value === 'green' ? 'rgba(54, 162, 235, 1)' : (value === 'yellow' ? 'rgba(255, 215, 0, 1)' : 'rgba(255, 99, 132, 1)');
//         return color;
//       },
//       pointRadius: 5, // Set point size
//     }];
//     return { labels, datasets };
//   }

//   return (
//     <div className="App">
//       <h1>Machine Status Monitoring</h1>
//       <LineChart chartData={chartData} />
//       <SummaryTable summaryData={summaryData} />
//     </div>
//   );
// };

// export default App;
// App.js
import React from 'react';
import TimelineChart from './TimelineChart';

const App = () => {
  return (
    <div>
      <TimelineChart />
    </div>
  );
};

export default App;