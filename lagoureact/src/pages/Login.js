import React, { Component } from 'react';
import {browserHistory,Link} from 'react-router';
import axios from 'axios';
import "./pagesCss/Login.css";
class Login extends Component{
	constructor(){
		super();
		this.state={
			username:"",
			pwd:"",
			isEye:true
		}
		this.handleLogin=this.handleLogin.bind(this);
	}
	render(){
		return (
			<div className="new_wrapper">
				<div className="login">
					<div className="pd pd_username">
						<input type="text" onBlur={(e)=>{this.handleUser(e)}} onChange={(e)=>{this.handleUsername(e)}} value={this.state.username}  className="username" placeholder="已验证手机/邮箱"/>
						<span data-valid-message="" className="input_tips">请输入有效帐号</span>
					</div>
					<div className="pd pd_pwd">
					  <div>
						<input className="pwd" onBlur={(e)=>{this.handlePwdd(e)}} onChange={(e)=>{this.handlePwd(e)}} value={this.state.pwd} type={this.state.isEye?"password":"text"} placeholder="密码"/>
						<Link className={this.state.isEye?"eye":"activeEye"} onClick={(e)=>{this.handleChangeEye(e)}}></Link>
					  </div>
						<span data-valid-message="" className="input_tips input_tt">6-16位密码</span>
					</div>
				</div>
				<button className="btn-login" onClick={this.handleLogin}>登录</button>
				<div className="register_text">还没帐号？</div>
				<Link to="/register" className="btn_register">注册</Link>
			</div>
			)
	}
	componentDidMount(){
		document.getElementsByTagName("body")[0].className="radial";
	}
	handleChangeEye(){
		this.setState({
			isEye:!this.state.isEye
		})
	}
	handlePwdd(){
		var pwd=this.state.pwd;
		var reg3=/^.{6,16}$/;
		if(!reg3.test(pwd)){
			document.getElementsByClassName("input_tips")[1].style.display="block";
		}
	}
	handleUser(e){
		var username=this.state.username;
		var reg1=/^1(3|4|5|8)[0-9]\d{4,9}$/,
		 reg2=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		if(!reg1.test(username) && !reg2.test(username)){
			document.getElementsByClassName("input_tips")[0].style.display="block";	
		}	
	}
	handleLogin(e){
		var username=this.state.username,pwd=this.state.pwd;
		var reg1=/^1\d{10}$/,
			reg3=/^.{6,16}$/;
		if(!reg1.test(username) || !reg3.test(pwd)){
			return;
		}
		axios.post("/user/login",{
			username,
			pwd
		}).then(function(res){
			if(window.localStorage){
				localStorage.setItem("username",JSON.stringify(username))
			}
			document.getElementsByTagName("body")[0].className="";
			browserHistory.push({
				pathname:"/user"	
			})
			
		},function(){
			document.getElementsByClassName("input_tips")[0].innerText="请输入正确账号"
			document.getElementsByClassName("input_tips")[1].innerText="请输入正确密码"	
		});
	}
	handleUsername(e){
       this.setState({
       		username:e.target.value.trim()
       })
       	document.getElementsByClassName("input_tips")[0].style.display="none";	
	}
	handlePwd(e){
		this.setState({
			pwd:e.target.value.trim()
		})
       	document.getElementsByClassName("input_tips")[1].style.display="none";	
	}
}
export default Login