import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, Tab, Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const mockProducts = [
    {
        id: 1,
        name: "Product 1",
        description: "Description for Product 1",
        image: "https://via.placeholder.com/150",
        price: 19.99,
        category: 'Electronics'
    },
    {
        id: 2,
        name: "Product 1",
        description: "Description for Product 1",
        image: "https://via.placeholder.com/150",
        price: 19.99,
        category: 'Electronics'
    },
    {
        id: 3,
        name: "Product 2",
        description: "Description for Product 2",
        image: "https://via.placeholder.com/150",
        price: 29.99,
        category: 'Books'
    },
    {
        id: 4,
        name: "Product 2",
        description: "Description for Product 2",
        image: "https://via.placeholder.com/150",
        price: 29.99,
        category: 'Books'
    },
    {
        id: 5,
        name: "Product 2",
        description: "Description for Product 2",
        image: "https://via.placeholder.com/150",
        price: 29.99,
        category: 'Books'
    },
];

const Products = () => {
    const [products] = useState(mockProducts);
    const [selectedTab, setSelectedTab] = useState('Electronics');
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const categories = useMemo(() => {
        const uniqueCategories = new Set(products.map(product => product.category));
        return Array.from(uniqueCategories);
    }, [products]);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`); // Use navigate to redirect
    };

    const filteredProducts = products.filter(product => product.category === selectedTab);

    return (
        <div>
            <Tabs value={selectedTab} onChange={handleTabChange} centered>
                {categories.map(category => (
                    <Tab key={category} label={category} value={category} />
                ))}
            </Tabs>

            <Grid container spacing={2} justifyContent="center">
                {filteredProducts.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} onClick={() => handleProductClick(product.id)}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Card sx={{ maxWidth: 345, m: 1 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={product.image}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                    <Typography variant="h6" color="text.primary">
                                        ${product.price.toFixed(2)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Products;