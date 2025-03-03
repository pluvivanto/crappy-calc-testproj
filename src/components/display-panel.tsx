export default function DisplayPanel({ state }: { state: string[] }) {
  const equationStr = state.length > 0 ? state.join("") : "???";
  return (
    <div className="bg-black text-green-500 font-mono text-right text-4xl">
      {equationStr}
    </div>
  );
}
