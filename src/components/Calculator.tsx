export default function Calculator() {
  return (
    <div className="flex flex-row w-3/5">
      <div className="flex flex-1 justify-center flex-col">
        <label className="font-bold text-sm pb-2">Loan amount</label>
        <input className="border rounded-md p-2 pl-2 outline-none border-gray-400"></input>
      </div>
      <div className="flex-auto">d</div>
    </div>
  );
}
