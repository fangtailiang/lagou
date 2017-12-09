import React, { Component } from 'react';
import {browserHistory,Link} from 'react-router';
import "./pagesCss/YouWang.css";
class YouWang extends Component{
	constructor(){
		super();
		this.state={
			isTrue:true,
			type:"",
			address:"",
			salary:"",
			scale:"",
			isType:true,
			isAddress:true,
			isSalary:true,
			isScale:true

		}
		this.handleToJobLIst=this.handleToJobLIst.bind(this);
	}
	render(){
		// let custom=JSON.parse(localStorage.getItem("custom"));
		return (
			<div>
				<header id="header">设置定制信息
					<div className="aaa left"><Link to="/" className="corner"></Link></div>
				</header>
				<div id="content">
					<ul className="custom-infoSearch">
						<SearchType title="职位类型" where="/toType" date={this.state.type} isShow={this.state.isType} detail="请选择期望职位"/>
						<SearchType title="工作地点" where="/toAll" date={this.state.address}  isShow={this.state.isAddress} detail="请选择期望工作地点"/>
						<SearchType title="期望薪水" where="/toSalary" date={this.state.salary} isShow={this.state.isSalary} detail="请选择期望薪水"/>
						<SearchType title="公司规模" where="/toScale" date={this.state.scale} isShow={this.state.isScale} detail="请选择期望规模"/>
					</ul>
					<div className="search" onClick={this.handleToJobLIst}>开始搜索</div>
				</div>
			</div>
			)
	}
	componentWillMount(){
		if(window.localStorage){
			var storage=window.localStorage;
			var custom=storage.getItem('custom');
			if(!custom){
				return
			}else{
				custom=JSON.parse(custom);				
				this.setState({
					type:custom.type,
					address:custom.address,
					salary:custom.salary,
					scale:custom.scale
				})
				if(custom.type){//有内容时
					this.setState({
						isType:false
					})
				}else{
					this.setState({
						isType:true
					})
				}
				
				if(custom.address){
					this.setState({
						isAddress:false
					})
				}else{
					this.setState({
						isAddress:true
					})
				}
				
				if(custom.salary){
					this.setState({
						isSalary:false
					})
				}else{
					this.setState({
						isSalary:true
					})
				}
				
				if(custom.scale){
					this.setState({
						isScale:false
					})
				}else{
					this.setState({
						isScale:true
					})
				}
			}
			
		}
	}
	handleType(e){
		this.setState({
			isTrue:false
		})
	}
	handleAddress(e){
		this.setState({
			isTrue:false
		})
	}
	handleSalary(e){
		this.setState({
			isTrue:false
		})
	}
	handleScale(e){
		this.setState({
			isTrue:false
		})
	}
	handleToJobLIst(e){
		browserHistory.push({
			pathname:"/"
		})
	}
}
class SearchType extends Component{
	render(){
		var Show=this.props.isShow?<span className="empty">{this.props.detail}</span>:<p className="you">{this.props.date}</p>;
		return (
			<li className="itemSearch" data-type="positionName">
				<span className="headerSearch">{this.props.title}</span>
				<Link to={this.props.where} className="desc" >
				{Show}
				</Link>
			</li>
		)
	}
}
export default YouWang