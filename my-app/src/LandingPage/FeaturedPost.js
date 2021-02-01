import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={12}>
        <CardActionArea class="focusVisibility">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent >
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>

              <Typography variant="overline" paragraph>
                {post.description}
              </Typography>
              <Typography variant="overline" color="primary">
                For more information, you can visit our Social Media Pages or contact us through mail or call.
              </Typography><br/>
              <Typography variant="overline" color="inherited">
                <b><u>
                The purpose of our lives is to be happy. </u></b>
               
                <li>
                Point1</li>
                <li>
                Point1</li>
                <li>
                Point2</li>
                <li>
                Point3</li>
                <li>
                Point4</li>
                <li>
                Point5</li>
                <li>
                Point6</li>
                <li>
                Point7</li>
              </Typography>
            </CardContent>
          </div>
          <Hidden >
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};