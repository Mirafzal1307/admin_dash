import { Form, Input, Button, Row, Col, Typography, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import svg from '../../svgs/dashboard.svg';
import { login } from '../../app/slices/Auth';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
const { Title } = Typography;

type TValues = {
  name: string;
  password: string;
};
const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const Auth = useAppSelector((state) => state.Auth);

  const [submited, setSubmited] = useState(false);

  const history = useHistory();

  const onFinish = (values: TValues) => {
    dispatch(login(values));

    setSubmited(!submited);
  };
  useEffect(() => {
    Auth.token && history.push('/');
  }, [Auth.token]);

  return (
    <Row style={{ height: '100vh', overflow: 'hidden' }} justify={'center'} align={'middle'}>
      <Col md={9} xl={6}>
        {/*xs={20} md={10} lg={6}*/}
        <Row style={{ margin: '2rem 0rem' }}>
          <Title level={3}>Login</Title>
        </Row>

        <Form
          layout={'vertical'}
          size={'large'}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input
              autoComplete={'off'}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </Form.Item>

          <Row style={{ margin: '1rem 0rem' }}>
            <Link to="/forgot-password" className="login-form-forgot">
              Forgot password
            </Link>
          </Row>

          {Auth.status === 'pending' && (
            <Row style={{ margin: '1rem' }} justify="center">
              <Spin />
            </Row>
          )}
          {Auth.status === 'error' && (
            <Row style={{ margin: '1rem' }} justify="center">
              <div className="alert alert-danger" role="alert">
                {Auth.error.message}
              </div>
            </Row>
          )}

          <Form.Item>
            <Button
              block
              style={{ borderRadius: '.7rem' }}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
            {/* Or <a href="">register now!</a> */}
          </Form.Item>
        </Form>
      </Col>
      <Col className={'card_col'} xs={0} xl={10} push={4}>
        <Row className="login_div" align="middle">
          <Col md={20}>
            <img style={{ width: '100%' }} src={svg} />
          </Col>
          <Col md={24} className="welcome_div">
            <Title level={3}> Welcome to emilus</Title>
            <div style={{ marginRight: '5rem' }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis
                elit fermentum pellentesque.
              </p>
              <div style={{ textAlign: 'end' }}></div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Login;
