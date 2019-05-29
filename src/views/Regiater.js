import React, {Component} from 'react'
import { Button} from 'antd-mobile'
import $ from 'jquery';
import '../css/regiater.css';

  class Regiater extends Component {
      constructor(props) {
          super(props);
          this.state = {
              name: "",
              pwd: "",
          }
      }
      render() {  
          return (  
            <div>
                <div className="login-img">
                      <img src='https://img.alicdn.com/bao/uploaded/i3/911810517/O1CN01sxvxqI1FgpIJd46DF_!!0-item_pic.jpg' alt=''/>
                </div>  
                <div className="login-content">  
                  <input  className="k1"type="text"  ref="tex1" placeholder="用户名" />
                  <input className="k2" type="password" ref="tex2" placeholder="密码"/> 
                  <Button className="but1" type="warning"  onClick = {this.tap.bind(this)}>注册</Button>
                  <Button className="but2" type="primary" onClick = {this.log.bind(this)}>登录</Button>
              </div>
            </div>    
            
          )
      }
      log(){
        window.location.href='#/login'
      }
      tap(){
        var _this=this;
       var name=this.refs.tex1.value;
       var psw=this.refs.tex2.value;
       if(!name){
        alert("用户名或密码不能为空")
        }else if(!psw){
          alert("用户名或密码不能为空")
        }else if(!/^[a-zA-Z_]\w{6,16}$/.test(psw)){
         alert("密码必须以字母开头，6-16位")   
      }else{
      $.ajax({
          type:'post',
          url:`https://vipshop.herokuapp.com/api/v1/auth/user_reg`,
          data:{username:name,password:psw},
          async:true,
           success:function(data){
              console.log(data)
               _this.setState({data})
               if(data.status==="success"){
                 alert("恭喜你注册成功")
               }else if(data.code==="error"){
                 alert("用户名已存在")
               }
          }
         });
        }  
  }
}   

  export default Regiater;