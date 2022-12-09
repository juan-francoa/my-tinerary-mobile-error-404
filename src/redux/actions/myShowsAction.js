import {  createAsyncThunk} from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/url";
import axios from "axios";


const filtrarShows = createAsyncThunk("filtrarShows", async (data1)=>{
    const res = await axios.get(`${BASE_URL}/api/shows?user_id=${data1}`)
    console.log(res.data.data)
    return{
        showsFiltrados: res.data.data
    }
    }
)

const eliminarShows = createAsyncThunk("eliminarShows", async ( idCity ) => {
    let url = `${BASE_URL}/api/shows/${idCity.idCity}`;
    let headers = {headers: {'Authorization': `Bearer ${idCity.token}`}}
    try {
      const res = await axios.delete(url,headers);
      return {
        success: true,
        id:idCity
      };
    } catch (error) {
      console.log(error);
      return {
        error: true,
      };
    }
  });
const myTinerariesAction ={
    filtrarShows,
    eliminarShows
}

export default myTinerariesAction;