import React from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import Addoption from './Addoption'
import Modal from './Modal'

class IndecisionApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            options: props.options,
            selectedOption : undefined
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.pickOptionHandler = this.pickOptionHandler.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.closeModalhandler = this.closeModalhandler.bind(this)
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if(options){
                this.setState({ options })
            }
            // console.log(JSON.parse(json))
        }catch(err){
            console.log('No Data Recived Yet')
        }
    }
    componentDidUpdate(prevState, prevProps){
        // console.log('A component was updated now')
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            // console.log('saving data')
        } 
    }

    handleDeleteOptions(){
        this.setState({options: []})
        // console.log('localStorage has been cleared')
    }
    pickOptionHandler(){
        const randNum = Math.floor(Math.random() * this.state.options.length)
        const optionForClient = this.state.options[randNum]
        this.setState(() => ({
            selectedOption: optionForClient
        }))
    }
    handleAddOption(option){
        if(!option){
            return <p className='forP'>Enter a valid option to add</p>
        }else if (this.state.options.indexOf(option) > -1){
            return <p className='forP'>This option already exits'</p>
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option)}))
    }
    handleDeleteOption(optionToDelete){
        // this.setState(() => {
            const prevState = [...this.state.options].filter(option => {
                return optionToDelete !== option
            })
            this.setState({options: prevState})
    }
    closeModalhandler(e){
        // const value = false
        this.setState({selectedOption: undefined})
    }
    render(){
        return(
            <div>
                <Header/>
                <div className='container'>
                    <Action 
                        hasOptions={this.state.options} 
                        pickOptionHandler={this.pickOptionHandler}                    
                    />
                    <div className='widget'>
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <Addoption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                <Modal 
                    selectedOption={this.state.selectedOption}
                    closeModalhandler={this.closeModalhandler}
                    />
            </div>
        )
    }
}
IndecisionApp.defaultProps = {
    options : []
}
export default IndecisionApp