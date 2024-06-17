export const getSavedTasks = () => {
	const savedTasks = JSON.parse(localStorage.getItem("tasks"));
	return savedTasks || [];
};

export const setSavedTasks = (tasks) => {
	localStorage.setItem("tasks", JSON.stringify(tasks));
};
