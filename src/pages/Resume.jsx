import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { green } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'black',
    height: '100vh'
  },

  topPanel: {
    display: 'flex',
    flexDirection: 'row',
    height: theme.spacing(36),
    backgroundColor: 'lightgreen'
  },

  bottomPanel: {
    height: theme.spacing(36),
    backgroundColor: 'lightblue'
  },

  topSection: {
    flexGrow: 1,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: 'purple'
  },

  picture: {
    flexGrow: 1,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },

  topCenterSection: {
    flexGrow: 2,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'pink'
  },

  socials: {
    flexGrow: 1,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },

  bio: {
    height: theme.spacing(30)
  },

  tabs: {
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}))

const Resume = props => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <div className={classes.topPanel}>
        {/* PICTURE */}

        <div className={clsx(classes.topSection, classes.picture)}>PICTURE</div>

        {/* CENTER SECTION */}

        <div className={clsx(classes.topSection, classes.topCenterSection)}>
          <div className={classes.bio}> Carter Pon</div>

          {/* TABS */}
          <div className={classes.tabs}>
            <Button className={classes.button} variant="contained">
              HOME
            </Button>
            <Button className={classes.button} variant="contained">
              Experience
            </Button>
            <Button className={classes.button} variant="contained">
              PROJECTS
            </Button>
            <Button className={classes.button} variant="contained">
              OTHER INTERESTS
            </Button>
            {/* <div className={classes.tab}>HOME</div>
            <div className={classes.tab}>EXPERIENCE</div>
            <div className={classes.tab}></div>
            <div className={classes.tab}>OTHER INTERESTS</div> */}
          </div>
        </div>

        {/* SOCIALS */}

        <div className={clsx(classes.topSection, classes.socials)}>SOCIALS</div>
      </div>
      <div className={classes.bottomPanel}>BOTTOM</div>
    </div>
  )
}

export default Resume
