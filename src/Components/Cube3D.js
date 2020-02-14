// npm install --save react-3d-cube
import * as React from 'react';
import Cube from 'react-3d-cube';
 
export default class Cube3D extends React.Component {

  componentDidMount(){
    let cube = document.querySelector("._cube_bssuh_1")
    cube.style.transform = "translate3d(0px, 0px, -150px) rotateX(35deg) rotateY(-42deg) rotateZ(0deg)"
    // The npm install default starts cube facing front, and they changed the transform with a style tag in a div
    // so can't overrite with css, so instead change transformation here
    // But this doesn't update the state of the object and quickly reverts to original state when first try to rotate
  }

  render() {
    return (
      <div>
        <div 
          style={{
            width: 300,
            height: 300
          }}
        >
          
          <Cube size={290} index="front">
            <div className="_empty_bssuh_24 cube3d">JavaScript</div>
            <div className="_empty_bssuh_24 cube3d">Python</div>
            <div className="_empty_bssuh_24 cube3d">HTML</div>
            <div className="_empty_bssuh_24 cube3d">C</div>
            <div className="_empty_bssuh_24 cube3d">CSS</div>
            <div className="_empty_bssuh_24 cube3d">Java</div>
          </Cube>
          
        </div>
      </div>
    );
  }
}