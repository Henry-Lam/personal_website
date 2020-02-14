
import React, {Component} from 'react'
import ProjectButton from './ProjectButton'
import ProjectCarousel from './ProjectCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default class ProjectDisplay extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={this.props.name} id={this.props.name + "_id"}>
                <div className="container project_container clear">
                    <ProjectCarousel images={this.props.images}/>
                    <div className="project_content_container">
                        <div className="center">
                            <span className="project_title">{this.props.title}</span>
                            <hr></hr>
                            <div className="project_description">
                                <span className="content1">{this.props.content}</span>
                                <br></br>
                                <span className="content2">{this.props.content2}</span>
                                <br></br>
                                <span className="content3">{this.props.content3}</span>
                                <br/>
                                <a target="_blank" rel="noopener noreferrer" href={this.props.github}>
                                    <button className="codeBtn">
                                        <FontAwesomeIcon icon={ faGithub } className="brandIcon"/> GitHub Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}