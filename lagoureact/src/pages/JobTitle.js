import React, { Component } from 'react';
import {Link} from 'react-router';
import Job from "./Job";
import JobHead from "../left/JobHead";
import JobItem from "../left/JobItem";
import axios from 'axios';

import "./pagesCss/JobTitle.css";
class JobTitle extends Component{
	constructor(){
		super();
		this.state={
			JobList:"",
            pagenum:1,
            username:"",
            custom:""
		}
        this.handleAdd=this.handleAdd.bind(this);
	}
	render(){
		return (
			<div>
				<div className="custom-info none">
					<JobHead username={this.state.username} custom={this.state.custom}/>
				</div>
                <Job JobList={this.state.JobList} />
                <div className="activeable list-more" onClick={this.handleAdd}>加载更多</div>
				<div id="copyright">
					<p>©2015 lagou.com, all right reserved </p>
					<div className="copyright-item">
					<span className="phone active now">移动版 · </span>
					<span className="computer">电脑版 · </span>
					<Link className="phone active">回顶部</Link>
					</div>
				</div>
			</div>
			)
	}
    componentWillMount(){
        document.getElementsByTagName("body")[0].className="";
    	if(window.localStorage){
    		let user=JSON.parse(localStorage.getItem('username'))||[];
    		let custom=localStorage.getItem("custom")||[];
    		this.setState({
    			username:user,
    			custom:custom
    		})
    	}
        var that=this;
        axios.get("/api/customList",{params:{"pagenum":1}}).then(function(res){
            that.setState({
                JobList:res.data.list
            })
        })
    }
    handleAdd(e){
        this.setState({
            pagenum:++this.state.pagenum
        });
        let pagenum=this.state.pagenum;
        let that=this;
        axios.get("/api/customList",{params:{"pagenum":pagenum}}).then(function(res){
            that.setState({
                JobList:res.data.list
            })
        })
    }

   
}

export default JobTitle