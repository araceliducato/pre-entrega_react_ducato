import './App.css';
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {Form} from "./components/Form/Form";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";



function App() {
  
  return (
    <>
      <div> 
        <Header />
        <ItemListContainer titulo="Petshop Patitas"/>
        <Form/>
        <Footer />
      </div>
    </>
  );
} 

export default App;
