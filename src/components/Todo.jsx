import { useState } from "react";
import CardList from "./CardList";
import "./Todo.css"
import {Box , Typography ,Button , Modal , TextField} from "@mui/material";

const addNewTaskBarStyle = {
    padding: "20px",
    background: "#fefffe",
    width: {xs : "300px" , md : "500px"} , 
    borderRadius: "10px",
    margin: "20px 0px" , 
    fontSize: "25px" , 
    color: "#7b7b7b" , 
    display: "flex" , 
    alignItems: "center" , 
    justifyContent: "center" ,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
};

const WrapperToDoListStyle = {
    display: "flex" , 
    flexDirection: "column" , 
    alignItems: "center" , 
    marginTop: "20px" ,
};

const WrapperHeaderStyle = {
    display: "flex" ,
    justifyContent: "space-between" , 
    alignItems: "center" , 
};

const HeaderTextStyle ={
    color: "#fefffe" ,
    fontSize: {xs : "50px" , md : "60px"} ,  
};

const HeaderTodoListLengthStyle = {
    padding: "20px 30px" , 
    backgroundColor: "#b0a3f5" ,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" ,
    fontSize: "50px" , 
    borderRadius: "10px" ,
    color: "white" , 
    fontWeight: "bold" , 
};

const modalStyle = {
    display: "flex" , 
    flexDirection: "column" , 
    justifyContent: "center" ,
    alignItems: "center" ,
    position: "absolute" ,
    top: "50%" ,
    left: "50%" ,
    transform:"translate(-50%,-50%)",
    width: 400,
    bgcolor: "background.paper" , 
    border: "3px solid #b0a3f5" , 
    boxShadow: 24,
    p: 4,
    borderRadius: "10px" , 
};

const HorizontalStyle = {
    width: "90%" ,
    background: "white" , 
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" , 
};

function Todo()
{
    const [open , setOpen] = useState(false);
    const [todo , setTodo] = useState([]);
    const [todoInput , setTodoInput] = useState("");
    const [todoError , setTodoError] = useState(true);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleInput(e)
    {
        setTodoInput(e.target.value);
        if(e.target.value == null || e.target.value == "")
        {
            setTodoError(true);
        }
        else
        {
            setTodoError(false);
        }
    }

    function handleAdd()
    {
        setTodo([...todo , todoInput]);
        setTodoInput("");
        setTodoError(true);
        handleClose();
    }

    

    return (
      <>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <TextField
              error={todoError}
              id="todo"
              label="what do you want to do?"
              variant="outlined"
              onChange={(e) => handleInput(e)}
            />
            <Button
              variant="contained"
              onClick={handleAdd}
              sx={{ margin: "20px 0px 0px 0px" }}
              disabled={todoError}
            >
              Add
            </Button>
          </Box>
        </Modal>
        <Box sx={{ margin: "20px" }}>
          <div style={WrapperHeaderStyle}>
            <div>
              <Typography variant="h1" sx={HeaderTextStyle}>
                Incoming
              </Typography>
            </div>
            <div style={HeaderTodoListLengthStyle}>{todo.length}</div>
          </div>
          <Box sx={WrapperToDoListStyle}>
            <Box style={addNewTaskBarStyle} onClick={handleOpen}>
              +Add New Tasks
            </Box>
            {/* {todo.map((item) => {
                return <CardList task={item} />;
            })} */}
            {todo.map((item, index) => {
              return (
                <CardList
                  todo={item}
                  key={index}
                  setState={setTodo}
                  state={todo}
                />
              );
            })}
          </Box>

          <hr style={HorizontalStyle} />
        </Box>
      </>
    );
    
}
export default Todo