import React from 'react'
class Addoption extends React.Component {
    constructor(props){
        super(props)
        this.optionSubmitted = this.optionSubmitted.bind(this)
        this.state = {
            error: undefined
        }
    }
    optionSubmitted(e){
        e.preventDefault()
        const option = e.currentTarget[0].value.trim()
        const error = this.props.handleAddOption(option)
        this.setState(() => ({error}))
        e.currentTarget[0].value = ''
    }
    render(){
        
        return(
            <div>
                 {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form  className='add-option'
                    onSubmit={this.optionSubmitted}>
                    <input className='add-option-input' type='text' name='option'/>
                    <input className='btn' type='submit' value='Add option'/>
                </form>
            </div>
        )
    }
}
export default Addoption