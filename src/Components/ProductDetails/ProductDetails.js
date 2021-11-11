import { CardContent, Typography, Container, Card, Button, CardActions, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const ProductDetails = () => {
    const { id } = useParams()

    const [product, setProduct] = useState({})
    const orderUrl = `/place-order/${id}`
    const url = `https://mysterious-ridge-83702.herokuapp.com/products/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    return (
        <Box>
            <Header/>
            <Container>
                <Card variant="outlined" sx={{ maxWidth: '500px', mx: 'auto', my: 5 }}>
                    <div className="d-flex justify-content-center">
                        <img src={product.img} style={{ width: '100%', height: '250px', objectFit: 'cover' }} alt="Drone Image" />
                    </div>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {product.title}
                        </Typography>
                        <div className="d-flex justify-content-between mt-3">
                            <Typography sx={{ my: 1 }} color="text.secondary">
                                {product.category}
                            </Typography>
                            <Typography sx={{ my: 1, fontWeight: '600' }} color="text.secondary">
                                ${product.price}
                            </Typography>
                        </div>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                        <CardActions sx={{ mt: 2 }} >
                            <Grid container columns={{ xs: 12 }} spacing={1}>
                                <Grid item xs={6}>
                                    <Link to="/all-products" style={{ textDecoration: 'none' }}><Button variant="outlined" fullWidth>Back to shop</Button></Link>

                                </Grid>
                                <Grid item xs={6}>
                                    <Link to={orderUrl}><Button variant="contained" fullWidth style={{ textDecoration: 'none' }}>Buy Now</Button></Link>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </CardContent>
                </Card>
            </Container >
            <Footer></Footer>
        </Box>
    );
};

export default ProductDetails;