import './App.js';
import { Layout, Button, Menu, theme, Card, Col, Row } from 'antd';
import { Meta } from 'antd/es/list/Item.js';
import React, { useState } from 'react';
import { 
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    AuditOutlined
} from '@ant-design/icons';

const { Header,  Sider, Content } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: '會員專區',
              },
              {
                key: '2',
                icon: <ShoppingCartOutlined />,
                label: '購物專區',
                
              },
              {
                key: '3',
                icon: <AuditOutlined />,
                label: '訂單明細',
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 450,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
             <Row gutter={16}>
                <Col span={8}>
                <Card hoverablestyle={{
                    width: 240,
                    }}
                    cover={<img alt="example" 
                    src="https://dinotaeng.com/web/product/extra/small/202309/88e7a45bcc2544014f3add52e6c60b9b.png" />}>
                    <b>dinotaeng公仔</b>
                </Card>
                </Col>
                <Col span={8}>
                <Card hoverablestyle={{
                    width: 240,
                    }}
                    cover={<img alt="example" 
                    src="https://cafe24img.poxo.com/dinotaeng/web/upload/NNEditor/20200418/%EB%AC%B4%EC%A0%9C-24-03_shop1_164146.jpg" />}>
                    <b>dinotaeng滑鼠墊</b>
                </Card>
                </Col>
                <Col span={8}>
                <Card hoverablestyle={{
                    width: 240,
                    }}
                    cover={<img alt="example" 
                    src="https://hips.hearstapps.com/hmg-prod/images/vwfwefwef-64b784ec2e6cb.jpg?crop=0.474xw:0.948xh;0.0114xw,0.0523xh&resize=640:*" />}>
                    <b>dinotaeng馬克杯</b>
                </Card>
                </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    );
  };

  export default App;