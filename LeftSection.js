import React from 'react';
function LeftSection({imageUrl,productName, productDescription, tryMore,learnUrl, googlePlay,appStore}) {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <div className='col-6 '>
                    <img src={imageUrl}/>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='mb-4'>
                        <a href={tryMore} style={{textDecoration:"none"}}>Try More&nbsp;&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnUrl} style={{marginLeft:"50px",textDecoration:"none"}}>learn Url&nbsp;&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div>     
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                        <a href={appStore}><img src='media/images/appStorebadge.svg'/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;