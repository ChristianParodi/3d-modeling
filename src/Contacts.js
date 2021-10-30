import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import './Contacts.css'

import { Button, Container, Grid, Typography } from '@mui/material'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

function Contacts() {
    return (
        <div>
            <Header />

            <Container id="app-contacts-wrapper" fixed maxWidth="xl" style={{ backgroundColor: "white", paddingBottom: "5px" }}>
                <div className="app-contacts-body">
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <div className="firs-row">
                                <Typography variant="h4" component="h3">
                                    Chiamaci
                                </Typography>
                                <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                    <ListItem
                                        disablePadding
                                    >
                                        <ListItemAvatar>
                                            <Avatar
                                                alt="scooby"
                                                src="/images/about_imgs.jpg"
                                            />
                                        </ListItemAvatar>
                                        <ListItemText id="contacts-item" primary="Mattia" secondary="+39 123 456 7890" />
                                    </ListItem>
                                    <ListItem
                                        disablePadding
                                    >
                                        <ListItemAvatar>
                                            <Avatar
                                                alt="scooby"
                                                src="/images/about_imgs.jpg"
                                            />
                                        </ListItemAvatar>
                                        <ListItemText id="contacts-item" primary="Gabriele" secondary="+39 987 654 3210" />
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Typography variant="h4" component="h3">
                                Inviaci un'email
                            </Typography>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <EmailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Mattia" secondary="mattia.de.santis@gmail.com" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <EmailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Gabriele" secondary="gabriele.de.santis@gmail.com" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                            <Typography variant="h4" component="h3">
                                Richiedi assistenza
                            </Typography>
                            <div className="subject-container">
                                <TextField required fullWidth margin="normal" id="subject" label="Oggetto" variant="outlined" />
                            </div>
                            <div className="name-container">
                                <TextField required fullWidth id="name" label="Nome" variant="outlined" />
                            </div>
                            <div className="body-container">
                                <TextField
                                    required
                                    fullWidth
                                    margin="normal"
                                    id="message-body"
                                    label="Messaggio"
                                    variant="outlined"
                                    multiline
                                    rows={5}
                                />
                            </div>
                            <Button variant="contained" endIcon={<SendIcon />}>invia</Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Contacts
