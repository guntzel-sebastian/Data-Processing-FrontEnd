import ReactECharts from 'echarts-for-react';
import "@/style/charts.css"

const LineChart = () => {
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  }
  return (
    <ReactECharts
      className='line-chart'
      option={option}
    />
  )
}

export default LineChart;