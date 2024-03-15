// TODO: create a component that displays a single bakery item
import '../App.css';

export default function BakeryItem(props) {
    return (
        <div className="BakeryItem">
            <img src={props.image}></img>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <div className= "price-cart">
                <p>{props.price}</p>
                <button onClick={() => props.addToCart(props.pastry)}>Add to Cart</button>
            </div>
        </div>
    )
}