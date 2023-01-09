import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url="https://phonestore-5fd60-default-rtdb.europe-west1.firebasedatabase.app/phone.json"

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function () {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);
const Slice = createSlice({
  name: "main",
  initialState: {
    shop: {
      error: true,
      status: false,
      phone: [],
    },
    find: {
      error: true,
      status: false,
      phone: [],
    },
    categories: {
      error: true,
      status: true,
      phone: [],
      mark: false,
      met:false,
    },
    money:{
      error: true,
      status: false,
      phone: [],
    }
  },
  reducers: {
    fullclean(state){
     state.find.phone=[]
     state.categories.phone=[]
     state.money.phone=[]
    },
    moneyfilter(state,action){
      let c=state.shop.phone
      if(state.categories.phone.length>1){
       c=state.categories.phone
      }
      state.categories.met=true
      let b=[]
    for(let x of c){
      if(action.payload[0]<x.price.replace(/\s/g, "")&&action.payload[1]>x.price.replace(/\s/g, "")){
        b.push(x)
        state.categories.error = true;
      }

    }
    
    if (b.length === 0) {
      state.categories.error = false;
    }
    if(state.categories.phone.length>1){
      state.categories.phone=b
    }else{
      state.money.phone=b
      
    }
    },
    search(state, action) {
      let b = [];
      for (let x of state.shop.phone) {
        if (
          x.name
            .toLowerCase()
            .replace(/\s/g, "")
            .includes(action.payload.toLowerCase().replace(/\s/g, ""))
        ) {
          b.push(x);
          state.categories.error = true;
        }
      }

      if (b.length === 0) {
        state.categories.error = false;
      }
      state.find.phone = b;
    },
    categoriescclean(state, action) {
      let b = [];
      let w, c, r, n,t;
      if (action.payload[0] !== "name") {
        state.categories.mark = false;
        state.categories.error = true;
        state.categories.phone = [];
      } else {
        for (let x of state.categories.phone) {
          state.categories.mark = false;
          c = x.processor;
          r = x.name;
          n = x.battery;
          t=x.operationmemory
          switch (action.payload[0]) {
            case "processor":
              (w = c)
              break;
            case "name":
               (w = r)
              break;
              case "battery":
                (w = n)
              break;
              case "operationmemory":
                (w = t)
              break;
          }
          if (
            w
              .toLowerCase()
              .replace(/\s/g, "")
              .includes(action.payload[1].toLowerCase().replace(/\s/g, ""))
          ) {
          } else {
            b.push(x);
          }

          state.categories.phone = b;
        }
      }
    },
    categoriesearch(state, action) {
      
      state.find.phone = [];
      let h = [];
      let b, c, r, n,t;
      if (action.payload[0] !== "name" && state.categories.mark) {
        console.log(1)
        for (let x of state.categories.phone) {
          c = x.processor;
          n = x.battery;
          t = x.operationmemory;
          switch (action.payload[0]) {
            case "processor":
              (b = c)
              break;
              case "operationmemory":
                (b = t)
              break;
              case "battery":
                (b = n)
              break;
              
          }

          if (b.includes(action.payload[1])) {
            h.push(x);
          }
        }
        if (h.length == 0) {
          state.categories.error = false;
        }
        state.categories.phone = h;
      } else {
       
        for (let x of state.categories.met?state.money.phone:state.shop.phone) {
          if(state.categories.met){
            state.categories.phone=[]
            state.categories.met=false
          }
          c = x.processor;
          r = x.name;
          n = x.battery;
          t = x.operationmemory;
          if (action.payload[0] == "name") {
            state.categories.mark = true;
          }
         
          switch (action.payload[0]) {
            case "processor":
              (b = c)
              break;
              case "operationmemory":
                (b = t)
              break;
              case "name":
                (b = r)
              break;
              case "battery":
                (b = n)
              break;
              
          }
          if (b.includes(action.payload[1])) {
            state.categories.phone.push(x);
          }
        }
        }
        if(state.categories.phone.length==0){
        state.categories.error=false}
      state.categories.phone = state.categories.phone.sort(
        () => Math.round(Math.random() * 100) - 50
      );
     
    },
  },

  extraReducers: {
    [fetchTodos.pending]: (state, action) => {
      state.shop.status = false;
      state.find.status = false;
      state.money.status=false
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.find.status = true;
      state.shop.status = true;
      state.money.status=true
      state.shop.phone = action.payload;
    },
  },
});
export const { search, categoriescclean, categoriesearch,moneyfilter,fullclean } = Slice.actions;
export default Slice.reducer;
