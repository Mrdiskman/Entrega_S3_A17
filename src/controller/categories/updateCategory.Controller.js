import updateCategoryService from "../../service/categories/updateCategory.Service";

const updateCategoryController = async (req, res) => {
        const {id} = req.params
        const {name} = req.body
      try {
        const updatedCategory = await updateCategoryService(id, name);
              
        return res.status(200).json({
          message: "successfully updated",
          category: updatedCategory
        });

  } catch (err) { 
        return res.status(400).json({message: err.message});
  }
};

export default updateCategoryController;