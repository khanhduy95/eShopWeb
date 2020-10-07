import React, {
    Component
} from 'react';
import ProductItem from './ProductItem'
class Test extends Component {
    constructor(props) {
        super();
        this.state = {
            items:[]
        }
    }
    async componentDidMount() {
        const url = "https://localhost:44320/api/CatalogItems";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({items:data});
    };

    show(){
        let elem = this.state.items.map((data,key)=>{
            return <ProductItem 
               key={key}
               Id={data.catalogId}
               Name={data.catalogName}
            />
        });
        return elem;
    }

    render() {
      
      
        return ( 
            <div>
               {this.show()}
            </div>
          
        )
    }
}

export default Test;