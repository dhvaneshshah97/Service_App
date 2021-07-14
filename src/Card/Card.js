import React from 'react';
import useStyles from './styles';
import { Typography, Card, CardActions, CardContent, Button } from '@material-ui/core';
import ViewDialog from '../ViewDialog/ViewDialog';

const SimpleCard = (props) => {
  const classes = useStyles();

  const handleDelete = (id) => {
    let serviceData = JSON.parse(localStorage.getItem('data'));
    serviceData = serviceData.filter((o) => o.ID !== id);
    localStorage.setItem('data', JSON.stringify(serviceData));
    props.makeComponentUpdate();
  }

  return (
    <div>
      <Card className={classes.root} variant="outlined" >
        
        <CardContent>
          <Typography >
            ID: {props.id}
          </Typography>

          <Typography>
            Name: {props.name}
          </Typography>

          <Typography noWrap>
            Description: {props.desc}
          </Typography>

          <Typography>
            Email: {props.email}
            <br />
          </Typography>
        </CardContent>
        
        <CardActions>
          <Button size="small" variant="outlined" color="inherit">Update</Button>
          <Button size="small"  >
            <ViewDialog 
              id={props.id}
              name={props.name}
              email={props.email}
              desc={props.desc}
            />
          </Button>
          <Button size="small" onClick={() => handleDelete(props.id)} variant="outlined" color="secondary" >Delete</Button>
        </CardActions>

      </Card>
    </div>
  );
}

export default SimpleCard;