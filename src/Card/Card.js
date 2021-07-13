import React from 'react';
import useStyles from './styles';
import { Typography, Card, CardActions, CardContent, Button } from '@material-ui/core';
import AnimatedModal from '../Modal/Modal';
import { datasource } from '../data';

const SimpleCard = (props) => {
  const classes = useStyles();

  const handleOpen = () => {

  }

  const handleDelete = (id) => {
    console.log(id);
    let serviceData = JSON.parse(localStorage.getItem('data'));
    serviceData = serviceData.filter((o) => o.ID !== id);
    console.log(serviceData);
    localStorage.setItem('data', JSON.stringify(serviceData));
    props.refresh(serviceData)
  }

  return (
    <div>
      <Card className={classes.root} >
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
          <Button size="small">View</Button>
          {/* <Button size="small" onClick={handleOpen} >
            <AnimatedModal 
              id={id}
              name={name}
              email={email}
              desc={desc}
            />
          </Button> */}
          <Button size="small" onClick={() => handleDelete(props.id)} >Delete</Button>
        </CardActions>
      </Card>
      
    </div>

  );
}

export default SimpleCard;