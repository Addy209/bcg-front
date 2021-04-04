import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Headr from '../components/header'
import Complete from '../components/body'
import axios from 'axios'
import {api_urls, chartType, regions} from '../components/constants'
import Charts from '../components/chart'
import React, {useState} from 'react'
import {Radio,Typography,Select} from 'antd'

const { Title } = Typography
const { Option }=Select

const options = [
  { label: 'Bar', value: 0 },
  { label: 'Line', value: 1 },
  { label: 'Pie', value: 2 },
];

const Analytics=(props) =>{
  console.log(props)
  const [selectedValue, setSelectedValue]=useState(0)
  const [selectedRegion, setSelectedRegion]=useState(0)
  const onchange=(e)=>{
    setSelectedValue(e.target.value)
  }

  const handleChange=(val)=>{
    setSelectedRegion(val)
  }
  return (
    <>
    <Headr />
    <div className="regionselect">
      <Title level={5}>Select Region: &nbsp;</Title>
      <Select defaultValue={0} style={{width:135}} onChange={handleChange}>
      <Option value={0}>All Region</Option>
      <Option value={1}>East</Option>
      <Option value={2}>West</Option>
      <Option value={3}>North</Option>
      <Option value={4}>South</Option>
      </Select>
    </div>
    <div id="radio">
      <div className="radiotitle"><Title level={5}>Select Chart Type: &nbsp;</Title></div> <Radio.Group
          options={options}
          onChange={(event)=>onchange(event)}
          value={selectedValue}
          optionType="button"
          buttonStyle="solid"
        />
    </div>
    <div id="chart">

    <Charts chartData={props.analytics.data} chartType={chartType[selectedValue]} Region={regions[selectedRegion]}/>
    </div>
    </>
  )
}

export const getServerSideProps=async(context)=>{
      let propsdata=null
      await axios.get(api_urls.get_chart_data).then(res=>{
        propsdata=res.data
      })

      return{
        props:{"analytics":propsdata

        }
      }
}

export default Analytics