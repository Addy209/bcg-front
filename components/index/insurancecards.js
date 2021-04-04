import React from 'react'
import { Card, Avatar, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined ,ShoppingCartOutlined, LineChartOutlined} from '@ant-design/icons';

const { Meta } = Card;
const CardOffer=(props)=>{
    return(
        <div className="card">
<Card
    style={{ width: 300 }}
    cover={
      <img className="card"
        alt="example"
        src={props.img}
      />
    }
    actions={[
      <Button type="primary" icon={<LineChartOutlined />}>Compare</Button>,
      <Button type="primary" icon={<ShoppingCartOutlined />}>Buy One</Button>
    ]}
  >
    <Meta
      title={props.title}
      description={props.desc}
    />
  </Card></div>)
}
export default CardOffer