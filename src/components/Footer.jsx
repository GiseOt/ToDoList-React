import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const Footer = () => {
	return (
		<AppBar
			position="fixed"
			sx={{ top: "auto", bottom: 0, 
                backgroundColor: "rgb(181, 192, 208)" }}
		>
			<Toolbar>
				<Container maxWidth="sm">
					<Typography variant="body1" color="inherit" textAlign="center">
						&copy; 2024 Gisella Ortiz de la Tabla
					</Typography>
				</Container>
			</Toolbar>
		</AppBar>
	);
};

export default Footer;
