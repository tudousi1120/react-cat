import React ,{Component} from 'react';
import $ from 'jquery';
import Common from '../Components/Common'

class Xihu extends Component{
   constructor(props){
       super(props)
       this.state={
          lists:[],
          listTit:['洗发水','空腔护理','沐浴露','护理','护手霜','衣物清洁','家庭清洗','画画了'],
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
            data:{ptname:'洗护',per:8,page:1},
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
export default Xihu; 