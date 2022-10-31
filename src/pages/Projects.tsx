import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ResultCard from "../components/ResultCard";


export default function Projects() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <h1>We Found a Match For You</h1>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <ResultCard />
      </Grid>
    </Container>
  );
}
