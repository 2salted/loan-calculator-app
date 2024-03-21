export default function Calculator() {
  return (
    <div className="flex flex-row w-3/5 border border-gray-400 rounded-md p-4">
      <div className="flex-1 justify-center">
        <div className="flex flex-col">
          <label className="font-bold text-sm pb-2">Loan amount</label>
          <input className="border rounded-md p-2 outline-none border-gray-400"></input>
        </div>
      </div>
      <div className="flex-auto">z</div>
    </div>
  );
}
