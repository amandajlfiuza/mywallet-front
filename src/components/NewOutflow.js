import { NewDataWrapper, Title, Forms, Input } from '../styles/Forms';

export default function NewInflow() {
    return (
        <NewDataWrapper>
            <Title>Nova saída</Title>
            <Forms>
                <Input
                    placeholder='Valor'
                />
                <Input
                    placeholder='Descrição'
                />
                <button>Salvar saída</button>
            </Forms>
        </NewDataWrapper>
    )
}