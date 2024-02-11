import './Button.css';

export default function Button(props) {
	const { children, onClick, id, disabled } = props;
	return (
		<button id={id} disabled={disabled} className="button" onClick={onClick}>
			{children}
		</button>
	);
}
