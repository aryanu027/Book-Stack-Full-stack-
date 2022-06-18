import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import FileBase from "react-file-base64";
import { Appcontext } from "../Context";
import { useContext } from "react";
import axios from "axios";
//
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
//
const Form = () => {
  //Modal handling
  let { OpenModal, OffModal } = useContext(Appcontext);
  const onCreate = () => {
    OffModal();
  };
  //Changing value
  const [postData, setpostData] = React.useState({
    title: "",
    author: "",
    read: "",
    selectedFile: "",
  });
  let name, dt;
  const handleChange = (e) => {
    name = e.target.name;
    dt = e.target.value;
    setpostData({ ...postData, [name]: dt });
  };
  const handleUpdate = (e) => {
    setpostData({ ...postData, read: "yes" });
  };
  //Handling Submit
  const handleSubmit = () => {
    const { title, author, read, selectedFile } = postData;
    axios
      .post("http://localhost:2500/notes", postData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setpostData({ ...postData, title: "", author: "", selectedFile: "" });
    OffModal();
    window.location.reload();
  };
  return (
    <>
      <Modal
        open={OpenModal}
        onClose={onCreate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Book Name
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ width: 335 }}
              name="title"
              value={postData.title}
              onChange={handleChange}
            />
          </Typography>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Author Name
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ width: 335 }}
              name="author"
              value={postData.author}
              onChange={handleChange}
            />
          </Typography>

          <div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setpostData({ ...postData, selectedFile: base64 })
              }
            ></FileBase>
          </div>
          <div style={{ textAlign: "center", marginBottom: 5, marginTop: 10 }}>
            <label>read this book? :</label>
            <Button
              size="small"
              variant="outlined"
              style={{ height: 22 }}
              onClick={handleUpdate}
            >
              Yes
            </Button>
          </div>
          <Button
            sx={{ mt: 2 }}
            variant="contained"
            style={{ width: 335 }}
            onClick={handleSubmit}
          >
            Create
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Form;
