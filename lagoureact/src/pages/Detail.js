import React, { Component } from 'react';
import {Link,browserHistory} from 'react-router';
import axios from 'axios';

import "./pagesCss/Detail.css";
class Detail extends Component{
	constructor(){
		super();
		this.state={
			isNo:false,
			detail:"",
			collect:"",
			_id:""
		}
		this.handleChange=this.handleChange.bind(this);
	}
	render(){
		
		var html=this.state.isNo?<YesCollect />:<NoCollect />;
		
		var a=this.state.detail;
		if(this.state.detail===""){
			return false;
		}
		
		return (
			<div>
				<header id="header">
					职位详情
					<div className="left aaa"><Link to="/" className="corner"></Link></div>
					<div className="right aaa"><Link to="/" className="corner"></Link></div>
				</header>
				<div id="content">
					<div className="postitle">
						<h2 className="title">{a.positionName}</h2>
						<div className="collicon activeable" onClick={this.handleChange}>
						{html}
						</div>
					</div>
					<div className="detail">
						<span className="itemDetail salary">
							<em className="icons"></em>
							<span className="textDetaill">{a.salary}</span>
						</span>
						<span className="itemDetail workaddress">
							<em className="icons"></em>
							<span className="textDetaill">{a.city}</span>
						</span>
						<span className="itemDetail jobnature">
							<em className="icons"></em>
							<span className="textDetaill">全职</span>
						</span>
						<span className="itemDetail workyear">
							<em className="icons"></em>
							<span className="textDetaill">3-5年</span>
						</span>
						<span className="itemDetail education">
							<em className="icons"></em>
							<span className="textDetaill">本科以上</span>
						</span><br/>
						<div className="temptation">职位诱惑：六险一金，弹性工作，免费三餐，租房补贴，带薪休假，休闲下午茶，扁平管理，职业大牛，晋升空间，团队氛围好，优厚薪资
            			</div>
					</div>
					<div className="company activeable">
						<img className="logo" alt="正在加载中..." src={"//static.lagou.com/"+a.companyLogo} />
						<div className="desca abs" >
							<div className="dlefta">
								<h2 className="zztitle">{a.companyName}</h2>
								<p className="infoa">{a.companyFullName}</p>
							</div>
						</div>
						<span className="dright"></span>
					</div>
					<div className="positiondesc">
						<header className="header">职位描述</header>
						<div className="content">
							<p>岗位职责：</p>
							1、树立社区价值观，建立社区规则系统，负责整个社区的良性发展；<br/>
							2、善于沟通，有团队观念，有很强的自我成长愿望和自我驱动；<br/>
							3、具备较强的沟通能力及耐心，喜欢和用户交流，乐于为用户解决问题；<br/>
							<p>岗位要求：</p>
							1、树立社区价值观，建立社区规则系统，负责整个社区的良性发展；<br/>
							2、善于沟通，有团队观念，有很强的自我成长愿望和自我驱动；<br/>
							3、具备较强的沟通能力及耐心，喜欢和用户交流，乐于为用户解决问题；<br/>
						</div>
					</div>
					<div className="positioneval">
						<div className="eval-title">面试评价<span>(<span></span>)</span></div>
						<ul className="list">
							<li className="list-item-empty list-item"></li>
						</ul>
					</div>
				</div>
				<div className="fix_btn_groupDetail" onClick={(e)=>{this.handleDeliver(e)}}><div className="deliverDetail deliver_resume smallWX solid">投递简历</div></div>
			</div>
			)
	}
	componentWillMount(){
		document.getElementsByTagName("body")[0].className="";
		let _id=localStorage.getItem('toDetail');
		if(!_id){
			return
		}
		_id=JSON.parse(_id);
		this.setState({
			_id
		})
		 var _this=this;
		axios.get("/jobs/findone", {params:{
             _id
         }}).then(function(res){
			_this.setState({
				detail:res.data.list
			})
		})
          if(window.localStorage){;
         	let collect=localStorage.getItem('collect');
         	if(!localStorage.getItem('collect')){
         		this.setState({
     				isNo:false
     			})
         		return ;
         	}else{
     			if(collect.indexOf(_id)===-1){
     				this.setState({
         				isNo:false
         			})
         			return;
     			}else{
     				this.setState({
         				isNo:true
         			})
     			}
         	}
         }
       
        
	}
	handleChange(e){
		this.setState({
			isNo:!this.state.isNo
		})
		if(window.localStorage){
			let _id=this.state._id;
			var user=localStorage.getItem("username");
			if(!user){
				browserHistory.push({
					pathname:"/login"
				})
				return
			}else{
				if(!this.state.isNo){
					if(!localStorage.getItem("collect")){
						var collect=[];
						collect.push(_id);
						localStorage.setItem("collect",JSON.stringify(collect));
					}else{
						let collect=JSON.parse(localStorage.getItem("collect"));
						collect.push(_id);
						collect=Array.from(new Set(collect));
						localStorage.setItem("collect",JSON.stringify(collect));
					}
					
				}else{
					var b=localStorage.getItem('collect');
					if(!b){
						return false;
					}else{
						b=JSON.parse(b);
					}
					b.map((item,idx)=>{
						if(item==_id){
							b.splice(idx,1);
							localStorage.setItem("collect",JSON.stringify(b));
						}
					})
				}
			}

		}
		
	}
	handleDeliver(){
		if(window.localStorage){
			var user=localStorage.getItem("username");
			var user=localStorage.getItem("username");
			if(!user){
				browserHistory.push({
					pathname:"/login"
				})
				return
			}
		}
	}

}
export default Detail



class NoCollect extends Component{
	render(){
		return (
			<div>
				<span className="icon notcoll"></span>
				<span className="textDetail">未收藏</span>
			</div>
			)
	}
}

class YesCollect extends Component{
	render(){
		return (
			<div>
				<span className="icon yestcoll"></span>
				<span className="textDetail">已收藏</span>
			</div>
			)
	}
}
