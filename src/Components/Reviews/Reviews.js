import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CircularProgress } from "@mui/material";
import Review from '../Review/Review';
import { Box } from '@mui/system';

const Reviews = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://mysterious-ridge-83702.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    
    if(!reviews.length){
        return(
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        )
    }

    return (
        <Container>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    reviews.map(review =>
                        <Review reviewData={review} key={review._id}></Review>
                    )
                }
            </Grid>
        </Container>
    );
};

export default Reviews;