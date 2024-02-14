import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css'; 
import { Link } from 'react-router-dom';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data);
                const uniqueCategories = [...new Set(response.data.map(product => product.category))];
                setCategories(uniqueCategories);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleViewMore = (product) => {
        setSelectedProduct(product);
    };

    const handleClosePopup = () => {
        setSelectedProduct(null);
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === '' || product.category === selectedCategory)
    );

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="product-list-container">
            <h2>Products</h2>
            <input
                type="text"
                placeholder="Search by product name"
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-container"
            />
            <div className="category-buttons">
                {categories.map(category => (
                    <button key={category} onClick={() => handleCategoryChange(category)}>{category}</button>
                ))}
            </div>
            <div className="product-grid">
                {filteredProducts.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <div className="product-info">
                            <div className="product-title">{product.title}</div>
                            <div className="product-price">${product.price}</div>
                            <div className="product-category">{product.category}</div>
                            <div className="product-description">{product.description.length > 100 ? product.description.substring(0, 100) + '...' : product.description}</div>
                            {product.description.length > 100 && (
                                <button onClick={() => handleViewMore(product)}>View More</button>
                            )}
                            <div className="button-container">
                                <button>Add to Cart</button>
                                <Link to="/fetch-data">
                                    <button>Checkout</button> {/* Link to Checkout component */}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProduct && (
                <Popup product={selectedProduct} onClose={handleClosePopup} />
            )}
        </div>
    );
};

const Popup = ({ product, onClose }) => {
    return (
        <div className="popup">
            <div className="popup-content">
                <button className="close-btn" onClick={onClose}>Close</button>
                <h2>{product.title}</h2>
                <img src={product.image} alt={product.title} />
                <div className="product-info">
                    <div className="product-price">${product.price}</div>
                    <div className="product-category">{product.category}</div>
                    <div className="product-description">{product.description}</div>
                    <div className="button-container">
                        <button>Add to Cart</button>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
