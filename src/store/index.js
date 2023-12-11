import { configureStore, createSlice } from '@reduxjs/toolkit';
import generateDough from '../API/index-api';



const inputsAnswers = {
    'Ciasto': '',
    'Nadzienie': '',
    'Składniki': ''
}
const valueInputs = ['Ciasto','Nadzienie', 'Składniki']
const inputSlice = createSlice({
    name: 'input',
    initialState: {
        items: []
    },
    reducers: {
        // deleteItem(state, action){
        //     const delItemID = +action.payload;
        //     const updatedItems = state.items.filter(item => item.id !== delItemID);
        //     state.items = updatedItems;
        // },
        fisrtLoadItems(state, action){
            valueInputs.forEach((value)=> {
                generateDough(value).then(result => {
                   console.log(result); // Use the result directly
                   inputsAnswers[value] = result
                   
               });
            //   state.items = [...state.items,inputsAnswers
           }) 
        },
        regenarateItems(state, action){
            state.items = [];
            
            valueInputs.forEach((value)=> {
                 generateDough(value).then(result => {
                    inputsAnswers[value] = result
                });
            })  
           let regenarateItemsString = JSON.stringify(inputsAnswers)
            state.items.push(regenarateItemsString)
        }
        ,
        getItems(state, action){
            state.items = [];
            
            valueInputs.forEach((value)=> {
                 generateDough(value).then(result => {
                    console.log(result); // Use the result directly
                    inputsAnswers[value] = result
                    console.log('inputsAnswers')
                    console.log(inputsAnswers)
                });
             //   state.items = [...state.items,inputsAnswers
            })  
           let b = JSON.stringify(inputsAnswers)
            state.items.push(b)
        }
    }
})

const store = configureStore({
    reducer: {
        inputs: inputSlice.reducer,
    }
});
export const inputsActions = inputSlice.actions;
export default store;