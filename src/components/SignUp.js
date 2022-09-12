import { Body, LoginWrapper, Logo, Forms, Input, Redirector } from '../styles/Forms';
import { useState } from 'react';
import { createUser } from '../api/API';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });
    const [isInvalid, setIsInvalid] = useState(false);

    function handleForm (e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    function submitForm (e) {
        e.preventDefault();

        if (form.password !== form.passwordConfirm) {
            setIsInvalid(true);
            alert('As duas senhas fornecidas devem ser iguais.')
            return;
        }

        const body = {
            name: form.name,
            email: form.email,
            password: form.password
        };

        createUser(body).then(() => {
            navigate('/');
        });
    }

    return (
        <Body>
            <LoginWrapper>
                <Logo>MyWallet</Logo>
                <Forms onSubmit={submitForm}>
                <Input
                        name='name'
                        type='text'
                        placeholder='Nome'
                        value={form.name}
                        onChange={handleForm}
                    />
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
                        isInvalid={isInvalid}
                    />
                    <Input
                        name='passwordConfirm'
                        type='password'
                        placeholder='Confirme a senha'
                        value={form.passwordConfirm}
                        onChange={handleForm}
                        isInvalid={isInvalid}
                    />
                    <button type='submit'>Cadastrar</button>
                </Forms>
                <Link to='/'>
                    <Redirector>Já tem uma conta? Entre agora!</Redirector>
                </Link>
            </LoginWrapper>
        </Body>
    )
}