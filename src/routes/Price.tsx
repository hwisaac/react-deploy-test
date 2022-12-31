import { useQuery } from "react-query";
import { fetchCoinTickers } from "../api";
import styled from "styled-components";
import { useParams } from "react-router-dom";

interface PriceProps {
  coinId: string;
}
interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
const PriceWrapper = styled.div`
  background-color: white;
  border: 1px solid #397cdc;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  span {
    font-size: 20px;
    font-weight: 700;
    margin-left: 30px;
    align-self: center;
  }
`;

const PriceTitle = styled.h2`
  font-size: 30px;
`;

function Price() {
  const { coinId } = useParams();
  const { isLoading, data: tickersData } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );

  return (
    <PriceWrapper>
      <PriceTitle>PRICE</PriceTitle>
      <span>
        {" "}
        {isLoading
          ? "loading.. "
          : `$ ${tickersData?.quotes?.USD?.price?.toFixed(3)}`}
      </span>
    </PriceWrapper>
  );
}

export default Price;
