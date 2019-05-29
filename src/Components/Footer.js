
import React,{Component} from 'react';
import { Link } from 'react-router';
import $ from 'jquery'
import '../css/Footer.css';
import '../font/iconfont.css';

class Footer extends Component{
 
  render(){
    return(
        <div className="footer-global">
            <Link  className="global-list" to='/home'>
                <span  className="global-icon iconfont icon-shouye"></span>
                <span  className="global-p">首页</span>
            </Link>
            <Link  className="global-list" to='/select'>
                <span  className="global-icon iconfont icon-jingxuan"></span>
                <span  className="global-p">精选好货</span>
            </Link>
            <Link  className="global-list" to='/quan'>
                <span  className="global-icon iconfont icon-xiaoxi"></span>
                <span  className="global-p">鱼粉圈</span>
            </Link>
            <Link  className="global-list" to='/mine'  >
                <span  className="global-icon iconfont icon-wode"></span>
                <span  className="global-p">我的</span>
            </Link>
        </div>
    )
  }
  componentDidMount(){
        $('.global-list').eq(0).children('.global-p').addClass('footerActive').siblings().removeClass('footerActive');
        $('.global-list').click(function(){
            $(this).children('.global-p').addClass('footerActive').parent().siblings().children('.global-p').removeClass('footerActive');
        })
  }
}


export default Footer;
