import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import './404.css'
export default function Notfound(){
	const navigate = useNavigate();
	const back = () => navigate(-1);
	return (
		<section>
			<h3>Данная страница не найдена.</h3>
			<Button onClick={back}>Back</Button>
		</section>
	);
}