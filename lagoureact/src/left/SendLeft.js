import React, { Component } from 'react';
import {Route,browserHistory,Link,IndexLink,IndexRoute} from 'react-router';

class SendLeft extends Component{
	render(){
		return (
			<ul className="sendList">
				<li className="nolist">暂无记录~</li>
			</ul>
			)
	}
}
export default SendLeft