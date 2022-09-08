import { Navbar, Title, CashFlow, AlertText, Register, Date, DescriptionWrapper, Description, Amount, Balance, TitleBalance, AmountBalance, Buttons, ButtonNewRegistry, RegistryTitle } from '../styles/Home';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function Home() {
    // const { token, registersList, setRegistersList, balance, setBalance } = useContext(UserContext);

    const registersList = [
        {
            type: 'outflow',
            date: '30/11',
            description: 'Almoço mãe',
            amount: '39,90'
        }
    ]

    const balance = 2849.96;

    return (
        <>
            <Navbar>
                <Title>Olá, fulano</Title>
                <ion-icon name="exit-outline"></ion-icon>
            </Navbar>
            <CashFlow noregister={registersList.length === 0}>
                {registersList.length === 0 
                    ? <AlertText>Não há registros de entrada ou saída</AlertText>
                    : registersList.map(register => (
                        <Register>
                            <Date>{register.date}</Date>
                            <DescriptionWrapper>
                                <Description>{register.description}</Description>
                                <Amount type={register.type}>{register.amount}</Amount>
                            </DescriptionWrapper>
                        </Register>
                    ))}
                {registersList.length === 0 
                    ? ""
                    : <Balance>
                        <TitleBalance>SALDO</TitleBalance>
                        <AmountBalance 
                            isPositive={balance === Math.abs(balance)}
                        >{Math.abs(balance)}</AmountBalance>
                    </Balance>
                    }
            </CashFlow>
            <Buttons>
                <ButtonNewRegistry>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <RegistryTitle>Nova entrada</RegistryTitle>
                </ButtonNewRegistry>
                <ButtonNewRegistry>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <RegistryTitle>Nova saída</RegistryTitle>
                </ButtonNewRegistry>
            </Buttons>
        </>
    )
}