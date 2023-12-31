import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <div className='logo'>
                <img
                    src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png'
                    alt='no internet connection'
                />
            </div>
            <button onClick={() => navigate(props.login ? '/login' : '/signup')}>
                {props.login ? 'Log in' : 'Signup'}
            </button>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    padding: 0 4rem;

    .logo {
        img {
            height: 5rem;
            cursor: pointer;
        }
    }

    button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
    }
`;

export default Header;
