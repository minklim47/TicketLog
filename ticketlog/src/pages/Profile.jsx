import { Box, Button, Container } from '@mui/material'
import React from 'react'
import SignIn from './SignIn'
import Account from './Account'

function Profile({userLogin, setUserLogin}) {
  return (
    <Container
    
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
      }}
    >
      {userLogin? <Account/>
    
    : <SignIn/>}
    </Container>
  )
}

export default Profile