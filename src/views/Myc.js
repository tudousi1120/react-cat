import React ,{Component} from 'react';
import Header from '../Components/Header'



class Myc extends Component{
   constructor(props){
       super(props)
       this.state={
          title:'个人中心',
          lists:[]
       }
   }

    render(){
        return(
            <div>
                <Header title={this.state.title}/>

            </div>
        )
    }

}
export default Myc; 