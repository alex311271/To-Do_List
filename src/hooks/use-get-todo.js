import { useState, useEffect } from 'react';

export const useRequestGetToDo = (id) => {
	const [toDo, setToDo] = useState('');


	useEffect(() => {
		fetch(`http://localhost:3003/todoList/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setToDo(data);
			});
	}, [id]);

	return { toDo };
};
