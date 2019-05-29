
import React,{Component} from 'react';
import {hashHistory} from 'react-router';
import '../css/Footer.css';

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }
 go(){
    hashHistory.goBack(-1);
 }
  render(){
    return(
        <div className="header-global">
            <h1>{this.props.title}</h1>
            <span className="header-left iconfont icon-jiantou" onClick={this.go.bind(this)}></span>
        </div>
    )
  }
}


export default Header;
