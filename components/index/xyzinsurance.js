import React from 'react'
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import CarouselView from './corousel'
import CardOffer from './insurancecards'

const { Content, Footer } = Layout;

const InsuranceBody=()=>{

    return(
  <Layout>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 60 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <CarouselView />
        <Row>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <CardOffer img='/45.jpg' title="Life Insurance" desc="Life Insurance policies offered by us" />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <CardOffer img='/46.jpg' title="Mobile Insurance" desc="Mobile Insurance policies offered by us" />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <CardOffer img='/47.jpg' title="Covid 19 Insurance" desc="Covid 19 Insurance policies offered by us" />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <CardOffer img='/48.png' title="Vehicle Insurance" desc="Vehicle Insurance policies offered by us" />
        </Col>
        </Row>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Footer Content Goes Here</Footer>
  </Layout>)
}

export default InsuranceBody;