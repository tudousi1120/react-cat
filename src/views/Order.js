import React ,{Component} from 'react';
import Header from '../Components/Header'
import '../css/myset.css'
import Olist from '../Components/Olist'
import $ from 'jquery'
class Quan extends Component{
   constructor(props){
       super(props)
       this.state={
          title:'订单',
          lists:['11','22','33'],
          list1:['超级美','胖胖哒','嘿嘿哒'],
          list2:['凑你哟','卡卡哒']
       }
   }
    render(){
        return(
            <div>
                <Header title={this.state.title}/>
                <div className="my-content">
                    <div className="order-select">
                        <span className="order-sp selected">待付款</span>
                        <span className="order-sp">已付款</span>
                    </div>
                    <Olist mylist1={this.state.lists}/>
                    <div className="my-all">
                        <input type="checkbox"/>
                    </div>
                </div>
            </div>
        )
    }
    componentWillMount(){
        this.setState({lists:this.state.list1})
    }
    componentDidMount(){
        var _this=this;
        $('.order-sp').click(function(){
            $(this).addClass('selected').siblings().removeClass('selected');
            if($(this).html()==='待付款'){
                _this.setState({lists:_this.state.list1})
            }else{
                _this.setState({lists:_this.state.list2})
            }
        })
    }

}
export default Quan; 