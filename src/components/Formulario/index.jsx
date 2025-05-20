import { useState, useEffect } from 'react'; // Hooks
import './formulario.css';

const Formulario = ({className}) => {
    const [matematica, setMatematica] = useState(0);
    const [portugues, setPortugues] = useState(0);
    const [fisica, setFisica] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('O componente iniciou...');
        

        return () => {
            console.log('O componente finalizou...')
        }
    }, []);

    useEffect(() => {
        console.log('O estado nome mudou')
    }, [nome]);

    useEffect(() => {
        console.log('A materia Matemática mudou para:  '+ matematica)
    }, [matematica]);

    const alteraNome = (evento) => {
        setNome(evento.target.value);
    };

    const renderizaResultado = () => {
        const soma = matematica + portugues + fisica;
        const media = soma / 3;

        if(media >= 7) {
            return (
                <p className='aprovado'>Olá {nome}, você foi aprovado!</p>
            );
        } else {
            return (
                <p className='reprovado'>Olá {nome}, você foi reprovado!</p>
            );
        };
    };
    
    return (
        <form className={`container ${className}`}>

            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{ item } </li>
                ))}
            </ul>

            <h2>Médias</h2>
            <input type="text" placeholder='Seu nome' onChange={alteraNome} />
            <div className='campos'>
                <label htmlFor="mtc">Matemática: </label>
                <input id='mtc' type="number" placeholder="Nota" onChange={evento => setMatematica(parseInt(evento.target.value))} min={0}></input>
            </div>
            <div className='campos'>
                <label htmlFor="ptg">Português: </label>
                <input id='ptg' type="number" placeholder="Nota" onChange={evento => setPortugues(parseInt(evento.target.value))} min={0}></input>
            </div>
            <div className='campos'>
                <label htmlFor="fsc">Física: </label>
                <input id='fsc' type="number" placeholder="Nota" onChange={evento => setFisica(parseInt(evento.target.value))} min={0}></input>
            </div>
            {renderizaResultado()}
        </form>
    )
};


export default Formulario;
