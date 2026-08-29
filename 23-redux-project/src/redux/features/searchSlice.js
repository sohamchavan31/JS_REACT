import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
    name: "search",
    initialState:{
        query:'',
        activeTab:'photos',
        results:[],
        loading:false,
        error:null
    },
    reducers:{
        setQuery(state)
    }
})

