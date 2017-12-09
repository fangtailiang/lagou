import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import Job from "./Job";
import "./pagesCss/Collect.css";
class Collect extends Component{
	constructor(){
		super();
		this.state={
			collect:""
		}
	}
	render(){
		if(this.state.collect==""){
			var adc=<div className="NOcollect">还没有收藏哟~</div>
		}else{
			var adc=<Job JobList={this.state.collect} />;
		}
		return (
			<div>
				<header id="header">我的收藏
					<div className="aaa left"><Link to="/user" className="corner"></Link></div>
				</header>
				{adc}
			</div>
			)
	}
	componentWillMount(){
		if(window.localStorage){
			if(!localStorage.getItem('collect')){
				return;
			}
			var collect=JSON.parse(localStorage.getItem('collect'));
			// console.log(collect)
		}
		var _this=this;
		var _collect=[];
		axios.get("/jobs/all",{}).then(function(res){
			res.data.list.map(function(item,idx){

				if(collect.indexOf(item._id)!==-1){
					_collect.push(item)
				}
			})
			// console.log(res.data.list)
			_this.setState({
				collect:_collect
			})
		})
		
		
	}
}
export default Collect