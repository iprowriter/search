import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import DoneIcon from "@mui/icons-material/Done";
import PublishIcon from "@mui/icons-material/Publish";
import Stack from "@mui/material/Stack";
import {
  created,
  approved,
  published,
} from "../redux/slices/filteredSlices";
import { useDispatch } from "react-redux";


const StyledCardContentResult = styled(CardContent)`
  background-color: #eff0f1;
  margin-left: 0;
  margin-right: 0;
  margin-top: 8px;
`;


export default function ResultCard({
  id,
  projectName,
  description,
  isCreated,
  isApproved,
  isPublished,
}: {
  id: number;
  projectName: string;
  description: string;
  isCreated: boolean;
  isApproved: boolean;
  isPublished: boolean;
}) {
    const dispatch = useDispatch();


   const create = () => {
     dispatch(created({ id: id, isCreated: !isCreated }));
   };
   const approve = () => {
     dispatch(approved({ id: id, isApproved: !isApproved }));
   };
   const publish = () => {
     dispatch(published({ id: id, isPublished: !isPublished }));
   };

  return (
    <StyledCardContentResult>
      <Typography variant="h5" color="text.dark">
        {projectName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
      <Stack direction="row" mt={2} spacing={2}>
        <Button
          variant={isCreated ? "contained" : "outlined"}
          color="warning"
          startIcon={<CreateIcon />}
          onClick={create}
        >
          {isCreated ? "Created" : "Create"}
        </Button>
        <Button
          variant={isApproved ? "contained" : "outlined"}
          color="primary"
          startIcon={<DoneIcon />}
          onClick={approve}
        >
          {isApproved ? "Approved" : "Approve"}
        </Button>
        <Button
          variant={isPublished ? "contained" : "outlined"}
          color="success"
          startIcon={<PublishIcon />}
          onClick={publish}
        >
          {isPublished ? "Published" : "Publish"}
        </Button>
      </Stack>
    </StyledCardContentResult>
  );
}
