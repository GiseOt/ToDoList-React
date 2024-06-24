import { useState } from "react";
import { getSavedTasks, setSavedTasks } from "../utils/LocalStorage";
import DeleteModal from "./DeleteModal";
import { v4 as uuidv4 } from "uuid";
import EditTask from "./EditTask";

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
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Image1 from "../assets/background.png";

const TaskList = ({ filter }) => {
	const [tasks, setTasks] = useState(
		getSavedTasks().map((task) => ({ ...task, completed: false }))
	);
	const [newTask, setNewTask] = useState("");
	const [error, setError] = useState(false);
	const [taskDelete, setTaskDelete] = useState(null);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [editingTaskId, setEditingTaskId] = useState(null);

	//Add Task

	const handleAddTask = (e) => {
		e.preventDefault();
		if (!newTask.trim()) {
			setError(true);
			return;
		}
		if (newTask.trim().length > 25) {
			setError(true);
			return;
		}
		const updatedTasks = [
			...tasks,
			{ id: uuidv4(), text: newTask, completed: false },
		];
		setTasks(updatedTasks);
		setSavedTasks(updatedTasks);
		setNewTask("");
		setError(false);
	};

	//Delete Task

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

	//Edit Task

	const handleEditClick = (taskId) => {
		setEditingTaskId(taskId);
		setIsEdit(true);
	};

	const handleEditConfirm = (newText) => {
		const updatedTasks = tasks.map((task) =>
			task.id === editingTaskId ? { ...task, text: newText } : task
		);
		setTasks(updatedTasks);
		setSavedTasks(updatedTasks);
		setIsEdit(false);
		setEditingTaskId(null);
	};

	const handleCheckboxChange = (e, taskId) => {
		const updatedTasks = tasks.map((task) =>
			task.id === taskId ? { ...task, completed: e.target.checked } : task
		);
		setTasks(updatedTasks);
		setSavedTasks(updatedTasks);
	};

	// Filtered

	const filteredTasks = tasks.filter((task) => {
		if (filter === "completed") return task.completed;
		if (filter === "incomplete") return !task.completed;
		return true;
	});

	return (
		<div
			style={{
				backgroundImage: `url(${Image1})`,
				width: "100%",
				marginTop: "100px",
				border: "solid 1px rgb(238, 238, 238)",
				borderRadius: "20px",
				boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
			}}
		>
			<form
				style={{ display: "flex", justifyContent: "center", paddingBlock: 25 }}
			>
				<TextField
					id="standard-basic"
					label="Today I need to..."
					variant="standard"
					value={newTask}
					error={error}
					helperText={
						error
							? "Please add your task (up to 25 characters)"
							: "Up to 25 characters"
					}
					onChange={(e) => setNewTask(e.target.value)}
					required
					inputProps={{ maxLength: 25 }}
					sx={{
						"& .MuiInputLabel-root": {
							fontSize: "1.2rem",
						},
					}}
				/>
				<IconButton
					type="submit"
					aria-label="add"
					onClick={handleAddTask}
					sx={{
						color: "rgb(244, 124, 178)",
						"&:hover": {
							color: "violet",
						},
					}}
				>
					<IoMdAddCircle />
				</IconButton>
			</form>
			<List component="ul" sx={{ marginBottom: "40px" }}>
				{filteredTasks.map((task) => (
					<ListItem
						key={task.id}
						sx={{
							display: "flex",
							alignItems: "center",
							textDecoration: task.completed ? "line-through " : "none",
						}}
					>
						<Checkbox
							color="secondary"
							checked={task.completed}
							onChange={(e) => handleCheckboxChange(e, task.id)}
						/>
						{isEdit && editingTaskId === task.id ? (
							<EditTask
								taskText={task.text}
								setIsEdit={setIsEdit}
								handleEditConfirm={handleEditConfirm}
							/>
						) : (
							<ListItemText>
								<Typography variant="body1">{task.text}</Typography>
							</ListItemText>
						)}
						<ListItemSecondaryAction>
							<ButtonGroup variant="outlined" aria-label="Basic button group">
								<Button
									onClick={() => handleEditClick(task.id)}
									sx={{
										color: "rgb(244, 124, 178)",
										borderColor: "rgb(244, 124, 178)",
										"&:hover": {
											borderColor: "rgb(244, 124, 178)",
											backgroundColor: "rgb(244, 124, 178)",
											color: "#fff",
										},
									}}
								>
									<FaEdit />
								</Button>
								<Button
									onClick={() => handleDeleteClick(task.id)}
									sx={{
										color: "rgb(244, 124, 178)",
										borderColor: "rgb(244, 124, 178)",
										"&:hover": {
											borderColor: "rgb(244, 124, 178)",
											backgroundColor: "rgb(244, 124, 178)",
											color: "#fff",
										},
									}}
								>
									<MdDelete />
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
