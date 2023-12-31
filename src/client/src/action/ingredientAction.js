import axios from "axios";
import { message } from "antd";

// Get recomended recipes
export const handleGetAllIngredientName = async () => {
  try {
    const result = await axios.get("https://127.0.0.1:8000/ingredients");
    if (result.data.success === true) {
      return result.data.ingredients.map((ingredient) => ingredient.name);
    } else {
      message.error(result.data.error);
    }
  } catch (err) {
    console.log(err);
  }
  return false;
};

export const handleGetAllIngredientID = async () => {
  try {
    const result = await axios.get(
      "https://127.0.0.1:8000/ingredients/create-recipe"
    );

    if (result.data.success === true) {
      return result.data.ingredients;
    } else {
      message.error(result.data.error);
    }
  } catch (err) {
    console.log(err);
  }
  return false;
};
