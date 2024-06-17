import { useState } from "react";
import { getSavedTasks, setSavedTasks } from "../utils/LocalStorage";
import { v4 as uuidv4 } from "uuid";

import {
	TextField,
	IconButton,
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	ButtonGroup,
	Button,
	Typography,
	Checkbox,
} from "@mui/material";
import { IoMdAddCircle } from "react-icons/io";
import Image1 from "../assets/background.png";


const TaskList = () => {
    const [tasks, setTasks] = useState(getSavedTasks());
    const [newTask, setNewTask] = useState("");
    const [error, setError] = useState(false);

    const handleAddTask = () => {
        if (!newTask.trim()) {
					setError(true);
					return;
				}
        const updatedTasks = [...tasks, { id: uuidv4() , text : newTask}];
        setTasks(updatedTasks);
        setNewTask("");
        setSavedTasks(updatedTasks);
        setError(false);

    }
	return (
		<div
			style={{
				backgroundImage: `url(${Image1})`,
				width: "80%",
				marginTop: "100px",
			}}
		>
			<div
				style={{ display: "flex", justifyContent: "center", paddingBlock: 25 }}
			>
				<TextField
					id="standard-basic"
					label="Today I need to..."
					variant="standard"
					value={newTask}
					error={error}
					helperText={error ? "Please add your task" : ""}
					onChange={(e) => setNewTask(e.target.value)}
					required
				/>
				<IconButton
					aria-label="add"
					onClick={handleAddTask}
					sx={{
						color: "rgb(152, 228, 255)",
						"&:hover": {
							color: "violet",
						},
					}}
				>
					<IoMdAddCircle />
				</IconButton>
			</div>
			<List component="ul">
				{tasks.map((task) => (
					<ListItem
						component="li"
						key={task.id}
						sx={{ display: "flex", alignItems: "center" }}
					>
						<Checkbox color="secondary" />
						<ListItemText>
							<Typography variant="body1">{task.text}</Typography>
						</ListItemText>
						<ListItemSecondaryAction>
							<ButtonGroup variant="outlined" aria-label="Basic button group">
								<Button>Edit</Button>
								<Button>Delete</Button>
							</ButtonGroup>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default TaskList;
