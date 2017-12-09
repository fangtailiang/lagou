import React, { Component } from 'react';
import {browserHistory,Link} from 'react-router';
import "./pagesCss/ToType.css";
class ToType extends Component{
	constructor(){
		super();
		this.state={
			isType:true,
			connent:""
		}
		this.handleChangeType=this.handleChangeType.bind(this);
		this.handlechange=this.handlechange.bind(this);
	}	
	render(){
		return (
			<div>
				<header id="header">投递记录
					<div className="aaa left"><Link to="/youwang" className="corner"></Link></div>
				</header>
				<div id="content1">
					<div className="infoTOAdd" style={{display:this.state.isType?"block":"none"}}>
						<span className="innerText">
							<em className="typeLeft"></em>
							想找什么职位？
							<em className="typeright"></em>
						</span>
					</div>
					<div id="rinputer">
						<div className="typeInput">
							<input onClick={this.handleChangeType} value={this.state.connent} className="inputer1" onChange={this.handlechange} placeholder="输入你想定制的职位"/>
							<span className="button2" onClick={(e)=>{this.handleToYou(e)}}>OK</span>
						</div>
						<ul className="SearchType" onClick={(e)=>{this.handleType(e)}}>
							<li className="item">产品经理</li>
							<li className="item">Java</li>
							<li className="item">运营</li>
							<li className="item">Android</li>
							<li className="item">PHP</li>
							<li className="item">UI</li>
							<li className="item">IOS</li>
							<li className="item">编辑</li>
							<li className="item">BD</li>
						</ul>
					</div>
				</div>
			</div>
			
			)
	}
	componentWillMount(){
		if(window.localStorage){
			var custom=localStorage.getItem("custom");
			if(custom==="undefined"){
				return;
			}else{
				custom=JSON.parse(custom);
			}

		}	
	}
	handleType(e){
		// console.log(e.target.innerText)
		if(window.localStorage){
			var custom=localStorage.getItem("custom");
			if(!custom){
				custom={
					type:e.target.innerText,
					address:"",
					salary:"",
					scale:""
				}
			}else{
				custom=JSON.parse(custom);
				custom.type=e.target.innerText;
			}
			localStorage.setItem("custom",JSON.stringify(custom));
		}
		browserHistory.push({
			pathname:"youwang"
		})
	}
	handleChangeType(e){
		this.setState({
			isType:false
		})
	}
	handlechange(e){
		this.setState({
			connent:e.target.value
		})
		console.log(e.target.value)
	}
	handleToYou(e){
		if(window.localStorage){
			var custom=JSON.parse(localStorage.getItem("custom"))||[];
			custom.type=this.state.connent;
			localStorage.setItem("custom",JSON.stringify(custom));
		}
		browserHistory.push({
			pathname:"youwang"
		})	
	}
}
export default ToType