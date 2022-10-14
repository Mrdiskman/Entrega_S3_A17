import database from "../../database"

const listCategoryService = async () => {
  try{  
    const res = await database.query("SELECT * FROM categories",[])
    return res.rows
  }
  catch(err){
    throw Error(err)
  }
}

export default listCategoryService