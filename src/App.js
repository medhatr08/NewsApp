
import './App.css';
import React,{ Component } from 'react';
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import { BrowserRouter,Routes,Route} from 'react-router-dom';



class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<NewsComponent key="general" pageSize={5} category="general"/>}></Route>
        <Route exact path="/business" element={<NewsComponent key="business" pageSize={5} category="business"/>}></Route>
        <Route exact path="/entertainment" element={<NewsComponent key="entertainment" pageSize={5} category="entertainment"/>}></Route>
        <Route  exact path="/general" element={<NewsComponent key="general" pageSize={5} category="general"/>}></Route>
        <Route exact path="/health" element={<NewsComponent key="health" pageSize={5} category="health"/>}></Route>
        <Route exact path="/science" element={<NewsComponent key="science" pageSize={5} category="science"/>}></Route>
        <Route exact path="/sports" element={<NewsComponent key="sports" pageSize={5} category="sports"/>}></Route>
        <Route exact path="/technology" element={<NewsComponent key="technolofy" pageSize={5} category="technology"/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
