import createProduct from "../../service/products/createProducts.service";

const CreateProductsController = async (req, res) => {
  const { name, price, category_id} = req.body;
  try {
    const product = await createProduct(name, price, category_id);
    return res.status(201).json({message: "product created sucessfully", product});
  } catch (err) {
    return res.status(400).json({message: err.message});
  }
};

export default CreateProductsController;
