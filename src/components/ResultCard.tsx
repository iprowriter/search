import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Button from "@mui/material/Button";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import Result from "./Result";


const StyledCard = styled(Card)`
  padding: 15px;
  height: 800px;
  width: 400px;
`;
const StyledCardContent = styled(CardContent)`
  background-color: #92a3b4;
`;
const StyledButton = styled(Button)`
  height: 100%;
  width: 100%;
  background-color: #92a3b4;
`;

export default function ResultCard() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const getSearchResult = useSelector((state: RootState) => state.filteredData);


  return (
    <StyledCard>
      <StyledCardContent>
        <StyledButton
          variant="contained"
          disableElevation
          onClick={navigateToHome}
        >
          <KeyboardBackspaceIcon /> Back to goodcarbon homepage
        </StyledButton>
      </StyledCardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          These projects below match your searches:
        </Typography>
      </CardContent>
      {getSearchResult.map((item: any, index: any) => (
        <Result
          id={item.id}
          projectName={item.projectName}
          description={item.description}
          isCreated={item.isCreated}
          isApproved={item.isApproved}
          isPublished={item.isPublished}
          key={item.id}
        />
      ))}
    </StyledCard>
  );
}
