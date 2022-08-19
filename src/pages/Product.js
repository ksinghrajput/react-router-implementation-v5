import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <section>
            <p> Hello Product</p>
            <ul>
                <li>
                    <Link to="products/book" >A Book</Link>
                </li>
                <li>
                    <Link to="products/carpet" >A Carpet</Link>
                </li>
                <li>
                    <Link to="products/course" > A online course</Link>
                </li>
            </ul>
        </section>

    )
}

export default Product;