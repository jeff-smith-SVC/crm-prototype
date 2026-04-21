export default function TopBar({ activeNav }) {
  return (
    <div className="bg-white border-b border-[#dedede] flex items-center justify-between px-8 py-4">
      <span className="font-medium text-sm text-[#6b6b6b]">{activeNav}</span>
      <div className="flex items-center gap-3">
        <div className="bg-[#dedede] rounded-full size-8" />
        <div className="bg-[#2961de] rounded-full size-8 flex items-center justify-center text-white text-xs font-semibold">
          SJ
        </div>
      </div>
    </div>
  );
}
