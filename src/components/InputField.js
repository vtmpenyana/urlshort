import React from 'react';

const InputField = (props) => {
    return(
        <div className='tc ma4'>
            <input 
            placeholder='paste your long url here and Make it Short'
            className={` ${props.attention} o-80 input-reset ba b--black-20 pa2 mb2 db w-100 mt4`}
            type='text'
            onChange={props.onInput}
            />
        </div>
    )
}


export default InputField;