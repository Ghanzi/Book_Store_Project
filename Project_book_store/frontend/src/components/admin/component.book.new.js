import { useState,useEffect }from "react";
import {addBook}from "../../services/books_service";
import {getCategories}from "../../services/books_service";

import { useNavigate } from 'react-router-dom'

function BookNew(){
  const  [name,setName]=useState("")
  const  [description,setDescription]=useState("")
  const  [isbn,setISBN]=useState("")
  const  [auteur,setAuteur]=useState("")
  const  [editeur,setEditeur]=useState("")
  const [date_publication,setDat_publication]=useState("")
  const [image,setImage]=useState("")
  const [cat,setCat]=useState([])
  const [selectedCat,setSelectedCat]=useState(0);

  const navigate= useNavigate()
  useEffect(() => {
    getCat();
   
        }, []);
     async function handleForm(event){
        event.preventDefault()
         const book={"name":name,"description":description,"isbn":isbn,"auteur":auteur,"editeur":editeur,"date_publication":date_publication,"image":image,"category":cat[selectedCat]}
         console.log(book)
         await addBook(book)
         
        navigate("/admin/books")
     }
     async function getCat(){
        const result = await getCategories()
   
        setCat(result.data)
     }
    return(
                  <div className={"container"}>
                <form onSubmit={event=>handleForm(event)}>
             <label  className={"form-label"}htmlFor={"name"}>Nom:</label>
             <input className={"form-control"}onChange={e=>setName(e.target.value)}type="text"id={"name"}/>
             <label  className={"form-label"}htmlFor={"description"}>Description:</label>
             <input  className={"form-control"}onChange={e=>setDescription(e.target.value)}type="text"id={"description"}/>
             <label  className={"form-label"}htmlFor={"isbn"}>ISBN:</label>
             <input className={"form-control"}onChange={e=>setISBN(e.target.value)}type="text"id={"isbn"}/>
             <label  className={"form-label"}htmlFor={"auteur"}>Auteur:</label>
             <input  className={"form-control"}onChange={e=>setAuteur(e.target.value)}type="text" id={"auteur"}/>
             <label className={"form-label"}htmlFor={"editeur"}>Editeur:</label>
             <input className={"form-control"}onChange={e=>setEditeur(e.target.value)}type="text" id={"editeur"}/>
             <label className={"form-label"}htmlFor={"date_publication"}>date_publication :</label>
             <input className={"form-control"}onChange={e=>setDat_publication(e.target.value)}type="date" id={"editeur"}/>
             <label className={"form-label"}htmlFor={"date_publication"}>categories:</label>
             <select className="form-select" id="validationCustom04" required  onChange={e => setSelectedCat(e.target.value)}>
            <option  disabled value>Choose...</option>
     {
        cat.map((elem,index)=>{
          return <option value={index} key={index}>{elem.name}</option>
        })
      }
</select>
             <input className={" m-2 btn btn-primary"}type="submit"value={"Enregistrer"}/>
             <input className={" m-2 btn btn-secondary"}type="reset"value={"Annuler"}/>
        </form>
    </div>
    )
}
export default BookNew