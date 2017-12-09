import React, { Component } from 'react';
import {browserHistory,Link,IndexLink} from 'react-router';
import "./pagesCss/Interview.css";
class Interview extends Component{
	render(){
		return(
			<div>
				<header id="header">我的面试
					<div className="aaa left"><Link to="/user" className="corner"></Link></div>
				</header>
				<div id="content">
					<div className="tab">
						<IndexLink activeClassName="activeLink" to="/interview/" className="tab-item">已面试</IndexLink>
						<Link activeClassName="activeLink" to="/interview/interRight" className="tab-item">将面试</Link>
					</div>
					<div>{this.props.children}</div>
				</div>
				
			</div>
			
			)
	}
	componentWillMount(){
		document.getElementsByTagName("body")[0].className="gray";
	}
}
export default Interview