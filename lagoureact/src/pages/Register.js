import React, { Component } from 'react';
import {browserHistory,Link} from 'react-router';
import axios from 'axios';
import "./pagesCss/Register.css";
class Register extends Component{
	constructor(){
		super();
		this.state={
			username:"",
			code:"",
			phone:"",
			pwd:"",
			src:"https://passport.lagou.com/vcode/create?from=register&refresh=1512477004791",
			isEye:true
		}
		this.handlechanRE=this.handlechanRE.bind(this);
		this.handleRegister=this.handleRegister.bind(this);
	}
	render(){
		return (
			<div className="new_wrapper">
				<div className="login">
					<div className="pd phone reg">
						<input onBlur={(e)=>{this.handleOnUse(e)}} value={this.state.username} onChange={(e)=>{this.handleUser(e)}} type="text" className="username" placeholder="手机号"/>
						<span data-valid-message="" className="input_tips">请填写手机号</span>
					</div>
					<div className="pd reg vcode" id="vcodeWrap">
					  <div>
						<input onBlur={(e)=>{this.handleOnCode(e)}} value={this.state.code} onChange={(e)=>{this.handleCode(e)}} className="pwd" type="text" placeholder="请证明你不是机器人"/>
						<img src={this.state.src} alt="加载中..." className="imgVcode"/>	
						<Link onClick={this.handlechanRE}>看不清楚，<em>换一张</em></Link>				  
						</div>
						<span data-valid-message="" className="input_tips input_tt1">请输入验证码</span>
					</div>
					<div className="pd reg vcode" id="vcode">
						<input onBlur={(e)=>{this.handleOnphone(e)}} value={this.state.phone} onChange={(e)=>{this.handlePhone(e)}} type="text" className="username" placeholder="短信验证码"/>
						<span data-valid-message="" className="input_tips">请输入短信验证码</span>
					</div>
					<div className="pd reg" >
					  <div id="pwd">
						<input onBlur={(e)=>{this.handleOnPwd(e)}} value={this.state.pwd} onChange={(e)=>{this.handlePwd(e)}} className="pwd" type={this.state.isEye?"password":"text"} placeholder="设置6-16位密码"/>
						<Link onClick={(e)=>{this.handleOpenEye(e)}} className={this.state.isEye?"eye":"activeEye"} ></Link>
					  </div>
						<span data-valid-message="" className="input_tips input_tt">6-16位密码</span>
					</div>
				</div>
				<button className="btn-login" onClick={this.handleRegister}>注册</button>
				<div className="register_text">已有账号？</div>
				<Link to="/login" className="btn_register">登录</Link>
				<div className="register_text">点击注册，即代表您同意<a href="##">《拉勾用户协议》</a></div>
			</div>
			)
	}
	componentDidMount(){
		document.getElementsByTagName("body")[0].className="radial";
	}
	handlechanRE(e){
		this.setState({
			src:"https://passport.lagou.com/vcode/create?from=register&refresh="+Math.floor(Math.random()*10000000000000)
		})
	}
	handleOnUse(e){
		var username=this.state.username;
		var reg1=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		if(!reg1.test(username)){
			document.getElementsByClassName("input_tips")[0].style.display="block";
		}		
	}
	handleOnPwd(e){
		var reg3=/^.{6,16}$/,pwd=this.state.pwd;
		if(!reg3.test(pwd)){
			document.getElementsByClassName("input_tips")[3].style.display="block";
		}
	}
	handleOnCode(e){
		// document.getElementsByClassName("input_tips")[1].style.display="block";
	}
	handleOnphone(e){
		// document.getElementsByClassName("input_tips")[2].style.display="block";
	}
	handleOpenEye(e){
		console.log(this.state.isEye)
		this.setState({
			isEye:!this.state.isEye
		})
		console.log(this.state.isEye)

	}
	handleRegister(e){
		var username=this.state.username,pwd=this.state.pwd,
		code=this.state.code,phone=this.state.phone;
		if(username==="" || pwd==="" || code==="" || phone===""){
			return;
		}
		var reg3=/^.{6,16}$/,pwd=this.state.pwd;
		var reg1=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
			if(!reg1.test(username) || !reg3.test(pwd)){
				return;
			}
			axios.post("/user/regist",{
				username,
				pwd}).then(function(res){
				document.getElementsByTagName("body")[0].className="";
				browserHistory.push({
					pathname:"user"
				})
			})
			
	}
	handleUser(e){
		this.setState({
			username:e.target.value.trim()
		})
	}
	handleCode(e){
		this.setState({
			code:e.target.value.trim()
		})
	}
	handlePhone(e){
		this.setState({
			phone:e.target.value.trim()
		})
	}
	handlePwd(e){
		this.setState({
			pwd:e.target.value.trim()
		})
	}
}
export default Register