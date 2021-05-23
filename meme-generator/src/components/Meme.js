import React from 'react';

function Meme({randomImg, topText, bottomText, memeImgs, imgHeight, imgWidth}) {
    // const memeBackground = {
    //     backgroundImage: `url(${randomImg})`,
    //     // backgroundPosition: "center center",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //     minHeight: 500,
        
    // }

    // const memeImg = {
    //     maxWidth: imgWidth;
    // }

    const memeContainer = {
        maxWidth: imgWidth
    }

    const topPos = {
        top: `${imgHeight - 300}px`
    }

    return(
        <div className="meme">
            <div style={memeContainer}  className="container">
                <img src={randomImg}/>

                <p style={topPos} className="meme__text meme__text-top">{topText}</p>
                <p className="meme__text meme__text-bottom">{bottomText}</p>
            </div>

        </div>
    )
}

export default Meme;