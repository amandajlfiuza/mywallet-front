import styled from "styled-components";

const Navbar = styled.div`
    margin-top: 10%;
    margin-bottom: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ion-icon {
        font-size: 30px;
        color: white;
    }
`;

const Title = styled.div`
    font-family: 'Raleway';
    color: white;
    font-weight: 700;
    font-size: 26px;
    line-height: 30.52px;
`;

const CashFlow = styled.div`
    width: 100%;
    height: 66%;
    padding-left: 13px;
    padding-right: 13px;
    padding-top: 23px;
    padding-bottom: 13px;
    margin-bottom: 13px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: ${props => props.noregister ? 'column-reverse' : 'column'};
    justify-content: ${props => props.noregister ? 'center' : 'space-between'};
    align-items: ${props => props.noregister ? 'center' : 'space-between'};
`;

const AlertText = styled.div`
    width: 180px;
    color: #868686;
    font-family: 'Raleway';
    font-size: 20px;
    line-height: 23.48px;
    text-align: center;
`;

const Register = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`;

const Date = styled.div`
    width: 15%;
    margin-right: 5px;
    color: #C6C6C6;
    font-family: 'Raleway';
    font-size: 16px;
    line-height: 18.78px;
`;

const DescriptionWrapper = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Description = styled.div`
    color: black;
    font-family: 'Raleway';
    font-size: 16px;
    line-height: 18.78px;
`;

const Amount = styled.div`
    color: ${props => props.type === 'outflow' ? '#C70000' : '#03AC00'};
    font-family: 'Raleway';
    font-size: 16px;
    line-height: 18.78px;
`;

const Balance = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TitleBalance = styled.div`
    color: black;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 17px;
    line-height: 19.96px;
`;

const AmountBalance = styled.div`
    color: ${props => props.isPositive ? '#03AC00' : '#C70000'};
    font-family: 'Raleway';
    font-size: 17px;
    line-height: 19.96px;
`;

const Buttons = styled.div`
    width: 100%;
    height: 17%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ButtonNewRegistry = styled.div`
    width: 47.5%;
    height: 100%;
    padding: 9px;
    background-color: #A328D6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ion-icon {
        font-size: 25px;
        color: white;
    }
`;

const RegistryTitle = styled.div`
    width: 65px;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 17px;
    line-height: 19.96px;
    color: white;
`;

export { Navbar, Title, CashFlow, AlertText, Register, Date, DescriptionWrapper, Description, Amount, Balance, TitleBalance, AmountBalance, Buttons, ButtonNewRegistry, RegistryTitle };