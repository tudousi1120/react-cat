import React ,{Component} from 'react';
import {hashHistory} from 'react-router';
import $ from 'jquery';
import { Carousel, WingBlank } from 'antd-mobile';
import choice from '../css/Choice.module.css'
import '../css/Index.css';
const dotStyle={
    width:'0.1rem',
    height:'0.05rem',
    borderRadius:'0.05rem',
    background:'#cecece'

}
const dotActiveStyle={
    width:'0.2rem',
    height:'0.05rem',
    borderRadius:'0.05rem',
    background:'#0f0'
}
class Choice extends Component{
   constructor(props){
       super(props)
       this.state={
           carousel: [],
           imgHeight: '1.5rem',
           list:[],
           url:['ifant','wcloth','food','xihu','baobao']
       }
   }
   send(i){
        hashHistory.push('/'+this.state.url[i]+'')
    }
    render(){
        return(
            <div>
                 {/**轮播 */}
                <div className={choice.carousel}>
                    <WingBlank>
                        <Carousel
                        autoplay
                        autoplayInterval='2000'
                        infinite
                        dotStyle={dotStyle}
                        dotActiveStyle={dotActiveStyle}
                        >
                        {this.state.carousel.map((val,index) => (
                            <a
                            key={index}
                            href="/"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight}}
                            >
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%',height:'100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: '1.5rem' });
                                }}
                            />
                            </a>
                        ))}
                        </Carousel>
                    </WingBlank>
                </div>
                {/**分类导航 */}
                <ul className={choice.list} >
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <li className={choice.listLi} key={index}
                                 onClick={this.send.bind(this,index)}>
                                    <img className={choice.listImg} src={item.imgs} alt=""/>
                                    <p className={choice.listp}>{item.name}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(){
        var _this=this;
        // 轮播
        $.ajax({
            type:'get',
            url:'https://vipshop.herokuapp.com/api/v1/product/byproducttype',
            async:true,
            data:{ptname:'猜你喜欢',per:6,page:1},
            dataType:'json',
            success:function(data){
                //console.log(data.info.products);
                var arr=[]
                data.info.products.map(function(item){
                   arr.push(item.imgs[0]);
                   return arr;
                })
                _this.setState({carousel:arr});
            }
        })
        //分类导航
        $.ajax({
            type:'get',
            url:'https://vipshop.herokuapp.com/api/v1/producttype/getalltype',
            async:true,
            dataType:'json',
            success:function(data){
                var arr1=data.info
                arr1.splice(4,1)
                _this.setState({list:arr1})
            }
        })
    }
}
export default Choice;