export default function Calculator() {
  return (
    <div className="flex flex-row w-3/5 border border-gray-400">
      <div className="w-1/2 justify-center bg-gray-100 p-4">
        <div className="flex flex-col">
          <label htmlFor="input1" className="font-bold text-sm pb-2">
            Loan amount
          </label>
          <input
            id="input1"
            className="border rounded-md p-2 outline-none border-gray-400"
          ></input>
          <label htmlFor="input1" className="font-bold text-sm pb-2 pt-4">
            Loan term in years
          </label>
          <input
            id="input1"
            className="border rounded-md p-2 outline-none border-gray-400"
          ></input>
        </div>
      </div>
      <div className="w-1/2 p-4">
        <div className="flex flex-col">
          <div className="text-center pb-3">Monthly Payments</div>
          <div className="flex flex-row justify-center">
            <span className="font-bold">$</span>
            <div className="text-center font-black text-5xl pb-4">93.2</div>
          </div>
          <div className="flex flex-row justify-between py-2">
            <div className="font-medium text-sm">Total principal paid:</div>
            <div className="font-medium text-sm">$5000</div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
