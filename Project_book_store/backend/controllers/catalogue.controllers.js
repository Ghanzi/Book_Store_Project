const catalService=require("../services/catalogue.services")

const getBooks=async(req,res)=>{
    
    try{
        const books= await catalService.getAllBooks()
        res.status(200).json(books)
    }catch(error){
        res.status(500).json(error)
    }
}

const getBook=async(req,res)=>{
    
    try{
        const book=await catalService.getBookById(req.params.id)
       res.status(200).json(book)
    }catch (error){
        res.status(500).json(error)
    }
}

const deleteBook=async(req,res)=>{

    try{
      await catalService.deleteBookById(req.params.id)
       res.status(200).json("livre supprimé")
    }catch (error){
        res.status(500).json(error)
    }
}

const updateBook=async(req,res)=>{

    try{
       await catalService.updateBook(req.body)
       res.status(200).json("livre modifié")
    }catch (error){
        res.status(500).json(error)
    }
}

const addBook=async(req,res)=>{

    try{
       await catalService.createBook(req.body)
       res.status(201).json("livre ajouté")
    }catch (error){
        res.status(500).json(error)
       
    }
}

const addCategory=async(req,res)=>{

    try{
     await catalService.createCategory(req.body)
       res.status(201).json("categorie ajouté")
    }catch (error){
        res.status(500).json(error)
    }
}

const getCategories=async(req,res)=>{

    try{
        const categories=await catalService.getAllCategories()
       res.status(200).json(categories)
    }catch (error){
        res.status(500).json(error)
    }
}

const deleteCategory=async(req,res)=>{
    
    try{
        await catalService.deleteCategoryById(req.params.id)
       res.status(200).json("categorie supprimé")
    }catch (error){
        res.status(500).json(error)
    }
}
module.exports={
    getBooks,
    getBook,
    deleteBook,
    updateBook,
    addBook,
    addCategory,
    getCategories,
    deleteCategory

}