import { CircularProgress, Container, Grid, Typography, Button, Card } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {

    const [products, setProducts] = useState([])
    const [productsLoading, setProductsLoading] = useState(true)
    useEffect(() => {
        fetch('https://mysterious-ridge-83702.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setProductsLoading(false)
            })
    }, [])

    //Delete Products
    const handleDelete = (id) => {
        const proceedDelete = window.confirm('Are you sure you want to delete this product?');
        if (proceedDelete) {
            fetch(`https://mysterious-ridge-83702.herokuapp.com/products/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingProducts = products.filter(product => product._id !== id)
                        setProducts(remainingProducts)
                    }
                })
        }
    }

    //Conditional Spinner
    if (productsLoading) {
        return (
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        )

    }

    return (
        <Container>
            <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
                Manage Products
            </Typography>
            {
                products.map(product =>
                    <Card variant="outlined" sx={{ mb: 1 }} key={product._id}>
                        <Grid container columns={{ xs: 6, md: 12 }} sx={{ p: 2}}>
                            <Grid item xs={6} md={4}>
                                <img src={product.img} style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="Drone Image" />
                            </Grid>
                            <Grid item xs={6} md={8} className="d-flex align-items-center justify-content-between">
                                <Typography variant="h6" component="div">
                                    {product.title}
                                </Typography>
                                <Button variant="outlined" color="error" onClick={() => handleDelete(product._id)}> Delete </Button>
                            </Grid>
                        </Grid>
                    </Card>
                )
            }
        </Container >
    );
};

export default ManageProducts;