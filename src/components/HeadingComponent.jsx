import { Typography } from '@mui/material'
import React from 'react'

export const HeadingComponent = ({children}) => {
  return (
    <Typography variant='h1'>{children}</Typography>
  )
}
