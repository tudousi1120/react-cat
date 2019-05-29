import React ,{Component} from 'react';
import $ from 'jquery';
import Common from '../Components/Common'


class Guess extends Component{
   constructor(props){
       super(props)
       this.state={
          lists:[],
          listTit:[],
          showList:[]
       }
   }

    render(){
        return(
            <Common list1={this.state.lists} list2={this.state.showList} list3={this.state.listTit}/>
        )
    }
    componentWillMount(){
        var _this=this;
        //展示
        $.ajax({
            type:'get',
            url:'https://vipshop.herokuapp.com/api/v1/product/byproducttype',
            async:true,
            data:{ptname:'猜你喜欢',per:8,page:1},
            dataType:'json',
            success:function(data){
               //console.log(data.info.products);
               _this.setState({showList:data.info.products})
            }
        })
    }
}
export default Guess; 