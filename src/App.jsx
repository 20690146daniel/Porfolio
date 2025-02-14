import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import Perfil from './componentes/perfil';
import Skill from './componentes/Skill';
import RecipeReviewCard from './componentes/RecipeReviewCard';
import { blue } from '@mui/material/colors';

function App() {
  return (
    <Container 
      maxWidth="false" 
      sx={{ 
        backgroundColor: blue[500], 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}
    >
      <Grid container spacing={3}> 
        <Grid item xs={4} flexGrow={1}> 
          <Container maxWidth="sm"> 
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper style={{ padding: '10px' }}>
                  <Perfil /> 
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Grid item xs={4} flexGrow={1}> 
          <Container maxWidth="md"> 
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper style={{ padding: '10px' }}>
                  <RecipeReviewCard /> 
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Grid item xs={4} flexGrow={1}> 
          <Container maxWidth="md"> 
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper style={{ padding: '10px' }}>
                  <Skill /> 
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;