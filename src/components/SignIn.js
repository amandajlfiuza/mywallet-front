import { Body, LoginWrapper, Logo, Forms, Input, Redirector } from '../styles/Forms';
import { useContext, useState } from 'react';
import { postLogin } from '../api/API';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

export default function SignIn() {
    const { setToken, setUsername } = useContext(UserContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    function handleForm (e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    function submitForm (e) {
        e.preventDefault();
        const body = {
            email: form.email,
            password: form.password
        };

        postLogin(body).then((res) => {
            setToken({
                headers: {
                    Authorization: `Bearer ${res.data}`
                }
            });
            setUsername(res.data.username);
            navigate('/home');
        }).catch((error) => {
            alert(error.response.data);
        });
    }

    return (
        <Body>
            <LoginWrapper>
                <Logo>MyWallet</Logo>
                <Forms onSubmit={submitForm}>
                    <Input
                        name='email'
                        type='email'
                        placeholder='E-mail'
                        value={form.email}
                        onChange={handleForm}
                    />
                    <Input
                        name='password'
                        type='password'
                        placeholder='Senha'
                        value={form.password}
                        onChange={handleForm}
                    />
                    <button>Entrar</button>
                </Forms>
                <Link to='/signup'>
                    <Redirector>Primeira vez? Cadastre-se!</Redirector>
                </Link>
            </LoginWrapper>
        </Body>
    )
}