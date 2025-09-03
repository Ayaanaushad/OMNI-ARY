import React, { useState } from 'react';
import { Header } from './components/Sidebar';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { CompetitorAnalysis } from './components/CompetitorAnalysis';
import { PostingSchedule } from './components/PostingSchedule';
import { ContentSystem } from './components/ContentSystem';
import { KpiDashboard } from './components/KpiDashboard';
import { Pricing } from './components/Pricing';
import type { View } from './types';
import { VIEWS } from './constants';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>(VIEWS[0]);

  const renderContent = () => {
    switch (activeView.id) {
      case 'summary':
        return <ExecutiveSummary />;
      case 'competitors':
        return <CompetitorAnalysis />;
      case 'schedule':
        return <PostingSchedule />;
      case 'content':
        return <ContentSystem />;
      case 'kpi':
        return <KpiDashboard />;
      case 'pricing':
        return <Pricing />;
      default:
        return <ExecutiveSummary />;
    }
  };

  return (
    <div className="min-h-screen text-zinc-800">
      <Header activeView={activeView} setActiveView={setActiveView} />
      <main className="p-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-zinc-200 pb-8 mb-10">
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 flex items-center tracking-tighter font-sora">
               {React.cloneElement(activeView.icon, { className: 'h-12 w-12 text-brand-accent' })}
              <span className="ml-5">{activeView.title}</span>
            </h1>
            <p className="text-zinc-600 mt-3 ml-[68px] max-w-3xl font-normal">{activeView.description}</p>
          </div>
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;