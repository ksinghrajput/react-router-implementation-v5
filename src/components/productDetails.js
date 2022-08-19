import React from 'react';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {

    const param = useParams();

    console.log(param)

    return (
        <React.Fragment>
            <div> Product details </div>
            <p>{param.productId}</p>
        </React.Fragment>

    );
}

export default ProductDetails;
