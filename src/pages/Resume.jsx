import React from 'react'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'lightgrey',
    height: '100vh'
  }
}))

const Resume = props => {
  const classes = useStyles(props)
  return (
    <div>
      <p>Hi!</p>
      <p>It really do be like that tho</p>
    </div>
  )
}

export default Resume
