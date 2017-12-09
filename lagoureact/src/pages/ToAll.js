import React, { Component } from 'react';
import {browserHistory,Link} from 'react-router';
import Address from "../left/Address";
import "./pagesCss/ToAll.css";
class ToAll extends Component{
	constructor(){
		super();
		this.handleToWang=this.handleToWang.bind(this);
	}
	render(){
		return (
			<div>
				<header id="header">投递记录
					<div className="aaa left"><Link to="/youwang" className="corner"></Link></div>
				</header>
				<div id="content1">
					<div className="infoTOAdd">
						<span className="innerText">
							<em className="textLeft"></em>
							告诉我你期望的工作地点？
							<em className="textright"></em>
						</span>
					</div>
					<Address onDress={this.handleToWang}/>
				</div>
			</div>
			)
	}
	handleToWang(e){
		if(window.localStorage){
			var custom=localStorage.getItem("custom");
			if(!custom){
				custom={
					type:"",
					address:e.target.innerText,
					salary:"",
					scale:""
				}
			}else{
				custom=JSON.parse(custom);
				custom.address=e.target.innerText;
			}
			localStorage.setItem("custom",JSON.stringify(custom));
		}
		browserHistory.push({
			pathname:"youwang"
		})
	}
}
export default ToAll