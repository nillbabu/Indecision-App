import React from 'react'
const Option = (props) => {
    return(
        <div className='option'>
            <p>{props.count}. {props.option}</p>
            <button className='btn btn--link' onClick={(e) => props.handleDeleteOption(props.option)}>Remove</button>            
        </div>
    )
}
export default Option