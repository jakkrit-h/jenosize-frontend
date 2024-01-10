'use client';
import { theme } from '@/themes';
import { LineChart } from '@mui/x-charts';
export interface IGraphData {
  xAxis: string[];
  yAxis: number[];
}
interface IProps {
  data: IGraphData;
}

export default function StatisticGraphView({ data }: IProps) {
  const colors = [theme.palette.primary.main];
  return (
    <>
      <LineChart
        xAxis={[{ data: data.xAxis }]}
        series={[{ data: data.yAxis }]}
        height={300}
        colors={colors}
      />
    </>
  );
}
