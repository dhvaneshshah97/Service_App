import React from 'react';
import useStyles from './styles';
import { Typography, Card, CardActions, CardContent, Button } from '@material-ui/core';


const SimpleCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>

        <Typography className={classes.title} color="textSecondary" gutterBottom>
          ID - 101
        </Typography>

        <Typography variant="h5" component="h2">
          Name - Service 101
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          Description - Lorem ipsum ...
        </Typography>

        <Typography variant="body2" component="p">
          Email - test@gmail.com
          <br />
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default SimpleCard;