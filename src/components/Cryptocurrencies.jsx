import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import {
  Card, Row, Col, Input,
} from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Shimmer = () => {
  <Row gutter={[32, 32]} className="crypto-card-container">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((index) => (
      <Col xs={24} sm={12} lg={6} className="crypto-card" key={index}>
        <Card
          // key={crypto.uuid}
          // title={`${crypto.rank}. ${crypto.name}`}
          loading
        />
      </Col>
    ))}
  </Row>;
};

// eslint-disable-next-line react/prop-types
function Cryptocurrencies({ simplified }) {
  const count = simplified ? 12 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // here we are renaming data to cryptoList
  // we are passing the count as a query

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter(
      (coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  // if (isFetching) return <Shimmer />;
  if (isFetching) return 'Loading...';

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((crypto) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.uuid}>
            <Link to={`../crypto/${crypto.uuid}`} key={crypto.uuid}>
              <Card
                key={crypto.uuid}
                title={`${crypto.rank}. ${crypto.name}`}
                extra={(
                  <img
                    className="crypto-image"
                    src={crypto.iconUrl}
                    alt={crypto.name}
                  />
                )}
                hoverable
                loading={isFetching}
              >
                <p>
                  Price:
                  {millify(crypto.price)}
                </p>
                <p>
                  Market Cap:
                  {millify(crypto.marketCap)}
                </p>
                <p>
                  Daily Change:
                  {millify(crypto.change)}
                  %
                </p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Cryptocurrencies;
