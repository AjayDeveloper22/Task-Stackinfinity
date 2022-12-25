import { createSlice } from "@reduxjs/toolkit";
const slice=createSlice({
    name:'cart',
    initialState:{
        value:[]
    },
    reducers:{
        addItem:(state,action)=>
        {
             var pid=action.payload
            var qty=1
            state.value=[...state.value,{pid,qty}]

        },
        deleteItem:(state,action)=>{
        const pid=action.payload;
        
        state.value=state.value.filter((ob)=>ob.pid!==action.payload)

        },
        incrementQty:(state,action)=>{
            var pid=action.payload;
            state.value=state.value.map(ob=>ob.pid==pid?{pid:pid,qty:ob.qty+1}:ob)
            
        },
        decrementQty:(state,action)=>{
            var pid=action.payload;
            state.value=state.value.map(ob=>ob.pid==pid && ob.qty>1 ? {pid:pid,qty:ob.qty-1}:ob)

        }
    }
})
export const{addItem,deleteItem,incrementQty,decrementQty}=slice.actions;
export default slice.reducer;