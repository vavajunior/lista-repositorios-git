import * as React from 'react';

interface IRepositorio {
    id: number,
    name: string
}

interface IProps { }

interface IState {
    lista: IRepositorio[]
}

class ListaRepositoriosClass extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = { lista: [] };
    }

    componentDidMount() {
        this.getRepositorios();
    }

    private async getRepositorios(): Promise<void> {
        const response = await fetch('https://api.github.com/users/vavajunior/repos');
        const lista = await response.json();
        this.setState({ ...this.state, lista });
    }

    render(): React.ReactNode {
        return (
            <div>
                <p>Meus repositórios Git - Utilizando Class Component</p>
                <ul>
                    {this.state.lista.map(item => (<li key={item.id}>{item.name}</li>))}
                </ul>
            </div>
        );
    }
}

export default ListaRepositoriosClass;