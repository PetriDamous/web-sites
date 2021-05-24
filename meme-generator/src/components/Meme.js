import React from 'react';

function Meme({randomImg, topText, bottomText, txtWidth, imgHeight, imgWidth}) {

    const memeContainer = {
        maxWidth: imgWidth
    }

    const memeTxt = {
        maxWidth: `${+(txtWidth / 2).toFixed(0)}px`
    }

    console.log(memeTxt.maxWidth)
    return(
        <div className="meme">
            <div style={memeContainer}  className="container">
                <img src={randomImg}/>

                <p className="meme__text meme__text-top text-shadow">{topText}</p>
                <p className="meme__text meme__text-bottom text-shadow">{bottomText}</p>
            </div>

        </div>
    )
}

export default Meme;