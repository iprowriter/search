import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { styled } from "@mui/material/styles";
import { searchResult } from "../redux/slices/filteredSlices";
import { useDispatch } from "react-redux";
import { data } from "../data";

const StyledTextField = styled(TextField)`
  width: 700px;
`;

export default function SearchBox() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const navigateToProjects = () => {
    navigate("/projects");
  };

  const [projects, setProjects] = useState<any>([]);
  const [disable, setDisable] = useState(true);
  const [query, setQuery] = useState("");
  const [noMatch, setNoMatch] = useState("");

  const handleClearQuery = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      setDisable(true);
      setNoMatch("");
      setQuery("");
    }
  };

  useEffect(() => {
    window.localStorage.setItem("searchQuery", JSON.stringify(query));
    const searchQueryResult = window.localStorage.getItem("searchQuery");
    if (searchQueryResult !== null) setQuery(JSON.parse(searchQueryResult));
  }, [query]);

  const getProjects = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 2) {
      setQuery(e.target.value);
      console.log(query.length)
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

    if (query.length >= 2 && filteredProjects.length >= 1) {
      setDisable(false);
      console.log(`filtered projects: ${filteredProjects.length}`);
    } else if (query.length >= 2 && filteredProjects.length === 0) {
      setNoMatch("No project found");
      setDisable(true);
    }
  };

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
          inputRef={inputRef}
          fullWidth
          id="filled-basic"
          label="search for projects"
          variant="filled"
          onChange={getProjects}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClearQuery}
                >
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
        <p>
          {projects.map((item: any) => (
            <p key={item.id}>{item.projectName}</p>
          ))}
        </p>
        <p>{noMatch}</p>
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
