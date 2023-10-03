import Data from '../Data/Data';
import './DataList.css';

const DataList = (props) => {
    return(
        (props.dataList.length>0) ? <section className='data-list' style={{backgroundColor: props.secundaryColor}}>
        <h3 style={{borderColor: props.primaryColor}}>{props.nome}</h3>
        <div className='data-card'>
            {props.dataList.map(data => <Data 
                key = {data.instituicao} 
                instituicao={data.instituicao} 
                vencimento={data.vencimento} 
                status={data.status} 
                tipo={data.tipo}
                arquivo={data.arquivo}
                comentario={data.comentario}
                corCard={props.primaryColor}/>) 
            }
        </div>
        </section>
        : ''
    )
        
};

export default DataList