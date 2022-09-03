import React from 'react';
import millify from 'millify';
import {
  Col, Typography, Select,
} from 'antd';
import {
  DollarCircleOutlined,
  TrophyOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;
// eslint-disable-next-line no-unused-vars
const { Option } = Select;

// eslint-disable-next-line react/prop-types
function Stats({ props }) {
  const cryptoDetails = props;
  const stats = [
    {
      title: 'Price to USD',
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: '24h Volume',
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: 'Market Cap',
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: 'All-time-high(daily avg.)',
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price
        && millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  return (

    <Col className="coin-value-statistics">
      <Col className="coin-value-statistics-heading">
        <Title level={3} className="coin-details-heading">
          {cryptoDetails.name}
          {' '}
          Value Statistic
        </Title>
        <p>an overview of stats</p>
      </Col>
      {stats.map(({ title, value, icon }) => (
        <Col className="coin-stats">
          <Col className="coin-stats-name">
            <Text>{icon}</Text>
            <Text>{title}</Text>
          </Col>
          <Text className="stats">{value}</Text>
        </Col>
      ))}
    </Col>
  );
}

export default Stats;
