import React ,{Component} from 'react';
import $ from 'jquery';
import Common from '../Components/Common'

class Wcloth extends Component{
   constructor(props){
       super(props)
       this.state={
          lists:[],
          listTit:['连衣裙','针织衫','风衣','套装','卫衣','羽绒服饰','裤子','棉衣'],
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
        // 分类导航
        $.ajax({
            type:'get',
            url:'https://vipshop.herokuapp.com/api/v1/product/byproducttype',
            async:true,
            data:{ptname:'女装',per:8,page:1},
            dataType:'json',
            success:function(data){
               _this.setState({
                    lists:data.info.products,
                    showList:data.info.products
                })
              
               //console.log(_this.state.lists)
            }
        })
       
    }
}
export default Wcloth; 