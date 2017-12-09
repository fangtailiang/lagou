import React, { Component } from 'react';

class DetailCollect extends Component{
	constructor(){
		super();
		this.state={
			isNo:false
		}
		this.handleChange=this.handleChange.bind(this);
	}
	render(){

		var html=this.state.isNo?<YesCollect />:<NoCollect />;
		return (
			<div onClick={this.handleChange} change={html}>{html}</div>
			)
	}
	handleChange(e){
		this.setState({
			isNo:!this.state.isNo
		})
	}
}
export default DetailCollect





class NoCollect extends Component{
	render(){
		return (
			<div>
				<span className="icon notcoll"></span>
				<span className="text">未收藏</span>
			</div>
			)
	}
}

class YesCollect extends Component{
	render(){
		return (
			<div>
				<span className="icon yestcoll"></span>
				<span className="text">已收藏</span>
			</div>
			)
	}
}
