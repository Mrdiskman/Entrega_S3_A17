import listCategoryProductsService from "../../service/products/listCategoryProducts.Service";

const listCategoryProductsController = async (req, res) => {
    const {id} = req.params
  try {
    const productsByCategory = await listCategoryProductsService(id)
    return res.status(200).json(productsByCategory);
  } catch (err) {
    return res.status(400).json({message: err.message});
  }
};

export default listCategoryProductsController;