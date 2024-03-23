import { useState } from "react";

export default function Calculator() {
  const [loanAmount, setLoanAmount] = useState<string>("");
  const [loanTerm, setLoanTerm] = useState<string>("");
  const [interestRate, setInterestRate] = useState<string>("");

  return (
    <div className="flex md:flex-row flex-col lg:w-4/6 w-5/6 border border-gray-400">
      <div className="md:w-1/2 w-full justify-center bg-gray-100 p-4">
        <div className="flex flex-col">
          <label htmlFor="input1" className="font-bold text-sm pb-2">
            Loan amount
          </label>
          <input
            id="input1"
            value={loanAmount}
            className="border rounded-md p-2 outline-none border-gray-400"
            onChange={(e) => {
              setLoanAmount(e.target.value);
            }}
          ></input>
          <label htmlFor="input2" className="font-bold text-sm pb-2 pt-4">
            Loan term in years
          </label>
          <input
            id="input2"
            className="border rounded-md p-2 outline-none border-gray-400"
            value={loanTerm}
            onChange={(e) => {
              setLoanTerm(e.target.value);
            }}
          ></input>
          <label htmlFor="input3" className="font-bold text-sm pb-2 pt-4">
            Interest rate per year
          </label>
          <input
            id="input3"
            value={interestRate}
            className="border rounded-md p-2 outline-none border-gray-400"
            onChange={(e) => {
              setInterestRate(e.target.value);
            }}
          ></input>
          <div className="flex pt-4 justify-center md:justify-start">
            <button
              type="button"
              className="bg-[#0055ff] rounded-md text-white py-2 px-5"
              onClick={() => {
                if (loanAmount && loanTerm && interestRate) {
                  let percentage = parseFloat(interestRate) / 100;
                  console.log("percentage: " + percentage);
                  let yearlyPayment = parseFloat(loanAmount) * percentage;
                  console.log("yearly payment: " + yearlyPayment);
                  let monthlyPayment = yearlyPayment / 12;
                  console.log("yearly payment: " + monthlyPayment);
                }
              }}
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full p-4">
        <div className="flex flex-col">
          <div className="text-center pb-3">Monthly Payments</div>
          <div className="flex flex-row justify-center">
            <span className="font-bold">$</span>
            <div className="text-center font-black text-5xl pb-4">93.2</div>
          </div>
          <div className="flex flex-row justify-between py-3">
            <div className="font-medium text-sm">Total principal paid:</div>
            <div className="font-medium text-sm">$5,000</div>
          </div>
          <hr />
          <div className="flex flex-row justify-between py-3">
            <div className="font-medium text-sm">Total interest paid:</div>
            <div className="font-medium text-sm">$592.91</div>
          </div>
        </div>
      </div>
    </div>
  );
}
