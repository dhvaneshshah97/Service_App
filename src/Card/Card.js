import React from 'react';
import useStyles from './styles';
import { Typography, Card, CardActions, CardContent, Button } from '@material-ui/core';


const SimpleCard = ({id, name, email, desc}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>

        <Typography >
          ID: {id}
        </Typography>

        <Typography>
          Name: {name}
        </Typography>

        <Typography noWrap>
          Description: {desc}
        </Typography>

        <Typography>
          Email: {email}
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