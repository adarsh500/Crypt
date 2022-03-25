import React from "react";
import { Row, Col, Statistic, Typography } from "antd";

//with this we can just use <Title></Title> instead of
//<Typography.Title></Typography.Title>
const { Title } = Typography;

const Homepage = () => {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value="1000" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value="1000" />
          <Col span={12}>
            <Statistic title="Total Maket Cap" value="1000" />
          </Col>
          <Col span={12}>
            <Statistic title="Total 24h Volume" value="1000" />
          </Col>
          <Col span={12}>
            <Statistic title="Total Markets" value="1000" />
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
