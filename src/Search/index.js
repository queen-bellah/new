import React, { useState, useEffect } from 'react';
import './index.css';
function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        setAllProducts(products);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchProducts();
  }, []);
  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredSuggestions = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, allProducts]);
  const handleSearch = (e) => {
    e.preventDefault();
    const filteredProducts = allProducts.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredProducts);
  };
  const handleSuggestionClick = (product) => {
    setSearchTerm(product.title);
    onSearch([product]);
    setSuggestions([]);
  };
  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map(product => (
            <li key={product.id} onClick={() => handleSuggestionClick(product)}>
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Search;