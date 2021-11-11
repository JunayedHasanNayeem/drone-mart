import { Button, Container, TextField, Typography, useForkRef } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';

const MakeAdmin = () => {
    const emailRef = useRef()
    const handleAddAdmin = e => {
        const userData = {
            email: emailRef.current.value
        }
        fetch('https://mysterious-ridge-83702.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })

        e.preventDefault()
        document.addAdminForm.reset()
        alert("Review added successfully!")
    }
    return (
        <Container>
            <Box sx={{ maxWidth: '500px', mx: 'auto' }}>
                <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
                    Add an Admin
                </Typography>
            <form name="addAdminForm" onSubmit={handleAddAdmin}>
                <TextField
                    id="outlined-textarea"
                    label="User Email"
                    fullWidth sx={{ my: 1 }}
                    name="email"
                    type="email"
                    inputRef={emailRef}
                />
                <Button size="large" type="submit" variant="contained" sx={{mt: 2}} fullWidth>Make Admin</Button>
            </form>
            </Box>
        </Container>
    );
};

export default MakeAdmin;