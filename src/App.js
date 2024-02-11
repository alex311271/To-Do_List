import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Components/header/Header';
import InputSection from './Components/input-section/Input_section';
import Main from './Components/main/Main';
import Card from './Components/card/Card';
import Notfound from './Components/not-found/404';

export const App = () => {
	const [refreshTodoList, setRefreshTodoList] = useState(false);
	const refreshToDoList = () => setRefreshTodoList(!refreshTodoList);

	return (
		<div className="wraper">
			<div className="App">
				<Header />
				<InputSection refreshToDoList={refreshToDoList} />
				<Routes>
					<Route path="/" element={<Main refreshToDoList={refreshToDoList} />} />
					<Route path="card/:id" element={<Card refreshToDoList={refreshToDoList} />} />
					<Route path="/404" element={<Notfound />} />
					<Route path="*" element={<Navigate to="/404" />} />
				</Routes>
			</div>
		</div>
	);
};
