import React from 'react'
import Option from './Option'
const Options = (props) => <div>
            <div className='widget-header'>
                <h3>Your Options</h3>
                <button onClick={props.handleDeleteOptions}
                className='btn btn--link'>Remove All</button>
            </div>
            {props.options.length < 1 && <p className='forP'>Please add some options to get started</p>}
            {props.options.map((option, index) => {
                return <Option option={option} 
                            key={index}
                            count={index +1}
                            handleDeleteOption={props.handleDeleteOption}
                        />
            })}
        </div>
export default Options