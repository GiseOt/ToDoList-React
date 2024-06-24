import { FormControl, Select, MenuItem } from "@mui/material";

const Filter = ({ filter, handleFilterChange }) => {
	return (
		<FormControl sx={{ width: 150, marginTop: "8px" }}>
			<Select
				labelId="filter-select-label"
				id="filter-select"
				value={filter}
				onChange={handleFilterChange}
			>
				<MenuItem value="all">All</MenuItem>
				<MenuItem value="completed">Completed</MenuItem>
				<MenuItem value="incomplete">Incomplete</MenuItem>
			</Select>
		</FormControl>
	);
};

export default Filter;
