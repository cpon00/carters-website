import React from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

// import TopPanel from './panels/TopPanel'
import Header from './components/Header'
import Home from './components/Home'
import Experience from './components/Experience'
import Projects from './components/Projects'
import OtherInterests from './components/OtherInterests'
// import Resume from './components/Resume'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#F5F7F3',
      main: '#26B7BF',
      dark: '#22305B',
      contrastText: '#fff'
    },
    secondary: {
      light: '#F5F7F3',
      main: '#B13D58',
      dark: '#22305B',
      contrastText: '#fff'
    }
  }
})

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'lightgrey',
    height: '100vh'
  },

  // bottomPanel: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   backgroundColor: '#27292B',
  //   width: '100%'
  // },

  contentSection: {
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#22305B'
  },
  content: {
    display: 'flex',
    width: theme.spacing(200),
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#F5F7F3'
  }
}))

const App = props => {
  const classes = useStyles(props)
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.root}>
          <Switch>
            <Route path="/" component={Header} />
          </Switch>
          <div className={classes.contentSection}>
            <main className={classes.content}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/experience" component={Experience} />
                <Route path="/projects" component={Projects} />
                <Route path="/other-interests" component={OtherInterests} />
              </Switch>
            </main>
          </div>

          {/* <div className={classes.bottomPanel}>
            <div className={classes.textSection}>
              <Resume />
            </div>
          </div> */}
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
