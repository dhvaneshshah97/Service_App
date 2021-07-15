import React from 'react';
import useStyles from './styles';
import { Typography, Card, CardActions, CardContent, Button } from '@material-ui/core';
import ViewDialog from '../ViewDialog/ViewDialog';

interface Props {
  id: number,
  name: string,
  email: string,
  desc: string,
  makeComponentUpdate: Function,
}

const SimpleCard = ({id, name, email, desc, makeComponentUpdate}: Props): JSX.Element => {
  const classes = useStyles();

  const handleDelete = (id: number) => {
    let serviceData = JSON.parse(localStorage.getItem('data') || '');
    serviceData = serviceData.filter((o: { ID: number; }) => o.ID !== id);
    localStorage.setItem('data', JSON.stringify(serviceData));
    makeComponentUpdate();
  }

  return (
    <div>
      <Card className={classes.root} variant="outlined" >

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
            <ViewDialog
              id={id}
              name={name}
              email={email}
              desc={desc}
              action="update"
              makeComponentUpdate={makeComponentUpdate}
            />

            <ViewDialog
              id={id}
              name={name}
              email={email}
              desc={desc}
              action="view"
              makeComponentUpdate={makeComponentUpdate}
            />

          <Button size="small" onClick={() => handleDelete(id)} variant="outlined" color="secondary" >Delete</Button>
        </CardActions>

      </Card>
    </div>
  );
}

export default SimpleCard;