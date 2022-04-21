import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { Title } = Typography;

type TValues = {
  name: string;
  password: string;
};
const ForgotPassword = (): JSX.Element => {
  const onFinish = (values: TValues) => {
    console.log(values);
  };

  return (
    <Row style={{ height: '100vh', overflow: 'hidden' }} justify={'center'} align={'middle'}>
      <Col md={9} xl={6}>
        <Row justify={'center'} style={{ margin: '2rem 0rem' }}>
          <Title level={3}>Forgot your password ? </Title>
          <p>enter your email address to reset password</p>
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
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Button
              block
              style={{ borderRadius: '.7rem' }}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              send
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default ForgotPassword;
