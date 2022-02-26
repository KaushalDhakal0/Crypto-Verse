import React from "react";
import millify from "millify";
import { Row, Col, Avatar } from "antd";

import { useGetExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;
  // Note: To access this endpoint you need premium plan
  if (isFetching) return <Loader />;
  console.log(exchangesList);

  return (
    <>
      <Row style={{ border: "2px solid black", marginBottom: "10px" }}>
        <Col span={6}>Rank</Col>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
      </Row>
      {exchangesList.map((data) => (
        <Row style={{ marginBottom: "5px" }}>
          <Col span={6}>{data.rank}</Col>
          <Col span={6}>
            <Avatar src={data.iconUrl} /> {data.name}
          </Col>
          <Col span={6}>{millify(data["24hVolume"])}</Col>
          <Col span={6}>{data.numberOfMarkets}</Col>
        </Row>
      ))}
    </>
  );
};

export default Exchanges;
