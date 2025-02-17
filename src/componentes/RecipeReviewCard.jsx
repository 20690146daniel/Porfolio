import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Pagination from '@mui/material/Pagination'; // Import the Pagination component

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RecipeReviewCard = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [projects, setProjects] = React.useState([]);
  const [page, setPage] = React.useState(1); // State for current page
  const projectsPerPage = 5; // Projects to display per page

  React.useEffect(() => {
    fetch('/projects.json') 
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error loading projects:', error));
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handlePageChange = (event, value) => {
    setPage(value); 
  };

  // Calculate the projects to display for the current page
  const indexOfLastProject = page * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <main className="main-content">
      <Typography variant="h4" gutterBottom>
        Mis Proyectos
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {currentProjects.map((project) => (
          <Card key={project.id} sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {project.name.charAt(0)}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={project.name}
              subheader={project.date}
            />
            <CardMedia
              component="img"
              height="194"
              image={project.image}
              alt={project.name}
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {project.description}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 2, color: 'text.secondary' }}>
                <strong>Tecnologías:</strong> {project.technologies.join(', ')}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography sx={{ marginBottom: 2 }}>Detalles:</Typography>
                {project.details.map((detail, index) => (
                  <Typography key={index} sx={{ marginBottom: 2 }}>
                    {detail}
                  </Typography>
                ))}
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Pagination
          count={Math.ceil(projects.length / projectsPerPage)} // Total number of pages
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </main>
  );
}

export default RecipeReviewCard;
