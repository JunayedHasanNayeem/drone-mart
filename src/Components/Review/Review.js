import React from 'react';
import { Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const Review = (props) => {
    const { name, rate, comment } = props.reviewData
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                    <Typography variant="h6" component="div">
                        {name}
                    </Typography>
                    {
                        [...Array(parseInt(rate)).keys()].map(rate =>
                            <StarIcon />
                        )
                    }
                    <Typography sx={{ my: 1 }} color="text.secondary">
                        {comment}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Review;