
import React,{Component} from 'react';
import '../css/myset.css';
import $ from 'jquery';

class Olist extends Component{
  constructor(props) {
    super(props);
    this.state = {
        mylist:['1','2','3'],
        val:6,
        index:[] //保存被选中的索引，用于全选
    };
  }
  select(i){
      $('.my-list-l').eq(i).toggleClass('myselect');
  }
  change(e){
      //let  count=e.target.value;
      
  }
  minus(i){
    let count=$('input').eq(i).val();
    count--;
    if(count<=1){
        count=1;
    }
   $('input').eq(i).val(count);
  }
  plus(i){ 
    let count=$('input').eq(i).val();
    count++;
    if(count>=5){
        count=5;
    }
    $('input').eq(i).val(count);
  }
  render(){
    
    return(
      <div className="my-show">
          {
            this.state.mylist.map((val,index)=>{
                return(
                  <div className="my-list" key={index}>
                    <img src='https://img.alicdn.com/bao/uploaded/i3/911810517/O1CN01sxvxqI1FgpIJd46DF_!!0-item_pic.jpg' alt='' className="my-list-l"  onClick={this.select.bind(this,index)}/>
                    <div className="my-list-r">
                        <h3>{val}</h3>
                        <span>哈师大大所大所多多撒大</span>
                        <div className="my-list-price">价格：￥<span>99.0</span></div>
                        {/**定位 */}
                        <div className="my-list-step">
                            <input type="text" defaultValue='3' onChange={(e)=>this.change(e)}/>
                            <span className="my-list-step-l" onClick={this.minus.bind(this,index)} >-</span>
                            <span className="my-list-step-r" onClick={this.plus.bind(this,index)}>+</span>
                        </div>
                        <div className="my-price">总价：￥<span>99.0</span></div>
                    </div>
                </div>
                )
            })
          }
      </div>
    )
  }
  componentWillReceiveProps(a){
      this.setState({mylist:a.mylist1})
  }
  componentDidMount(){
     this.setState({mylist:this.props.mylist1})
  }
}


export default Olist;
