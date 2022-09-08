import styled from "styled-components";

const Body = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const LoginWrapper = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NewDataWrapper = styled.div`
    width: 100%;
    margin: 10% auto;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-family: 'Raleway';
    color: white;
    font-weight: 700;
    font-size: 26px;
    line-height: 30.52px;
    margin-bottom: 40px;
`;

const Logo = styled.div`
    font-family: 'Saira Stencil One';
    color: white;
    font-size: 32px;
    line-height: 50.37px;
    margin-bottom: 24px;
`;

const Forms = styled.form`
    width: 100%;
    margin-bottom: 36px;

    button {
        width: 100%;
        height: 46px;
        border-radius: 5px;
        background-color: #A328D6;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;

        font-family: 'Raleway';
        color: white;
        font-weight: 700;
        font-size: 20px;
        line-height: 23.48px;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 58px;
    padding: 15px;
    margin-bottom: 13px;
    border-radius: 5px;
    background-color: white;
    border: none;
    display: flex;
    align-items: center;

    &::placeholder {
        font-family: 'Raleway';
        color: black;
        font-size: 20px;
        line-height: 23.48px;
    }
`;

const Redirector = styled.button`
    background-color: #8C11BE;
    border: none;

    font-family: 'Raleway';
    color: white;
    font-weight: 700;
    font-size: 15px;
    line-height: 17.61px;
`;

export { Body, LoginWrapper, NewDataWrapper, Title, Logo, Forms, Input, Redirector };