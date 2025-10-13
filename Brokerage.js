import React from 'react';
function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-top'>
                <div className='col-8 p-2 text-center'>
                    <a href='' style={{textDecoration:"none"}}><h4>Brokerage calculator</h4></a>
                    <ul style={{textAlign:"left",lineHeight:"2.5",fontSize:"14px"}} className='text-muted '>
                        <li>Call & Trade RMS auto-squareoff:Additional charges of <i class="fa fa-inr" aria-hidden="true"></i>50 + GST per order</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes,if required, shall be charged <i class="fa fa-inr" aria-hidden="true"></i>20 per contract note. Courier charges apply.</li>
                        <li>for NRI account (non-PIS), 0.5% or <i class="fa fa-inr" aria-hidden="true"></i>100 per executed order for equity(whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged Rs40 per executed order instead of <i class="fa fa-inr" aria-hidden="true"></i>20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4 p-2 text-center'>
                    <a href='' style={{textDecoration:"none"}}><h4>List of charges</h4></a>
                </div>
            </div>
        </div>
     );
}
export default Brokerage;