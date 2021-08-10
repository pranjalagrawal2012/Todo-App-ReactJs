import React from "react";
import "../style/Todo.css";
import { Typography, TextField, Button, Checkbox } from "@material-ui/core";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ButtonAppBar from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../contexts/authContext";
import { Redirect } from "react-router-dom";
function Todo() {
  const {  currentUser } = useAuth();
  return (

    <div>
    {!currentUser && <Redirect to="/login" /> }
    <ButtonAppBar/>
      <div className="Todo_header">
        <Typography variant="h4">TodoInput</Typography>
      </div>
      <div className="Todo_input">
        <form noValidate autoComplete="off">
          <div className="Todo_inputfield">
            <div className="Todo_inputfieldlogo">
              <LibraryBooksIcon />
            </div>
            <TextField
              style={{ width: "100%" }}
              id="outlined-basic"
              label="New Todo"
              variant="outlined"
            />
          </div>
          <Button variant="contained" color="primary" disableElevation>
            Add new task
          </Button>
        </form>
      </div>
      <div className="Todo_List">
        <div className="Todo_Listheader ">
          <Typography variant="h4">TodoList</Typography>
        </div>
        <div className="Todo_Listbuttons">
          <Button variant="contained" color="primary" disableElevation>
            All
          </Button>
          <Button variant="contained" color="primary" disableElevation>
            Done
          </Button>
          <Button variant="contained" color="primary" disableElevation>
            Todo
          </Button>
        </div>
      </div>

      <div className="Todo__Listinfo">
        <div className="Todo__Listinfoname">Learn React Basics</div>
        <div className="Todo__Listinfooptions">
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} style={{color:"#3DA355"}} />
          <EditIcon style={{color:"#FCC301"}}/>
          <DeleteIcon style={{color:"#DC314A"}}/>
        </div>
      </div>
      <div className="Todo__Listinfo">
        <div className="Todo__Listinfoname">Learn React Basics</div>
        <div className="Todo__Listinfooptions">
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} style={{color:"#3DA355"}} />
          <EditIcon style={{color:"#FCC301"}}/>
          <DeleteIcon style={{color:"#DC314A"}}/>
        </div>
      </div>
      <div className="Todo__Listinfo">
        <div className="Todo__Listinfoname">Learn React Basics</div>
        <div className="Todo__Listinfooptions">
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} style={{color:"#3DA355"}} />
          <EditIcon style={{color:"#FCC301"}}/>
          <DeleteIcon style={{color:"#DC314A"}}/>
        </div>
      </div>
      <div className="Todo__Listinfo">
        <div className="Todo__Listinfoname">Learn React Basics</div>
        <div className="Todo__Listinfooptions">
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} style={{color:"#3DA355"}} />
          <EditIcon style={{color:"#FCC301"}}/>
          <DeleteIcon style={{color:"#DC314A"}}/>
        </div>
      </div>
      <div className="Todo__Listinfo">
        <div className="Todo__Listinfoname">Learn React Basics</div>
        <div className="Todo__Listinfooptions">
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} style={{color:"#3DA355"}} />
          <EditIcon style={{color:"#FCC301"}}/>
          <DeleteIcon style={{color:"#DC314A"}}/>
        </div>
      </div>
      <div className="Todo_Buttons">
      <Button variant="contained" color="primary" disableElevation>
            Delete done tasks
          </Button>
          <Button variant="contained" color="primary" disableElevation>
            Delete all tasks
          </Button>
      </div>
      <Footer/>
    </div>
  );
}

export default Todo;
