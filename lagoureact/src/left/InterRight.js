import React, { Component } from 'react';
import {browserHistory,Link} from 'react-router';
class InterRight extends Component{
	render(){
		return(
			<ul className="llist">
				<li className="LIST Emply">暂时没有将面试的记录，去
					<Link className="goto">投简历</Link>吧
				</li>
			</ul>
			
			)
	}
}
export default InterRight