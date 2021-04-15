import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {api_urls} from './constants'
import { useRouter } from 'next/router'
import {DisabledFormItem, SwitchItem} from './formitem'

import { Form, Input, Button, Switch, InputNumber,Row, Col, message } from 'antd';
import { route } from 'next/dist/next-server/server/router'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const Edit = (props) => {
    const router = useRouter()
    console.log(props)
  const onFinish = async(values) => {
    console.log('Success:', values);
    await axios.put(api_urls.get_put_single_object+props.id,values).then(res=>{
        console.log(res.data)
        message.success("Record Updated Successfully")
       props.refresh()
        
    }).catch(err=>{
      console.log(err)
        message.error("Record not Updated")
    })

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    
  };
  const [data,setdata]=useState(props.val.data)
  const [feature,setfeature]=useState(props.val.feature[0])

  useEffect(()=>{
    setdata(props.val.data)
    setfeature(props.val.feature[0])
  },[props.val.data.Premium,props.val.feature[0]])

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
        <Row>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
    <DisabledFormItem label="Policy ID"  val={data.Policy_id} />
      <DisabledFormItem label="Customer ID" val={data.Customer_id}/>   
      <DisabledFormItem
        label="Purchased On"
        val={new Date(data.Date_of_Purchase).toDateString()}
      />
      <DisabledFormItem
        label="Fuel"
        val={data.Fuel}
      />
      <DisabledFormItem
        label="Vehicle_Segment"
        val={data.Vehicle_Segment}
     />

      <Form.Item
        label="Premium"
        name="Premium"
      >
         <InputNumber defaultValue={data.Premium} min={1} max={1000000} />
      </Form.Item>
      </Col>
      
       <Col xs={24} sm={24} md={24} lg={12} xl={12}>
      <SwitchItem name="bodily_injury_liability" label="Bodily Injury Liability"
        defaultChecked={feature.bodily_injury_liability}
      />

      <SwitchItem name="personal_injury_protection" label="Personal Injury Protection"
        defaultChecked={feature.personal_injury_protection}
     />

      <SwitchItem name="collision" label="Collision"
        defaultChecked={feature.collision}
      />

      <SwitchItem name="comprehensive" label="Comprehensive"
        defaultChecked={feature.comprehensive}
      />

      <SwitchItem name="property_damage_liability" label="Property Damage Liability"
    defaultChecked={feature.property_damage_liability}
      />

       </Col>

      </Row>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
      </div>
      
    </Form>
  );
};

export default Edit