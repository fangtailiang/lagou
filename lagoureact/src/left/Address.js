import React, { Component } from 'react';
import "../pages/pagesCss/Address.css";
class Address extends Component{
	constructor(){
		super();
		this.state={
			remen:["北京","上海","广州","深圳","成都","杭州"],
			abc:["鞍山","保定","北京","宝鸡","包头","滨州","亳州","长春","成都","常德","重庆","长沙","常州","沧州","郴州","东莞","大连","大理","东营","德阳","德州","达州","佛山","阜阳","福州"],
			qita:["桂林","贵阳","广州","赣州","淮安","邯郸","哈尔滨","合肥","呼和浩特","海口","黄石","衡水","杭州","惠州","湖州","金华","吉林","江门","荆门","济南","济宁","嘉兴","揭阳","荆州"],
			en:["昆明","聊城","廊坊","拉萨","丽水","临沂","洛阳","连云港","兰州","柳州","泸州","茂名","绵阳","宁波","南昌","南充","南京","南宁","南通","南阳"],
			no:["莆田","青岛","秦皇岛","清远","泉州","日照"],
			kao:["上海","石家庄","遂宁","宿迁","汕头","绍兴","沈阳","三亚","深圳","苏州","天津","唐山","太原","台州","泰州"],
			nda:["潍坊","武汉","芜湖","威海","乌鲁木齐","无锡","温州","西安","香港特别行政区","厦门","西宁","邢台","新乡","咸阳","信阳","徐州","银川","盐城","宜昌","烟台","岳阳","扬州","淄博","珠海","镇江","湛江","肇庆","中山","郑州","漳州","株洲"]
		}
	}
	render(){
		return (
			<div id="fulldialog-conid-1" >
				<div className="fdialog-rcon" >
					<AddList onDress={this.props.onDress} title="热门城市" list={this.state.remen}/>
					<AddList onDress={this.props.onDress} title="ABCDEF" list={this.state.abc}/>
					<AddList onDress={this.props.onDress} title="GHIJ" list={this.state.qita}/>
					<AddList onDress={this.props.onDress} title="KLMN" list={this.state.en}/>
					<AddList onDress={this.props.onDress} title="OPQR" list={this.state.no}/>
					<AddList onDress={this.props.onDress} title="STUV" list={this.state.kao}/>
					<AddList onDress={this.props.onDress} title="WXYZ" list={this.state.nda}/>			
				</div>
			</div>
			)
	}
}


class AddList extends Component{
	render(){
		var item=this.props.list.map((item,idx)=>{
			return <ListAddress onDress={this.props.onDress} key={idx} item={item}/>
		})
		return (
		<div>
			<p className="cities-header">{this.props.title}</p>
			<ul className="cities-list" >
				{item}
			</ul>
		</div>
		)
	}
}
class ListAddress extends Component{
	render(){
		return(
			<li onClick={this.props.onDress} className="cities-item">{this.props.item}</li>
		)
	}
	
}
export default Address