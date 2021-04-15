import React, {useState,useEffect} from 'react'
import { Layout, Menu, Dropdown, Button } from 'antd';
import Link from 'next/link'
import {withRouter} from 'next/router'
import {MenuOutlined} from '@ant-design/icons'

const { Header, Content, Footer } = Layout;



const Headr =({router})=>{
    const url=['/','/compare_policy','/analytics']
    const path=router.pathname
    const menu=(<><Menu.Item key="1"><Link href={url[0]}>Home</Link></Menu.Item>
        <Menu.Item key="2"><Link href={url[1]}>Policy Compare</Link></Menu.Item>
        <Menu.Item key="3"><Link href={url[2]}>Analytics</Link></Menu.Item></>)
    const mobilemenu=(<Menu theme="dark" defaultSelectedKeys={path==url[0]?['1']:path==url[1]?['2']:['3']}>
      {menu}
    </Menu>)
    const desktopmenu=(<Menu theme="dark" mode="horizontal" defaultSelectedKeys={path==url[0]?['1']:path==url[1]?['2']:['3']}>
      {menu}
    </Menu>)

  return (<Layout className="layout">
    <Header>
      <div className="logo">XYZ Insurance</div>
      <div className="desktopmenu">
        {desktopmenu}
      </div>
      <div className="mobilemenu">
      <Dropdown overlay={mobilemenu} trigger={['click']}>
      <Button style={{float:'right'}} className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      <MenuOutlined style={{fontSize:'20px'}} />
      </Button>
    </Dropdown>
      </div>
    </Header>
      </Layout>)
}

export default withRouter(Headr);