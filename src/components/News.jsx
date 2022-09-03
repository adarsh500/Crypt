import React, { useState } from 'react';
import moment from 'moment';
import {
  Select, Typography, Row, Col, Avatar, Card,
} from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

// eslint-disable-next-line react/prop-types
function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const placeholderImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';
  const count = simplified ? 6 : 12;
  const { data: cryptosList } = useGetCryptosQuery(count);
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory,
    count,
  });

  if (isFetching) return 'Loading...';
  if (!cryptoNews?.value) return 'Loading...';

  console.log(cryptoNews);
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a coin"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            // eslint-disable-next-line max-len
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {cryptosList?.data?.coins.map((coin) => (
              <Option value={coin.name}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Col xs={24} md={12} lg={8} key={index}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={5}>
                  {news.name.length > 70 ? `${news.name.substring(0, 70)}...` : news.name}
                </Title>
                <img
                  style={{ maxWidth: '200px', maxHeight: '100px' }}
                  src={news?.image?.thumbnail?.contentUrl || placeholderImage}
                  alt="news"
                />
              </div>
              <p className="news-description">
                {news.description.length > 250
                  ? `${news.description.substring(0, 250)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl
                      || placeholderImage
                    }
                    alt="news"
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf('ss').fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default News;
