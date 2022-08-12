import { useEffect, useState } from "react";

interface IRepositorio {
    id: number,
    name: string
}

function ListaRepositoriosFunction() {
    const [lista, setLista] = useState<IRepositorio[]>([]);

    useEffect(() => {
        const getRepositorios = async () => {
            const response = await fetch('https://api.github.com/users/vavajunior/repos');
            const repos = await response.json();
            setLista(repos);
        }
        getRepositorios();
    }, []);

    return (
        <div>
            <p>Meus repositórios Git - Utilizando Function Component</p>
            <ul>
                {lista.map(item => (<li key={item.id}>{item.name}</li>))}
            </ul>
        </div>
    );
}

export default ListaRepositoriosFunction;