import React, { Component } from 'react';
import {browserHistory,Link,hashHistory} from 'react-router';

class JobFoot extends Component{

	render(){
		return (
			<div>

			</div>
			)
	}
}
class JobNo extends Component{
	render(){
		return (
			<div>
				<span className="info">10秒定钟制职位</span>
				<Link to="/login" className="go">
					<em className="text2">去登陆</em>
				</Link>
			</div>
			)
	}
}
class JobYes extends Component{
	render(){
		return (
			<div>
				<p>©2015 lagou.com, all right reserved </p>
				<div className="copyright-item">
					<span className="phone active">移动版 · </span>
					<span className="computer">电脑版 · </span>
					<Link className="phone active">回顶部</Link>
				</div>
			</div>
			)
	}
}
export default JobFoot