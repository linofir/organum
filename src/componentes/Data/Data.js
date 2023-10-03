import './Data.css';

const Data = (props) => {
    return (
        <div className='data'>
            <div className='cabecalho' style={{backgroundColor: props.corCard}}>
                <img src={props.arquivo} alt='imagem teste' />
            </div>
            <div className='rodape'>
                <h4>{props.instituicao}</h4>
                <h5>{props.vencimento}</h5>  
                <h5>{props.status}</h5> 
                <h5>{props.tipo}</h5> 
                <h5>{props.comentario}</h5> 
            </div>
        </div>
    )

};


export default Data