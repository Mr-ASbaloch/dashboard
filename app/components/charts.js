
import dynamic from 'next/dynamic';
import Chart from "react-apexcharts";

const Charts = () => {
  const salesData = {
    series: [{
      name: 'Sales',
      data: [450, 300, 500, 600, 400, 300, 200, 300, 400, 500, 600, 700]
    }],
    options: {
      chart: {
        type: 'line',
        height: 350
      },
      title: {
        text: 'Sales Over Time'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    }
  };

  const orderStatusData = {
    series: [70, 20, 10],
    labels: ['Completed', 'Pending', 'Cancelled'],
    options: {
      chart: {
        type: 'donut',
        height: 350
      },
      title: {
        text: 'Order Status Distribution'
      },
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Chart options={salesData.options} series={salesData.series} type="line" height={350} />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Chart options={orderStatusData.options} series={orderStatusData.series} type="donut" height={350} />
      </div>
    </div>
  );
};

export default Charts;
