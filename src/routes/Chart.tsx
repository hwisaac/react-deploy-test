import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useParams } from "react-router-dom";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
}
export default function Chart() {
  const { coinId } = useParams();

  const { isLoading, data } = useQuery<IHistorical[]>(["nicoapi", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type='candlestick'
          series={[
            {
              name: "Prices",
              data: data?.map((price) => {
                return {
                  x: new Date(price.time_close),
                  y: [price.open, price.high, price.low, price.close].map(
                    Number
                  ),
                };
              }) as any,
            },
          ]}
          options={{
            chart: {
              type: "candlestick",
              height: 350,
            },
            title: {
              text: "CandleStick Chart",
              align: "left",
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
          }}
        />
        // <ApexChart series={stat.series} type='candlestick' height={350} />
      )}
    </div>
  );
}
