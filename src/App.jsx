import './App.css';
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {Form} from "./components/Form/Form";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer"
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  
  return (
    <>
      <BrowserRouter>
        <div> 
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer titulo={"Petshop Patitas"}/>}/>
            <Route path="/detail/:id" element={<ItemDetailContainer />}/>
          
          </Routes>
          <Form/>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
} 

export default App;
