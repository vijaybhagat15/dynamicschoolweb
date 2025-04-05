import { configureStore } from "@reduxjs/toolkit";
import AboutReducer from "./slices/AboutSlice";
import academicsReducer from "./slices/academicsSlice";
import contactReducer from "./slices/contactSlice";
import schoolReducer from "./slices/schoolSlice";
import section1Reducer from "./slices/section1Slice";
import section2Reducer from "./slices/section2Slice";
import section3Reducer from "./slices/section3Slice";
import section4Reducer from "./slices/section4Slice";
import section5Reducer from "./slices/section5Slice";
import section6Reducer from "./slices/section6Slice";
import headerReducer from "./slices/headerSlice";
import footerReducer from "./slices/footerSlice";

export const store = configureStore({
  reducer: {
    about: AboutReducer,
    academics: academicsReducer,
    contact: contactReducer,
    school: schoolReducer,
    section1: section1Reducer,
    section2: section2Reducer,
    section3: section3Reducer,
    section4:section4Reducer, 
    section5:section5Reducer,
    section6:section6Reducer,
    header: headerReducer,
    footer: footerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
