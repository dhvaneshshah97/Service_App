import React, { useState, useEffect } from 'react'
import SimpleCard from './Card/Card.tsx';
import { Button, Grid } from '@material-ui/core';
import { datasource } from './data';

const App = () => {
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState([]);

  // initialize local-storage
  const local = () => {
    if (localStorage.getItem('data') === null) {
      localStorage.setItem('data', JSON.stringify(datasource))
    }
    setData(JSON.parse(localStorage.getItem('data')));
  }

  // Reset the local-storage
  const handleReset = () => {
    localStorage.setItem('data', JSON.stringify(datasource))
    setUpdate(!update);
  }

  // Refresh the component(main page) after delete operation
  const makeComponentUpdate = () => {
    setUpdate(!update);
  }

  useEffect(() => {
    local();
  }, [update])

  return (
    <div style={{ margin: '25px' }}>

      <h3 style={{ textAlign: 'center' }}>
        Service Application
      </h3>

      <Grid container spacing={3}>
        {
          data.map((o, i) =>
            <Grid item xs={4}>
              <SimpleCard
                key={i}
                id={o.ID}
                name={o.Name}
                email={o.Email}
                desc={o.Description}
                makeComponentUpdate={makeComponentUpdate}
              />
            </Grid>)
        }
      </Grid>

      <div style={{ textAlign: 'center', margin: '15px 0 5px 0' }}>
        <Button variant="contained" color="primary" onClick={handleReset} >
          Reset
        </Button>
      </div>

    </div>
  );
}

export default App;
