import Button from '../button/Button';
import * as hook from '../../hooks';
import './Cards.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Notfound from '../not-found/404';
// import Notfound from '../not-found/404';

export default function Card(props) {
	const navigate = useNavigate();
	const back = () => navigate(-1);
	const params = useParams();
	const { refreshToDoList } = props;
	const { requestDeleteToDo } = hook.useRequestDeleteToDo(refreshToDoList);
	const { isEditToDo, setIsEditToDo, editToDo, id } = hook.useRequestGetEditToDoList(
		params.id,
	);
	const { toDo } = hook.useRequestGetToDo(params.id);
	const del = () => {
		navigate(-1);
		requestDeleteToDo(params.id);
	};
	const [isEdit, setIsEdit] = useState(false);
	const toggleEdit = () => {
		setIsEdit(!isEdit);
	};
	const edit = () => {
		editToDo(params.id);
		toggleEdit();
	};

	const save = () => {
		back(-1);
		requestPutToDo(params.id);
	};

	const { requestPutToDo } = hook.useRequestPutEditToDo(isEditToDo, id, isEdit);

	return !toDo.description ? (
		<Notfound />
	) : isEdit ? (
		<section>
			<textarea
				type="input"
				className="input"
				value={isEditToDo}
				onChange={(e) => setIsEditToDo(e.target.value)}
			></textarea>
			<section>
				<div className='buttons'>
					<Button type="submit" onClick={save}>
						Save
					</Button>
					<Button onClick={back}>Back</Button>
				</div>
			</section>
		</section>
	) : (
		<section>
			<div className="cards">{toDo.description}</div>
			<div>
				<Button onClick={del}>Delete</Button>
				<Button onClick={edit}>Edit</Button>
				<Button onClick={back}>Back</Button>
			</div>
		</section>
	);
}
