import React, {
    Component
} from 'react';
import HomeProduct from "./HomeProduct";
import Configuration from '../Configuration';

class Home extends Component {
    constructor(props) {
        super();
        this.CONFIG = new Configuration();
        this.state = {
            products: []
        }
    };

    async componentDidMount() {
        const response = await fetch(this.CONFIG.CATALOG_ITEM);
        const data = await response.json();
        this.setState({products:data});
     
    };

    render() {
        let item = this.state.products.map((data,key)=>{
            return  <HomeProduct 
                    key={key}
                    Name={data.productName}
                    Des={data.description}
            />
        })
        return ( 
            <div className="container">
            <div className="row">
                <h1>Product</h1>
            </div>
            <div className="row">
             {item}
            </div>
          </div>
            );
    }
}

export default Home;