
import React,{Component} from 'react';
import Footer from './Components/Footer'

const contentStyle={
    marginBottom:'0.8rem'
}
class App extends Component{
 
  render(){
    return(
      <div>
          {/**中间部分 */}
          <div style={contentStyle}>
              {this.props.children}
          </div>
          {/**底部 */}
          <Footer/>
          
      </div>
    )
  }
}


export default App;
