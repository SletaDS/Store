import { createSlice } from "@reduxjs/toolkit";
const Slice = createSlice({
  name: "trash",
  initialState: {
    trash: [],
    money: 0,
    hidden: false,
    status:false,
    check:[true,true,true,true,true,true,true,true,true],
  },
  reducers: {
    addmoney(state, action) {
      state.money = state.money + +action.payload.replace(/\s/g, "");
     
    },
    deletemoney(state, action) {
      state.money = state.money - +action.payload.replace(/\s/g, "");
    },
    addelement(state, action) {
      state.trash.push(action.payload);
      state.money = state.money + +action.payload.price.replace(/\s/g, "");
      for(let x of state.trash){
        if(x.name==action.payload.name){
           state.check[action.payload.id-1]=false
        }else{state.check[action.payload.id-1]=true}
      }
    },
    changehidden(state, action) {
      state.hidden = action.payload;
    },
    deleteelement(state, action) {
      let arr = [];
      for (let item of state.trash) {
        if (item.name == action.payload.name) {
          state.money = state.money - +action.payload.price.replace(/\s/g, "");
          state.check[action.payload.id-1]=true
        } else {
          
          arr.push(item);
        }
      }
      state.trash =arr;
      },
  }, 
});
export const { addelement, deleteelement,changehidden, addmoney, deletemoney } = Slice.actions;
 
export default Slice.reducer;
