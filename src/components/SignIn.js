import { Body, LoginWrapper, Logo, Forms, Input, Redirector } from '../styles/Forms';

export default function SignIn() {
    return (
        <Body>
            <LoginWrapper>
                <Logo>MyWallet</Logo>
                <Forms>
                    <Input
                        placeholder='E-mail'
                    />
                    <Input
                        placeholder='Senha'
                    />
                    <button>Entrar</button>
                </Forms>
                <Redirector>Primeira vez? Cadastre-se!</Redirector>
            </LoginWrapper>
        </Body>
    )
}