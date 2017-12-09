import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,browserHistory,IndexRoute} from 'react-router';
import './index.css';
import App from './App';
import User from './pages/User';
import Search from './pages/Search';
import JobTitle from './pages/JobTitle';
import Login from './pages/Login';
import Register from './pages/Register';
import YouWang from "./pages/YouWang";
import Detail from "./pages/Detail";
import Send from "./pages/Send";
import Collect from "./pages/Collect";
import Invite from "./pages/Invite";
import ToType from "./pages/ToType";
import ToScale from "./pages/ToScale";
import ToAll from "./pages/ToAll";
import SendLeft from "./left/SendLeft";
import SendMidd from "./left/SendMidd";
import SendRight from "./left/SendRight";
import ToSalary from "./pages/ToSalary";
import Interview from "./pages/Interview";
import InterLeft from "./left/InterLeft";
import InterRight from "./left/InterRight";
import Resume from "./pages/Resume";
import registerServiceWorker from './registerServiceWorker';

//Router:路由配置的容器 ，history设置路由切换的模式（hash,路径模式）
//Route:具体的匹配规则容器 ，path=路径 ，component加载的组件
//IndexRoute：默认进来就加载的组件
//动态路由：不同的路径，需要加载同一个组件，并且路径中的变量要在组件中被获取

ReactDOM.render( 
	<Router history={browserHistory}>
       <Route path="/" component={App}>  {/*子路由，嵌套路由*/}
 		<Route path="user" component={User} />
 		<Route path="search" component={Search} />
 		<IndexRoute component={JobTitle} />
 		<Route path="invite" component={Invite} />
       </Route>
       <Route path="/login" component={Login} />
       <Route path="/register" component={Register} />
       <Route path="/youwang" component={YouWang} />
      <Route path="/detail" component={Detail} />
      <Route path="/send" component={Send} >
            <IndexRoute  component={SendLeft}/>
            <Route path="sendMidd" component={SendMidd}/>
            <Route path="sendRight" component={SendRight}/>
      </Route>
      <Route path="/collect" component={Collect} />
      <Route path="/toType" component={ToType} />
      <Route path="/toScale" component={ToScale} />
      <Route path="/toAll" component={ToAll} />
      <Route path="/toSalary" component={ToSalary} />
      <Route path="/resume" component={Resume} />
      <Route path="/interview" component={Interview} >
            <IndexRoute component={InterLeft} />
            <Route path="interRight" component={InterRight} />
      </Route>
    </Router>, document.getElementById('root'));
registerServiceWorker();
