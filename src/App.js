import React from 'react'
import SimpleCard from './Card/Card';
import { Grid } from '@material-ui/core';
import { data } from './data';
const App = () => {
  return (
    <div>
      <Grid container spacing={3}>
        {
          data.map((o, i) => <Grid item xs={4}>
            <SimpleCard 
            id={o.ID}
            name={o.Name}
            email={o.Email}
            desc={o.Description}
          />
          </Grid>)
        }
      </Grid>
    </div>
  )
}

export default App
