import React, { Component } from 'react';
import {browserHistory,Link} from 'react-router';
import "./pagesCss/ToScale.css";
class ToScale extends Component{
	constructor(){
		super();
		this.handleGet=this.handleGet.bind(this);
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
							<em className="ScaleLeft"></em>
							对公司的规模可有要求？
							<em className="Scaleright"></em>
						</span>
					</div>
						<ul className="SearchType" onClick={this.handleGet}>
							<li className="item" >没有要求</li>
							<li className="item" >初创型<em className="itemEM">( 天使轮及未融资 )</em></li>
							<li className="item" >成长型<em className="itemEM">( A轮或B轮融资 )</em></li>
							<li className="item" >成熟型<em className="itemEM">( C轮融资以上但未上市 )</em></li>
							<li className="item" >上市公司</li>
						</ul>
				</div>
			</div>
			)
	}
	componentWillMount(){
		if(window.localStorage){
			var custom=JSON.parse(localStorage.getItem('custom'));
		}
	}
	handleGet(e){
		if(window.localStorage){
			var custom=localStorage.getItem('custom');
			if(!custom){
				custom={
					type:"",
					address:"",
					salary:"",
					scale:e.target.innerText
				}
				
			}else{
				custom=JSON.parse(custom);
				custom.scale=e.target.innerText;
			}
			localStorage.setItem("custom",JSON.stringify(custom));
		}
		browserHistory.push({
			pathname:"/youwang"
		})
	}
}
export default ToScale