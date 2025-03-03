import CalcBoard from "@/components/board";

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <div className="m-auto">
        <CalcBoard />
      </div>
    </div>
  );
}
