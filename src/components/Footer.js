import React from 'react'
import './Footer.css'

import brand_logo from './assets/brand_logo.jpg'

import {
    Grid,
    Typography
} from '@mui/material'

function Footer() {
    return (
        <div className="footer-container">
            <Grid
                container
                spacing={3}
                justifyContent="space-evenly"
                direction="row"
            >
                <Grid item>
                    <div className="footer-wrapper">
                        <h3 className="footer-company-name">3D Modeling</h3>
                        <div className="info-container">
                            <img src={brand_logo} alt="brand logo" />
                            <Typography component="p" variant="h6">
                                Il tuo modello, <br />esattamente come <br />lo immagini.
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
