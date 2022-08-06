import logo from '../images/logo.png';
import { Navigate, useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();
    return (
        <nav>
            <div className="logo-container">
                <img src={logo} alt="logo" onClick={() => navigate('/')}/>
            </div>
            <div className='controls-container'>
                <button className='icon' onClick={() => navigate('./ticket')}> ＋ </button>
                <button className='icon' onClick={() => navigate('/')}> ❮❮ </button>
            </div>
        </nav>
    );
}

export  default Nav;
