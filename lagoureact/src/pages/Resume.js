import React, { Component } from 'react';
import {browserHistory,Link} from 'react-router';
import "./pagesCss/Resume.css";
class Resume extends Component{
	render(){
		return(
			<div id="wrapper">
				<div className="resume_header">
					<div className="resume_head">

					</div>
					<div className="none-work">
						<span></span>
						<img alt="加载中..." width="65" height="65" src="https://www.lagou.com/images/myresume/default_headpic.png"/>
					</div>
				</div>
			</div>

			)
	}
}
export default Resume
