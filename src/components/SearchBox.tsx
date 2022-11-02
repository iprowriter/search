import React from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useRef, useState } from "react";
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

  const [query, setQuery] = useState<string>("");
  const [projects, setProjects] = useState<Array<string>>([]);
  const [disable, setDisable] = useState<boolean>(true);
  const [noMatch, setNoMatch] = useState<string>("");

  const handleClearQuery = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      setDisable(true);
      setNoMatch("");
      setQuery("");
      setProjects([]);
    }
  };

  const handleBackpsaceDelete = (e: any) => {
    if (e.key === "Backspace") {
      setDisable(true);
      setNoMatch("");
      setQuery("");
      setProjects([]);
    }
  };

  const getProjects = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 2) {
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

    if (query.length >= 2 && filteredProjects.length >= 1) {
      setDisable(false);
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
          onKeyDown={handleBackpsaceDelete}
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
        <Grid>
          {projects.map((item: any) => (
            <p key={item.id}>{item.projectName}</p>
          ))}
        </Grid>
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
