// interface CardProps {
//     name:string;
//     time:string
// }
import './styles.css'
export function Card({name, time}) {

    return(
        <div className="card">
            <strong>{name}</strong>
            <small>{time}</small>
        </div>

    )
   
}
// Card.propTypes = {
//     name:propTypes.string.isRequired,
//     time:propTypes.string.isRequired
// }
//Card é um componente, componentes sao codigos independentes que podem ser reutilizados. geralmente uma function que retorna html

// Props: dentro dos components temos as props que sao propriedades, ou seja, um objeto com informações

//state: estado, é criado dentro do componente e é mutavel, por exemplo um botao esta ativado ou nao, se revolve com estado

//aqui ta dando erro e nn sei o pq 