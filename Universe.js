import React from "react";
function Universe() {
  return (
    <div className="container mt-5 ">
      <div className="row p-5 text-center">
        <h1 className="mb-4 fs-3">The Zerodha Universe</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted mt-1">Thematic investing platform</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/streakLogo.png" style={{width:"140px"}} />
          <p className="text-small text-muted mt-2">Algo & Strategy platform</p>
        </div>
        <div className="col-4 p-3">
          <img className="mt-2 mb-2" src="media/images/sensibullLogo.svg" style={{width:"170px"}}/>
          <p className="text-small text-muted mt-2">Options Trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{width:"200px"}} />
          <p className="text-small text-muted">Asset Management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{width:"190px"}}  />
          <p className="text-small text-muted mt-1">Bonds Trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png"style={{width:"160px"}}/>
          <p className="text-small text-muted ">Insurance</p>
        </div>
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

export default Universe;
