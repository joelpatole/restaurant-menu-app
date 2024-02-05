import axios from "axios";
import { CategoryResponse, MenuDetailResponse } from "../utils/interfaces";
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

export const getMenuDetails = async (categoryName : string | undefined) => {
    try{
      const response = await axios.get<MenuDetailResponse>(`${BASE_URL}/menu/find-items?category=${categoryName}`)
      if(response){return response.data.data}
    }catch(err){
        throw `Could not fetch data ${err}`
    }
}

export{};