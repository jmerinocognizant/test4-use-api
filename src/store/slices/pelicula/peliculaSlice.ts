import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PeliculaType } from '../../../api/peliculasApi';

export interface PeliculasState {
    listado: PeliculaType[];
    isLoading: boolean; 
}

const initialState:PeliculasState  = {
    listado: [],
    isLoading: false,
}

export const peliculaSlice = createSlice({
    name: 'pelicula',
    initialState,
    reducers: {
        startLoading: ( state ) => {
            state.isLoading = true;
        },
        setPeliculas: ( state, action ) => {
            //console.log( action );
            
            state.listado = action.payload;
            state.isLoading = false;
        },
    }
})

export const { startLoading, setPeliculas } = peliculaSlice.actions;