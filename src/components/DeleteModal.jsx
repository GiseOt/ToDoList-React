import { Modal, Backdrop, Fade, Button, Typography, Box } from "@mui/material";

const DeleteModal = ({ open, onClose, onDelete }) => {
	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby="delete-modal-title"
			aria-describedby="delete-modal-description"
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={open}>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						bgcolor: "background.paper",
						boxShadow: 24,
						p: 4,
						maxWidth: 400,
						minWidth: 300,
						textAlign: "center",
					}}
				>
					<Typography id="delete-modal-title" variant="h6" gutterBottom>
						Are you sure you want to delete?
					</Typography>

					<Button
						onClick={onDelete}
						variant="contained"
						color="error"
						sx={{ mr: 2 }}
		
					>
						Delete
					</Button>
					<Button onClick={onClose} variant="outlined">
						Cancel
					</Button>
				</Box>
			</Fade>
		</Modal>
	);
};

export default DeleteModal;
