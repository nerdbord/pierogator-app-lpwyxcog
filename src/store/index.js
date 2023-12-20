import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import generateDough from '../API/index-api';
const inputsAnswers = {
    'Ciasto': '',
    'Nadzienie': '',
    'Składniki': ''
}
const valueInputs = ['Ciasto', 'Nadzienie', 'Składniki']
export const fetchTo = createAsyncThunk(
    'fetchTo/items',
    async (_, thunkAPI) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(inputsAnswers);
            }, 1800);
        });
    }
)


const inputSlice = createSlice({
    name: 'input',
    initialState: {
        items: [],
        recipes: [],
        buttonLock: true,
        valueInputsShallowCopy: [],
        status: null,
        error: null,
        isLoading: null
    },
    reducers: {
        getItems(state, action) {
            // state.items = [];
            if (state.valueInputsShallowCopy.length > 0) {
                state.valueInputsShallowCopy.forEach((value) => {
                    generateDough(value).then(result => {
                        inputsAnswers[value] = result
                        console.log('shallow only get')
                    });
                })
               
            } else {
                valueInputs.forEach((value) => {
                    generateDough(value).then(result => {
                        if(!!inputsAnswers[value] !== true){
                            console.log('i am not true')
                            inputsAnswers[value] = result
                            console.log(result)
                           }
                    });
                })
            }
        },
        setIsInputsLocked(state, action) {
            if (state.valueInputsShallowCopy.length === 0) {

                let newArr = valueInputs.filter((e) => {
                    console.log(e !== action.payload.name)
                    return e !== action.payload.name
                });

                state.valueInputsShallowCopy = [...state.valueInputsShallowCopy, ...newArr];

            } else if (state.valueInputsShallowCopy.includes(action.payload.name)) {

                let nameIndex = state.valueInputsShallowCopy.indexOf(action.payload.name);
                state.valueInputsShallowCopy.splice(nameIndex, 1);

            } else {

                state.valueInputsShallowCopy = [...state.valueInputsShallowCopy, action.payload.name]
            }

        },
        setIsInputsUnLocked(state, action) {
            state.valueInputsShallowCopy = [...state.valueInputsShallowCopy, action.payload.name]
        },
        getDescription(state,action){
            console.log(action.payload)
            inputsAnswers[action.payload.name] = action.payload.description;

        },
        addRecipes(state,action){
            console.log('action.payload')
console.log(action.payload);
state.recipes = [...state.recipes, action.payload]
console.log(state.recipes);
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTo.pending, (state, action) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(fetchTo.fulfilled, (state, action) => {
                state.items = []
                state.status = "fulfilled";
                let b = JSON.stringify(action.payload);
                state.items.push(b);
                state.isLoading = false;
            })


    }
})

const store = configureStore({
    reducer: {
        inputs: inputSlice.reducer,
    }
});
export const inputsActions = inputSlice.actions;
export default store;