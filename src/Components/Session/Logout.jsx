import { useNavigate } from 'react-router-dom'

function Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('role');
    window.location.replace('/');
}

export default Logout;