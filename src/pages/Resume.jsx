import React from 'react'
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home'
import Avatar from '@material-ui/core/Avatar'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import MailIcon from '@material-ui/icons/Mail'

import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'black',
    height: '100vh'
  },

  topPanel: {
    display: 'flex',
    flexDirection: 'row',
    height: theme.spacing(36),
    backgroundColor: 'black'
  },

  topSection: {
    flexGrow: 1,
    display: 'flex',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: '#4293f5'
  },

  picture: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    justifyContent: 'center',
    alignSelf: 'center'
  },

  topCenterSection: {
    flexGrow: 2,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'orange'
  },

  socials: {
    flexGrow: 1,
    display: 'flex',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    maxheight: theme.spacing(7),
    maxWidth: theme.spacing(32)
  },

  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: theme.spacing(6)
  },

  bio: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: theme.spacing(12),
    height: theme.spacing(30)
  },

  tabs: {
    display: 'flex',
    flexDirection: 'row'
  },

  button: {
    marginLeft: theme.spacing(1)
  },

  bottomPanel: {
    display: 'flex',
    justifyContent: 'center'
  },

  textSection: {
    display: 'flex',
    backgroundColor: 'white',
    minHeight: theme.spacing(100),
    minWidth: theme.spacing(150),
    justifyContent: 'center'
  }
}))

const Resume = props => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <div className={classes.topPanel}>
        {/* PICTURE */}

        <div className={clsx(classes.topSection, classes.picture)}>
          <Avatar className={classes.avatar} alt="me" src="/portrait.jpg" />
        </div>

        {/* BIO SECTION */}

        <div className={clsx(classes.topSection, classes.topCenterSection)}>
          <div className={classes.bio}>
            <div>Carter Pon</div>
          </div>

          {/* TAB BUTTONS */}

          <div className={classes.tabs}>
            <Button className={classes.button} variant="contained">
              <HomeIcon />
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

        <div className={clsx(classes.topSection, classes.socials)}>
          <Button>
            <LinkedInIcon
              className={classes.socialIcons}
              //   onClick={(window.location.href = 'https://www.linkedin.com/in/cpon/')}
            />
          </Button>
          <Button>
            <GitHubIcon
              className={classes.socialIcons}
              //   onClick={(window.location.href = 'https://github.com/cpon00')}
            />
          </Button>
          <Button>
            <TwitterIcon
              className={classes.socialIcons}
              //   onClick={(window.location.href = 'https://twitter.com/cpon00')}
            />
          </Button>
          <Button>
            <MailIcon className={classes.socialIcons} />
          </Button>
        </div>
      </div>
      <div className={classes.bottomPanel}>
        <div className={classes.textSection}>TEXT</div>
      </div>
    </div>
  )
}

export default Resume
