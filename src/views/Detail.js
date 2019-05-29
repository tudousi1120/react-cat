import React ,{Component} from 'react';
import {hashHistory} from 'react-router'
import $ from 'jquery';
import detail from '../css/Detail.module.css';
import { Carousel, WingBlank} from 'antd-mobile';

class Detail extends Component{
   constructor(props){
       super(props)
       this.state={
            carousel:[],
            imgHeight:'3rem',
            count:[],
            detail:[]
       }
   }

    render(){
        return(
           <div className={detail.content}>
               {/**头部 */}
               <div className={detail.header}>
                    <span className={detail.headerLeft}>asda</span>
                    <div className={detail.headerMid}>
                        <div className={detail.mid}>宝贝</div>
                        <div className={detail.mid}>详情</div>
                        <div className={detail.mid}>推荐</div>
                    </div>
                    <span className={detail.headerRight}></span>
               </div>
                {/**小轮播 */}
                <div className={detail.carousel}>
                    <WingBlank>
                        <Carousel
                        autoplay
                        autoplayInterval='2000'
                        infinite
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
                                this.setState({ imgHeight: '3rem' });
                                }}
                            />
                            </a>
                        ))}
                        </Carousel>
                    </WingBlank>
                </div>
                {/**商品信息 */}
                <div className={detail.info}>
                    <div className={detail.infoPrice}>
                        <div className={detail.priceLeft}>券后:<span>￥99</span></div>
                        <div className={detail.priceMid}>原价：￥{this.state.count.price}</div>
                        <div className={detail.priceRight}>月售量：{this.state.count.count}</div>
                    </div>
                    <div className={detail.infop}>
                        <img src='https://img.alicdn.com/bao/uploaded/i1/2148264599/O1CN012bf5L41jqO26ObMVG_!!0-item_pic.jpg' alt=''  className={detail.iconn}/>
                        {this.state.detail.description}
                    </div>
                </div>
                <div className={detail.shop}>
                    <span className={detail.shopIcon}></span>
                    <div className={detail.shopInfo}>
                        <h3>花花哒小艺店</h3>
                        <p>卖家服务：4.9分</p>
                    </div>
                </div>
                <div className={detail.showImg}>
                    <img src='https://img.alicdn.com/bao/uploaded/i1/2878370165/O1CN01bB4gnb1D5bsb3oWGn_!!0-item_pic.jpg' alt=''/>
                    <img src='https://img.alicdn.com/imgextra/i2/2878370165/O1CN01L5Dsz11D5bsZaq8pK_!!2878370165.jpg' alt=''/>
                    <img src='https://img.alicdn.com/imgextra/i4/2878370165/O1CN01QpTxpM1D5bsYSxGWY_!!2878370165.jpg' alt=''/>
                </div>
                {/**底部 */}
                <div className={detail.footer}>
                    <div className={detail.fooLeft}>
                        <span className={detail.fooLeft1} onClick={this.shou.bind(this)}>首页</span>
                        <span className={detail.fooLeft1}>收藏</span>
                    </div>
                    <div className={detail.fooRight}>
                        <span className={detail.fooRight1}>分享</span>
                        <span className={detail.fooRight2} onClick={this.send.bind(this)}>购买</span>
                    </div>
                </div>
           </div>
        )
    }
    componentDidMount(){
        var _this=this;
        var id =this.props.location.query.id;
        $.ajax({
            type:'get',
            url:'https://vipshop.herokuapp.com/api/v1/product/'+id,
            async:true,
            dataType:'json',
            success:function(data){
                _this.setState({
                    carousel:data.info.imgs,
                    count:data.info.style[0],
                    detail:data.info
                })
               
            }
        })
    }
    send(){
        //console.log(this.state.detail)
        let data = this.state.detail;
        let id = data._id;
        let size = data.style[0].size;
        let count = data.style[0].count;
        let color = data.style[0].color;
        $.ajax({
            type:'post',
            url:'https://vipshop.herokuapp.com/api/v1/cart/add',
            async:true,
            data:{gid:id,count:count,size:size,color:color},
            dataType:'json',
            success:function(data){
                console.log('aa')
                console.log(data)
            }
        })
    }
    shou(){
        hashHistory.push('/home')
    }
}
export default Detail; 