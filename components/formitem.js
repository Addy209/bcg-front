import React from 'react'
import {Form, Input,Switch} from 'antd'

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export const DisabledFormItem=props=>{

    return(
        <Form.Item
        label={props.label}
      >
        <Input defaultValue={props.val} disabled/>
      </Form.Item>
        )
}

export const SwitchItem=props=>{
    return(
    <Form.Item {...tailLayout} name={props.name} label={props.label}>
        <Switch defaultChecked={props.defaultChecked} />
      </Form.Item>)
}