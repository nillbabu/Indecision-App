import React from 'react'

const Action = (props) => <div>
            <button className='big-btn' 
            onClick={props.pickOptionHandler}
            disabled={!props.hasOptions}
            >What should I do?</button>    
        </div>
export default Action