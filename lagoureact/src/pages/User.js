import React, { Component } from 'react';
import {Link} from 'react-router';
import "./pagesCss/User.css";

class User extends Component{
	constructor(){
		super();
		this.state={
			username:""
		}
		this.handleToQuit=this.handleToQuit.bind(this);
	}
	render(){
		let username=this.state.username;
		// if(window.localStorage){
		// 	var username=this.
		// }
		var html = username?<Haslogin  name={username} />:<Nologin />
		var xhtml=username?<QuitButton onQuit={this.handleToQuit} name={username}/>:"";
		return (
			<div className="user">
				<div className="logininfo" >
					{html}
				</div>
				<div className="buttons">
					<Link to={this.state.username?"/send":"/login"} className="button deliver"><span>投递</span></Link>
					<Link to={this.state.username?"/interview":"/login"} className="button interview"><span>面试</span></Link>
					<Link to={this.state.username?"/invite":"/login"} className="button invitation"><span>邀约</span></Link>
					<Link to={this.state.username?"/collect":"/login"} className="button collect"><span>收藏</span></Link>
					{xhtml}
				</div>		
			</div>
			)
	}
	componentWillMount(){
		document.getElementsByTagName("body")[0].className="";
		if(window.localStorage){
			let user=JSON.parse(localStorage.getItem("username"));
			this.setState({
				username:user
			})
		}
	}
	handleToQuit(e){
		this.setState({
			username:""
		})
		if(window.localStorage){
			localStorage.removeItem('username');
		}
		console.log(e.target.innerText)
	}
}


class Nologin extends Component{
	render(){
		return (
			<div className="nologin center loginbut">
				<Link to="/login">登录</Link>/
				<Link to="/register">注册</Link>
			</div>
		)
	}
}
class Haslogin extends Component{
	render(){
		return (
			<div className="haslogin center">
				<Link to={this.props.username?"/login":"resume"} className="resume">简历></Link>
				<div className="headcon"><img className="headpic" src="https://static.lagou.com/images/myresume/default_headpic.png"/></div>
				<div className="name" ref="username">{this.props.name}</div>
			</div>
		)
	}
}
class QuitButton extends Component{
	constructor(){
		super();

	}
	render(){
		return (
			<Link className="logoutQuit" onClick={this.props.onQuit}>退出登录</Link>
		)
	}
}
export default User