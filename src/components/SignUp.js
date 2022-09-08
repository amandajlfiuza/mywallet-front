import { Body, LoginWrapper, Logo, Forms, Input, Redirector } from '../styles/Forms';

export default function SignUp() {
    return (
        <Body>
            <LoginWrapper>
                <Logo>MyWallet</Logo>
                <Forms>
                <Input
                        placeholder='Nome'
                    />
                    <Input
                        placeholder='E-mail'
                    />
                    <Input
                        placeholder='Senha'
                    />
                    <Input
                        placeholder='Confirme a senha'
                    />
                    <button>Cadastrar</button>
                </Forms>
                <Redirector>Já tem uma conta? Entre agora!</Redirector>
            </LoginWrapper>
        </Body>
    )
}