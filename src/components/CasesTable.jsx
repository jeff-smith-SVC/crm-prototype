const cases = [
  {
    id: 'CS-10482',
    subject: 'Billing dispute - overcharge',
    status: 'Open',
    statusColor: '#1f7a47',
    priority: 'High',
    priorityColor: '#c33',
    updated: 'Today, 9:42 AM',
  },
  {
    id: 'CS-10478',
    subject: 'Rx auto-refill not working',
    status: 'In Progress',
    statusColor: '#a65900',
    priority: 'Medium',
    priorityColor: '#a65900',
    updated: 'Today, 8:15 AM',
  },
  {
    id: 'CS-10465',
    subject: 'Account access recovery',
    status: 'Open',
    statusColor: '#1f7a47',
    priority: 'High',
    priorityColor: '#c33',
    updated: 'Yesterday',
  },
  {
    id: 'CS-10451',
    subject: 'Insurance card update request',
    status: 'Pending',
    statusColor: '#6b6b6b',
    priority: 'Low',
    priorityColor: '#707070',
    updated: 'Apr 7, 2026',
  },
  {
    id: 'CS-10443',
    subject: 'Delivery address change',
    status: 'Resolved',
    statusColor: '#2961de',
    priority: 'Low',
    priorityColor: '#707070',
    updated: 'Apr 6, 2026',
  },
];

const columns = ['Case ID', 'Subject', 'Status', 'Priority', 'Last Updated'];
const colWidths = ['w-[140px]', 'w-[200px]', 'w-[100px]', 'w-[100px]', 'w-[120px]'];

export default function CasesTable() {
  return (
    <div className="bg-white border border-[#dedede] rounded-lg p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-[#212121] text-lg">My Recent Cases</span>
        <button className="text-[#2961de] text-[13px] font-medium cursor-pointer hover:underline">
          View All
        </button>
      </div>

      <div className="flex items-start">
        {columns.map((col, i) => (
          <div key={col} className={`${colWidths[i]} pb-2`}>
            <span className="font-semibold text-[#707070] text-xs">{col}</span>
          </div>
        ))}
      </div>

      <div className="bg-[#dedede] h-px w-full" />

      {cases.map((c, index) => (
        <div key={c.id}>
          <div className="flex items-center py-2.5">
            <div className="w-[140px]">
              <button className="text-[#2961de] text-[13px] font-medium cursor-pointer hover:underline">
                {c.id}
              </button>
            </div>
            <div className="w-[200px]">
              <span className="text-[#212121] text-[13px]">{c.subject}</span>
            </div>
            <div className="w-[100px]">
              <span
                className="text-[11px] font-medium px-2 py-0.5 rounded"
                style={{
                  backgroundColor: `${c.statusColor}1f`,
                  color: c.statusColor,
                }}
              >
                {c.status}
              </span>
            </div>
            <div className="w-[100px]">
              <span className="text-[13px]" style={{ color: c.priorityColor }}>
                {c.priority}
              </span>
            </div>
            <div className="w-[120px]">
              <span className="text-[#707070] text-xs">{c.updated}</span>
            </div>
          </div>
          {index < cases.length - 1 && <div className="bg-[#dedede] h-px w-full" />}
        </div>
      ))}

      <div className="bg-[#dedede] h-px w-full" />
    </div>
  );
}
