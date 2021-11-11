import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import CopyrightIcon from '@mui/icons-material/Copyright';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#fafafa', p: 3, mt: 5 }} id="drone-mart-footer">
            <Container className="d-flex justify-content-center">
                <Box>
                    <Box className="d-flex justify-content-center">
                        <FacebookOutlinedIcon sx={{ mx: 1 }} />
                        <TwitterIcon sx={{ mx: 1 }} />
                        <InstagramIcon sx={{ mx: 1 }} />
                    </Box>
                    <Typography sx={{ fontSize: 14, mt: 2 }} color="text.secondary">
                        <CopyrightIcon fontSize="small" /> Copyright 2022 DroneMart | All Rights Reserved
                    </Typography>

                </Box>

            </Container>
        </Box>

    );
};

export default Footer;