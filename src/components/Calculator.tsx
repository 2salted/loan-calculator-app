export default function Calculator() {
  return (
    <div className="flex flex-row w-3/5 border border-gray-400">
      <div className="w-1/2 justify-center bg-gray-100 p-4">
        <div className="flex flex-col">
          <label className="font-bold text-sm pb-2">Loan amount</label>
          <input className="border rounded-md p-2 outline-none border-gray-400"></input>
        </div>
      </div>
      <div className="w-1/2 pl-4">
        <div className="flex flex-col">
          <div className="text-center">Monthly Payments</div>
          <div>123</div>
        </div>
      </div>
    </div>
  );
}
