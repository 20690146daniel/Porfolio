import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import Perfil from './componentes/perfil';
import Skill from './componentes/Skill';
import RecipeReviewCard from './componentes/RecipeReviewCard';

function App() {
  return (
    <Container>
  <Grid container spacing={3}>
    <Grid item xs={12} sm={3}>
      <Paper style={{ padding: '10px' }}>
        <Perfil />
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper style={{ padding: '10px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <RecipeReviewCard />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
    <Grid item xs={12} sm={3}>
      <Paper style={{ padding: '10px' }}>
        <Skill />
      </Paper>
    </Grid>
  </Grid>
</Container>

  );
}

export default App;
