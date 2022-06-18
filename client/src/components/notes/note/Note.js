import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MdDelete } from "react-icons/md";
import axios from "axios";
//
const Note = (props) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:2500/notes/${props.id}`);
    window.location.reload();
  };
  const handleUpdate = () => {};
  return (
    <Card sx={{ maxWidth: 345 }} variant="outlined">
      <CardContent>
        <CardMedia component="img" height="140" image={props.img} />
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
          <Button
            size="large"
            variant="outlined"
            onClick={handleDelete}
            style={{ float: "right", marginTop: 5 }}
          >
            <MdDelete />
          </Button>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Note;
