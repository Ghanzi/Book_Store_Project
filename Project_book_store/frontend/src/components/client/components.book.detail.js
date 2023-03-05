import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import {getBookById} from "../../services/books_service"

function BookDetail(){
    const [book,setBook]=useState({})
   const {id}=useParams()

   useEffect(()=>{
      getBook()
  },[])
  
      async function getBook(){
        const result= await getBookById(id)
        setBook(result.data)
        console.log(book)
     }  
     return <div className={"container"}>
        <div >
   
        <p>{book.description}</p>
        <i>{book.auteur}</i>
      </div>
      </div>
   
   
}
export default BookDetail