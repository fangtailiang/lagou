import React, { Component } from 'react';
import {browserHistory,Link} from 'react-router';
import "./pagesCss/ToSalary.css";
class ToSalary extends Component{
	render(){
		return (
			<div>
				<header id="header">投递记录
					<div className="aaa left"><Link to="/youwang" className="corner"></Link></div>
				</header>
				<div id="content1">
					<div className="infoTOAdd">
						<span className="text up">
							<em className="SalaryLeft"></em>
							你值得更好的生活，
						</span><br/>
						<span className="text down">
							告诉我你期望的薪水。
							<em className="SalaryRight"></em>
						</span>
					</div>
					<ul className="SearchType" onClick={(e)=>{this.handleSAlary(e)}}>
						<li className="item">没有要求</li>
						<li className="item">2k以下</li>
						<li className="item">2k-5k</li>
						<li className="item">5k-10k</li>
						<li className="item">10k-15k</li>
						<li className="item">15k-25k</li>
						<li className="item">25k-50k</li>
						<li className="item">50k以上</li>
					</ul>
				</div>
			</div>
			)
	}
	componentWillMount(){
		if(window.localStorage){
			var custom=localStorage.getItem("custom");
				if(!custom){
					return;
				}else{
					custom=JSON.parse(custom);
				}
		}
	}
	handleSAlary(e){
		if(window.localStorage){
			var custom=localStorage.getItem('custom');
			if(!custom){
				custom={
					type:"",
					address:"",
					salary:e.target.innerText,
					scale:""
				}
				
			}else{
				custom=JSON.parse(custom);
				custom.salary=e.target.innerText;
			}
			localStorage.setItem("custom",JSON.stringify(custom));
			// localStorage.removeItem('custom');
		}
		browserHistory.push({
			pathname:"/youwang"
		})
	}
}
export default ToSalary