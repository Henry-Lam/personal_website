
import React, {Component} from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap'
import ProjectModal from './ProjectModal';

export default class ProjectButton extends Component{

    constructor(props){
        super(props);
        this.state = {addModalShow : false}
        // On page load will be false
    }

    render(){
        let addModalClose = () => this.setState({addModalShow : false})
        
        return(
            <div>
                <ButtonToolbar>
                    <Button variant='primary' onClick={()=> this.setState({addModalShow: true})}>
                        {this.props.name}
                    </Button>
                    <ProjectModal show={this.state.addModalShow} onHide={addModalClose} content={this.props.content}/>
                </ButtonToolbar>
            </div>
        )
    }


}