import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRedirect,hashHistory} from 'react-router'
import 'antd-mobile/dist/antd-mobile.css';
import './index.css';
import App from './App';
import Home from './views/Home'
import Choice from './views/Choice'
import Ifant from './views/Ifant'
import Guess from './views/Guess'
import Wcloth from './views/Wcloth'
import Food from './views/Food';
import Xihu from './views/Xihu'
import Baobao from './views/Baobao'

import Detail from './views/Detail'
import Selcet from './views/Select';
import Quan from './views/Quan';
import Mine from './views/Mine';
import Myc  from './views/Myc';
import Collect from './views/Collect'
import Order from './views/Order';
import Address from './views/Address'
import Login from './views/Login';
import Regiater from './views/Regiater'
import * as serviceWorker from './serviceWorker';

window.onload = function(){
    /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
    为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
    getRem(414,100)
    };
    window.onresize = function(){
    getRem(414,100)
    };
    function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
}


ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRedirect to='/home'/>
        <Route path='/home' component={Home}>
            <IndexRedirect to='/choice'/>
            <Route path='/choice' component={Choice}></Route>
            <Route path='/guess' component={Guess}></Route>
            <Route path='/ifant' component={Ifant}></Route>
            <Route path='/wcloth' component={Wcloth}></Route>
            <Route path='/food' component={Food}></Route>
            <Route path='/xihu' component={Xihu}></Route>
            <Route path='/baobao' component={Baobao}></Route>
        </Route>
        <Route path='/select' component={Selcet}></Route>
        <Route path='/quan' component={Quan}></Route>
        <Route path='/mine' component={Mine}></Route>
    </Route>
    <Route path='/detail' component={Detail}></Route>
    <Route path='/myc' component={Myc}></Route>
    <Route path='/collect' component={Collect}></Route>
    <Route path='/order' component={Order}></Route>
    <Route path='/address' component={Address}></Route>
    <Route path='/address' component={Address}></Route>
    <Route path='/regiater' component={Regiater}></Route>
    <Route path='/login' component={Login}></Route>
    </Router>, document.getElementById('root'));


serviceWorker.unregister();
