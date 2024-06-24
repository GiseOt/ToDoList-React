import { useState } from "react";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

// Design
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@mui/material/styles";
import "@fontsource/gochi-hand";

function App() {
	const [filter, setFilter] = useState("all");

	const handleFilterChange = (e) => {
		setFilter(e.target.value);
	};

	// Theme
	const theme = createTheme({
		typography: {
			fontFamily: "Gochi Hand, cursive",
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navbar filter={filter} handleFilterChange={handleFilterChange} />
			<Container
				maxWidth="sm"
				sx={{ display: "flex", justifyContent: "center" }}
			>
				<TaskList filter={filter} />
			</Container>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
