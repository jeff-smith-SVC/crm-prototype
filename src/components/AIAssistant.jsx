import { useState } from 'react';

const actions = [
  {
    id: 1,
    priority: 'Urgent',
    priorityColor: '#c33',
    title: 'Follow up on CS-10482 — Billing dispute',
    description: 'Customer called twice yesterday. SLA breach in 2 hours.',
    buttonText: 'Open Case',
  },
  {
    id: 2,
    priority: 'High',
    priorityColor: '#a65900',
    title: 'Complete callback to Lisa Chen',
    description: 'Scheduled callback at 10:30 AM regarding Rx auto-refill issue.',
    buttonText: 'Start Call',
  },
  {
    id: 3,
    priority: 'Recommended',
    priorityColor: '#2961de',
    title: 'Review 5 new cases assigned overnight',
    description: '3 from Pharmacy Benefits queue, 2 from Member Services.',
    buttonText: 'View Cases',
  },
];

export default function AIAssistant() {
  const [dismissed, setDismissed] = useState(false);
  const [helpful, setHelpful] = useState(null);

  if (dismissed) return null;

  return (
    <div className="bg-white border border-[#dedede] rounded-lg shadow-[0px_2px_12px_0px_rgba(112,61,199,0.06)] p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2.5 items-center">
          <div className="bg-[#703dc7] rounded-[6px] size-7 flex items-center justify-center text-white font-bold text-sm">
            ✦
          </div>
          <span className="font-semibold text-[#212121]">AI Assistant</span>
          <span className="bg-[rgba(112,61,199,0.12)] text-[#703dc7] text-[11px] font-medium px-2 py-0.5 rounded">
            Beta
          </span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-[#707070] text-xs font-medium hover:text-[#212121] transition-colors cursor-pointer"
        >
          Dismiss
        </button>
      </div>

      <p className="text-[#6b6b6b] text-sm">
        Good morning, Sarah. You have 3 high-priority cases that need attention and 2 callbacks scheduled before noon.
      </p>

      <div className="bg-[#dedede] h-px w-full" />

      <span className="font-semibold text-[#212121] text-[13px]">Suggested Next Actions</span>

      {actions.map((action) => (
        <div
          key={action.id}
          className="bg-[#f5f5f7] rounded-[6px] px-3.5 py-3 flex items-center justify-between"
        >
          <div className="flex gap-3 items-center">
            <div
              className="w-[3px] h-10 rounded-sm"
              style={{ backgroundColor: action.priorityColor }}
            />
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-2 items-center">
                <span
                  className="text-[11px] font-medium px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: `${action.priorityColor}1f`,
                    color: action.priorityColor,
                  }}
                >
                  {action.priority}
                </span>
                <span className="font-semibold text-[#212121] text-[13px]">{action.title}</span>
              </div>
              <span className="text-[#6b6b6b] text-xs">{action.description}</span>
            </div>
          </div>
          <button className="bg-white border border-[#dedede] rounded-[6px] px-3.5 py-2 text-[#2961de] text-xs font-medium hover:bg-[#f5f5f7] transition-colors cursor-pointer">
            {action.buttonText}
          </button>
        </div>
      ))}

      <div className="flex items-center justify-between text-[11px]">
        <span className="text-[#707070]">Updated just now</span>
        <div className="flex gap-3 items-center">
          <span className="text-[#707070]">Was this helpful?</span>
          <button
            onClick={() => setHelpful(true)}
            className={`font-medium cursor-pointer ${helpful === true ? 'text-[#1f7a47]' : 'text-[#2961de]'}`}
          >
            {helpful === true ? '✓ Yes' : 'Yes'}
          </button>
          <button
            onClick={() => setHelpful(false)}
            className={`font-medium cursor-pointer ${helpful === false ? 'text-[#c33]' : 'text-[#2961de]'}`}
          >
            {helpful === false ? '✓ No' : 'No'}
          </button>
        </div>
      </div>
    </div>
  );
}
