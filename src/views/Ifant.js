import React ,{Component} from 'react';
import $ from 'jquery';
import Common from '../Components/Common'
class Ifant extends Component{
   constructor(props){
       super(props)
       this.state={
          lists:[],
          listTit:['尿纸片','鞋鞋','玩具书籍','婴童洗护','喂养用品','婴童服饰','孕产用品','出行用品'],
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
            data:{ptname:'母婴用品',per:8,page:1},
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
export default Ifant; 