import React, { useState } from 'react';
import { Input, AutoComplete, Modal, Button, Select } from 'antd';
import axios from 'axios'
import {api_urls, modalcolumns} from './constants'
import {EditOutlined,CheckCircleTwoTone, CloseCircleTwoTone} from '@ant-design/icons'
import Link from 'next/link'
import {debounce} from 'debounce'

const {Option}=Select;

const buildresp=(data)=>{
console.log(data)
return data.data.map((val,index)=>{
  const category=`Policy id: ${val.Policy_id} and Customer id: ${val.Customer_id}`
  return{     
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
                {category}
             
          </div>
        )
          }})
    
}

const Complete = () => {
  let cancelToken
  const [options, setOptions] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modaldata,setModalData]=useState(null)
 

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [selectedOption, setSelectedOption]=useState("10")
  const handleChange=(value)=> {
  setSelectedOption(old=>value)
}

  const handleSearch = (value) => {
    console.table(value)
    if(value==""){
      return
    }

    const make_api_call=()=>{
    if(typeof cancelToken!= typeof undefined){
      cancelToken.cancel("Cancelled")
    }
    cancelToken=axios.CancelToken.source()
      axios.get(api_urls.search+`?search_key=${value}&by=${selectedOption}` ,{cancelToken:cancelToken.token}).then(res=>{
      const data=res.data
      const resp=buildresp(data)
      setOptions(resp)
    }).catch(err=>{
      console.log(err)
    })
  }

  debounce(()=>make_api_call(),1000).call()
  
    
  };

  const onSelect = async(value) => {
    const pid=value.substring(11,16).match(/\d+/g);
    console.log(pid)
    await axios.get(api_urls.get_put_single_object+pid[0]).then(res=>{
      const resp=res.data.data
      const feature=res.data.feature[0]
      console.log(feature)
      const table=(<div>
        <div id="edit">
        <h5>Policy Details</h5>
        <Link href={`/policy/${resp.Policy_id}`}>
        <Button type="primary" shape="round" icon={<EditOutlined />} size={32}>Edit Details</Button>
        </Link>
        </div>
        <table>
        <thead>
          <tr>
          <th>Customer</th>
          <th>Policy</th>
          <th>Date of Purchase</th>
          <th>Vehicle Segment</th>
          <th>Fuel</th>
          <th>Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="details">{resp.Customer_id}</td>
            <td id="details">{resp.Policy_id}</td>
            <td id="details">{resp.Date_of_Purchase}</td>
            <td id="details">{resp.Vehicle_Segment}</td>
            <td id="details">{resp.Fuel}</td>
            <td id="details">₹ {resp.Premium}</td>

          </tr>
        </tbody>
      </table>
       <h5 id="feature">Policy Features</h5>
      <table>
        <thead>
          <tr>
          <th>Policy</th>
          <th>Body Injury Liability</th>
          <th>Collision</th>
          <th>Comprehensive</th>
          <th>Personal Injury Protection</th>
          <th>Property Damage Liability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="feature">{feature.Policy_id}</td>
            <td id="feature">{feature.bodily_injury_liability?<CheckCircleTwoTone twoToneColor="#52c41a" />:<CloseCircleTwoTone twoToneColor="#e07169" />}</td>
            <td id="feature">{feature.collision?<CheckCircleTwoTone twoToneColor="#52c41a" />:<CloseCircleTwoTone twoToneColor="#e07169" />}</td>
            <td id="feature">{feature.comprehensive?<CheckCircleTwoTone twoToneColor="#52c41a" />:<CloseCircleTwoTone twoToneColor="#e07169" />}</td>
            <td id="feature">{feature.personal_injury_protection?<CheckCircleTwoTone twoToneColor="#52c41a" />:<CloseCircleTwoTone twoToneColor="#e07169" />}</td>
            <td id="feature">{feature.property_damage_liability?<CheckCircleTwoTone twoToneColor="#52c41a" />:<CloseCircleTwoTone twoToneColor="#e07169" />}</td>
            

          </tr>
        </tbody>
      </table>
      
      </div>)
      setModalData(table)
      setIsModalVisible(true)
    })
  };

  return (
    <>
    <Select defaultValue="10" size="large" onChange={handleChange}>
        <Option value="10">Policy Id</Option>
        <Option value="11">Customer Id</Option>
      </Select>
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: 300,
      }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="Search..." enterButton  />
    </AutoComplete>
    <Modal title="Policy Details" width={1000} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {modaldata}
      </Modal>
    </>
  );
};

export default Complete;