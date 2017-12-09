import React, { Component } from 'react';
import {Link} from 'react-router';

class JobHeader extends Component{
	render(){
		if(this.props.username ==""){
			var JobHead=<NoLogin custom={this.props.custom}/>;
			
			
		}else{
			var JobHead=<YesLogin custom={this.props.custom}/>;
			
		}
		return (
			<div>
				{JobHead}
			</div>
			)
	}

}
class NoLogin extends Component{
	render(){
		return (
			<div>
				<span className="info">10秒定钟制职位</span>
				<Link to="/login" className="go">
					<em className="text2">去登陆</em>
				</Link>
			</div>
			)
	}
}
class YesLogin extends Component{
		render(){
			var custom=this.props.custom;
			if(!custom || custom==""){
				var a=<span className="info">10秒定钟制职位</span>;
			}else{
				custom=JSON.parse(custom)
				var a=<span className="info">
						<em style={{display:custom.type?"inline":"none"}}>{custom.type}/</em>
						<em style={{display:custom.address?"inline":"none"}}>{custom.address}/</em>
						<em style={{display:custom.salary?"inline":"none"}}>{custom.salary}/</em>
						<em style={{display:custom.scale?"inline":"none"}}>{custom.scale}</em>
					</span>;
			}
		return (
			<div>
				{a} 
				<Link to="/youwang" className="go">
					<em className="icon"></em>
					<em className="text2">编辑</em>
				</Link>
			</div>
			)
	}

}
export default JobHeader