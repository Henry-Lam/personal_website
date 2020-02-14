import Coverflow from 'react-coverflow';
import React, { Component } from 'react'

export default class MainCoverflow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  componentDidMount(){
    let lst = document.querySelectorAll(".coverflow__figure__3bk_C")
    for (var i = 0; i < lst.length; i++){
      // lst[i].style.width = "100px"
      console.log(lst[i].style.width)
    }
    
  }

  render() {
    return (
      <div>
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={false}
          active={this.state.active}
        >
          
          <img src='images/SocialQRDisplay.png' alt='Album one' id='androidDisplay'/>
        
          <img src='images/SocialQRDisplay.png' alt='Album two' data-action="http://passer.cc"/>
          <img src='try.png' alt='Album three' data-action="https://doce.cc/"/>
          <img src='images/album-4.png' alt='Album four' data-action="http://tw.yahoo.com"/>
          <img src='images/album-5.png' alt='Album five' data-action="http://www.bbc.co.uk"/>
          <img src='images/album-6.png' alt='Album six' data-action="https://medium.com"/>
          <img src='images/album-7.png' alt='Album seven' data-action="http://www.google.com"/>
          <img src='images/album-1.png' alt='Album one' data-action="https://facebook.github.io/react/"/>
          <img src='images/album-2.png' alt='Album two' data-action="http://passer.cc"/>
          <img src='images/album-3.png' alt='Album three' data-action="https://doce.cc/"/>
          <img src='images/album-4.png' alt='Album four' data-action="http://tw.yahoo.com"/>
        </Coverflow>
      </div>
    );
  }
};

