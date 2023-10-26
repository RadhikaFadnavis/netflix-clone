import React from 'react'
import Header from '../components/Header'
import BackgroundImage from '../components/BackgroundImage'
import styled from 'styled-components'


const SignUpPage = () => {
  return (
    <Container>
        <BackgroundImage/>

        <div className='content'>
            <Header signup/>
            <div className='body'>
                <div className='text'>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h4>Watch anywhere. Cancel anytime.</h4>
                    <h6>
                        Ready to watch? Enter your email to create or restart membership.
                    </h6>
                </div>
            <div className='form'>
                <input type='password' name='password' placeholder='password'/>
                <input type='email' name='email' placeholder='email'/>
                <button>Get Started</button>
                <button>Sign Up</button>

                </div>
            

            
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
  position: relative;

.content{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
}
.body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.text{
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 2rem;
    color: white;

h1{
    padding: 0 25rem;
}
h4{
    margin-top: -1.5rem;
}
h6{
    margin-top: -1.5rem;
}
}
.form{
    display: grid;
    width: 60%;
    input{
        color: black;
        padding: 1.5rem;
        font-size: 1.2rem;
        width: 45rem;
        &:focus{
            outline: none;
        }
    }
    button{
        padding: 0.5rem 1rem;
        background-color: red;
        border: none;
        cursor: pointer;
        font-size: 1.05rem;
        color: white;
        width: 10rem;
    }
}
`;
export default SignUpPage
