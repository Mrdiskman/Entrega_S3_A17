import database from "../../database";

const listCategoryProductsService = async (id) => {
  console.log(id)
    try {
     const res = await database.query(
        `SELECT pd.name, pd.price, ct.name AS category FROM products pd JOIN categories ct ON ct.id = pd.category_id WHERE pd.category_id = $1`,
        [id])
       return res.rows 

   } catch (err) {
     throw new Error(err)
   }
};

export default listCategoryProductsService;