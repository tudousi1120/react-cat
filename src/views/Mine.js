import React ,{Component} from 'react';
import {hashHistory} from 'react-router';
import '../css/Mine.css'

class Mine extends Component{
   constructor(props){
       super(props)
       this.state={
            title:'我的',
            pname:'花花哒',
            gurl:['myc','collect','order','address'],
            img:'https://ps.ssl.qhimg.com/t01d4090b6454121764.jpg',
            imgs:['https://img.alicdn.com/imgextra/i4/1643431119/O1CN01gwShSG1K8Xit4WUsn_!!1643431119.jpg','https://img.alicdn.com/imgextra/i3/3036896088/O1CN01C1vaQv1uqLmEiCIge_!!3036896088.jpg','https://img.alicdn.com/imgextra/i3/1646572993/O1CN01LmVUUT1Xypx6EK4TD_!!1646572993.jpg']
       }
   }
    go(gurl){
        hashHistory.push('/'+gurl+'')
    }
    login(){
        hashHistory.push('/login')
    }
    render(){
        return(
            <div className="my-content">
                <div className="my-head">
                    <span className="my-head-l iconfont icon-lianjie" onClick={this.login.bind(this)}></span>
                    <h2 className="my-head-r">我的</h2>
                </div>
                <div className="my-set">
                    <h2>{this.state.pname}</h2>
                    <p>高级花花哒</p>
                    <img src={this.state.img} alt="" className="my-photo"/>
                    <span className="my-left iconfont icon-shoucang"></span>
                </div>
                <div className="my-menu">
                    <div className="my-menu-list" onClick={this.go.bind(this,this.state.gurl[0])}>
                        <h3 className="my-menu-h">个人中心</h3>
                        <span className="my-menu-icon iconfont icon-wode"></span>
                    </div>
                    <div className="my-menu-list" onClick={this.go.bind(this,this.state.gurl[1])}>
                        <h3 className="my-menu-h">收藏</h3>
                        <span className="my-menu-icon iconfont icon-shoucang"></span>
                    </div>
                    <div className="my-menu-list" onClick={this.go.bind(this,this.state.gurl[2])}>
                        <h3 className="my-menu-h">订单</h3>
                        <span className="my-menu-icon iconfont icon-dingdan"></span>
                    </div>
                    <div className="my-menu-list" onClick={this.go.bind(this,this.state.gurl[3])}>
                        <h3 className="my-menu-h">收货地址</h3>
                        <span className="my-menu-icon iconfont icon-shouhuodizhi"></span>
                    </div>
                </div>
                <img src="https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg" alt="" className="my-pre"/>
                <div className="my-img">
                    {
                        this.state.imgs.map((item,index)=>{
                            return(
                                <img src={item} alt="" key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}
export default Mine; 