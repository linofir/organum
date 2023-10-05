import hexToRgba from 'hex-to-rgba';
import Data from '../Data/Data';
import './DataList.css';


const DataList = (props) => {
    return(
        (props.dataList.length>0) ? <section className='data-list' style={{backgroundColor: hexToRgba(props.color, 0.3)}}>
        <input value={props.color} onChange={(e) => props.changeColor(props.id,e.target.value)} type='color' className='input-color' ></input>
        <h3 style={{borderColor: props.primaryColor}}>{props.nome}</h3>
        <div className='data-card'>
            {props.dataList.map((data) => {
                return <Data 
                    key = {data.id} 
                    instituicao={data.instituicao} 
                    vencimento={data.vencimento} 
                    status={data.status} 
                    tipo={data.tipo}
                    arquivo={data.arquivo}
                    comentario={data.comentario}
                    corCard={props.color}
                    aoDeletar={props.aoDeletar}
                />
                }) 
            }
        </div>
        </section>
        : ''
    )
        
};

export default DataList