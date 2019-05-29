import React ,{Component} from 'react';
import Header from '../Components/Header'
import Olist from '../Components/Olist'


class Collect extends Component{
   constructor(props){
       super(props)
       this.state={
          title:'收藏',
          lists:['遗失的','美美哒']
       }
   }

    render(){
        return(
            <div>
                <Header title={this.state.title}/>
                <Olist mylist1={this.state.lists}/>
            </div>
        )
    }
    componentDidMount(){
        this.setState({list1:this.state.lists})
    }
}
export default Collect; 