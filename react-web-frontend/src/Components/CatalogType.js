import React, {
    Component
} from 'react';
import { Router, useRouteMatch } from 'react-router-dom';
import Configuration from '../Configuration';
class CatalogType extends Component {

    constructor(props) {
        super();
        this.CONFIG = new Configuration();
        this.logType="";
        this.state = {
            products: [],
            match: props.match.params.id,
            id:0,
            status:false
        }
    }
    IDD;

    getCatalogType = async(id)=>{
        const response = await fetch(this.CONFIG.CATALOG_ITEM +"/"+id);
        const data =await  response.json();
            this.setState({products:data});
            console.log("data",data)
    }
    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
   
    async componentDidMount(){
        const response = await fetch(this.CONFIG.CATALOG_ITEM +"/"+this.state.match);
        const data =await  response.json();
          this.setState({products:data});
            console.log("LLLL")
        }
    async componentWillReceiveProps(nextProps) {
        await this.getCatalogType(this.IDD);
        // console.log("componentWillReceiveProps1"+nextProps);

        // this.getCatalogType(this.IDD);
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("componentWillReceiveProps2"+nextProps);
    //     return true;
    // }
    // //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillReceiveProps3"+nextProps);
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     // const response =  fetch(this.CONFIG.CATALOG_ITEM +"/"+this.IDD)
    //     //         .then(res=>res.json())
    //     //         .then(data=>this.setState({products:data}));
    //     // this.getCatalogType(this.IDD);
    //     // const data =  response.json();
    //     //     this.setState({products:data});
    //     //     this.setState({status:true});
    //     //     console.log("data",data)
    //     console.log("componentWillReceiveProps4"+prevProps);

        
    // }
    render() {
        
        var {match}=this.props;
        this.IDD=match.params.id;
        console.log('OKK',this.IDD);
        // console.log(this.state.status);
        // this.setState({id:match.params.id})
        return (
        <div>
          {this.state.products.map((data,key)=>{
                return <h1 key={key}>{data.productId}</h1>
            })}
        </div>
        );
    }
}

export default CatalogType;