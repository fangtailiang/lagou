import React, { Component } from 'react';
import {browserHistory} from 'react-router';

class JobItem extends Component{
	constructor(){
		super();
		this.state={
			_id:""
		}		
	}
	render(){
		var {companyLogo,companyName,positionName,city,salary,createTime,_id}=this.props.item;
		return (
			<li className="activeable list-item" onClick={this.props.onDetail}>
				<img alt="加载中..." src={"//static.lagou.com/"+companyLogo} data-id={_id} className="item-logo" />
				<div className="item-desc" data-id={_id} >
					<h2 className="item-title" data-id={_id} >{companyName}</h2>
					<p className="item-info" data-id={_id}>
						<span className="item-pos" data-id={_id}>{positionName} [ {city} ]</span>
						<span className="item-salary" data-id={_id} >{salary}</span>
					</p>
					<p className="item-salary" data-id={_id}>{createTime}</p>
				</div>
			</li>
			);
	}
    handleToDEtail(e){
       browserHistory.push({
           pathname:"/detail"
       })
    }

}
export default JobItem