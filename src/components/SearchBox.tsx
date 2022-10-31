import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { styled } from "@mui/material/styles";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { searchResult } from "../redux/slices/filteredSlices";
import { useDispatch } from "react-redux";
import { data } from "../data";

const StyledTextField = styled(TextField)`
  width: 700px;
`;

export default function SearchBox() {
  const navigate = useNavigate();

  const navigateToProjects = () => {
    navigate("/projects");
  };

 // const data = useSelector((state: RootState) => state.projectStatus);

  const dispatch = useDispatch();

  const [projects, setProjects] = useState<any>([]);
  const [disable, setDisable] = useState(true);
  const [query, setQuery] = useState("");

  const getProjects = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 3) {
      setQuery(e.target.value);
    }
    let filteredProjects: any = data.filter((value) => {
      return value.projectName.toLowerCase().includes(query);
    });

    const saveSearchResult = () => {
      dispatch(searchResult(filteredProjects));
    };

    if (query === "") {
      setProjects([]);
      setDisable(true);
    } else {
      setProjects(filteredProjects);
      saveSearchResult();
    }

    if (query.length >= 3 && filteredProjects.length >= 2) {
      setDisable(false);
      console.log(`filtered projects: ${filteredProjects.length}`);
    } else if (query.length >= 3 && filteredProjects.length === 0) {
      console.log("no project found");
      setDisable(true);
    }
  };

  const getSearchResult = useSelector((state: RootState) => state.filteredData);

  console.log(`filtered Data: ${getSearchResult}`);

  console.log(projects);

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <StyledTextField
          fullWidth
          id="filled-basic"
          label="search for projects"
          variant="filled"
          onChange={getProjects}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility">
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <ul>
          {projects.map((item: any, index: any) => (
            <li key={index}>{item.projectName}</li>
          ))}
        </ul>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant="contained"
          size="large"
          disabled={disable}
          onClick={navigateToProjects}
        >
          Search Projects
        </Button>
      </Grid>
    </Grid>
  );
}
