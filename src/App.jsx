import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import AIAssistant from './components/AIAssistant';
import CasesTable from './components/CasesTable';
import CustomerSearch from './components/CustomerSearch';
import Telephony from './components/Telephony';
import Memberships from './components/Memberships';

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');

  return (
    <div className="flex h-screen bg-[#f5f5f7]">
      <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />

      <main className="flex-1 flex flex-col overflow-hidden min-w-0">
        <TopBar activeNav={activeNav} />

        <div className="flex-1 overflow-y-auto pb-8">
          <div className="flex flex-col gap-6 px-8 pt-6">
            {/* Welcome */}
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-[28px] text-[#212121] m-0">Welcome back, Sarah!</h1>
              <p className="text-[#6b6b6b] text-[15px]">
                Here's what's happening with your cases today.
              </p>
            </div>

            {/* AI Assistant */}
            <AIAssistant />

            {/* Content Body */}
            <div className="flex gap-6">
              {/* Left Column */}
              <div className="flex flex-col gap-6 flex-1 min-w-0">
                <CasesTable />
                <CustomerSearch />
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-6 w-[412px] shrink-0">
                <Telephony />
                <Memberships />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
