import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import './About.css'

import { Container, Grid, Typography } from '@mui/material'

function About() {
    const isOnSmartPhone = () => {
        let screenWidth = Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        );
        return screenWidth < 768
    } 

    
    return (
        <div className="app-about">
            <Header />

            <Container id="app-about-wrapper" fixed maxWidth="xl" style={{ backgroundColor: "white", paddingBottom: "5px" }}>
              <div className="app-about-body">
                <Grid 
                    container 
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography variant="h3" component="h2">
                            L'Idea
                        </Typography>
                        <div className="description-text">
                            <Typography variant="span" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod 
                                tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi 
                                consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore 
                                eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in 
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </div>  
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className="about-img">
                            <img src="/images/about_imgs.jpg" alt="scooby" />
                        </div>
                    </Grid>
                    {!isOnSmartPhone() && (
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="about-img">
                                <img src="/images/about_imgs.jpg" alt="scooby" />
                            </div>
                        </Grid>
                    )}
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Typography variant="h3" component="h2">
                            La realizzazione
                        </Typography>
                        <div className="description-text">
                            <Typography variant="span" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod 
                                tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi 
                                consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore 
                                eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in 
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </div>  
                    </Grid>
                    {isOnSmartPhone() && (
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="about-img">
                                <img src="/images/about_imgs.jpg" alt="scooby" />
                            </div>
                        </Grid>
                    )}
                </Grid>
              </div>
            </Container>
            <Footer />
        </div>
    )
}

export default About
