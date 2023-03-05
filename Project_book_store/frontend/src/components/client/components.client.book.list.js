import { useEffect, useState } from "react"
import{getAllBooks} from "../../services/books_service"
function BookListClient(){
    const [books,setBooks]=useState([])
    useEffect(()=>{
      getBooks()
    },[])

    
    async function getBooks(){
       const result= await getAllBooks()
       setBooks(result.data)
       console.log(result.data)
    }
    return(
      
      <div className="container">
      <div className="row">
        
        {books.map((elem, index) => {
          return (
            <div
              className="col-md-2"
              style={{
                margin:"auto",
                marginTop: "60px",
                marginBottom: "40px"
               
              }}
              key={index}
            >
              <div className="card" style={{ width: "15rem",}}>
                <img src={elem.image} className="card-img-top" alt="..."style={{maxHeight:"300px",maxWidth:"300px"}} />
                <div className="card-body">
                  <h5 className="card-title">{elem.title}</h5>
                  <p className="card-text">Description : {elem.description}</p>
                  <p className="card-text">Auteur :{elem.auteur}</p>
                  <p className="card-text">Editeur :{elem.editeur}</p>
                
                  <i>{elem.Auteur}</i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    
    ) 
}
export default BookListClient