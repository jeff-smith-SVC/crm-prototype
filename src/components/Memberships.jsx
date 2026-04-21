const memberships = [
  { name: 'Pharmacy Benefits', role: 'Tier 2 Agent', queue: 12, active: true },
  { name: 'Medical Claims', role: 'Specialist', queue: 8, active: true },
  { name: 'Member Services', role: 'Tier 1 Agent', queue: 23, active: true },
  { name: 'Provider Relations', role: 'Backup', queue: 5, active: false },
  { name: 'Billing & Payments', role: 'Tier 1 Agent', queue: 17, active: false },
];

export default function Memberships() {
  return (
    <div className="bg-white border border-[#dedede] rounded-lg p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-[#212121] text-lg">My Call Center Memberships</span>
        <button className="text-[#2961de] text-[13px] font-medium cursor-pointer hover:underline">
          Manage
        </button>
      </div>

      {memberships.map((m) => (
        <div
          key={m.name}
          className={`rounded-[6px] p-3 flex items-center justify-between ${
            m.active ? 'bg-[#f5f5f7]' : 'bg-white'
          }`}
        >
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-[#212121] text-sm">{m.name}</span>
            <span className="text-[#6b6b6b] text-xs">{m.role}</span>
          </div>
          <div className="flex gap-2.5 items-center">
            <span className="text-[#707070] text-xs">{m.queue} in queue</span>
            <span
              className={`text-[11px] font-medium px-2 py-0.5 rounded ${
                m.active
                  ? 'bg-[rgba(31,122,71,0.12)] text-[#1f7a47]'
                  : 'bg-[rgba(112,112,112,0.12)] text-[#707070]'
              }`}
            >
              {m.active ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
