import React ,{Component} from 'react';
import Header from '../Components/Header'



class Addres extends Component{
   constructor(props){
       super(props)
       this.state={
          title:'收货地址',
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
export default Addres; 