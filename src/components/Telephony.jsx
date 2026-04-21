import { useState } from 'react';

const statuses = ['Available', 'Busy', 'Away', 'Offline'];
const statusColors = {
  Available: '#1f7a47',
  Busy: '#c33',
  Away: '#a65900',
  Offline: '#707070',
};

const recentCalls = [
  { name: 'John Martinez', time: '2 min ago', type: 'Inbound', typeColor: '#1f7a47' },
  { name: 'Lisa Chen', time: '18 min ago', type: 'Outbound', typeColor: '#2961de' },
  { name: 'Robert Davis', time: '45 min ago', type: 'Inbound', typeColor: '#1f7a47' },
];

const stats = [
  { value: '24', label: "Today's Calls" },
  { value: '4m 32s', label: 'Avg Handle' },
  { value: '3', label: 'In Queue' },
];

export default function Telephony() {
  const [activeStatus, setActiveStatus] = useState('Available');

  return (
    <div className="bg-white border border-[#dedede] rounded-lg p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-[#212121] text-lg">Telephony</span>
        <div className="flex gap-1.5 items-center">
          <div
            className="size-2 rounded-full"
            style={{ backgroundColor: statusColors[activeStatus] }}
          />
          <span
            className="text-[13px] font-medium"
            style={{ color: statusColors[activeStatus] }}
          >
            {activeStatus}
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setActiveStatus(status)}
            className={`text-xs font-medium px-3.5 py-2 rounded-[6px] cursor-pointer transition-colors ${
              activeStatus === status
                ? 'text-white'
                : 'bg-[#f5f5f7] text-[#6b6b6b] hover:bg-[#eaeaec]'
            }`}
            style={activeStatus === status ? { backgroundColor: statusColors[status] } : {}}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="bg-[#dedede] h-px w-full" />

      <div className="flex justify-between">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[#f5f5f7] rounded-[6px] px-4 py-3 flex flex-col items-center gap-1">
            <span className="font-bold text-[#212121] text-[22px]">{stat.value}</span>
            <span className="text-[#6b6b6b] text-[11px]">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="bg-[#dedede] h-px w-full" />

      <span className="font-semibold text-[#212121] text-sm">Recent Calls</span>

      {recentCalls.map((call) => (
        <div key={call.name} className="flex items-center justify-between py-1.5">
          <div className="flex gap-2.5 items-center">
            <div className="bg-[#dedede] rounded-full size-7" />
            <div className="flex flex-col gap-0.5">
              <span className="font-medium text-[#212121] text-[13px]">{call.name}</span>
              <span className="text-[#707070] text-[11px]">{call.time}</span>
            </div>
          </div>
          <span
            className="text-[11px] font-medium px-2 py-0.5 rounded"
            style={{
              backgroundColor: `${call.typeColor}1f`,
              color: call.typeColor,
            }}
          >
            {call.type}
          </span>
        </div>
      ))}
    </div>
  );
}
