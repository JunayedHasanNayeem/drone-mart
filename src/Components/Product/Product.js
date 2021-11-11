import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { _id, title, category, price, img, description } = props.product;
    const orderUrl = `/place-order/${_id}`
    const detailsUrl = `/product-details/${_id}`

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card variant="outlined">
                <div className="d-flex justify-content-center">
                    <img src={img} style={{ width: '100%', height: '250px', objectFit: 'cover' }} alt="Drone Image" />
                </div>
                <CardContent>
                    <Typography variant="h6" component="div">
                        {title}
                    </Typography>
                    <div className="d-flex justify-content-between">
                        <Typography sx={{ my: 1 }} color="text.secondary">
                            {category}
                        </Typography>
                        <Typography sx={{ my: 1, fontWeight: '600' }} color="text.secondary">
                            ${price}
                        </Typography>
                    </div>

                </CardContent>
                <CardActions sx={{ p:2 }} >
                    <Grid container columns={{ xs: 12 }} spacing={1}>
                        <Grid item xs={6}>
                        <Link to={orderUrl}><Button variant="contained" fullWidth style={{textDecoration: 'none'}}>Buy Now</Button></Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link to={detailsUrl} style={{textDecoration: 'none'}}><Button variant="outlined" fullWidth>Details</Button></Link>
                            
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;