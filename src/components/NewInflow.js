import { NewDataWrapper, Title, Forms, Input } from '../styles/Forms';

export default function NewInflow() {
    return (
        <NewDataWrapper>
            <Title>Nova entrada</Title>
            <Forms>
                <Input
                    placeholder='Valor'
                />
                <Input
                    placeholder='Descrição'
                />
                <button>Salvar entrada</button>
            </Forms>
        </NewDataWrapper>
    )
}