import React from 'react';
import useStyles from './styles';
import { Typography, Card, CardActions, CardContent, Button } from '@material-ui/core';
import AnimatedModal from '../Modal/Modal';


const SimpleCard = ({ id, name, email, desc }) => {
  const classes = useStyles();

  const handleOpen = () => {

  }

  return (
    <div>
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
          <Button size="small" onClick={handleOpen} ><AnimatedModal /></Button>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>
      
    </div>

  );
}

export default SimpleCard;