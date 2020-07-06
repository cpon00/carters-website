import React from 'react'
import './App.css'

import { makeStyles } from '@material-ui/core/styles'

import Resume from './pages/Resume'
import { lightBlue } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'red'
  }
}))

const App = props => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <Resume />
    </div>
  )
}

export default App
