import { useNavigate } from 'react-router-dom'

export default function Logout() {
    const navigate = useNavigate();
    localStorage.removeItem('token');
    console.log(localStorage.getItem('token'));
    navigate('/', {replace : true});
}
