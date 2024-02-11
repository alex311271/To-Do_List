import { useState } from 'react';

export const useRequestPutEditToDo = (isEditToDo, id, isEdit) => {
	const [refreshTodoList, setRefreshTodoList] = useState(false);
	const refreshToDoList = () => setRefreshTodoList(!refreshTodoList);

	const requestPutToDo = () => {
		fetch(`http://localhost:3003/todoList/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				id: id,
				description: isEditToDo,
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(`Зпись с id ${id} изменена, ответ сервера:`, response)
			})
			.catch((error) => {
				console.error(error);
			})

			.finally(() => refreshToDoList());
	};
	return {
		requestPutToDo,
	};
};
