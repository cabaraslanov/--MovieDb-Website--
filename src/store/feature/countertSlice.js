import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:"",
        boxValue:"",
        barsToggle:false,
        countHeart: localStorage.getItem("countH") ? 
        JSON.parse(localStorage.getItem("countH")) : 0,
        heartBoolean:false,
        cardMap: localStorage.getItem("cardMap") ?
        JSON.parse(localStorage.getItem("cardMap")) : [],
        tagPage: localStorage.getItem("setTagPage") ?
        JSON.parse(localStorage.getItem("setTagPage")) : [],
        countTag:localStorage.getItem("countTag") ? 
        JSON.parse(localStorage.getItem("countTag")) : 0,
        // heartFilter:"",

    },

    reducers:{
        dataSaved:(state,action)=>{
            state.value = action.payload
        },
        boxVal:(state,action)=>{
            state.boxValue = action.payload
        },
        deletBoxValue:(state,action)=>{
            state.boxValue = state.boxValue.filter(filt=>filt.id !== action.payload)
        },
        toggleMenu:(state,action)=>{
            state.barsToggle = !action.payload
        },
        countH:(state)=>{
            state.countHeart+=1
            localStorage.setItem("countH",JSON.stringify(state.countHeart))
        },
        countHDecrement:(state)=>{
            state.countHeart-=1
            localStorage.setItem("countH",JSON.stringify(state.countHeart))
        },
        HeartBool:(state,action)=>{
            state.heartBoolean = !action.payload
        },
        setCardMap:(state,action)=>{
            state.cardMap = [...state.cardMap,action.payload]
            localStorage.setItem("cardMap",JSON.stringify(state.cardMap))
        },setHeartFilter:(state,action)=>{
            state.cardMap = state.cardMap.filter(filt=>filt.id !== action.payload)
            localStorage.setItem("cardMap",JSON.stringify(state.cardMap))
        },
        setTagPage:(state,action)=>{
            state.tagPage = [...state.tagPage,action.payload]
            localStorage.setItem("setTagPage",JSON.stringify(state.tagPage))
        },setTagFilter:(state,action)=>{
            state.tagPage = state.tagPage.filter(filt=>filt.id !== action.payload)
            localStorage.setItem("setTagPage",JSON.stringify(state.tagPage))
        },
        countTag:(state)=>{
            state.countTag += 1
            localStorage.setItem("countTag",JSON.stringify(state.countTag))

        },
        countTagDecrement:(state)=>{
            state.countTag -= 1
            localStorage.setItem("countTag",JSON.stringify(state.countTag))

        }

        
    }
})
// console.log(counterSlice.actions);
export const {dataSaved,
    toggleMenu,
    countH,
    HeartBool,
    boxVal,
    setCardMap,
    setHeartFilter,
    countHDecrement,
    setTagPage,
    setTagFilter,
    countTag,
    countTagDecrement,
    deletBoxValue} = counterSlice.actions

export default counterSlice.reducer