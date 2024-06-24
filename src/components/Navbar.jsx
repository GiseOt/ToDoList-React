import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Filter from "./Filter";

const Navbar = ({ filter, handleFilterChange }) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				sx={{
					backgroundColor: "rgb(181, 192, 208)",
					paddingLeft: "20px",
					marginTop: "0",
					height: "90px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Toolbar
					variant="dense"
					sx={{
						gap: "20px",
					}}
				>
					<Typography
						color="grey"
						component="div"
						sx={{
							fontSize: { xs: "2rem", md: "3rem" },
							backgroundColor: "rgb(250, 247, 204)",
							paddingInline: "6px",
							borderRadius: "20% 5% 20% 5%/5% 20% 25% 20%;",
						}}
					>
						To Do List
					</Typography>
					<Filter filter={filter} handleFilterChange={handleFilterChange} />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
