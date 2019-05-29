import React, {Component} from 'react'
import {List, Button} from 'antd-mobile'
import $ from 'jquery';
import '../css/regiater.css';


  class Login extends Component {
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
                  <List>
                    <input  className="k1"type="text"  ref="tex1" placeholder="用户名" />
                    <input className="k2" type="password" ref="tex2" placeholder="密码"/> 
                  </List>
                  <Button className="but3" type="primary"  onClick = {this.tap.bind(this)}>请登录</Button>
              </div>
              </div>  
          )
      }
      tap(){
        var _this=this;
       var name=this.refs.tex1.value;
       var psw=this.refs.tex2.value;
      $.ajax({
          type:'post',
          url:` https://vipshop.herokuapp.com/api/v1/auth/user_login`,
          data:{username:name,password:psw},
          async:true,
           success:function(data){ 
              console.log(data)
               _this.setState({data})

              if(!name){
                alert('用户名不能为空')
            }
              else if(data.status==="success"){
                alert("恭喜你登录成功")
                window.location.href='#/regiater'
               }else if(data.code==="error"){
                 alert("该用户还未注册，请注册后登录！！")
                 window.location.href='#/regiater'
               }
          
           if(!psw){
            alert("密码不能为空")
            }
            else if(data.code==="error"){
               alert("密码输入错误，请重新输入！")
            }
          }
          
         });
        
          }
    }
 
  export default Login;