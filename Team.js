import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="fs-4 text-center mt-5">People</h1>
      </div>
      <div
        className="row text-muted"
        style={{ lineHeight: "1.8", fontSize: "17px" }}
      >
        <div className="col text-center">
          <img className="p-2" src="media/images/nithinKamath.jpg" style={{borderRadius:"50%",width:"18em"}}/>
            <h1 className="mt-3 fs-5">Nitin Kamath</h1>
            <p className="text-muted">Founder, CEO</p>
        </div>
        <div className="col">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen.
          </p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
