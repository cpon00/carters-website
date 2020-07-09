import React from "react";

import clsx from "clsx";

import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import Avatar from "@material-ui/core/Avatar";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "lightgrey",
    height: "100vh",
  },

  primaryColor: {
    color: theme.palette.primary.dark,
  },

  topPanel: {
    display: "flex",
    flexDirection: "row",
    height: theme.spacing(36),
    backgroundColor: theme.palette.primary.dark,
  },

  topSection: {
    flexGrow: 1,
    display: "flex",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark,
  },

  picture: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 0.1,
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1)
  },
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    justifyContent: "center",
    alignSelf: "center",
  },

  topCenterSection: {
    flexGrow: 2,
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.dark,
    color: "black",
  },

  socials: {
    flexGrow: 1,
    display: "flex",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    //maxheight: theme.spacing(7),
    maxWidth: theme.spacing(32),
  },

  socialIcons: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: theme.spacing(6),
  },

  bio: {
    display: "flex",
    flexDirection: "row",
    fontSize: theme.spacing(12),
    height: theme.spacing(30),
  },

  tabs: {
    display: "flex",
    flexDirection: "row",
  },

  button: {
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark,
    color: "white",
  },

  bottomPanel: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#27292B",
    width: "100%",
  },

  textSection: {
    display: "flex",
    minHeight: theme.spacing(100),
    minWidth: theme.spacing(1200 / 8),
    maxWidth: theme.spacing(1600 / 8),
    justifyContent: "center",
    backgroundColor: "#ECF1ED",
  },
}));

const TopPanel = (props) => {
  const classes = useStyles(props);
  return (
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
  );
};

export default TopPanel;
