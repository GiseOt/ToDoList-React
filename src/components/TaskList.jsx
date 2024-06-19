import { useState } from "react";
import { getSavedTasks, setSavedTasks } from "../utils/LocalStorage";
import DeleteModal from "./DeleteModal";
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
	const [taskDelete, setTaskDelete] = useState(null);
    const [deleteModalOpen , setDeleteModalOpen]= useState(false);

	const handleAddTask = (e) => {
		e.preventDefault(); 
		if (!newTask.trim()) {
			setError(true);
			return;
		}
		const updatedTasks = [...tasks, { id: uuidv4(), text: newTask }];
		setTasks(updatedTasks);
		setNewTask("");
		setSavedTasks(updatedTasks);
		setError(false);
	};
	const handleDeleteClick = (taskId) => {
		setTaskDelete(taskId);
		setDeleteModalOpen(true);
	};

	const handleDeleteConfirm = () => {
		const updatedTaskList = tasks.filter((task) => task.id !== taskDelete);
		setTasks(updatedTaskList);
		setSavedTasks(updatedTaskList);
		setDeleteModalOpen(false);
		setTaskDelete(null);
	};

	const handleDeleteCancel = () => {
		setTaskDelete(null);
		setDeleteModalOpen(false);
	};
	return (
		<div
			style={{
				backgroundImage: `url(${Image1})`,
				width: "80%",
				marginTop: "100px",
			}}
		>
			<form
				/* onSubmit={handleAddTask}  */
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
					type="submit"
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
			</form>
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
								<Button onClick={() => handleDeleteClick(task.id)}>
									Delete
								</Button>
							</ButtonGroup>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			</List>
			<DeleteModal
				open={deleteModalOpen}
				onClose={handleDeleteCancel}
				onDelete={handleDeleteConfirm}
			/>
		</div>
	);
};

export default TaskList;
