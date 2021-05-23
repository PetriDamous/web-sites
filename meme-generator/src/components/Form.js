import React from 'react';

function Form({topText, bottomText, handleChange, handleSubmit}) {
    return(
        <form className="form container" onSubmit={handleSubmit}>
            <input type="text" name="topText" value={topText} placeholder="Top Text" onChange={handleChange} />
            <input type="text" name="bottomText" value={bottomText} placeholder="Bottom Text" onChange={handleChange} />
            <div id="form-buttons-main" class="form__buttons m-sm-space">
                <button className="btn">Generate</button>
            </div>  
        </form>
    )
}

export default Form;