import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import JobItem from "../left/JobItem";
import "./pagesCss/Job.css";

class Job extends Component{
	constructor(){
		super();
		this.state={
			_id:"",
			JobList:""     
		}
		this.handleDEtail=this.handleDEtail.bind(this);

	}
	render(){
		if(this.props.JobList===""){
            return false;
        }
        // console.log(this.props.JobList)
		var List=this.props.JobList.map((item,idx)=>{
			return <JobItem item={item} key={item._id} onDetail={this.handleDEtail} word={this.state._id}/>;	
		});
		return (
			<ul className="list">
				{List}				
			</ul>
			)
	}
	componentWillMount(){
		var _id=[];
		localStorage.setItem("toDetail",JSON.stringify(_id));
	}
     handleDEtail(e){
        this.setState({
            _id:e.target.dataset.id
        })
        var _id=this.state._id;
        if(_id==""){
            return;
        }
        if(window.localStorage){
        	localStorage.setItem("toDetail",JSON.stringify(_id));

        }
        browserHistory.push({
            pathname:"/detail",
        })
    }
}
export default Job