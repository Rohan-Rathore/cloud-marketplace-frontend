import { useNavigate } from 'react-router-dom'

function Logout() {
    localStorage.removeItem('token');
    window.location.replace('/');
}

export default Logout;