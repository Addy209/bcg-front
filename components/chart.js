import React,{useState, useEffect} from 'react'
import {MonthName,chartType} from './constants'
import Chart from 'react-google-charts'
import axios from 'axios'
import {api_urls} from './constants'

const Charts=(props)=>{
    
    const temp_data=props.chartData.map(val=>{
        return [MonthName[Number(val.month)-1],val.count]})
    const mapped_data=[["Month","Count"],...temp_data]

    const [data,setData]=useState(mapped_data)
    const [regionData, setRegionData]=useState(null)

    useEffect(() =>{
       
           axios.get(`${api_urls.get_chart_data}?region=${props.Region}`).then(res=>{
               console.log(res.data)
                const temp_data=res.data.data.map(val=>{
                return [MonthName[Number(val.month)-1],val.count]})
                const mapped_data=[["Month","Count"],...temp_data]
                setRegionData(mapped_data)
            })
    
},[props.Region])


    
    
    return(
    <Chart
  width={"800px"}
  height={'400px'}
  chartType={props.chartType}
  loader={<div>Loading Chart</div>}
  data={props.Region?regionData:data}
  options={{
    // Material design options
    chart: {
      title: 'Company Performance',
      subtitle: `Sales in 2018 `,
    },
    hAxis: {
      title: 'Month',
    },
    vAxis: {
      title: 'Count',
    },
    animation: {
      startup: true,
      easing: 'linear',
      duration: 1500,
    },
    enableInteractivity: true,
  }}
  chartEvents={[
    {
      eventName: 'animationfinish',
      callback: () => {
        console.log('Animation Finished')
      },
    },
  ]}

  />)
}
export default Charts