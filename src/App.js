import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Form from './componentes/Form/Form';
import DataList from './componentes/Datalist/DataList';
import Footer from './componentes/Footer/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [filterLists, setfilterLists]= useState([
    {
        
      nome: "Aberto",
      color: "#09F7E9"
    },
    {
      id: uuidv4(),
      nome: "Pago",
      color: "#F0F8E2"
    },
    {
      id: uuidv4(),
      nome: "Pendente",
      color: "#FDE7E8"
    },
  ])
  // criar filtro
  // const filterLists= [
  //   {
  //     nome: "Fluxo",
  //     primaryColor: "#57C278",
  //     color: "#09F7E9"
  //   },
  //   {
  //     nome: "Entrada",
  //     primaryColor: "#82CFFA",
  //     color: "#F0F8E2"
  //   },
  //   {
  //     nome: "Saída",
  //     primaryColor: "#E06B69 ",
  //     color: "#FDE7E8"
  //   },
  //   {
  //     nome: "Aberto",
  //     primaryColor: "#57C278",
  //     color: "#09F7E9"
  //   },
  //   {
  //     nome: "Pago",
  //     primaryColor: "#82CFFA",
  //     color: "#F0F8E2"
  //   },
  //   {
  //     nome: "Pendente",
  //     primaryColor: "#E06B69 ",
  //     color: "#FDE7E8"
  //   },
  // ];

 

  const changeColor = (id, color) => {
    setfilterLists(filterLists.map((list) => { 
      if(list.id === id){
        list.color = color
      }
      return list
      }
    ));
  };

  const [dataList, setData] = useState([])

  const newSubmitedData = (data) => {
    setData([...dataList, data])
    console.log(data)
  };

  const deletarData = () => {
    console.log('Deletar')
  }

  return (
    <div className="App">
      <Banner />
      <Form 
      statusOptions = {filterLists.map( status => status.nome)} submitData={(data)=> newSubmitedData(data)} />
      {filterLists.map(status => 
        <DataList 
          key={status.id} 
          nome={status.nome} 
          color={status.color} 
          dataList = {dataList.filter(data => data.status === status.nome)}
          aoDeletar= {deletarData}
          changeColor= {changeColor}
        />
      )}
      
      <Footer></Footer>
    </div>
  );
}

export default App;
