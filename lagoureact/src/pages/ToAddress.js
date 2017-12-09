import React, { Component } from 'react';
import {Route,browserHistory,Link,IndexLink,IndexRoute} from 'react-router';
import "../pages/pagesCss/ToAll.css";
class ToAll extends Component{
	render(){
		return (
			<div>
				<header id="header">投递记录
					<div className="aaa left"><Link to="/youwang" className="corner"></Link></div>
				</header>
			</div>
			)
	}
}
export default ToAll