import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./slices/authSlice"
import { profileReducer } from "./slices/profileSlie"
import { reportReducer } from "./slices/reportSlice"
import { categoryReducer } from "./slices/categorySlice"
import { commentReducer } from "./slices/commentSlice"


const store = configureStore({
    reducer: {
        auth: authReducer,  
        profile: profileReducer,
        report: reportReducer,
        category: categoryReducer,
        comment: commentReducer,
    }
})

export default store