import { 
    Navbar, 
    Title, 
    CashFlow, 
    AlertText, 
    Registers, 
    Register, 
    Date, 
    DescriptionWrapper, 
    Description, 
    Amount, 
    Balance, 
    TitleBalance, 
    AmountBalance, 
    Buttons, 
    ButtonNewRegistry, 
    RegistryTitle } from '../styles/Home';
import { useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import { getBalance, getCashFlow, logOut, updateStatus } from '../api/API';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
    const { 
        token,
        username,
        setUsername,
        registersList,
        setRegistersList,
        balance,
        setBalance } = useContext(UserContext);
        const navigate = useNavigate();

    useEffect(() => {
        getCashFlow(token).then((res) => {
            setRegistersList(res.data.registers);
            setUsername(res.data.user.name);
        });

        getBalance(token).then((res) => {
            setBalance(res.data.balance);
        });

        updateStatus(token).then(() => {});
    }, []);

    function requestLogout () {
        logOut(token).then(() => {
            navigate('/');
        });
    }

    return (
        <>
            <Navbar>
                <Title>Olá, {username}</Title>
                <ion-icon name="exit-outline" onClick={requestLogout}></ion-icon>
            </Navbar>
            <CashFlow noregister={registersList.length === 0}>
                <Registers noregister={registersList.length === 0}>
                    {registersList.length === 0 
                        ? <AlertText>Não há registros de entrada ou saída</AlertText>
                        : registersList.map(register => (
                            <Register key={register._id}>
                                <Date>{register.date}</Date>
                                <DescriptionWrapper>
                                    <Description>{register.description}</Description>
                                    <Amount type={register.type}>{register.amount.replace('.',',')}</Amount>
                                </DescriptionWrapper>
                            </Register>
                        ))}
                </Registers>
                {registersList.length === 0 
                    ? ""
                    : <Balance>
                        <TitleBalance>SALDO</TitleBalance>
                        <AmountBalance 
                            isPositive={balance === Math.abs(balance)}
                        >{Math.abs(balance).toFixed(2).replace('.',',')}</AmountBalance>
                    </Balance>
                    }
            </CashFlow>
            <Buttons>
                <Link to='/newinflow'>
                    <ButtonNewRegistry>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <RegistryTitle>Nova entrada</RegistryTitle>
                    </ButtonNewRegistry>
                </Link>
                <Link to='/newoutflow'>
                    <ButtonNewRegistry>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <RegistryTitle>Nova saída</RegistryTitle>
                    </ButtonNewRegistry>
                </Link>
            </Buttons>
        </>
    )
}