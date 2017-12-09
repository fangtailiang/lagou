import React, { Component } from 'react';
import {Link} from 'react-router';
class InviteClose extends Component{
	render(){
		return(
			<div id="content1">
				<div className="oplus">
					<div className="plusClose">
						<h3>已开启</h3>
						<div className="btnClose" onClick={this.props.onClose}>
							<em className="close"></em>
							<i className="closeX"></i>
						</div>
					</div>
					<Link className="changeKai">设置要屏蔽的企业 ></Link>
				</div>
				<ul className="listClost">
					<li className="noINvite">暂时还没有收到邀约，你可以一边主动投简历，一边等待企业的邀约~</li>
				</ul>
			</div>
			)
	}
} 
export default InviteClose