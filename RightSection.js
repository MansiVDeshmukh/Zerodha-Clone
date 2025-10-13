import React from 'react';
function RightSection({imageUrl,productName, productDescription,learnUrl}) {
    return ( 
        <div className='container '>
            <div className='row p-5'>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='mb-4'>
                        <a href={learnUrl} style={{textDecoration:"none"}}>learn Url&nbsp;&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='col-6 '>
                    <img src={imageUrl}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;