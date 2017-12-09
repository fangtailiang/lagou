import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import "./pagesCss/Send.css";
class Send extends Component{
	constructor(){
		super();
		this.state={
			isShow:true
		}
	}
	render(){
		return (
			<div>
				<header id="header">投递记录
					<div className="aaa left"><Link to="/user" className="corner"></Link></div>
				</header>
				<div className="sendtab">
					<IndexLink to="/send/" activeClassName="activeSend" className="sendAll sendli">全部</IndexLink>
					<Link to="/send/sendMidd" activeClassName="activeSend" className="toInvite sendli">邀请面试</Link>
					<Link to="/send/sendRight" activeClassName="activeSend" className="noFit sendli">不合适</Link>
				</div>
				<div>{this.props.children}</div>
			</div>
			)
	}
}
export default Send