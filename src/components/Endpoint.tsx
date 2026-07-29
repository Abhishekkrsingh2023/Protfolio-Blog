import Reveal from "./Reveal";

function Endpoint({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Reveal>
      <div className="border border-[#26314f] rounded-lg bg-[#121A2E] mb-3.5 overflow-hidden hover:scale-[1.01] duration-200 hover:shadow-[0_30px_60px_-40px_rgba(34,211,238,0.2)]">
        <div className="flex items-center gap-3 px-4.5 py-3.5 font-mono text-[13.5px]">
        </div>
        <div className="px-2 pb-4 text-[#7C8AA8] text-[14.5px]">{children}</div>
      </div>
    </Reveal>
  );
}

export default Endpoint;