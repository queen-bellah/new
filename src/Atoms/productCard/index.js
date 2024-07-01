const ProductCard = ({image, category,price}) =>{
    return(
        <div className="card">
        <img src={image} alt="profile"/>
        <h2>{category}</h2>
        <h2>{price}</h2>

        </div>
    )
}
export default ProductCard;