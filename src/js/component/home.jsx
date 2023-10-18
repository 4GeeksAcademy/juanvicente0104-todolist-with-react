import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	//Define the states
	const [task, setTask] = useState("");
	const [taskList, setTaskList] = useState([]);


	function handleTask(event) {
		setTask(event.target.value)
	}

	function handleTaskList(event) {
		if (event.key == "Enter") {
			if (task.trim() !== "") {
				setTaskList([...taskList, task.trim()]);
				setTask("");
			}
		}
	}

	function handleDelete(index) {
		let newtaskList = taskList.filter((item, indexFilter) => index !== indexFilter)
		setTaskList(newtaskList);
	}


	return (
		<div className="container d-flex flex-column justify-content-center align-items-center">
			<h1 className="text-center mt-5">To do list </h1>
			<input onChange={handleTask} value={task} onKeyDown={handleTaskList} placeholder="Add task" />

			<ul>

				{
					taskList.map((item, index) => {
						return (<li key={index} className="border-bottom d-flex justify-content-between">
							<span> {item} <i onClick={() => handleDelete(index)} class="fas fa-trash"></i> </span>

						</li>)
					}

					)
				}


			</ul>

			<p>
				{taskList.length == 0 ? 'There are no tasks' : taskList.length == 1 ? 'There is one task' :
					`There are ${taskList.length} tasks`}
			</p>




		</div>
	);
};

export default Home;
