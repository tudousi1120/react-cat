import React ,{Component} from 'react';
import $ from 'jquery';
import Common from '../Components/Common'

class Food extends Component{
   constructor(props){
       super(props)
       this.state={
          lists:[],
          listTit:['休闲零食','肉脯卤味','坚果蜜饯','花茶','糕点','新鲜水果','九九红','三鲜果'],
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
            data:{ptname:'美食',per:8,page:1},
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
export default Food; 