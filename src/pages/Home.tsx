import { Layout, Statistic, Breadcrumb, Row, Col, Card } from 'antd';

import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const Home = (): JSX.Element => {
  const { Countdown } = Statistic;
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

  function onFinish() {
    console.log('finished!');
  }

  function onChange(val: any) {
    if (4.95 * 1000 < val && val < 5 * 1000) {
      console.log('changed!');
    }
  }
  

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item></Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Row gutter={16}>
              <Col span={12}>
                <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
              </Col>
              <Col span={12}>
                <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
              </Col>
              <Col span={24} style={{ marginTop: 32 }}>
                <Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
              </Col>
              <Col span={12}>
                <Countdown title="Countdown" value={Date.now() + 10 * 1000} onChange={onChange} />
              </Col>
            </Row>
            <div className="site-statistic-demo-card">
              <Row gutter={16}>
                <Col span={12}>
                  <Card>
                    <Statistic
                      title="Active"
                      value={11.28}
                      precision={2}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<ArrowUpOutlined />}
                      suffix="%"
                    />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card>
                    <Statistic
                      title="Idle"
                      value={9.3}
                      precision={2}
                      valueStyle={{ color: '#cf1322' }}
                      prefix={<ArrowDownOutlined />}
                      suffix="%"
                    />
                  </Card>
                </Col>
              </Row>
            </div>
            ,
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
