import React, { Component } from 'react';
import {Link} from 'react-router';
import InviteOpen from "../left/InviteOpen";
import InviteClose from "../left/InviteClose";
import "./pagesCss/Inviti.css";
class Invite extends Component{
	constructor(){
		super();
		this.state={
			isInvite:true
		}
		this.handleClose=this.handleClose.bind(this);
		this.handleOpen=this.handleOpen.bind(this);
	}
	render(){
		var invite=this.state.isInvite?<InviteOpen onOpen={this.handleOpen}/>:<InviteClose onClose={this.handleClose}/>
		return (
			<div>
				<div className="aaa left"><Link to="user" className="corner"></Link></div>
				{invite}
			</div>
			)
	}
	handleClose(){
		this.setState({
			isInvite:true
		})
	}
	handleOpen(){
		this.setState({
			isInvite:false
		})
	}
}
export default Invite