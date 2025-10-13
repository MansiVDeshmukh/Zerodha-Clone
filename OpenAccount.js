import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5">
      <div className="row mb-5 text-center">
        <h1 className="mt-5 mb-4">Open a Zerodha account</h1>
        {/* Added mb-4 for spacing below heading */}

        <p className="mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        {/* mb-4 adds spacing below paragraph */}
        <button
          className="pt-2 pb-2 pl-4 pr-4 btn btn-primary fs-5"
          style={{ width: "15%", margin: "auto", color: "white" }}
        >
          Sign Up For Free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
