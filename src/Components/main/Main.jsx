import { Link } from 'react-router-dom';
import * as hook from '../../hooks';
import Button from '../button/Button';
import './Main.css';

export default function Main(refreshToDoList) {
	const { sortTodoList, sortToDoList } = hook.useRequestSortToDoList();
	const { toDoList } = hook.useRequestGetToDoList(refreshToDoList);
	return sortTodoList.length > 0 ? (
		<section className="list">
			{sortTodoList.map(({ id, description }) => (
				<div className="todo" key={id}>
					<Link to={`/card/${id}`}>
						{description.length > 85 ? description.slice(0, 85) + ' ...' : description}
					</Link>
				</div>
			))}
			<div>
				<Button onClick={sortToDoList}>Sorted</Button>
			</div>
		</section>
	) : (
		<section className="list">
			{toDoList.map(({ id, description }) => (
				<div className="todo" key={id}>
					<Link to={`/card/${id}`}>
						{description.length > 85 ? description.slice(0, 85) + ' ...' : description}
					</Link>
				</div>
			))}
			<div>
				<Button onClick={sortToDoList}>Sorted</Button>
			</div>
		</section>
	);
}
