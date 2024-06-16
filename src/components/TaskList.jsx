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
					required
				/>
				<IconButton aria-label="add" sx={{ color: "rgb(152, 228, 255)" }}>
					<IoMdAddCircle />
				</IconButton>
			</div>
			<List component="ul">
				<ListItem component="li" sx={{ display: "flex", alignItems: "center" }}>
					<Checkbox color="secondary" />
					<ListItemText>
						<Typography variant="body1">Task 1</Typography>
					</ListItemText>
					<ListItemSecondaryAction>
						<ButtonGroup variant="outlined" aria-label="Basic button group">
							<Button>Edit</Button>
							<Button>Delet</Button>
						</ButtonGroup>
					</ListItemSecondaryAction>
				</ListItem>
			</List>
		</div>
	);
};

export default TaskList;
