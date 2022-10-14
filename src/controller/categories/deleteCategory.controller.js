import deleteCategoryService from "../../service/categories/deleteCategory.Service";

const deleteCategoryController = async (req, res) => {
  const {id} = req.params
  try {
    const deletedCategory = await deleteCategoryService(id);
    return res.status(204).json({message:"Deleted Sucessfuly", deletedCategory});

  } catch (err) {
    return res.status(400).json({message: err.message});
  }
};

export default deleteCategoryController;
