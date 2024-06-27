
import './index.css'
import React, { useState } from 'react';
import { useGetProducts } from './hooks/useGetProduct';
import ProductCard from '../Atoms/productCard';
import Search from '../Search';
function Products() {
    const { products, error, loading } = useGetProducts();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const handleSearch = (searchResults) => {
        setFilteredProducts(searchResults);
    };
    const displayProducts = filteredProducts.length > 0 ? filteredProducts : products;
    return (
        <div>
            <Search onSearch={handleSearch} />
            <div className='images'>
                {loading && <h2>Loading products ...</h2>}
                {error && <h2>{error}</h2>}
                {displayProducts.length > 0 ? displayProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        category={product.category}
                      
                        price={product.price}
                    />
                )) : !loading && <h2>No products found</h2>}
            </div>
        </div>
    )
}
export default Products;