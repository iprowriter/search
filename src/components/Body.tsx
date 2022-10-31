import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SearchBox from "./SearchBox";
import Grid from "@mui/material/Grid";


export default function Body() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <h1>Search for Projects</h1>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <SearchBox />
      </Grid>
    </Container>
  );
}
