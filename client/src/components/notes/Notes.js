import React from "react";
import Note from "./note/Note";
import { Grid } from "@mui/material";
import Alert from "@mui/material/Alert";

import axios from "axios";
const Notes = () => {
  const [lnotes, setlnotes] = React.useState([]);
  const getNotes = () => {
    axios
      .get("http://localhost:2500/notes")
      .then((response) => {
        setlnotes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  React.useEffect(() => getNotes(), []);
  if (lnotes.length === 0) {
    return (
      <>
        <div style={{ paddingLeft: 50 }}>
          <Alert severity="info">No books here yet!</Alert>;
        </div>
      </>
    );
  }
  return (
    <>
      {lnotes.map((note) => {
        if (note.read === "") {
          return (
            <>
              <Grid item xs={4} key={note._id}>
                <Note
                  title={note.title}
                  author={note.author}
                  img={note.selectedFile}
                  id={note._id}
                />
              </Grid>
            </>
          );
        }
      })}
    </>
  );
};
export default Notes;
