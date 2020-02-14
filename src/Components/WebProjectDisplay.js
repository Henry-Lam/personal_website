
import React, {Component} from 'react'
import ProjectButton from './ProjectButton'
import ProjectCarousel from './ProjectCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
export default class WebProjectDisplay extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={this.props.name} id={this.props.name + "_id"}>
                <div className="container project_container">
                    <div className="web_project_content_container">
                        <div className="web-center">
                            <span className="project_title">{this.props.title}</span>
                            <hr></hr>
                            <div className="project_description">
                                <span className="content1">{this.props.content}</span>
                                <br></br>
                                <span className="content2">{this.props.content2}</span>
                                <br></br>
                                <span className="content3">{this.props.content3}</span>
                                <br/>
                                <span className="content4">{this.props.content4}</span>
                                <br/>
                                <a target="_blank" rel="noopener noreferrer" href={this.props.github}>
                                    <button className="codeBtn">
                                        <FontAwesomeIcon icon={ faGithub } className="brandIcon"/> GitHub Code
                                    </button>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href={this.props.host}>
                                    <button className="hostBtn">
                                        <img src={this.props.iconImg} className="host-btn-icon"/> Check it Out
                                    </button>
                                </a>
                            </div>
                            <img className="web-display" src={this.props.display}></img>
                        </div>
                    </div>

                    

                </div>
            </div>
        )
    }


}