import React ,{Component} from 'react';
import {hashHistory} from 'react-router';
import $ from 'jquery';
import ifant from '../css/Ifant.module.css';
class Common extends Component{
   constructor(props){
       super(props)
       this.state={
           
       }
   }

    render(){
        var _this=this;
        return(
            <div className={ifant.content}>
                {/**分类列表 */}
                <ul className={ifant.list} id="list">
                {
                    this.props.list1.map((item,index)=>{
                        return(
                            <li className={ifant.listLi} key={index}>
                                <img className={ifant.listImg} src={item.imgs[0]} alt=""/>
                                <p className={ifant.listp}>{this.props.list3[index]}</p>
                            </li>
                        )
                    })
                }
                </ul>
               {/**展示 */}
               <div className={ifant.showList}>
                   {/**功能导航 */}
                    <ul className={ifant.subNav}>
                        <li className={ifant.subNavl}>综合</li>
                        <li className={ifant.subNavl}>
                            销量
                            <span></span>
                            <span></span>
                        </li>
                        <li className={ifant.subNavl}>
                            价格
                        </li>
                        <li className={ifant.subNavl}>有券</li>
                    </ul>
                    {/**商品列表 */}
                    <ul className={ifant.shopList}>
                        {
                            this.props.list2.map((item,index)=>{
                                return(
                                    <li className={ifant.shopListLi} key={index}>
                                        <img src={item.imgs[0]} alt="" className={ifant.shopListImg}
                                            onClick={_this.detail.bind(_this,index)}/>
                                        <p className={ifant.shopListp}>{item.description}</p>
                                        <span className={ifant.shopListPrice}>￥{item.style[0].price}</span>
                                        <span className={ifant.shopListAp}>销量：{item.style[0].count}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
               </div>
            </div>
        )
    }
    detail(index){
        let id=this.props.list2[index]._id;
        hashHistory.push({pathname:'/detail',query:{id:id}})
    }
    
    componentWillReceiveProps(a){
        if(a.list1.length){
            $('#list').css({'display':'flex'});
        }else{
            $('#list').css({'display':'none'});
        }
    }
}
export default Common; 