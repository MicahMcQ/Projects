import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`http://localhost:5000/snacks`);
    return result.data;
  }
  static async getDrinks() {
    const result = await axios.get(`http://localhost:5000/drinks`);
    return result.data;
  }

  static async addSnack(newSnack) {
    try {
      const response = await axios.post(`http://localhost:5000/snacks`, newSnack);
      return response.data;
    } catch (error) {
      console.error("Error adding snack:", error);
      throw error;
    }
  }

  static async addDrink(newDrink) {
    try {
      const response = await axios.post(`http://localhost:5000/drinks`, newDrink);
      return response.data;
    } catch (error) {
      console.error("Error adding drink:", error);
      throw error;
    }
  }
}


export default SnackOrBoozeApi;
