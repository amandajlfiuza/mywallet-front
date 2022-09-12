import { NewDataWrapper, Title, Forms, Input } from '../styles/Forms';
import dayjs from 'dayjs';
import { useContext, useEffect, useState } from 'react';
import { postRegister } from '../api/API';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { updateStatus } from '../api/API';

export default function NewInflow() {
    const { token } = useContext(UserContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        amount: '',
        description: ''
    });

    function handleForm (e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function submitForm (e) {
        e.preventDefault();

        const body = {
            type: 'inflow',
            date: dayjs().format('DD/MM'),
            description: form.description,
            amount: Number(form.amount).toFixed(2)
        };

        postRegister(body, token).then(() => {
            navigate('/home');
        });
    }

    useEffect(() => {
        updateStatus(token).then(() => {});
    }, []);

    return (
        <NewDataWrapper>
            <Title>Nova entrada</Title>
            <Forms onSubmit={submitForm}>
                <Input
                    name='amount'
                    type='number'
                    placeholder='Valor'
                    value={form.amount}
                    onChange={handleForm}
                />
                <Input
                    name='description'
                    type='text'
                    placeholder='Descrição'
                    value={form.description}
                    onChange={handleForm}
                />
                <button type='submit'>Salvar entrada</button>
            </Forms>
        </NewDataWrapper>
    )
}