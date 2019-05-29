
import React,{Component} from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import '../css/Index.css';

class IndexHeader extends Component{
  constructor(props) {
    super(props);
    this.state = {
       title:'鱼粉圈'
    };
  }
 
  render(){
    return(
        <div>
            <div className="head">
                {/**头部 */}
                <div className="head-search">
                    <input type="text" placeholder="搜索宝贝标题，先领券再购物"/>
                    <span className="icon iconfont icon-lingdang"></span>
                </div>
                {/*导航--导航式路由*/}
                <div className="nav-link">
                    <Link to='/choice' className="nav-link1">精选</Link>
                    <Link to='/guess' className="nav-link1">猜你喜欢</Link>
                    <Link to='/ifant' className="nav-link1" >母婴</Link>
                    <Link to='/wcloth' className="nav-link1">女装</Link>
                    <Link to='/food' className="nav-link1">美食</Link>
                    <Link to='/xihu' className="nav-link1">洗护</Link>
                    <Link to='/baobao' className="nav-link1" >鞋包配饰</Link>
                </div>
            </div>
            <div className="head-content">
                {this.props.children}
            </div>
        </div>
    )
  }
  componentDidMount(){
      $('.nav-link1').eq(0).addClass('indexactive').siblings().removeClass('indexactive');
      $('.nav-link1').click(function(){
            $(this).addClass('indexactive').siblings().removeClass('indexactive');
      })
  }
}



export default IndexHeader;
