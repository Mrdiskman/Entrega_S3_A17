import createcategoryService from "../../service/categories/createCategory.service"


const createCategoryController = async (req, res)=>{
  const {name} = req.body
  try{
    const category = await createcategoryService(name)
    return res.status(201).json({message: "Created sucessfuly", category})
  }
  catch(err){
    return res.status(400).json({message:err.message})
  }
}

export default createCategoryController