import React, { Component } from 'react';
import Address from "../left/Address";
import JobTitle from "./JobTitle";
import JobItem from "../left/JobItem";
import Job from "./Job";
import SearchHostry from "../left/SearchHostry";
import axios from 'axios';
import "./pagesCss/Search.css";
class Search extends Component{
	constructor(){
		super();
		this.state={
			search:"",
			isDress:true,
			dress:"全国",
			b:"",
			isHistory:true

		}
		this.handleAdd=this.handleAdd.bind(this);
		this.handleLi=this.handleLi.bind(this);
		this.handleSearch=this.handleSearch.bind(this);
		this.handleToSaerch=this.handleToSaerch.bind(this);
	}
	render(){
		let dss=this.state.isHistory?<SearchHostry onAdd={(e)=>{this.handleAddHistory(e)}} isShow={this.state.isDress}/>:<ToJob JobList={this.state.b}/>;
		var a = 
				<div>
					<div className="linputer">
						<div className="lbutton" onClick={this.handleAdd}>
							<span className="city" id="adressCity">{this.state.dress}</span>
							<span className="cityicon"></span>
						</div>
						<div className="rinput">
							<input type="text" value={this.state.search} onChange={this.handleSearch} className="inputer" placeholder="搜索职位或公司" />
							<span className="searchSE"  onClick={this.handleToSaerch} >
								<em className="searchicon"></em>
							</span>
						</div>
					</div>
					{dss}
				</div>

		var b = this.state.isDress?a:<Address onDress={this.handleLi} />;

		return (
			<div id="content">
				{b}
			</div>
			)
	}
	handleAdd(e){
		this.setState({
			isDress:!this.state.isDress
		})
	}
	handleSearch(e){
		this.setState({
			search:e.target.value
		})

		if(e.target.value==""){
			this.setState({
				isHistory:true
			})
		}
	}
	handleAddHistory(e){
		this.setState({
			search:e.target.innerText
		})
	}
	handleToSaerch(e){
		this.setState({
			isHistory:false
		})
		let _this=this,search=this.state.search.toUpperCase(),dress=this.state.dress;
		if(search==""){
			return false;
		}
		axios.get("/jobs/all",{params:{}}).then(function(res){
			var a=res.data.list;
			var ab=[];
			a.map((item,idx)=>{
				let positionName=item.positionName.toUpperCase(),companyName=item.companyName,city=item.city;
				if(dress=="全国"){
					if(positionName.indexOf(search)!==-1){
						ab.push(item)
					}else if(companyName.indexOf(search)!==-1){
						ab.push(item)
					}
				}else{
					if(positionName.indexOf(search)!==-1 && city==dress){
							ab.push(item)
						
					}else if(companyName.indexOf(search)!==-1 && city==dress){
							b:this.state.b.push(item)
					}
				}
				
			})
			_this.setState({
				b:ab
			})
		})	
		
		if(window.localStorage){
			var bck=JSON.parse(localStorage.getItem('history'))||[];
			bck.unshift(this.state.search);
			localStorage.setItem("history",JSON.stringify(Array.from(new Set(bck))))
		}
	}
	handleLi(e){
		this.setState({
			isDress:!this.state.isDress,
			dress:e.target.innerText
		})
	}

}
class ToJob extends Component{
	render(){
		// console.log(this.props.JobList)
		if(this.props.JobList==""){
			var Yes=<div className="customNO" >拉勾上暂时没有这样的职位</div>;
		}else{
			Yes=<div className="custominfo" >将搜索地区和关键词设为定制条件</div>;
		}
		return (
			<div>
				{Yes}
				<Job  JobList={this.props.JobList} />
			</div>
		)
	}
}
export default Search