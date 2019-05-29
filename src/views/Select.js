import React ,{Component} from 'react';
import {hashHistory} from 'react-router';
import $ from 'jquery';
import select from '../css/Select.module.css';
import Header from '../Components/Header'

class Select extends Component{
   constructor(props){
       super(props)
       this.state={
          title:'精选好货',
          carousel:[],
          lists:[],
          baobao:[],
          guess:[]
          
       }
   }
    tap1(){
            hashHistory.push('/wcloth')
    }
    tap2(){
            hashHistory.push('/food')
    }
    tap3(){
            hashHistory.push('/baobao')
    }
    render(){
        return(
           <div className={select.content}>
                <Header title={this.state.title}/>
                <div className={select.bannerImg}>
                    <img src='https://img.alicdn.com/tfs/TB1_U5vknZmx1VjSZFGXXax2XXa-990-360.jpg_q60.jpg' alt=''/>
                </div>
                {/**展示 */}
                <div className={select.showing}>
                    <div className={select.hmore}>
                        <h2>女装</h2>
                        <p onClick={this.tap1.bind(this)}>更多</p>
                        <span className={select.hmore1}></span>
                        <span className={select.hmore2}></span>
                    </div>
                    <div className={select.carousel}>
                        {this.state.carousel.map((val,index) => (
                            <div className={select.shows} key={index}>
                                <img src={val.imgs[0]} alt=""/>
                                <p>{val.description}</p>
                                <span>￥{val.style[0].price}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/**展示 */}
                <div className={select.showing}>
                    <div className={select.hmore}>
                        <h2>美食</h2>
                        <p onClick={this.tap2.bind(this)}>更多</p>
                        <span className={select.hmore1}></span>
                        <span className={select.hmore2}></span>
                    </div>
                    <div className={select.carousel}>
                        {this.state.lists.map((val,index) => (
                            <div className={select.shows} key={index}>
                                <img src={val.imgs[0]} alt=""/>
                                <p>{val.description}</p>
                                <span>￥{val.style[0].price}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/**展示 */}
                <div className={select.showing}>
                    <div className={select.hmore}>
                        <h2>鞋包配饰</h2>
                        <p  onClick={this.tap3.bind(this)}>更多</p>
                        <span className={select.hmore1}></span>
                        <span className={select.hmore2}></span>
                    </div>
                    <div className={select.carousel}>
                        {this.state.baobao.map((val,index) => (
                            <div className={select.shows} key={index}>
                                <img src={val.imgs[0]} alt=""/>
                                <p>{val.description}</p>
                                <span>￥{val.style[0].price}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={select.midImg}>
                    <img src="https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg" alt="" />
                </div>
                <div className={select.guess}>
                    {
                        this.state.guess.map((val,index)=>{
                            return(
                                <div className={select.guessList} key={index}>
                                    <img src={val.imgs[0]} alt=""  className={select.guessLeft}/>
                                    <div className={select.guessRight}>
                                        <h3>{val.description}</h3>
                                        <p>￥{val.style[0].price}</p>
                                        <span>销量：{val.style[0].count}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
           </div>
        )
    }
    componentDidMount(){
        var _this=this;
        //
        $.ajax({
            type:'get',
            url:'https://vipshop.herokuapp.com/api/v1/product/byproducttype',
            async:true,
            data:{ptname:'女装',per:8,page:1},
            dataType:'json',
            success:function(data){
               //console.log(data.info.products);
               _this.setState({carousel:data.info.products})
            }
        })
        //
        $.ajax({
            type:'get',
            url:'https://vipshop.herokuapp.com/api/v1/product/byproducttype',
            async:true,
            data:{ptname:'美食',per:8,page:1},
            dataType:'json',
            success:function(data){
              
               _this.setState({lists:data.info.products})
            }
        })
        //
        $.ajax({
            type:'get',
            url:'https://vipshop.herokuapp.com/api/v1/product/byproducttype',
            async:true,
            data:{ptname:'鞋包配饰',per:8,page:1},
            dataType:'json',
            success:function(data){
              
               _this.setState({baobao:data.info.products})
            }
        })
        //
        $.ajax({
            type:'get',
            url:'https://vipshop.herokuapp.com/api/v1/product/byproducttype',
            async:true,
            data:{ptname:'猜你喜欢',per:8,page:1},
            dataType:'json',
            success:function(data){
              
               _this.setState({guess:data.info.products})
            }
        })
    }
}
export default Select; 