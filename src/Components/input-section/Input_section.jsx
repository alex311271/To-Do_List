import Button from '../button/Button';
import './Input_section.css'
import * as hook from '../../hooks';

export default function InputSection({ refreshToDoList }) {
	const { requestAddTodo, text, setText } = hook.useRequestAddToDo(refreshToDoList);

	return (
		<section>
			<form onSubmit={requestAddTodo}>
				<textarea
					type="text"
					className="input"
					value={text}
					onChange={(e) => setText(e.target.value)}
				></textarea>
				<Button disabled={!text} type="submit">
					Add todo
				</Button>
			</form>
		</section>
	);
}
