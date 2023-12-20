import axios from "axios";
import { CategoryResponse } from "../utils/interfaces";
import { BASE_URL } from "../utils/constants";


export const getCategories = async () => {
   // Fetch categories from your API using Axios
    try{
        const response = await axios.get<CategoryResponse>(`${BASE_URL}/menu/categories?filterString=category`)  
        if(response){return response.data.data}
    }catch(e){
        throw `Could not fetch data ${e}`
    }
}

export{};