import {  createAsyncThunk} from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/url";
import axios from "axios";


const filtrarTineraries = createAsyncThunk("filtrarTineraries", async (data1)=>{
    const res = await axios.get(`${BASE_URL}/api/itineraries?user_id=${data1}`)
    return{
        tinerariesFiltrados: res.data.data
    }
    }
)

const eliminarTineraries = createAsyncThunk("eliminarTineraries", async ( idCity ) => {
    let url = `${BASE_URL}/api/itineraries/${idCity.idCity}`;
    let headers = {headers: {'Authorization': `Bearer ${idCity.token}`}}
    try {
      const res = await axios.delete(url,headers);
      return {
        success: true,
        id:idCity
      };
    } catch (error) {
      return {
        error: true,
      };
    }
  });
const myTinerariesAction ={
    filtrarTineraries,
    eliminarTineraries
}

export default myTinerariesAction;