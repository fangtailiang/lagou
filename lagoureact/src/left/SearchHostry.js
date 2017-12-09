import React, { Component } from 'react';
import "../pages/pagesCss/SearchHostry.css";
class SearchHostry extends Component{
	constructor(){
		super();
		this.state={
			history:""
		}
		// this.handleDeHi=this.handleDeHi.bind(this);
	}
	render(){
		if(!this.state.history){
			return false;
		}
		var history=this.state.history.map((item,idx)=>{
			return <HistoryItem key={idx} id={idx} item={item} isShow={this.props.isShow} onDelete={this.handleDeHi} onAdd={this.props.onAdd}/>;
		});
		return (
			<ul className="history">
				{history}
			</ul>
			)
	}
	componentWillMount(){
		if(window.localStorage){
			var history=JSON.parse(localStorage.getItem("history"));
			this.setState({
				history
			})
		}
	}
	handleDeHi(e){
		console.log(e.target.dataset.name);
		var name=e.target.dataset.name;
		if(window.localStorage){
			var dc=JSON.parse(localStorage.getItem('history'));
			dc.forEach((cur,idx)=>{
				if(cur==name){
					dc.splice(idx,1);
				}
				e.target.parentNode.parentNode.remove(true);
				localStorage.setItem("history",JSON.stringify(dc));
			})
		}
	}
	
}



class HistoryItem extends Component{
	render(){
		return (
			<li className="history-item" style={{display:this.props.isShow?"block":"none"}} >
				<span className="Onetext" onClick={this.props.onAdd}>{this.props.item}</span>
				<div className="delcon" onClick={this.props.onDelete} data-name={this.props.item} >
					<span className="OneIcon" data-name={this.props.item} ></span>
				</div>
			</li>
		)
	}
}
export default SearchHostry