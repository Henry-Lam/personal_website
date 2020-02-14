// npm install react-bootstrap
import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default class ProjectCarousel extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    // let cube = document.querySelector("._cube_bssuh_1")
    // cube.style.transform = "translate3d(0px, 0px, -150px) rotateX(35deg) rotateY(-42deg) rotateZ(0deg)"
    // The npm install default starts cube facing front, and they changed the transform with a style tag in a div
    // so can't overrite with css, so instead change transformation here

  } 


  render() {

    const carousel_items = []

    for (const [index, value] of this.props.images.entries()) {
      carousel_items.push(<Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={value}
                            alt="First slide"
                            />
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>)
    }

    return (
        <div className="carousel_container">
          <Carousel interval={null}>
              {carousel_items}
          </Carousel>
    </div>
    );
  }
}
