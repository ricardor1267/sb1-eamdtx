import React from 'react';
import { Flame, LineChart, Newspaper, Calendar, PieChart, BarChart3, Users, BookOpen, MessageSquare, Building2 } from 'lucide-react';
import { Link } from './Link';

export function Sidebar() {
  return (
    <aside className="w-60 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-4">
        <Flame className="h-8 w-8 text-blue-600" />
      </div>
      
      <nav className="flex-1">
        <div className="px-3 py-2">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Markets</h2>
          <Link icon={<LineChart />} label="Screener" active />
          <Link icon={<PieChart />} label="Heatmaps" />
          <Link icon={<Newspaper />} label="News" />
        </div>

        <div className="px-3 py-2">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Calendar</h2>
          <Link icon={<Calendar />} label="Earnings" />
          <Link icon={<BarChart3 />} label="Economy" />
        </div>

        <div className="px-3 py-2">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Data</h2>
          <Link icon={<PieChart />} label="Macro" />
          <Link icon={<LineChart />} label="Charting" />
          <Link icon={<BarChart3 />} label="Comparison" />
        </div>

        <div className="px-3 py-2">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Community</h2>
          <Link icon={<Users />} label="Superinvestors" />
          <Link icon={<Users />} label="Portfolios" />
          <Link icon={<MessageSquare />} label="Posts" />
          <Link icon={<BookOpen />} label="Articles" />
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <Link icon={<Building2 />} label="For Business" />
        <Link icon={<Flame />} label="Get Mobile App" />
      </div>
    </aside>
  );
}