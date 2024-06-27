const ProductCard = ({image, category,price}) =>{
    return(
        <>
        <img src={image} alt="profile"/>
        <h2>{category}</h2>
        <h2>{price}</h2>

        </>
    )
}
export default ProductCard;