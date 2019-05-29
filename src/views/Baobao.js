import React ,{Component} from 'react';
import $ from 'jquery';
import Common from '../Components/Common'

class Baobao extends Component{
   constructor(props){
       super(props)
       this.state={
          lists:[],
          listTit:['女鞋','男鞋','女包','手表','花花哒','潮流首饰','珠宝翡翠','出行用品'],
          showList:[]
       }
   }

    render(){
        return(
            <Common list1={this.state.lists} list2={this.state.showList} list3={this.state.listTit}/>
        )
    }
    componentDidMount(){
        var _this=this;
        // 分类导航 展示
        $.ajax({
            type:'get',
            url:'https://vipshop.herokuapp.com/api/v1/product/byproducttype',
            async:true,
            data:{ptname:'鞋包配饰',per:8,page:1},
            dataType:'json',
            success:function(data){
               _this.setState({
                    lists:data.info.products,
                    showList:data.info.products
                })
        
            }
        })
      
    }
}
export default Baobao; 