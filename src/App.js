import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Form from './componentes/Form/Form';
import DataList from './componentes/Datalist/DataList';
import Footer from './componentes/Footer/Footer';

function App() {

  const statusLists= [
    {
      nome: "Aberto",
      primaryColor: "#57C278",
      secundaryColor: "#09F7E9"
    },
    {
      nome: "Pago",
      primaryColor: "#82CFFA",
      secundaryColor: "#F0F8E2"
    },
    {
      nome: "Pendente",
      primaryColor: "#E06B69 ",
      secundaryColor: "#FDE7E8"
    },
  ];


  const [dataList, setData] = useState([])

  const newSubmitedData = (data) => {
    setData([...dataList, data])
    console.log(data)
  };

  return (
    <div className="App">
      <Banner />
      <Form statusOptions = {statusLists.map( status => status.nome)} submitData={(data)=> newSubmitedData(data)} />
      {statusLists.map(status => <DataList 
      key={status.nome} 
      nome={status.nome} 
      primaryColor={status.primaryColor}
      secundaryColor={status.secundaryColor} 
      dataList = {dataList.filter(data => data.status === status.nome)}
      />)}
      
      <Footer></Footer>
    </div>
  );
}

export default App;
