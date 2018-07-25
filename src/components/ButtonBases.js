import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import MyCookbook from '../components/myCookbook';
import SearchRecipes from '../components/searchRecipes';
import LocalEats from '../components/localEats';

const styles = theme => ({
  root: {
    margin: 'auto',
    marginTop: "5px",
    marginBottom: "12px",
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    margin: 'auto',
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

const images = [
  {
    url: 'http://messyveggies.com/wp/wp-content/uploads/2017/04/IMG_7900.jpg',
    title: 'My Cookbook',
    width: '31%',
  },
  {
    url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/06/1517948767-resized-tempeh-bowl.jpg',
    title: 'Search Recipes',
    width: '31%',
  },
  {
    url: 'https://i.ytimg.com/vi/fwiwKSUTKFs/maxresdefault.jpg',
    title: 'Local Eats',
    width: '31%',
  },
];

class ButtonBases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookbookIsHidden: true,
      recipesIsHidden: true,
      localEatsIsHidden: true
    }
  }

  toggleCookbook = () =>
    this.setState({
      cookbookIsHidden: !this.state.cookbookIsHidden
    })


  toggleRecipes = () =>
    this.setState({
      recipesIsHidden: !this.state.recipesIsHidden
    })

  toggleLocalEats = () =>
    this.setState({
      localEatsIsHidden: !this.state.localEatsIsHidden
    })

  render() {
    const { classes } = this.props
    images[0].click = this.toggleCookbook.bind(this)
    images[1].click = this.toggleRecipes.bind(this)
    images[2].click = this.toggleLocalEats.bind(this)

    return (
      <div className={classes.root}>
        {images.map(image => (
          <ButtonBase
            focusRipple
            onClick={image.click}
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,

            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton} style={{marginBottom: "12px"}}>
              <Typography
                component="span"
                variant="subheading"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
        {!this.state.cookbookIsHidden && <MyCookbook />}
        {!this.state.recipesIsHidden && <SearchRecipes/>}
        {!this.state.localEatsIsHidden && <LocalEats/>}
      </div>
    );
  }
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonBases);