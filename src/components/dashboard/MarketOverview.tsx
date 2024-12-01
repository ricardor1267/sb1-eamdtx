import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MarketCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  chartData: number[];
}

function MarketCard({ title, value, change, isPositive, chartData }: MarketCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="text-sm text-gray-600 mb-1">{title}</h3>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xl font-semibold">{value}</span>
        <span className={`flex items-center text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
          {change}
        </span>
      </div>
      <div className="h-12 flex items-end space-x-1">
        {chartData.map((value, index) => (
          <div
            key={index}
            className={`w-full h-${Math.max(2, Math.floor(value * 12))} rounded-sm ${
              isPositive ? 'bg-green-100' : 'bg-red-100'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function MarketOverview() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <MarketCard
        title="S&P 500"
        value="5,648.40"
        change="+0.44%"
        isPositive={true}
        chartData={[0.2, 0.4, 0.3, 0.6, 0.5, 0.7, 0.8]}
      />
      <MarketCard
        title="Nasdaq 100"
        value="17,713.53"
        change="+1.13%"
        isPositive={true}
        chartData={[0.3, 0.5, 0.4, 0.7, 0.6, 0.8, 0.9]}
      />
      <MarketCard
        title="Dow Jones"
        value="41,563.08"
        change="+0.55%"
        isPositive={true}
        chartData={[0.4, 0.6, 0.5, 0.8, 0.7, 0.9, 1.0]}
      />
      <MarketCard
        title="Russell 2000"
        value="2,217.63"
        change="+0.67%"
        isPositive={true}
        chartData={[0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]}
      />
    </div>
  );
}