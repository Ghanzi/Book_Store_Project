import './App.css';
import {Route, Routes} from "react-router-dom";
import BookList from './components/admin/component.book.list';
import AdminLayout from './components/admin/component.admin.layout';
import BookNew from './components/admin/component.book.new';
import ClientLayout from './components/client/components.client.layout';
import BookListClient from './components/client/components.client.book.list';
import BookDetail from './components/client/components.book.detail';
import AccueilA from './components/admin/component.accueilA';
import AccueilC from './components/client/component.accueilC';
import Edit from './components/admin/component.edit';
function App() {
  return (
    <> 

      <Routes>


        <Route path={'/admin'}element={<AdminLayout/>}>
            <Route path={"books"}element={<BookList/>}></Route>
            <Route path={"books/new"}element={<BookNew/>}></Route>
            <Route path={"books/edit"}element={< Edit/>}></Route>
            <Route path={"accueilA"}element={<AccueilA/>}></Route>
        </Route>

       <Route path={"/"}element={<ClientLayout/>}>
                 <Route path={"accueilC"}element={<AccueilC/>}></Route>
                <Route path={"books"}element={<BookListClient/>}></Route>
                 <Route path={"books/:id"}element={<BookDetail/>}></Route>
       </Route>
      
      
      </Routes>
    
    </>
  
  );
}

export default App;
