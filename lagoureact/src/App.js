import React, { Component } from 'react';
import './App.css';
import {Route,browserHistory,Link,IndexLink,IndexRoute} from 'react-router';

//Link 组件是 在模板中切换路由的组件 to 接字符串，可以对变量 pathname 切换的路径，query挈带的参数

class App extends Component {
  constructor(){
    super();
    this.state={
      username:""
    }
  }
  render() {
    return (
      <div className="App container-fluid">
          {/*头部*/}
          <header id="header">拉勾网</header>
          {/*内容*/}
          <div id="content" >{this.props.children}</div>
          {/*尾部*/}
          <footer id="footer">
            <IndexLink to="/" activeClassName="linkActive" data-type="custom">
              <span className="icon selectedFooter"></span><span className="textApp">职位</span>   
            </IndexLink>
            <Link to="search" activeClassName="linkActive" data-type="search">
              <span className="icon searchFooter"></span><span className="textApp">搜索</span>   
            </Link>
            <Link to="user" activeClassName="linkActive" data-type="mine" >
              <span className="icon userFooter"></span><span className="textApp">我的</span>   
            </Link>
          </footer>
      </div>
    );
  }
}

export default App;
