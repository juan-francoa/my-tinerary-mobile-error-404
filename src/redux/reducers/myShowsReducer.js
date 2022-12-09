import { createReducer } from "@reduxjs/toolkit";
import myShowsAction from "../actions/myShowsAction";

const initialState= {
    loading: false, 
    showsFiltrados:[],
    error: false
}

const myShowsReducer = createReducer(initialState, (builder)=>{
  
    builder.addCase(myShowsAction.filtrarShows.fulfilled, (state, action)=>{
        return {...state, loading: false, showsFiltrados:action.payload.showsFiltrados}
    })
    builder.addCase(myShowsAction.filtrarShows.rejected, (state, action)=>{
        return {...state, loading: false, showsFiltrados:[]}
    })
    builder.addCase(myShowsAction.eliminarShows.fulfilled, (state, action)=>{
        const deleteId = action.meta.arg
        let newState = {
            ...state,
            showsFiltrados: state.showsFiltrados.filter(e => e._id != deleteId)
        }
        return newState
    })
} )

export default myShowsReducer; 