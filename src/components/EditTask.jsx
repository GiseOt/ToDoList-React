import { Button, ButtonGroup, TextField, Stack } from "@mui/material";

const EditTask = ({ taskText, setIsEdit, handleEditConfirm }) => {


    const handleCancelEdit = () => {
		setIsEdit(false); 
	};

	const handleEditTask = (e) => {
		e.preventDefault();
		const newTaskText = e.target.descripcion.value;
		handleEditConfirm(newTaskText);
	};

	return (
		<Stack
			component="form"
			className="edit_task__form"
			onSubmit={handleEditTask}
			spacing={2}
			sx={{
				width: { xs: "160px", md: "260px" },
			}}
		>
			<TextField
				defaultValue={taskText}
				name="descripcion"
				fullWidth
				multiline
				variant="outlined"
				margin="normal"
			/>
			<ButtonGroup>
				<Button onClick={handleCancelEdit} variant="outlined" color="primary">
					Cancel
				</Button>
				<Button type="submit" variant="contained" color="primary">
					Edit
				</Button>
			</ButtonGroup>
		</Stack>
	);
};

export default EditTask;
