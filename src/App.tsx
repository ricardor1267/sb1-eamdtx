import React from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { MarketOverview } from './components/dashboard/MarketOverview';
import { StockTable } from './components/dashboard/StockTable';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <MarketOverview />
          
          <div className="mt-6">
            <StockTable />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;