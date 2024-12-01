import React from 'react';
import { Star } from 'lucide-react';

interface Stock {
  id: number;
  name: string;
  symbol: string;
  price: string;
  dayChange: string;
  monthChange: string;
  yearChange: string;
  marketCap: string;
  logo: string;
  isPositive: boolean;
}

const stocks: Stock[] = [
  {
    id: 1,
    name: 'Apple',
    symbol: 'AAPL',
    price: '$207.23',
    dayChange: '+0.36%',
    monthChange: '-1.48%',
    yearChange: '+16.06%',
    marketCap: '$3.22 T',
    logo: '🍎',
    isPositive: true
  },
  {
    id: 2,
    name: 'Microsoft',
    symbol: 'MSFT',
    price: '$417.14',
    dayChange: '+0.18%',
    monthChange: '-1.11%',
    yearChange: '+9.42%',
    marketCap: '$3.00 T',
    logo: '⊞',
    isPositive: true
  },
  // Add more stocks as needed
];

export function StockTable() {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex space-x-4">
          <button className="px-3 py-1 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg">
            Companies
          </button>
          <button className="px-3 py-1 text-sm font-medium text-gray-500 hover:bg-gray-100 rounded-lg">
            Sectors
          </button>
          <button className="px-3 py-1 text-sm font-medium text-gray-500 hover:bg-gray-100 rounded-lg">
            Industries
          </button>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-sm text-gray-500 border-b border-gray-200">
            <th className="px-4 py-3 text-left font-medium">#</th>
            <th className="px-4 py-3 text-left font-medium">Company</th>
            <th className="px-4 py-3 text-right font-medium">Price</th>
            <th className="px-4 py-3 text-right font-medium">1D %</th>
            <th className="px-4 py-3 text-right font-medium">1M %</th>
            <th className="px-4 py-3 text-right font-medium">YTD %</th>
            <th className="px-4 py-3 text-right font-medium">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-3">
                <Star className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer" />
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg mr-3">
                    {stock.logo}
                  </span>
                  <div>
                    <div className="font-medium">{stock.name}</div>
                    <div className="text-sm text-gray-500">{stock.symbol}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-right font-medium">{stock.price}</td>
              <td className={`px-4 py-3 text-right ${stock.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {stock.dayChange}
              </td>
              <td className="px-4 py-3 text-right text-red-500">{stock.monthChange}</td>
              <td className="px-4 py-3 text-right text-green-500">{stock.yearChange}</td>
              <td className="px-4 py-3 text-right font-medium">{stock.marketCap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}