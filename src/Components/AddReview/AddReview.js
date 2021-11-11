import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const AddReview = () => {

    const { user } = useAuth()
    const nameRef = useRef();
    const rateRef = useRef();
    const commentRef = useRef();

    //Conditional Spinner
    if (!user.email) {
        return (
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        )

    }
    const handleAddReview = (e) => {
        const userReview = {
            name: nameRef.current.value,
            email: user.email,
            rate: rateRef.current.value,
            comment: commentRef.current.value
        }

        console.log(userReview)
        fetch('https://mysterious-ridge-83702.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userReview)
        })
        e.preventDefault()
        document.addReviewForm.reset()
        alert("Review added successfully!")
    }

    return (
        <Container>
            <Box sx={{ maxWidth: '500px', mx: 'auto' }}>
                <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
                    Add a review
                </Typography>
                <form onSubmit={handleAddReview} name="addReviewForm">
                <TextField
                    id="outlined-textarea"
                    label="Your name"
                    fullWidth sx={{ my: 1 }}
                    name="name"
                    defaultValue={user.displayName}
                    inputRef={nameRef}
                />
                <TextField
                    id="outlined-textarea"
                    label="Rating"
                    fullWidth sx={{ my: 1 }}
                    defaultValue= {5}
                    name="rate"
                    type= 'number'
                    inputProps={{ min: 1, max: 5 }}
                    placeholder="Rating out of 5"
                    inputRef={rateRef}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Comment"
                    rows={6} multiline
                    fullWidth
                    sx={{ mb: 1 }}
                    name="comment"
                    inputRef={commentRef}
                />
                <Button size="large" type="submit" variant="contained"  sx={{mt:1}}fullWidth>Submit Review</Button>
                </form>
            </Box>
        </Container>
    );
};

export default AddReview;