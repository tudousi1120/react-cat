import React ,{Component} from 'react';
import Header from '../Components/Header'
import Baobao from './Baobao'
import  quan from '../css/Footer.css'

class Quan extends Component{
   constructor(props){
       super(props)
       this.state={
          title:'鱼粉圈',
          lists:[]
       }
   }
    render(){
        return(
            <div>
                <Header title={this.state.title}/>
                <div className={quan.wrap}>
                    <Baobao/>
                </div>
            </div>
        )
    }
}
export default Quan; 