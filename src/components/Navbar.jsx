import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				sx={{ backgroundColor: "violet", paddingLeft: "20px", marginTop: "0" }}
			>
				<Toolbar variant="dense">
					<Typography variant="h6" color="inherit" component="div">
						To Do List
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
